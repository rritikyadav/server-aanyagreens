import mongoose from 'mongoose'

const formSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    event:{
        type:String,
        required:true
    },
    guests:{
        type:String,
        required:true
    },
    specificDetails:{
        type:String,
    }
},{timestamps:true});

export const Form = mongoose.model('Form',formSchema) 