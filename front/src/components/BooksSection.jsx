import React from 'react'

const BooksSection = ({data}) => {
  console.log(data) ; //console.log can't stay inside jsx .
  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap my-3 ">
        {/*//data & data.map() : mtlb data ho tb hi map krega. */}
      {data && data.map((item,index)=>

        <div  key={index} className="book-card" 
              style={{width:"200px" ,
              height:"350px",
              border:"1px solid white",
              borderRadius:"20px" 
              }}>  

              <div>  <img style={{width:"200px" ,height:"210px", borderTopLeftRadius:"20px"}} className="img-fluid" src={item.image} alt={item.bookname} />   </div>
              <h5 style={{fontSize:"15px"}} className="px-2 m-0 my-1 text-white "> {item.bookname.slice(0,20)} ...</h5>
              <b style={{fontSize:"25px" ,color:"red"}}className="mb-3" > Rs. {item.price}</b>
              <div className="d-flex justify-content-around align-items-center my-2"> 
              <button className="btn btn-primary" >UPDATE</button>
              <button className="btn btn-danger" >DELETE</button>
              </div>
        </div>)} 
       
    </div>
  )
}

export default BooksSection
