import React, { useEffect, useState } from 'react'
import AdminNav from '../Component/AdminNav'
import Footer from '../Component/Footer'
import Sidebar from '../Component/Sidebar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from '../Api/Api';
import { useNavigate } from 'react-router-dom';




export default function AddUser() {
  let navigate = useNavigate()
    const [user, setuser] = useState({})
   
      let insertData = (event) => {
        event.preventDefault()

        Api.AddData('User',user).then(()=>{
               console.log('done')
        })

        navigate('/showuser' )
      }

      let hendleChange = (event) => {
            console.log(event.target.value)
            setuser({...user,[event.target.name]:event.target.value})
      }

     
    
    return (
        <>

            <Sidebar />

            <div class="content">
                <AdminNav />

                <div class="container-fluid pt-4 px-4">
                <div class="bg-light text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">User</h6>
                        <a href="">Show All</a>
                    </div>
                    <Form onSubmit={insertData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={hendleChange} id='name' name= 'name'/>
        
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter Your City" onChange={hendleChange} id='city' name= 'city'/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange={hendleChange} id='email' name='email' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" onChange={hendleChange} id='password' name='password' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile number" onChange={hendleChange} id='phone' name= 'phone'/>
        
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
