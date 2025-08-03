import express from 'express';
import{create,getAll,getOne,update,replace,deleteOne} from '../controller/product.js'
 const productRouter = express.Router();
 






productRouter
.post('/',create)                                                      
.get('/',getAll)
.get('/:id',getOne)
.put('/:id',update)
.patch('/:id',replace)
.delete('/:id',deleteOne)

export{productRouter}