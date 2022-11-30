import connectMongo from '../../../utils/connectMongo';
import Activity from '../../../models/activityModel';
import authenticated from '../../../utils/authenticated.js';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default authenticated( async function handler(req, res) {
    
    try {
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        const activity = await Activity.create(req.body);
        console.log('CREATED DOCUMENT');

        res.json({ activity });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }

} )