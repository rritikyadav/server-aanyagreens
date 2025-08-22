import mongoose from 'mongoose'

const formSchema = mongoose.Schema({
    name:{
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
    guests:{
        type:String,
        required:true
    },
    event:{
        type:String,
    }
},{timestamps:true});

export const Form = mongoose.model('Form',formSchema) 