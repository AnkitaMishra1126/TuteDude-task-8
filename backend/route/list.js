import express from 'express';

import {addList, updateList, deleteList , getList , searchList,updateStatus} from '../controllers/listController.js';

const router = express.Router();
router.post("/addlist", addList);
router.put("/updatelist/:id", updateList);
router.delete("/deletelist/:id", deleteList);
router.get("/getlist", getList);
router.get("/searchlist", searchList);
router.put("/updatestatus/:id", updateStatus);
export default router;
