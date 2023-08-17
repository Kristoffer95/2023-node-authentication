import { Request, Response, NextFunction, RequestHandler } from 'express';

export const catchAsync = (handler: RequestHandler) =>
  (...args: [Request, Response, NextFunction]) => {
    new Promise((resolve, reject) => {
      resolve(handler(...args));
    }).catch(args[2]);
    
    // handler(...args).catch(args[2])
  }