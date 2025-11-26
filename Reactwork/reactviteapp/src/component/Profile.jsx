import React from 'react'
import './profile.css';
function Profile() {
  return (
    <div className='parent'>
        <h2 style={{color:'#a85a32'}}>
             Welcome to my profile Page
        </h2>
       <img  src='https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg' height={200} width={200 } style={{borderRadius:'50%'}} alt='profile pic' />
       <div>
        <h2>Name:Rahul</h2>
        <h2>RollNumber: 3268674</h2>
        <h2>Branch:CSE AIML</h2>
        <h2>Section: B</h2>
        <h2>College: ABES Engineering College</h2>
       </div>
    </div>
  )
}

export default Profile