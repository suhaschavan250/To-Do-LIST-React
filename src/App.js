import React, { useState } from "react";
 

const App = ()=>{
const [inputlist,setinputlist]=useState('buy an apple');
 const[item,setitems]=useState([]);
const eventcapture=(event)=>{
  setinputlist(event.target.value);

};
const listofitem=()=>{
  setitems((e)=>{
     return [ ...e,inputlist];
  })
 }
return(
<>
<div className="main_div">
  <div className="center_div">
    <h1>TO DO LIST</h1>
    <input type="text" placeholder="Add an  item" onChange={eventcapture}/>
    <button onClick={listofitem}>+</button>
    <ol>
    {item.map((val)=>{
      return  (<li>{val}</li>);
     
    })}  
    </ol>
  </div>
</div>






</>



)




};

export {App} ;