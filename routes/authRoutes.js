import express from "express"
import { signup, login} from "../controllers/userController.js"
import { protectRoute } from "../middleware/authMiddleware.js";
import { getUserInfo } from "../controllers/userController.js";

const router=express.Router();
router.post("/signup", signup)
router.post("/login", login);
router.get("/me", protectRoute, getUserInfo);
export default router;