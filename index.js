
import path from 'path';
import { fileURLToPath } from 'url';
import env from 'dotenv';
env.config();
import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
 import { productRouter } from './routes/products.js';
//import { userRouter } from './routes/users.js';



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
server.use(cors());
server.use(express.static(path.join(__dirname,process.env.PUBLIC_DIR)));
server.use(express.json());
server.use('/api/v1',productRouter)
server.use('/add',(req,res)=>{
  res.sendFile(path.join(__dirname,process.env.PUBLIC_DIR,'index.html'))
})







server.listen(process.env.PORT,()=>{
    console.log("server has been started!!!")
})