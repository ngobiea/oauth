import type { Request, Response } from 'express';

export const redirect = (req: Request, res: Response) => {
  console.log(req.query,'line 4');
  res.redirect('https://52.66.245.3:5173/pinterest?success=pinterest');
};
