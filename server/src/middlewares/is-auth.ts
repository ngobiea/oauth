import jwt, { type JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
const { JWT_SECRET } = process.env as Record<string, string>;
class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message); // Pass the message to the Error constructor
    this.statusCode = statusCode;
  }
}
const authenticateUser = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.get('Authorization');

    if (!authHeader) {
      const error = new Error('Not authenticated.');
      // error.statusCode = 401;
      throw error;
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new CustomError('Token not found.', 401);
    }

    const decodedToken = jwt.verify(token, JWT_SECRET) as JwtPayload;


    if (!decodedToken || !decodedToken.userId) {
      const error = new Error('Invalid token.');
      // error.statusCode = 401;
      throw error;
    }


    // const shop = await User.findById(decodedToken.userId.toString());
    // if (!shop) {
    //   const error = new Error('User not found.');
    //   // error.statusCode = 401;
    //   throw error;
    // }
    // req.shop = shop;
    // const session = shopify.session.customAppSession(shop.shop);
    next();
  } catch (err) {
    next(err); // Pass any encountered error to the Express error handler
  }
};

export default authenticateUser;
