import express from 'express';
import{create,getAll,getOne,update,replace,deleteOne} from '../controller/users.js'
 const userRouter = express.Router();
 






userRouter
.post('/users',create)                                                      
.get('/users',getAll)
.get('/users/:id',getOne)
.put('/users/:id',update)
.patch('/users/:id',replace)
.delete('/users/:id',deleteOne)

export{userRouter as userRouter}