import { User as User } from '../models/users.js';
 import jwt from 'jsonwebtoken';


 
const create= async (req,res)=>{
   const newUser= new User(req.body);
    var token = jwt.sign({ email:req.body.email }, 'shhhhh');
    newUser.token = token;
   
  const savedUser= await newUser.save();
  res.json(savedUser);

}
export {create};