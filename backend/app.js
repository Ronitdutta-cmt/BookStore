const express = require("express") ; 
const app = express()  ;
require("./connection/conn") ; 
const bookRoute  = require("./routes/booksRoutes") ; 
const cors = require('cors') ;

app.use(cors()) ;  
app.use(express.json()) ; // yeh body se data fetch krne k liye h (middleware) . 

app.use("/api/v1" , bookRoute ) ;  // don't know where /api/v1 came from . 

 


app.listen(1000, () => {
    console.log("server start ho gya") ; 
}); 