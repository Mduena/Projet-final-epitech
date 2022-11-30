
import Category from '../../../models/categoryModel';
import connectMongo from '../../../utils/connectMongo';
import isadmin from '../../../utils/isadmin.js';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default isadmin( async function handler(req, res) {
    
    try {
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        const category = await Category.create(req.body);
        console.log('CREATED DOCUMENT');

        res.json({ category });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }

} )