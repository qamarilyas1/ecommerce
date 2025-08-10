 import { Product as Product } from '../models/product.js';

 
 




const create= async (req,res)=>{
   const newproduct= new Product(req.body);
   
  const savedproduct= await newproduct.save();
  res.json(savedproduct);




}

const getAll = async (req,res)=>{
       const allproducts = await  Product.find();
    res.json(allproducts);
}
const getOne = async (req,res)=>{
    const id = req.params.id;
       const product = await  Product.findById(id);
    res.json(product);
}
const update = async (req,res)=>{
    const id = req.params.id;
try{
   const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})
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
   const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
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
   const doc = await Product.findOneAndDelete({_id:id})
    res.status(201).json(doc);
}
catch(err){
    console.log(err);
    res.status(400).json(err);
}
} 
export{create,getAll,getOne,update,replace,deleteOne};