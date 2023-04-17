import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form, useNavigate } from 'react-router-dom'
import Sidebar from '../Component/Sidebar'
import AdminNav from '../Component/AdminNav'
import Footer from '../Component/Footer'
import Api from '../Api/Api'

export default function AddReview() {
 
  
  return (
    <>
     <Sidebar />
     <div class="content">
                <AdminNav />

                
                

     
  
      <Footer/>
            </div>

       {/* <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" placeholder="Enter Name"  id='name' name= 'name'/>
        
//       </Form.Group> 

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" placeholder="Enter Email"  id='email' name='email' />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Product</Form.Label>
//         <Form.Control type="text" placeholder="Enter Product" id='product' name='product' />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Review</Form.Label>
//         <Form.Control type="text" placeholder="Enter Review"  id='review' name='review' />
//       </Form.Group>
    
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>  */}
     
  
    
            
    </>
  )
}















// import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'
// import { Form, useNavigate } from 'react-router-dom'
// import Api from '../Api/Api'
// import AdminNav from '../Component/AdminNav'
// import Footer from '../Component/Footer'
// import Sidebar from '../Component/Sidebar'

// export default function AddReview() {
//   let navigate = useNavigate()
//     const [review, setreview] = useState({})
   
//     let insertData = (event) => {
//       event.preventDefault()

//       Api.AddData('Review',review).then(()=>{
//              console.log('done')
//       })
//       navigate('/showreview' )
//     }

//     let hendleChange = (event) => {
//           console.log(event.target.value)
//           setreview({...review,[event.target.name]:event.target.value})
//     }

//   return (
//     <>
  

//  <Sidebar/>

//           <div class="content">
//                  <AdminNav/>
//                  <div class="container-fluid pt-4 px-4">
//                 <div class="bg-light text-center rounded p-4">
//                      <div class="d-flex align-items-center justify-content-between mb-4">
//                          <h6 class="mb-0">Review</h6>
//                          <a href="">Show All</a>
//                     </div>

                   

//     <Form onSubmit={insertData}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" placeholder="Enter Name" onChange={hendleChange} id='name' name= 'name'/>
        
//       </Form.Group> 

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" placeholder="Enter Email" onChange={hendleChange} id='email' name='email' />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Product</Form.Label>
//         <Form.Control type="text" placeholder="Enter Product" onChange={hendleChange} id='product' name='product' />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Review</Form.Label>
//         <Form.Control type="text" placeholder="Enter Review" onChange={hendleChange} id='review' name='review' />
//       </Form.Group>
    
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form> 

//                      </div>
//                      </div>
//             <Footer/>
//  </div> 


//  </>
// )
// }
