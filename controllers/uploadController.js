import File from "../model/FileSchema.js";
import cloudinary from "../config/cloud.js";

export const UploadFile=async (req, res)=>{
    try {
        const{title, description, subject ,createdBy}=req.body;
          if (!title || !description || !subject) {
            return res.status(400).json({
                message: "All fields are required!!"
            })
        }
        let fileUrl=undefined;
        if(req.file){
            try {
                const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
                const uploadResult = await cloudinary.uploader.upload(base64Image, { folder: "Files" })
                fileUrl = uploadResult.secure_url;
                
            } catch (error) {
                console.error(error);
                res.status(500).json({
                    message: "Image upload error"
                })
                
            }

        }
        const newUpload=await File.create({
            title, description, subject, fileUrl, createdBy
        })
         res.status(201).json({
            success: true,
            message: "File Upload",
            newUpload,
        })

        
    } catch (error) {
         console.error(error);
         console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        })
        
    }
}


export const getAllUploads=async (req, res)=>{
    try {
        const file=await File.find();
        res.status(200).json({
            success:true,
            count:file.length,
            file
        })
        
    } catch (error) {
         res.status(500).json({
            message: "Internal server error"
        })
        
    }
}

export const getFileById=async (req, res)=>{
    try {
        const {id}=req.params;
        const file=await File.findById(id);
        if(!file){
            return res.status(404).json({
                message:"File not found"
            })
        }
        res.status(200).json({
            success:true,
            file
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        })
        
    }
}