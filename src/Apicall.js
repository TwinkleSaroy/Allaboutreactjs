import React,{useEffect,useState} from 'react';
import {Table} from 'react-bootstrap';
import './Apicall.css';

function Apicall() {
    const[user,setUser]=useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2').then((data)=>{
            data.json().then(response=>{
                console.log(response)
                setUser(response.data);
            })
        })
       
    }, [])
    return (
        <div>
            <h1 style={{color:'deeppink'}}>This is functional component to used for how to call api and show it</h1>
          
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>id</th>
      <th>First_Name</th>
      <th>Last_Name</th>
      <th>E-mail</th>
    </tr>
    
    {
      user.map((item,index)=>
          <tr key={index} >
            <img key={item.avatar} src={item.avatar} /> 
             <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
          </tr>
      )
  }
  </thead>
  <tbody>
  
   </tbody>
</Table>
</div>
        
    )
}

export default Apicall;
