import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function SignIn() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [admin, setadmin] = useState([
        {
            email:'admin1@gmail.com',
            password:123
        },
        {
            email:'admin2@gmail.com',
            password:1234
        },
        {
            email:'admin3@gmail.com',
            password:12345
        }
    ])
    let hendalemail = (event) =>{
        setEmail(event.target.value)
    }
    let hendalpassword = (event) =>{
        setPassword(event.target.value)
    }
    let login = () => {
        var temp = admin.filter(item=>item.email==Email && item.password==Password)
       
        if (temp.length>=1)
        {
              Swal.fire(
                'Login Done!',
                'Welcome to Instagram!',
                'success'
              )
        }
        else {
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                
              })
        }
        setEmail('')
        setPassword('')
        
    }
  return (
    <>
    
 {/* <div class="container-xxl position-relative bg-white d-flex p-0"> */}
        
        {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> */}
        


       
      <div class="container-fluid ">
            <div class="row  align-items-center justify-content-center" >
                 <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <a href="index.html" class="">
                                <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>DASHMIN</h3>
                            </a>
                            <h3>Sign In</h3>
                        </div> 
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" onChange={hendalemail} value={Email} placeholder="name@example.com"/>
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control" id="floatingPassword" onChange={hendalpassword} value={Password} placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <a href="">Forgot Password</a>
                        </div>
                        <button type="submit" class="btn btn-primary py-3 w-100 mb-4" onClick={login} >Sign In</button>
                        <p class="text-center mb-0">Don't have an Account? <a href="">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div> 
       
    {/* </div> */}
    </>
  )
}
