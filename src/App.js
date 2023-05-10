import logo from './logo.svg';
import './App.css';
//import './calculator.css';
import {BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom'

import Weatherreport from './Weather/Weatherreport';
import Calculator from './Calculator';
import SignIn from './SignIn';
import Posts from './Post1';
import Registration from './Registration';
//import SignIn from './SignIn';
import Post from './Post';
import Bmicalculator from './Bmi';
function App() {
  return (
   <>
    <BrowserRouter>
    
        
    <li className="nav-item active">
          <Link to="./Registration">Registration</Link>
        </li>
        <li className="nav-item active">
          <Link to="./Post">Post</Link>
        </li>
        <li className="nav-item active">
          <Link to="./Post1">Posts</Link>
        </li>
        <li className="nav-item active">
          <Link to="./SignIn">SignIn</Link>
        </li>
        <li className="nav-item active">
          <Link to="./Calculator">Calculator</Link>
        </li>
        <li className="nav-item active">
          <Link to="./Weather/Weatherreport">Weatherreport</Link>
        </li>
        <li className="nav-item active">
          <Link to="./Bmi">Bmicalculator</Link>
        </li>

         <Routes>
         <Route path="Registration" element={<Registration/>}></Route>
        <Route path="Post" element={<Post/>}></Route>
        <Route path="Post1" element={<Posts/>}></Route>
        <Route path="SignIn" element={<SignIn/>}></Route>
        <Route path="Calculator" element={<Calculator/>}></Route>
        <Route path="Weather/Weatherreport" element={<Weatherreport/>}></Route>
        <Route path="Bmi" element={<Bmicalculator/>}></Route>
        </Routes>
  </BrowserRouter>
 
 

  </>
  );

  
  }

export default App;
