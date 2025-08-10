
import path from 'path';
import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';
import env from 'dotenv';
env.config();
import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import { authRouter } from './routes/auth.js';
import { productRouter } from './routes/products.js';
import { userRouter } from './routes/users.js';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



//db connection

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);

  console.log('database connected')

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


//mongodb://localhost:27017/



const server = express();
const auth = (req,res,next)=>{
   const token=req.get('Authorization').split('Bearer ')[1];
   console.log(token);
   var decoded = jwt.verify(token,process.env.SECRET);
   if(decoded.email){
    next();

   }
   else{
    res.sendStatus(401);
   }

};
server.use(cors());
server.use(express.static(path.join(__dirname,process.env.PUBLIC_DIR)));
server.use(express.json());
server.use('/auth',authRouter)
server.use('/users',auth,userRouter)
server.use('/products',auth,productRouter)
server.use('/add',(req,res)=>{
  res.sendFile(path.join(__dirname,process.env.PUBLIC_DIR,'index.html'))
})







server.listen(process.env.PORT,()=>{
    console.log("server has been started!!!")
})