// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import {Home} from "./React_Router/Home"
// import {About} from "./React_Router/About"
// import {Contact} from "./React_Router/Contact"
// import {Routes,Route ,Link} from 'react-router-dom';
// import {Routes, Route,Link} from 'react-router-dom';
// import { UserProfile } from './Dynamic_User-page/UserProfile';
// import{Routes,Route,Navigate} from 'react-router-dom';
// import Login from "./Route_Protection/Login";
// import AdminPage from './Route_Protection/AdminPage';
// import Home from "./Not_Found_Page/Home";
// import NotFound from "./Not_Found_Page/NotFound"
// import {LoginForm} from './Login_Form/LoginForm';
import {ContactForm} from "./Contact_Form/ContactForm"



// const style={
//  display: 'flex',
//  justifyContent: 'space-evenly',
//  alignItems: 'center',
//  width:"59%",
//  margin: "48px 265px", 
//  textDecoration: 'none',
// };
// const linkStyle = {
//   textDecoration: 'none',
//   fontWeight: 'bold',
//   color: '#4fc4f3ff',
// };
// const linkStyle = {
//   textDecoration: 'none',
//   fontWeight: 'bold',
//   color: '#4fc4f3ff',
// };
// const isLoggedIn=true;

function App() {
  return (

  <div>
   {/* <LoginForm/> */}
   <ContactForm/>
  </div>



  //   <div>
  //  <Routes>
  //   <Route path="/login" element={<Login/>}/>
  //   <Route path="/" element={isLoggedIn ? <AdminPage/>:<Navigate to="/login" />}/>

  //    <Route path="/" element={<Home/>}
  //   <Route path="*" element={<NotFound />}/>
  //  </Routes>
    
    /* {/* <div>
     <div className='d-flex justify-content-center'>
     <div>
     <h5>Welcome to User Page</h5>
     <div className=' d-flex gap-3'>
       <Link to="/user/101" style={linkStyle} >User 101</Link>
     <Link to="/user/102" style={linkStyle} >User 102</Link>
     </div>
      <Routes>
      <Route path="/user/:id" element={<UserProfile/>}></Route>
     </Routes>
     </div> y
     </div>
  
     <nav className="mb-4" style={style} >
    <Link to="/" style={linkStyle}>Home </Link>
    <Link to="/About"style={linkStyle}>About</Link>
    <Link to="/Contact" style={linkStyle}>Contact</Link>
    </nav>
    <Routes>
    <Route path="/"element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>  
    </div> */
    // </div>
  );
}

export default App;
