import React, { useEffect, useState } from 'react'
// import Api from '../Api/Api'
import Api from '../Api/Api'
import AdminNav from '../Component/AdminNav'
import Footer from '../Component/Footer'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Sidebar from '../Component/Sidebar'
import { Link, useNavigate } from 'react-router-dom';
// import Table from '../Component/Table'
// import Api from 'c:/users/sachin/appdata/local/temp/rar$dia13660.1221/api'

export default function ShowCategory() {
  let navigate = useNavigate()
  const [Allcategory, setAllcategory] = useState([

  ])

  let deleteData = (id) => {
    console.log(id)
    Api.deleteData('Category',id).then(() =>{
        console.log('Data deleted')
       let temp = Allcategory.filter((item)=>item.id!= id)
       setAllcategory(temp)

    })
  }

  let  getData = ()=>{ 
    console.log("Data")
    Api.fetchData('Category').then(result=>
       {
           setAllcategory([...result])
       }
    
   

    )
             
   }

   let EditData = (id) => {
    console.log(id)
    navigate('/updatecat/' + id)

   }




  useEffect(() => {
    
    getData()
   
  }, [])
  
  

  return (
    <>
 <Sidebar/>

 <div class="content">
      <AdminNav/>
     <Link class="btn btn-sm btn-primary me-3 " to='/addcategory'>Add Category</Link>
      <div class="container-fluid pt-4 px-4">
                <div class="bg-light text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">Category</h6>
                        <a href="">Show All</a>
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-dark">
                                    {/* <th scope="col"><input class="form-check-input" type="checkbox"/></th> */}
                                    <th scope="col">Id</th>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Name</th>
                                    
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {Allcategory?Allcategory.map((item)=>(
                                  <tr>
                                    {/* <td><input class="form-check-input" type="checkbox"/></td> */}
                                    <td>{item.id}</td>
                                    <td>{item.image}</td>
                                    <td>{item.name}</td>
                                   
                                    <td>
                                      {/* <a class="btn btn-sm btn-primary me-3 " href="">Detail</a> */}
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
