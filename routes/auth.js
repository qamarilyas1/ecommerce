import express from 'express';
const authRouter = express.Router();
import {create} from '../controller/auth.js'






authRouter
.post('/',create);

export {authRouter as authRouter};