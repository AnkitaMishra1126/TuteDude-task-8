import {
       addListService , 
       updateListService, 
       updateStatusService,
       deleteListService,
       getListService, 
       searchListService
       } from '../services/listServices.js';

//add list
const addList =  async (req, res ,next) => {
    try{
        const {title, body, email} = req.body;
        if(!title || !body || !email){
          return res.status(400).json({
                message: "All fields are required"
            });
        }
        const list = await addListService(title, body, email);
        res.status(201).json({ list: list });
    }catch(err){
     next(err);
    }
};
// update list
const updateList =   async (req, res,next) => {
    try{
        const {title, body , email, status} = req.body;
        const {id} = req.params;
        await updateListService(id, title, body, email, status);
        res.status(200).json({ message: "Task updated successfully" });
    }catch(err){
        next(err);
    }
};

// delete list
const deleteList = async (req, res, next) => {
    try{
        const email = req.query.email;
        const {id} = req.params;
        await deleteListService(id, email);
        res.status(200).json({ message: "Task deleted successfully" });
    }catch(err){
        next(err);
    }
};


//getting list 
const getList = async (req, res, next) => {
    try{
        const email = req.query.email;    
        const list = await getListService(email);
        res.status(200).json({ list });
    }catch(err){
        next(err);
    }
};
//search list
const searchList = async (req, res,next) => {
   try{
    const {keyword} = req.query;
    if (!keyword) {
    return res.status(400).json({
        message: "Keyword is required"
    });
}
    const list = await searchListService(keyword);
    res.status(200).json(list);
    
   }catch(err){
        next(err);
    }
}
//update status of task
const updateStatus = async (req, res,next) => {
    try{
        const {status, email} = req.body;
        const {id} = req.params;
        if(!status || !email){
            return res.status(400).json({
                message: "Status and email are required"
            });
        }
        const task = await updateStatusService(id, status, email);
        res.status(200).json({ message: "Status updated successfully", task });
    }catch(err){
        next(err);
    }
}
export { addList, updateList, deleteList, getList, searchList , updateStatus };
