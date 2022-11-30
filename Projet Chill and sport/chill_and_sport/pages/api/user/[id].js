import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/userModel";
import authenticated from '../../../utils/authenticated.js';
import bcrypt from 'bcrypt';

export default authenticated( async function userHandler(req, res) {
    if (req.method == "GET") {
        try {
            await connectMongo();
            console.log('CONNECTED TO MONGO');
//url
            const user = await User.findById(req.query.id);
            console.log('Id displayed');
            //on recupere 

            res.json({ user });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
    else if (req.method == "POST") {

        try {
            await connectMongo();
            console.log('CONNECTED TO MONGO');
            
            req.body.password = await bcrypt.hashSync(req.body.password, 10);
            req.body.created_at = Date.now();

            const user = await User.findByIdAndUpdate(req.query.id, req.body);
            console.log('document modified');
            res.json({ user });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }

    }
    else if (req.method == "DELETE") {

        try {
            await connectMongo();
            console.log('CONNECTED TO MONGO');
            const user = await User.findByIdAndDelete(req.query.id, req.body);
            console.log('document deleted');
            res.json({ user });
            
        } catch (error) {
            console.log(error);
            res.json({ error });
        }

    }
    
} )