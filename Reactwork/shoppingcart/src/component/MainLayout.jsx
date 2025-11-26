import React from 'react'
import { Link } from 'react-router-dom'

function MainLayout() {
  return (
    <div style={{marginLeft:'500px',marginTop:'200px', border:'2px solid red', backgroundColor:'brown', height:'300px', width:'400px'}}>
      <nav>
        <Link style={{marginLeft:'30px',color:'white', fontSize:'30px'}} to='/login'>Login</Link>
        <Link style={{marginLeft:'50px',color:'white', fontSize:'30px'}} to='/register'>Register</Link>
      </nav>


    </div>
  )
}

export default MainLayout