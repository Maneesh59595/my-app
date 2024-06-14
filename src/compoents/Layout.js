import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar';
 
 
 

const Layout = () => {
   
  return (
      <div>
        
     {/* <div>
        <Sidebar/>
     </div> */}
     <div className>
        <Navbar/>
    <div>
        {<Outlet />}
    </div>
     </div>
    </div>
  )
}

export default Layout;

