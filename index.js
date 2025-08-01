
import env from 'dotenv';
env.config();
import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
 import { productRouter } from './routes/products.js';
//import { userRouter } from './routes/users.js';

//db connection

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

  console.log('database connected')

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


//mongodb://localhost:27017/



const server = express();
server.use(cors());
server.use(express.static(process.env.PUBLIC_DIR));
server.use(express.json());
server.use('/api/v1',productRouter)







server.listen(process.env.PORT,()=>{
    console.log("server has been started!!!")
})