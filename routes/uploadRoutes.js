import express from "express";
import { UploadFile,getFileById,getAllUploads } from "../controllers/uploadController.js";
import { protectRoute, isTeacher } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";

const router=express.Router();

router.post("/uploadFile", protectRoute, isTeacher, upload.single("file"), UploadFile);
router.get("/",getAllUploads);
router.get("/:id", getFileById)
export default router;