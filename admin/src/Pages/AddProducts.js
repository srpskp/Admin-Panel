import React, { useState } from 'react'
// import AdminNav from './Component/AdminNav'
// import Footer from './Component/Footer'
// import Sidebar from './Component/Sidebar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Api from './Api/Api';
import { useNavigate } from 'react-router-dom';
import Api from '../Api/Api';
import AdminNav from '../Component/AdminNav';
import Footer from '../Component/Footer';
import Sidebar from '../Component/Sidebar';

export default function AddProducts() {
  let navigate = useNavigate()
    const [products, setproducts] = useState({})

    let insertData = (event) => {
                 event.preventDefault()
                // console.log(category)
        
             Api.AddData('Products',products).then(()=>{
                    console.log('done')
             })

             navigate('/showproducts' )

               }
        
               let hendleChange = (event) => {
                    console.log(event.target.value)
                    setproducts({...products,[event.target.name]:event.target.value})
               }
  return (
    <>
          <Sidebar/>

          <div class="content">
                 <AdminNav/>
                 <div class="container-fluid pt-4 px-4">
                <div class="bg-light text-center rounded p-4">
                     <div class="d-flex align-items-center justify-content-between mb-4">
                         <h6 class="mb-0">Products</h6>
                         <a href="">Show All</a>
                    </div>

                     <Form onSubmit={insertData}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Photo</Form.Label>
         <Form.Control type="text" placeholder="Image Path" onChange={hendleChange} id='image' name= 'image'/>
        
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Name</Form.Label>
         <Form.Control type="text" placeholder="Enter name" onChange={hendleChange} id='title' name= 'title'/>
        
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Category</Form.Label>
         <Form.Control type="text" placeholder="Category" onChange={hendleChange} id='category' name='category' />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Description</Form.Label>
         <Form.Control type="text" placeholder="Description" onChange={hendleChange} id='description' name='description' />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Price</Form.Label>
         <Form.Control type="text" placeholder="Products Price" onChange={hendleChange} id='price' name='price' />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Rating</Form.Label>
         <Form.Control type="text" placeholder="Products Rating" onChange={hendleChange} id='rating' name='rating' />
      </Form.Group>
    
       <Button variant="primary" type="submit">
         Submit
       </Button>
 </Form>
                    </div>
                    </div>
           <Footer/>
</div>
    </>
  )
}






     
    

