import React from 'react'
import './Home.css' ; 
import { Link } from 'react-router-dom' ; 


const Home = () => {
    const image = require("../images/6607.jpg") ; 
  return (
    <div className='Home-page bg-dark text-white container-fluid'>

       <div className="row container ">
        <div className="col-lg-6 d-flex justify-content-center  align-items-start flex-column" style={{height:"91.5vh"}}>
            <h2 style={{fontSize:"80px"}}>BOOK STORE </h2>
            <h3 style={{fontSize:"50px"}}>FOR YOU </h3>
            <p className="mb-0" style={{color:"silver"}}>Checkout The Books From Here. </p>
            <Link to="/books" className="viewBook my-3 ">view Books</Link>
            
        </div>  
        
        <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column" style={{height:"91.5vh"}}>
            <img className="image-fluid homeimg" src={image} alt="/" />

        </div>
       </div>
    </div>
  )
}

export default Home
