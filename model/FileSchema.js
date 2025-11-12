import mongoose from "mongoose";
import { type } from "os";

const fileSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    subject : {
        type : String,
        required : true,
        trim : true
     
    },
     fileUrl : {
        type : String
     
    },
    createdBy:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }]
})




const File = new mongoose.model('File', fileSchema);
export default File;