import Comment from '../../../models/commentModel';
import connectMongo from '../../../utils/connectMongo';
import authenticated from '../../../utils/authenticated.js';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default  async function handler(req, res) {
    
    try {
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        const body = req.body;

        body.created_at = Date.now();

        const comment = await Comment.create(body);
        console.log('CREATED DOCUMENT');
        console.log(body);

        res.status(200).json({ comment });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }

} 