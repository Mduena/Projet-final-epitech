import mongoose from 'mongoose';
import User from '../../../models/userModel.js';
import bcrypt from 'bcrypt';
import connectMongo from '../../../utils/connectMongo.js';
import { sign } from "jsonwebtoken";
import cookie from "cookie";
//import { redirect } from 'next/dist/server/api-utils/index.js';
//import notauthenticated from '../../../utils/notauthenticated.js';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function register(req, res)
{
    if(req.method !== "POST")
    {
        res.status(403).json({ message: 'badMethod' });
        //console.log(process.env.NEXT_PUBLIC_MONGODB_URI);
    }  
    else
    {
        try
        {
            await connectMongo();
            
            req.body.password = await bcrypt.hashSync(req.body.password, 10);
            req.body.created_at = Date.now();

            //console.log(newUser);
            
            const newUserAdded = await User.create(req.body);

            //res.status(200).json({ message: 'registerSuccess', user: newUserAdded }).then(() => redirect('/login'));

            const claims =		//Création token
            {
                sub: newUserAdded._id,
                email: newUserAdded.email,
                role: false
            };
        
            const jwt = sign(claims, process.env.JWT_SECRET, { expiresIn: "1d" });		//Envoi données et clé secrète
        
            res.setHeader
            (
                "Set-Cookie",
                cookie.serialize("auth", jwt,
                {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    sameSite: "strict",
                    maxAge: 3600*24,
                    path: "/"
                })
            );				//Création cookie
        
            const userId = newUserAdded._id;
            
            res.status(200).json({ userId, jwt, message: "registerSuccess" });		//Renvoi réponse et cookie au frontend
        }
        catch(e)
        {
            console.log("Exception : ", e);

            res.status(500).json({ message: 'error:' + e });
        }
    }
}