import express from 'express';
const authRouter = express.Router();
import {create,login} from '../controller/auth.js'






authRouter
.post('/signUp',create)
.post('/login',login);

export {authRouter as authRouter};