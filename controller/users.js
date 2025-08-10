 import { User as User } from '../models/users.js';


const getAll = async (req,res)=>{
       const allUsers = await  User.find();
    res.json(allUsers);
}
const getOne = async (req,res)=>{
    const id = req.params.id;
       const user = await  User.findById(id);
    res.json(user);
}
const update = async (req,res)=>{
    const id = req.params.id;
try{
   const doc = await User.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(doc);
}
catch(err){
    console.log(err);
    res.status(400).json(err);
}
    
}

const replace =async (req,res)=>{
   const id = req.params.id;
try{
   const doc = await User.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(doc);
}
catch(err){
    console.log(err);
    res.status(400).json(err);
}
}
const deleteOne = async(req,res)=>{
       const id = req.params.id;

  try{
   const doc = await User.findOneAndDelete({_id:id})
    res.status(201).json(doc);
}
catch(err){
    console.log(err);
    res.status(400).json(err);
}
} 
export{getAll,getOne,update,replace,deleteOne};