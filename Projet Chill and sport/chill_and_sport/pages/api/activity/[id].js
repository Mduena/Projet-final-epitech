import connectMongo from "../../../utils/connectMongo";
import Activity from "../../../models/activityModel";
import isadmin from '../../../utils/isadmin.js';

export default async function activityHandler(req, res) {
    if (req.method == "GET") {
        try {
            await connectMongo();
            console.log('CONNECTED TO MONGO');
            //url
            const activity = await Activity.findById(req.query.id);
            console.log('Id displayed');
            //on recupere 
            res.json({ activity });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
    else if (req.method == "POST") {

        try {
            await connectMongo();
            console.log('CONNECTED TO MONGO');
            const activity = await Activity.findByIdAndUpdate(req.query.id, req.body);
            console.log('document modified');
            res.json({ activity });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }

    }
    else if (req.method == "DELETE") {

        try {
            await connectMongo();
            console.log('CONNECTED TO MONGO');
            const activity = await Activity.findByIdAndDelete(req.query.id, req.body);
           res.json({activity})
            console.log('document deleted');

        } catch (error) {
            console.log(error);
            res.json({ error });
        }

    }
} 