import { Request, Response } from 'express';

export const UserController = {
  fetchUsers: (req: Request, res: Response) => {
    res.json({ message: 'Fetch users here' });
  },

  fetchUserById: (req: Request, res: Response) => {
    const { id } = req.params
    
    res.json({ message: `id is ${id}` });
  }
}
