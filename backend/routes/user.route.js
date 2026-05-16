import { Router } from 'express';
  import { registerUser } from '../controlers/User.controler.js';
const router = Router();

router.route('/register').post(registerUser);

export default router;