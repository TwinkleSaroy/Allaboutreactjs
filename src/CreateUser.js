import React, { useState } from 'react'

function CreateUser() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

function login(){
    let data={name,email,password}
    console.log('clicked', data)
}

    return (
        <div className='text-center'>
            <h1>Login page</h1>
            <input type='text' name='username' value={name}  onChange={(e)=>setName(e.target.value)}/><br/>
            <input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
            <input type='text' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>
            <button onClick={login}>ok</button>
        </div>
    )
}

export default CreateUser;
