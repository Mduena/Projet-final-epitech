import connectMongo from "../../../../utils/connectMongo";
import Activity from "../../../../models/activityModel";

export default async function handler(req, res) {
    if (req.method == "GET") {
        try {
            await connectMongo();
            console.log('CONNECTED TO MONGO');

            /* console.log(req.query.id);
            console.log(req.query.title);
            console.log(req.query.description); */
            //activity = await Activity.find().sort({'_id': -1});

            let activity = await Activity.find({category_id: req.query.id}).sort({'date_debut': +1});

            if(req.query.begin && req.query.end)
            {
                activity = activity.slice(req.query.begin, req.query.end);
                //console.log(activity, req.query.begin, req.query.end);
            }

            // console.log(activity);
            
        

            res.json({ activity });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }
}