import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './component/Student'
import StateHandling from './component/StateHandling'
import ImageManipulation from './component/ImageManipulation'

function App() {
const student=
[{
  pic:'https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg',
  name:'Rahul Singh',
  roll:"23434343",
  branch:"CES-AIML",
  section:'B',
  college:'ABES Engineering College'
},
{
  pic:'https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg',
  name:'Amit Tomer',
  roll:"7897878",
  branch:"CES-AIML",
  section:'A',
  college:'ABES Engineering College'
},
{
  pic:'https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg',
  name:'Ansh Tomer',
  roll:"65432",
  branch:"CES-AIML",
  section:'B',
  college:'ABES Engineering College'
},
{
  pic:'https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg',
  name:'Vikky',
  roll:"89899",
  branch:"CES-AIML",
  section:'B',
  college:'ABES Engineering College'
}
]

  return (
    <div>
     {/* <Student name="Rahul Kumar" roll="35466" branch="CSE AIML" section="B" college="ABES Engineering College" /> */}
    {/* <Student data={student[1]} /> */}

    {/* {
      student.map((ele,index)=>(
       <Student data={ele} key={index} />
      ))
    } */}
    
   {/* <StateHandling /> */}
   <ImageManipulation />

    </div>
  )
}

export default App
