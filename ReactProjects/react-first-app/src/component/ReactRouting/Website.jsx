import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HomeComp from "./home";
import ServicesComp from "./Services";
import ContactUs from "./ContactUs";
import React from "./react";
import ClassCompo from "../compCommunication/ClassCompo";
import FuncCompoCummu from "../compCommunication/FuncCompoCummu";
import StateInClassComp from "../stateInComponent/StateInClassComp";
import UseStateHook from "../stateInComponent/useStateHook";
const Website = () => {
  let name = "Sangram";
  const employee={
    name:"Siddesh",
    age:25,
    city:"Pune"
  }
  return (
    <>
      <Router>
        {/* <ul TYPE="none" style={{display:"flex", columnGap:"10px"}}>
        <li><NavLink to="/"><b>Home</b></NavLink></li>
        <li><NavLink to="/services"><b>SERVICES</b></NavLink></li>
        <li><NavLink to="contactUs"><b> CONTACTUS</b></NavLink></li>
    </ul> */}

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <NavLink className="navbar-brand" to="/">
            <b>CODEMIND TECHNOLOGY</b>
            </NavLink>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink className="nav-link active"  to="/services">
                  Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/contactUs">
                    ContactUs
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink className="nav-link" to="/react">
                    React
                  </NavLink>
                </li>


                <li class="nav-item">
                  <NavLink className="nav-link" to="/compCommunication">
                    Comp Communication
                  </NavLink>
                </li>  

                <li class="nav-item">
                  <NavLink className="nav-link" to="/funcCompComm">
                   Func Comp Communication
                  </NavLink>
                </li>      
                
                <li class="nav-item">
                  <NavLink className="nav-link" to="/stateInClass">
                   StateInClassComp 
                  </NavLink>
                </li>
                
                <li class="nav-item">
                  <NavLink className="nav-link" to="/stateInFunComp">
                  stateInFunComp
                  </NavLink>
                </li> 
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<HomeComp />}>
            {" "}
          </Route>
          <Route exact path="/services" element={<ServicesComp />}>
            {" "}
          </Route>
          <Route exact path="/contactUs" element={<ContactUs />}>
            {" "}
          </Route>
          <Route exact path="/react" element={<React />}>
            {" "}
          </Route>
          <Route exact path="/compCommunication" element={<ClassCompo myName={name} compony="Infosys" employeeObj={employee}/>}>
            {" "}
          </Route>
          <Route exact path="/funcCompComm" element={<FuncCompoCummu myName={name} compony="Infosys" employeeObj={employee}/>}>
            {" "}
          </Route>
          <Route exact path="/stateInClass" element={<StateInClassComp myName={name} compony="Infosys" employeeObj={employee}/>}>
            {" "}
          </Route>
          <Route exact path="/stateInFunComp" element={<UseStateHook />}>
            {" "}
          </Route>

        </Routes>
      </Router>
    </>
  );
};

export default Website;
