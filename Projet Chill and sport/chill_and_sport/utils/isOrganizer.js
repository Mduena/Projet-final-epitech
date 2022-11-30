import { verify } from "jsonwebtoken";

const isorganizer = (fn) => async (req, res) =>
{
    verify(
    req.cookies.auth,
    process.env.JWT_SECRET,
    async function (err, decoded)
    {
        if (!err && decoded)
        {
            console.log(req);
            //if(decoded.sub == req)
                return await fn(req, res);
            /*else
                res.status(403).json({ message: "Sorry you are not admin" });*/
        }
        res.status(403).json({ message: "Sorry you are not authenticated" });
    }
  );
};

export default isadmin;