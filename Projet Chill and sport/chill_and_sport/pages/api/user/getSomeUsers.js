import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/userModel";
import authenticated from "../../../utils/authenticated";

export default async function getSomeUsers(req, res)
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

            const users = await User.find({username: {$regex: req.query.word, $options: 'i'}});
            //console.log("users=", users);

            res.status(200).json({ "usersFounds": users });
        }
        catch(e)
        {
            //

            res.status(500).json({ message: "Error : " + e} );
        }
    }
}