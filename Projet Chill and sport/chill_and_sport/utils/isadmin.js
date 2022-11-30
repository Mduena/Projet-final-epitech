import { verify } from "jsonwebtoken";

const isadmin = (fn) => async (req, res) =>
{
    verify(
    req.cookies.auth,
    process.env.JWT_SECRET,
    async function (err, decoded)
    {
        if (!err && decoded)
        {
            console.log(decoded);
            if(decoded.role == 1)
                return await fn(req, res);
            else
                res.status(403).json({ message: "Sorry you are not admin" });
        }
        res.status(403).json({ message: "Sorry you are not authenticated" });
    }
  );
};

export default isadmin;