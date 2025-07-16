const express = require("express") ; 
const app = express()  ;
require("./connection/conn") ; 
const bookRoute  = require("./routes/booksRoutes") ; 
const cors = require('cors') ;

app.use(cors()) ;  
app.use(express.json()) ; // yeh body se data fetch krne k liye h (middleware) . 

app.use("/api/v1" , bookRoute ) ;  // don't know where /api/v1 came from . 

 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server start ho gya") ; 
}); 