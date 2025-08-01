import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const NotFound=()=>{
    const navigate=useNavigate();

const goHome=()=>{
    navigate('/')
};


return(
    <div>
      <div style={{ textAlign: 'center', padding: '50px' }}>
         <h1>Oops! Page Not Found</h1>
      </div>
      <div style={{ textAlign: 'center', padding: '50px' }}>
         <Button variant="success" onClick={goHome}>Go to Home</Button>
      </div>
 </div>
)
};
export default NotFound;