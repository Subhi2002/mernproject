import express from "express";
import { createListing, deleteListing,updatelisting,getListing } from "../controller/listing.controler.js";
import { verifyToken } from "../utils/verify.js";
const router = express.Router();
router.post('/create', verifyToken ,createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updatelisting);
router.get('/get/:id', getListing);
export default router;
