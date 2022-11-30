/*import { verify } from "jsonwebtoken";

const notauthenticated = (fn) => async (req, res) =>
{
  verify(
    req.cookies.auth,
    process.env.JWT_SECRET,
    async function (err, decoded)
    {
      if (!err && decoded)
      {
        res.status(403).json({ message: "You are already authenticated" });
      }
      return await fn(req, res);
    }
  );
};

export default notauthenticated;*/