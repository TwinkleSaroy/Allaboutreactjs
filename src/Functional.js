import React,{useEffect,useState} from 'react';

function Functional(){

    const[name ,setName] = useState('Reactjs');
    const[val ,setVal] = useState('twinkle');

    useEffect(()=>{
console.log("this is useEffect hook ")
    } ,[]);

    const test=(e)=>
    {
        console.log(e.target.value)
        setVal(e.target.value);
    }
    return(
        <div>
            <h2 style={{color:" deeppink"}}>This is functional component</h2>
            <h2>{name}</h2>
            <input type='text' value={val} onChange={test}></input><br/>
            <button onClick={()=>setName("Angular Js")}>Hook update</button><br/>
            <button onClick={()=>setVal()}>state on event</button>
        </div>
    );
    
};

export default Functional;