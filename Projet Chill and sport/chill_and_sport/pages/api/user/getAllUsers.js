import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/userModel";
import isadmin from '../../../utils/isadmin.js';

export default  async function userHandler(req, res) {
    if (req.method == "GET") {
        try {
            await connectMongo();
            console.log('CONNECTED TO MONGO');
//url
            const user = await User.find();
            console.log('All users displayed');
            //on recupere 

            res.json({ user });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
} 