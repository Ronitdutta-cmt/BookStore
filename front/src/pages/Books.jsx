import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BooksSection from '../components/BooksSection';
import { useConfig } from '../config/ConfigProvider';


const Books = () => {
    const [Data , setData] = useState() ; 
    const {server} = useConfig();
    useEffect(() => { /* yeh function apne app run hota h , on pg refresh . */
       const fetch = async()=>{
         await axios
          .get(`${server}/api/v1/getBooks`)
          .then((res)=>{setData(res.data)})  ;  /*// console.log(..) k jgh setData(..)*/
       }
       fetch() ; /*// yeh fn call kiye , tb hi reload pr fn call hoga. */
      
    } , []);


  return (
    <div className="bg-dark" style={{minHeight: "91.5vh"}}>

      <div className="d-flex justify-content-center align-items-center my-3"  >
      <h4 className="text-white"> Books section </h4>

     {/* //if else with the help of ternary operator*/}
      {/*//data fetch ho gya - ok , nahi hua toh : loading . */}

      {Data ? (<BooksSection data={Data}/>) : 
      (<div className="text-white">Loading....</div>) }

      </div>

    </div>
  )
}

export default Books
