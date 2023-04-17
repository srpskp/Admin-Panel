import React from 'react'
import Footer from '../Component/Footer'
import Main from '../Component/Main'
import Sidebar from '../Component/Sidebar'

export default function Home() {
  return (
    <div>
         <div class="container-xxl position-relative bg-white d-flex p-0">
            <Sidebar/>
            <Main/>
        
         </div>
    </div>
  )
}
