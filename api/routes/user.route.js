import express from "express";
import { test, updateUser } from "../controller/user.controller.js";
import { verifyToken } from '../utils/verify.js';


const router = express.Router()

router.get('/test', test);

router.post('/update/:id', verifyToken, updateUser)
export default router;
