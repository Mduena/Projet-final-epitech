import { verify } from "jsonwebtoken";

const authenticated = (fn) => async (req, res) =>
{
  verify(
    req.cookies.auth,
    process.env.JWT_SECRET,
    async function (err, decoded)
    {
      if (!err && decoded)
      {
        return await fn(req, res);
      }
      res.status(403).json({ message: "Sorry you are not authenticated" });
    }
  );
};

export default authenticated;