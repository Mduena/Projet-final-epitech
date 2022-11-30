import connectMongo from "../../../utils/connectMongo";
import Activity from "../../../models/activityModel";


export default async function getSomeActivities(req, res)
{
    if(req.method == "POST")
    {
        res.status(403).json({ message: "badMethod"} );
    }
    else
    {
        try
        {
            //const users = User.find({username: req.body.word});
            //console.log(req.query.word);
            
            await connectMongo();
            console.log('CONNECTED TO MONGO');

            let activities = await Activity.find({title: {$regex: req.query.word, $options: 'i'}}).sort({'date_debut': +1});

            if(activities == [])
                activities = await Activity.find({description: {$regex: req.query.word, $options: 'i'}}).sort({'date_debut': +1});
            
            //console.log("activities=", activities);

            res.status(200).json({ "activitiesFounds": activities });
        }
        catch(e)
        {
            //

            res.status(500).json({ message: "Error : " + e} );
        }
    }
}