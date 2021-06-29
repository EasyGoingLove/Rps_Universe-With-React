import express from 'express';
import authRegister from '../controllers/authRegister.js';
import authLogin from '../controllers/authLogin.js';

const router = express.Router();


router.post('/rps_register', authRegister);
router.post('/rps_login', authLogin);


export default router;