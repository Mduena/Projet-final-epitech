import { verify } from "jsonwebtoken";

const rightComment = (fn) => async (req, res) =>
{
  verify(
    req.cookies.auth,
    process.env.JWT_SECRET,
    async function(err, decoded)
    {
      //console.log(req.query, decoded.sub);
      if(req.method == "GET")
      {
        return await fn(req, res);
      }

      else
      if(req.method == "DELETE" || req.method == "POST")
      {
        if(decoded.role == 1)         //Admin
        {
          return await fn(req, res);
        }

        else
        {
          //console.log(req.query.author, decoded.sub);
          if(req.query.author == decoded.sub)      //Auteur du commentaire
          {
            return await fn(req, res);
          }
        }
      }

      res.status(403).json({ message: "Sorry you are not the author or not admin !" });
    }
  );
};

export default rightComment;