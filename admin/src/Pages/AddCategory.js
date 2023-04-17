import React, { useEffect, useState } from 'react'
import AdminNav from '../Component/AdminNav'
import Footer from '../Component/Footer'
import Sidebar from '../Component/Sidebar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from '../Api/Api';
import { useNavigate } from 'react-router-dom';




export default function AddCategory() {
  let navigate = useNavigate()
    const [category, setcategory] = useState({})
   
      let insertData = (event) => {
        event.preventDefault()
        // console.log(category)

        Api.AddData('Category',category).then(()=>{
               console.log('done')
        })
      

        navigate('/showcategory' )
        
      }

      let hendleChange = (event) => {
            console.log(event.target.value)
            setcategory({...category,[event.target.name]:event.target.value})
      }

    
    
    return (
        <>

            <Sidebar />

            <div class="content">
                <AdminNav />

                <div class="container-fluid pt-4 px-4">
                <div class="bg-light text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">Category</h6>
                        <a href="">Show All</a>
                    </div>
                    <Form onSubmit={insertData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={hendleChange} id='name' name= 'name'/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Img path" onChange={hendleChange} id='photo' name='photo' />
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
