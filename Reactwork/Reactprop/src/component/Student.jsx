import React from 'react'
// import './student.css'
// export default function Student(props) 
function Student({data})
{
  return (
    <div class="container">
        <h1 class="heading">Student Info</h1>
        <div class="box">
        <h2>Name: <span>{data.name}</span></h2>
        <img src={data.pic} height={200} width={200} alt="profile photo" />
        <h2>Branch: <span>{data.branch}</span></h2>
        <h2>Section: <span>{data.sec}</span></h2>
        <h2>Roll No.:<span> {data.roll}</span></h2>
        <h2>College: <span>{data.college}</span></h2>
        </div>
    </div>
  )
}