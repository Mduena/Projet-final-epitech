import connectMongo from "../../../utils/connectMongo";
import Comment from "../../../models/commentModel";
//import isadmin from '../../../utils/isadmin.js';

export default async function commentHandler(req, res) {
    if (req.method == "GET") {
        try {
            await connectMongo();
            console.log('CONNECTED TO MONGO');
//url
            const comment = await Comment.find().sort({'created_at' : +1});
            console.log('All comments');
            //on recupere 

            res.json({ comment });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
}