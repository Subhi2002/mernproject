import express from "express";
import { createListing } from "../controller/listing.controler.js";
import { verifyToken } from "../utils/verify.js";
const router = express.Router();
router.post('/create', verifyToken ,createListing);
export default router;
