import connectMongo from "../../../../utils/connectMongo";
import Comment from "../../../../models/commentModel";

export default async function handler(req, res) {
    if (req.method == "GET") {
        try {
            await connectMongo();
            console.log('CONNECTED TO MONGO');

            // console.log(req.query.id);
            // console.log(req.query.title);
            // console.log(req.query.content);

            const comment = await Comment.find({activity_id: req.query.id}).sort({'created_at' : -1});

            // console.log(comment);
            
        

            res.json({ comment });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }
}
