import React from 'react'
import {useState} from 'react'
import axios from "axios" ; 
import { useConfig } from '../config/ConfigProvider';


const AddBooks = () => {
  const server = useConfig();
     const [Data , setData] = useState({bookname:"",
                                          author:"",
                                          desc:"",
                                          price:"",
                                          image:""});
  
  const change=(e)=>{
    const {name , value} = e.target;
    setData({...Data,[name]: value}) ;
  };
  const submit  = async()=>{
    await axios.post(`${server}/api/v1/add`,Data.then((res)=>console.log(res)) );
  }
  console.log(Data); 
  return (
    <div className="bg-dark d-flex justify-content-center align-items-center" style={{minHeight: "91.5vh"}}>
      <div className="container  p-4 " >
            <div className="mb-3 ">
              <label for="exampleFormControlInput1"
               className="form-label text-white" >Book name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" 
              placeholder="Enter book name"
              name="bookname"
              value = {Data.bookname}
              onChange={change} 
                />
            </div>    

            <div className="mb-3 ">
              <label for="exampleFormControlInput1"
               className="form-label text-white"
               >Enter author's name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" 
              placeholder="author's name" 
              value = {Data.author}
              name="author"/>
            </div>

            <div className="mb-3 ">
              <label for="exampleFormControlInput1" 
              className="form-label text-white">enter description of the book</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" 
              placeholder="enter description" 
              value = {Data.desc}
              name="desc" />
            </div>

            <div className="mb-3 ">
              <label for="exampleFormControlInput1"
               className="form-label text-white">Image</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" 
              placeholder="enter the url of the image"  
              name="image"
              value = {Data.image}
              onChange={change} />
            </div> 

             <div className="mb-3 ">
              <label for="exampleFormControlInput1" 
              className="form-label text-white">Price</label>
              <input type="number" className="form-control" id="exampleFormControlInput1" 
              placeholder="enter the price of the book." 
               name="price"
               value = {Data.price}
               onChange={change}/>
            </div>

            <button className="btn btn-success" onClick={submit} >submit</button>
      </div>
    </div>
  )
}

export default AddBooks
