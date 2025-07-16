mongoose = require("mongoose") ; 
const bookSchema =  new mongoose.Schema({

    bookname: {type:String , required:true  }, //default bh dal skte h . 
    author:  {type:String , required:true  } , 
    desc:  {type:String , required:true  }, 
    image:  {type:String , required:true  }, 
    price : {type:Number , required:true }

}) ; 

//model m wo chiz rkhenge , jo db m ishka name rkhna chahte h . 
module.exports = new mongoose.model("Books" , bookSchema) ;  // (  "jo Name Rkhna H"  ,  "jo export kr rhe h" ) ; 