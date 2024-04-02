import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import CustomError from './utils/CustomError';
import type { Request, Response } from 'express';
import shopifyRouter from './routes/shopify';
import facebookRouter from './routes/facebook';
import linkedInRouter from './routes/linkedin';
import pinterestRouter from './routes/pinterest';

import { default as mongoose } from 'mongoose';
import { statusCode } from './utils/statusCode';
import passport from './utils/passport';
import session from 'express-session';
import googleRouter from './routes/google';
const { PORT, MONGO_URI_LOCAL, DB_NAME } = process.env;
const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET',
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(shopifyRouter);
app.use(facebookRouter);
app.use(linkedInRouter);
app.use(pinterestRouter);
app.use(googleRouter);

app.get('/', (_req, res) => {
  res.status(statusCode.OK).json({ message: 'Hello, world!' });
});

app.use((err: CustomError, _req: Request, res: Response) => {
  // Default error status code
  let status = 500;

  // If the error has a status code, use it
  if (err.statusCode) {
    status = err.statusCode;
  }

  // Log the error for debugging (optional)
  console.error(err);

  // Send error response to the client
  res.status(status).json({
    error: {
      message: err.message || 'Internal Server Error',
      statusCode,
    },
  });
});

mongoose
  .connect(MONGO_URI_LOCAL as string, { dbName: DB_NAME })
  .then(async (mongo) => {
    console.log('Connected to MongoDB');
    console.log(mongo.connection.readyState);
    app.listen(PORT, () => {
      console.log(`Server is running on http://52.66.245.3:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
