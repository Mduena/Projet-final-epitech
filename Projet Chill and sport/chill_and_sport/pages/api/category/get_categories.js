import connectMongo from "../../../utils/connectMongo";
import Category from "../../../models/categoryModel";

export default async function categoryHandler(req, res) {
    if (req.method == "GET") {
        try {
            await connectMongo();
            console.log('CONNECTED TO MONGO');
//url
            const category = await Category.find();
            console.log('All categors');
            //on recupere 

            res.json({ category });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
}