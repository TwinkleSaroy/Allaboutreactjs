import React,{useState} from 'react';
import { Table } from 'react-bootstrap';



function FtableData() {
    const[user]=useState([
        {name:'a',age:'10',location:'Delhi'},
        {name:'a',age:'10',location:'Delhi'},
        {name:'a',age:'10',location:'Delhi'},
        {name:'a',age:'10',location:'Delhi'},
        {name:'a',age:'10',location:'Delhi'},
        {name:'a',age:'10',location:'Delhi'}

    ])
    return (
        <div>
       
          
            <h3 style={{color:"blue"}}>this is functional component for used how to print value of a table using map method</h3>
            <h1 style={{color:"green"}}>list show here </h1>
        {/* {
            user.map((item,i)=>
            <div key={i} >{item.name}
            {item.age}
            {item.location}
        
            </div>
            )
        } */}

       
        {
        
            user.length===6?<div>yes this is list here</div>:<div>No value of user shoud be 5</div>
        }
        

        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Age</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
   {
  user.map((item,index)=>
         
         <tr key={index}>
<td>{index}</td>
<td>{item.name}</td>
<td>{item.age}</td>
<td>{item.location}</td>
</tr>

    )
   }
  </tbody>
</Table>
        </div>
    )
}

export default FtableData;
