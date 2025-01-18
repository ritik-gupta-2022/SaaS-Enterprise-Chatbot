import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
  // Get the JWT token from cookies
  const token = req.cookies.access_token;

//   console.log('Token:', token); 

  if(!token) {
    return next(errorHandler(401, 'Unauthorized : Please login'));
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
    //   console.error('JWT Verification Error:', err); 
      return next(errorHandler(401, 'Unauthorized : Please login'));
    }
    req.user = user;
    // console.log('token verified')
    next();
  });
};