import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import Api from '../Api/Api';
// import Api from '../Api/Api';




export default function UpdateUser() {
  let navigate = useNavigate()
  const [data, setdata] = useState({})
  let params = useParams() 
  console.log(params.id)
  
  let getData = () => {
    Api.fetchData('User',params.id).then(result => {
      console.log(result)
      setdata(result)
    })
  }
  
  let updateData = (event) =>{
    event.preventDefault()
      Api.Update('User',params.id,data).then(result => {
    console.log('Result Data....')
    setdata(result)
    
    navigate('/showuser' )
  
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
                        <h6 class="mb-0">Update User</h6>
                        <a href="">Show All</a>
                    </div>
                    <Form onSubmit={updateData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={hendleChange} value={data.name}  id='name' name= 'name'/>
        
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter Your City" onChange={hendleChange} value={data.city} id='city' name= 'city'/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange={hendleChange} value={data.email} id='email' name='email' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" onChange={hendleChange} value={data.password} id='password' name='password' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile number" onChange={hendleChange} value={data.phone}  id='phone' name= 'phone'/>
        
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
