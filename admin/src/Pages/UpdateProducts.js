import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import Api from '../Api/Api';

export default function UpdateProducts() {
  let navigate = useNavigate()
  const [data, setdata] = useState({})
  let params = useParams() 
  console.log(params.id)
  
  let getData = () => {
    Api.fetchData('Products',params.id).then(result => {
      console.log(result)
      setdata(result)
    })
  }
  
  let updateData = (event) =>{
    event.preventDefault()
      Api.Update('Products',params.id,data).then(result => {
    console.log('Result Data....')
    setdata(result)
    
    navigate('/showproducts' )
  
  })}
  
  
  let hendleChange = (event) => {
  
    console.log(event.target.value)
    setdata({...data,[event.target.name]:event.target.value})
  }
  
  
     useEffect(() => {
  
      getData()
  
     }, [])
    
  return (
    <>
         
                 <div class="container-fluid pt-4 px-4">
                <div class="bg-light text-center rounded p-4">
                     <div class="d-flex align-items-center justify-content-between mb-4">
                         <h6 class="mb-0">Update Products</h6>
                         <a href="">Show All</a>
                    </div>

                     <Form onSubmit={updateData}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Photo</Form.Label>
         <Form.Control type="text" placeholder="Image Path"  onChange={hendleChange} value={data.image}  id='image' name= 'image'/>
        
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Name</Form.Label>
         <Form.Control type="text" placeholder="Enter name"  onChange={hendleChange} value={data.title}  id='title' name= 'title'/>
        
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Category</Form.Label>
         <Form.Control type="text" placeholder="Category"  onChange={hendleChange} value={data.category} id='category' name='category' />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Description</Form.Label>
         <Form.Control type="text" placeholder="Description"  onChange={hendleChange} value={data.description} id='description' name='description' />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Price</Form.Label>
         <Form.Control type="text" placeholder="Products Price"  onChange={hendleChange} value={data.price} id='price' name='price' />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Rating</Form.Label>
         <Form.Control type="text" placeholder="Products Rating"  onChange={hendleChange} value={data.rating} id='rating' name='rating' />
      </Form.Group>
    
       <Button variant="primary" type="submit">
         Submit
       </Button>
 </Form>
                    </div>
                    </div>
           {/* <Footer/> */}
{/* </div> */}
    </>
  )
}






     
    

