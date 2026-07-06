import List from '../models/list.js';
import User from '../models/user.js';

//add list service
const addListService = async (title, body, email) => {

const existingUser = await User.findOne({ email });
        if(!existingUser){
            throw new Error("User not found");
        }
            const list = new List({ title, body, user: existingUser });
            await list.save();
            existingUser.list.push(list);
            await existingUser.save();
            return list;
        
}

//update list service
const updateListService = async (id, title, body, email, status) => {
    const existingUser = await User.findOne({ email });
        if(!existingUser){
            throw new Error("User not found");
        }
        const updatedList=await List.findByIdAndUpdate(
                id, 
                { title, body, status },
                { new: true });
             return updatedList;
}

//delete list service
const deleteListService = async (id, email) => {
 const existingUser = await User.findOneAndUpdate({ email }, {$pull: { list:id }});
        if(!existingUser){ 
            throw new Error("User not found");
        }   
        const deleteList=    await List.findByIdAndDelete(id);
         return deleteList;
        
}
//get list service
const getListService = async (email) => {
     const existingUser = await User.findOne({ email });
        if(existingUser){
            const list = await List.find({ user: existingUser._id });
            return list;
        }else{
            throw new Error("User not found");
        }
}
//search list service
const searchListService = async (keyword,email) => {
    const existingUser = await User.findOne({ email });
        if(!existingUser){
            throw new Error("User not found");
        }
    const list = await List.find({
        user: existingUser._id,
        title:{
            $regex: keyword,
            $options: 'i'
        }
    });
    return list;
}

//update status of any task 
const updateStatusService = async (id, status , email) => {
    const existingUser = await User.findOne({ email });
        if(!existingUser){
            throw new Error("User not found");
        }
        const updatedList=await List.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );
        if(!updatedList){
            throw new Error("task not found");
        }
        return updatedList;
}

export {
    addListService,
    updateListService,
    updateStatusService,
    deleteListService,
    getListService,
    searchListService
}
