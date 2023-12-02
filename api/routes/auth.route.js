import express from 'express'
import { signup ,signin,google,signOut} from '../controller/auth.controller.js';
const router = express.Router()

router.post("/signup", signup);
router.post("/signIn", signin);
router.post("/google", google);
router.get("/signOut", signOut);

export default router;