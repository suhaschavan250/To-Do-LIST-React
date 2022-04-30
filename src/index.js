import React from "react";
import {createRoot} from 'react-dom/client';
import "./index.css";
import {App }from "./App";


const rootEle=document.getElementById('root');
const root=createRoot(rootEle);




root.render(
    <>

    
  <App></App>
    
    </>
   
)