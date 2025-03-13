import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  user?: string; // Add the `user` property to the Request object
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'Unauthorized: No token provided' });
    return; // Stop further execution
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
    req.user = decoded.userId; // Attach the user ID to the request object
    next(); // Pass control to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
    return; // Stop further execution
  }
};

export default authMiddleware;