import './App.css'
import Student from './component/student'
function App(){
  const student = [{
    name:"Dheeraj Singh", 
    branch :"CSE AIML" ,
    sec : "B" ,
    roll : "2300321530068" ,
    college : "ABES Engineering college",
    img: "https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
  },
  {
     name:"Dheeraj Singh", 
    branch :"CSE AIML" ,
    sec : "B" ,
    roll : "2300321530068" ,
    college : "ABES Engineering college",
    img: "https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg",
  },
    { name:"Dheeraj Singh", 
    branch :"CSE AIML" ,
    sec : "B" ,
    roll : "2300321530068" ,
    college : "ABES Engineering college",
    img: "https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
  }
]
  
  return (
    <div>
    {/* <Student name="Dheeraj" branch = "CSE AIML" sec = "B" roll = "2300321530068" college = "ABES Engineering college"/> */}
    {/* <Student data ={Student[2]} /> */}
    <div/>
    {
      student.map((ele,index)=>(
        <Student data={ele} key={index}/>
      ))
    }
    </div>
  )
}
export default App