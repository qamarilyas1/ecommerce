import express from 'express';
import{create,getAll,getOne,update,replace,deleteOne} from '../controller/product.js'
 const productRouter = express.Router();
 






productRouter
.post('/products',create)                                                      
.get('/products',getAll)
.get('/products/:id',getOne)
.put('/products/:id',update)
.patch('/products/:id',replace)
.delete('/products/:id',deleteOne)

export{productRouter}