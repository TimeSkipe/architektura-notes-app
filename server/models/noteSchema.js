import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    content:{
        type:String,
        default:""
    },
    category:{
        type:String,
        default:"Not selected"
    },
    reminderDate:{
        type:Date,
        default:null
    },
    isProtected:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        default:null
    }
})

export default mongoose.model("Note",  NoteSchema)