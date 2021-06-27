import express from 'express';
import authRegister from '../controllers/authRegister.js';

const router = express.Router();


router.post('/rps_register', authRegister);


export default router;