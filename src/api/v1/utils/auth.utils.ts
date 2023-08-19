import { Request } from 'express'

declare module 'express-session' {
  export interface SessionData {
    userId: number;  // you can also specify a more specific type instead of 'any'
    // other custom properties can be added similarly
  }
}

export const logIn =  (req: Request, user: number): Boolean => {
  req.session.userId = user;
  
  return false
}

export const isLoggedIn = (req: Request) => !!req.session.userId;
