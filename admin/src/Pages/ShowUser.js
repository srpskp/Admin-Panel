import React, { useEffect, useState } from 'react'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
// import Api from '../Api/Api'
import Api from '../Api/Api'
import AdminNav from '../Component/AdminNav'
import Footer from '../Component/Footer'

import Sidebar from '../Component/Sidebar'
// import Table from '../Component/Table'
// import Api from 'c:/users/sachin/appdata/local/temp/rar$dia13660.1221/api'

export default function ShowUser() {
  let navigate = useNavigate()

  const [Allcategory, setAllcategory] = useState([

  ])

  let deleteData = (id) => {
    console.log(id)
    Api.deleteData('User',id).then(() =>{
        console.log('Data deleted')
       let temp = Allcategory.filter((item)=>item.id!= id)
       setAllcategory(temp)

    })
  }

  let  getData = ()=>{ 
    console.log("Data")
    Api.fetchData('User').then(result=>
       {
           setAllcategory([...result])
       }
    
   

    )
             
   }

   let EditData = (id) => {
    console.log(id)
    navigate('/updateuser/' + id)
   }

  

  useEffect(() => {
    
    getData()
   
  }, [])
  
  

  return (
    <>
 <Sidebar/>

 <div class="content">
      <AdminNav/>
      <Link class="btn btn-sm btn-primary me-3 " to='/adduser'>Add User</Link>
      <div class="container-fluid pt-4 px-4">
                <div class="bg-light text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">User</h6>
                        <a href="">Show All</a>
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-dark">
                                    {/* <th scope="col"><input class="form-check-input" type="checkbox"/></th> */}
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    
                                    <th scope="col">Password</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Action</th>
                                    {/* <th scope="col">FullName</th> */}
                                </tr>
                            </thead>
                            <tbody>
                               {Allcategory?Allcategory.map((item)=>(
                                <tr>
                                    {/* <td><input class="form-check-input" type="checkbox"/></td> */}
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>{item.city}</td>
                                    <td>{item.phone}</td>
                                   
                                    <td>
                                      {/* <a class="btn btn-sm btn-primary me-3" href="">Detail</a> */}
                                      <FaRegEdit class="text-primary me-3 " onClick={()=>EditData(item.id)} />
                                    <FaTrashAlt class="text-primary me-3 " onClick={()=>deleteData(item.id)}/>

                                    </td>
                                </tr>
                               )):<h2>Loding...</h2>}
                                
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      <Footer/>
 </div>
 
    </>
  )
}

