import fs from 'fs';
 //const index =fs.readFileSync('index.html','utf-8');
  const data =JSON.parse(fs.readFileSync('data.json','utf-8'));
  const users = data.users




const create= (req,res)=>{
    users.push(req.body);

    res.json(req.body)
}

const getAll = (req,res)=>{

    res.json(users )
}
const getOne = (req,res)=>{
    const id = +req.params.id;
    const user = users.find(p=>p.id===id)
    res.json(user);
}
const update = (req,res)=>{
    const id = +req.params.id;

    const userindex=users.findIndex(p=>p.id===id)
    users.splice(userindex,1,{...req.body,id:id})
   res.status(201).json();

}
const replace = (req,res)=>{
   const id = +req.params.id;
    const userindex=users.findIndex(p=>p.id===id)
    const product =users[userindex];
    users.splice(userindex,1,{...product,...req.body});
    res.status(201).json();
}
const deleteOne = (req,res)=>{
   const id = +req.params.id;
    const userindex=users.findIndex(p=>p.id===id)
    users.splice(userindex,1);
    res.status(201).json();
} 
export{create,getAll,getOne,update,replace,deleteOne};