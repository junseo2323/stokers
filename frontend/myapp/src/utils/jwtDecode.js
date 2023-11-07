import jwt_decode from "jwt-decode";

const verifyToken = (token) => { console.log(jwt_decode(token)); };

export default { verifyToken };
