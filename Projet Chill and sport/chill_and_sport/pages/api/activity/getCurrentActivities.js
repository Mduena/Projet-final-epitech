import connectMongo from "../../../utils/connectMongo";
import Activity from "../../../models/activityModel";
//import isadmin from '../../../utils/isadmin.js';

export default async function handler(req, res)
{
    if(req.method=="GET") {
        try {
            //console.log(req.query.end);
            await connectMongo()
            console.log("connecté");
            let activity;

            //console.log(req.query.date_debu);

            activity = await Activity.find({date_debut: {$gt: req.query.date_debut}}).sort({'date_debut': +1});
            /* console.log(ac) */
            //console.log(req);
            if(req.query.begin && req.query.end)
            {
                activity = activity.slice(req.query.begin, req.query.end);
                //console.log(activity, req.query.begin, req.query.end);
            }

            res.json({activity})
            console.log("listes d'activités");
            
        } catch (error) {
            console.log({error})
            res.json({error})
            
            
        }
    }
  
}