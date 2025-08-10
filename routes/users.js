import express from 'express';
import{getAll,getOne,update,replace,deleteOne} from '../controller/users.js'
 const userRouter = express.Router();
 






userRouter                                                      
.get('/',getAll)
.get('/:id',getOne)
.put('/:id',update)
.patch('/:id',replace)
.delete('/:id',deleteOne)

export{userRouter as userRouter}