import User from '../../../models/userModel.js';
import bcrypt from 'bcrypt';
import connectMongo from '../../../utils/connectMongo.js';
import { sign } from "jsonwebtoken";
import cookie from "cookie";
//import notauthenticated from '../../../utils/notauthenticated.js';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
 export default async function login(req, res)
 {
    if(req.method !== "POST")
    {
        res.status(403).json({ message: 'badMethod' });
    }

    else
    {
        try
        {
            await connectMongo();
            
            const user = await User.findOne({email: req.body.email});

            //console.log(user);

            if(user === null)
            {
                res.status(404).json({ message: 'foundUserFailed' });
            }

            else
            {
                bcrypt.compare(req.body.password, user.password).then((result, err) =>
                {
                    if(!err && result)
                    {
                        const claims =		//Création token
                        {
                            sub: user._id,
                            email: user.email,
                            role: user.is_admin
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
                    
                        const userId = user._id;
                        res.status(200).json({ userId, jwt, message: "loginUserSuccess" });		//Renvoi réponse et cookie au frontend
                    }

                    else
                    {
                        res.status(403).json({ message: "loginUserFailed" });
                    }
                });
            }

        }
        catch(e)
        {
            console.log("Exception : ", e);

            res.status(500).json({ message: 'Error : ' + e });
        }
    }
 }