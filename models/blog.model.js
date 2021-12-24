const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema(
    {
       title:{
            type:String,
            required:true,
            unique:true,
       }, 
       desc:{
            type:String,
            required:true,
       },
       photo:{
            type:String,
            required:true,
       },
       author:{
            type:String,
            required:true,
       },
       categories:{
            type:Array,
            required:false,
       },
    },
    { timestamps:true }
);

module.exports =  mongoose.model("Blog", blogSchema)