const router = require("express").Router() ; 
const bookModel =  require("../model/bookModels") ; // model import kr rhe h .

//post 
router.post("/add",async(req,res)=>{

     try{

         //const {name , desc , author , bookname , image , price}  = req.body ; // data fetch kr rhe h console se (frontend se data console m aata h ) . 
         //destructure krke send kr rhe h . 
         //const newBook = new bookModel({name,desc,author, bookname,image,price}); // ab data ko new book create krke ushme dal rhe h . 

         const data = req.body ; 
         const newBook  = new bookModel(data)  ; 
        // now sending data to db, and .then() is promise -> yeh data pohochene k badd msg dedega. 
        await  newBook.save().then(() => {
            console.log("Book Added Successfully") ; // yeh console m msg dega .    
        })
        res.status(200).json({msg:"Book Added Successfully"}) ; // 200 is success code .
    }


    catch(error){
        res.status(500).json({msg:"Error in adding book"}) ; // 500 is error code .
        console.log(error)   ;  
    }
})


//get
router.get(("/getBooks") , async(req,res)=>{
    let books ; 
    try{
         books = await bookModel.find() ; 
        res.status(200).json(books) ; // 200 is success code .
    }
    catch(error){
        console.log(error)  ; 
    }

})

// update 

router.put(("/updateBook/:id"), async(req,res)=>{
    const id = req.params.id; 
    const {bookname, desc, author, image, price} = req.body ;  
    let book ;
    try{
        //upar data ko destruc kiye , idhr se wapas bhej diye. 
        book = await bookModel.findByIdAndUpdate(id ,{
            bookname, desc, author, image, price
        }); //{} m jo data send krna h wo dalenge .

        await book.save().then(()=> res.status(200).json({message:"data updated.. "})) ;
    }
    catch(error){
        console.log(error) ; 
    }
}) ; 


//Delete book . 
router.delete("/deleteBook/:id", async(req,res)=>{
    const id = req.params.id ; 
    try{
        bookModel.findByIdAndDelete(id)
                 .then(()=>  res.status(201).json({"message": "book has been deleted"})) ; 
    }
    catch(error){
        console.log(error) ; 
    }
});

module.exports = router ; 
