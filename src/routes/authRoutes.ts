import { Router } from 'express';
import { register, login } from '../controllers/authController';
import { getUserProfile } from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

// Public routes
router.post('/register', register);
router.post('/login', login);


export default router;