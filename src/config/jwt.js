import jwt from "jsonwebtoken";

const createToken = (data) => {
  let token = jwt.sign({ data }, "SECRET", {
    algorithm: "HS256",
    expiresIn: "5y",
  });
  return token;
};
const checkToken = (token) => {
  return jwt.verify(token, "SECRET");
};
const decodeToken = (token) => {
  return jwt.decode(token);
};

const checkApi = (req, res, next) => {
  try {
    let { token } = req.headers;
    console.log(req.query);
    checkToken(token);
    next();
  } catch (exception) {
    res.status(401).send("Không có quyền truy cập hoặc hết hạn");
  }
};

export { createToken, checkToken, decodeToken, checkApi };
