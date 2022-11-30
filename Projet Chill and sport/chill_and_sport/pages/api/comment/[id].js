import connectMongo from "../../../utils/connectMongo";
import Comment from "../../../models/commentModel";
import rightComment from '../../../utils/rightComment.js';

export default rightComment( async function commentHandler(req, res) {
    if (req.method == "GET") {
        try {
            await connectMongo();
            console.log('CONNECTED TO MONGO');
//url
            const comment = await Comment.findById(req.query.id);
            console.log('Id displayed');
            //on recupere 

            res.json({ comment });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
    else if (req.method == "POST") {

        try {
            await connectMongo();
            console.log('CONNECTED TO MONGO');
            const comment = await Comment.findByIdAndUpdate(req.query.id, req.body);
            console.log('document modified');
            res.json({ comment });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }

    }
    else if (req.method == "DELETE") {

        try {
            await connectMongo();
            console.log('CONNECTED TO MONGO');
            const comment = await Comment.findByIdAndDelete(req.query.id, req.body);
            res.json({ comment });
            console.log('document deleted');
            
        } catch (error) {
            console.log(error);
            res.json({ error });
        }

    }
  
} )