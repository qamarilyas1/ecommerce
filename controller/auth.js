import { User as User } from '../models/users.js';
import bcrypt, { hash } from 'bcrypt';
 import jwt from 'jsonwebtoken';


 
const create= async (req,res)=>{
   const newUser= new User(req.body);
    var token = jwt.sign({ email:req.body.email }, 'shhhhh');
   const hash = bcrypt.hashSync(req.body.password, 10)
    newUser.token = token;
    newUser.password = hash;
   
   await newUser.save();
    res.json(token);
   
  

}


const login =  async (req,res)=>{

try{
   const doc = await User.findOne({email:req.body.email})
       const isAuth = bcrypt.compareSync(req.body.password, doc.password)
       if (isAuth){
            var token = jwt.sign({ email:req.body.email }, 'shhhhh');
            doc.token=token;
            doc.save();
                res.json(token)
          


       }
       else{
        res.sendStatus(401);
       }

}
catch(err){
    console.log(err);
    res.sendStatus(400).json(err);
}

}

export {create,login};