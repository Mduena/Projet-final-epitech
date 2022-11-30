import connect from "../../../../utils/connectMongo";
import Comment from "../../../../models/commentModel";
export default async function handler(req, res) {
    if (req.method == "GET") {
        try {
            await connect();
            console.log('CONNECTED TO MONGO');

            // console.log(req.query.id);

            const comment = await Comment.find({movie_id : req.query.id});

            // console.log(comment);
            
        

            res.json({ comment });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
}