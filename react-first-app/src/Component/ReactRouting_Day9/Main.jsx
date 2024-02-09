import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import ServicesComp from "./Services";
import HomeComp from "./Home";
import ContactUs from "./ContactUs";
import ClassCompo from "../CompCommunication/ClassCompo";
import mainLogo from'./test.png';
import FunctionCompoCommunication from "../CompCommunication/FunctionCompoCommunication";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import StateCompoCommun from "../StateClassCompCommun/StateCompoCommun";
import StateInFunctionComp from "../StateClassCompCommun/StateInFunctionCompo";
import ConditionalRendComp from "../CondRenderingOfComponent/ConditionalRendComp";
import StylingComp from "../CondRenderingOfComponent/StylingComp";
import Binding from "../CondRenderingOfComponent/EventBinding";
const Website = () => {
  
  let name = "Amol";
  const employee = {
    name : "Amol",
    age : 33,
    add : "Pune"
  }
  return (
    <>
      {/* <h1>Main Page</h1> */}

      <Router>
        {/* <ul type="none" style={{display: 'flex',columnGap:'10px'}}>
            <li> <NavLink to="/">
                <b>Home</b></NavLink>
            </li>
            <li >
                <NavLink to = "/services">
                <b>Services</b> </NavLink>
            </li>
            <li>
                <NavLink to = "/contactus">
                <b>ContactUs</b></NavLink> 
            </li>
        </ul> */}
       
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            {/* <img src="test.png" alt="This is profile photo" height="300px" width="300" /> */}
            <img src={mainLogo} alt="Logo" height="100px" width="100px" />
            <NavLink class="navbar-brand" to="/">
              <b>CODEMIND TECHNOLOGY</b>
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li class="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/services"
                  >
                    Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link active" to="/contactus">
                    Contact US
                  </NavLink>
                </li> */}
                <li class="nav-item">
                  <NavLink className="nav-link active" to="/compcommunication">
                    Class Comp Communication
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink
                    className="nav-link active"
                    to="/functioncompcommunication"
                  >
                    Function Comp Communication
                  </NavLink>
                </li>

                <li class="nav-item">
                    <NavLink className="nav-link active" to="/stateCommunication">
                    StateInclasscomponents
                    </NavLink>


                </li>
                <li class="nav-item">
                  <NavLink  className="nav-link active" to="/stateinFunctionComponent">
                    StateInFunctionComponent
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link active" to="/conditionalRendComponent">
                  ConditionalRendComponent
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link active" to="/stylingComp">
                    Styling Comp
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link active" to ="/eventBinding">
                    Event Binding
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <Routes>
          <Route exact path="/" element={<HomeComp />}></Route>
          {/* <Route exact path="/Services" element={<ServicesComp />}></Route>
          <Route exact path="/contactus" element={<ContactUs />}></Route> */}
          <Route
            exact
            path="/compcommunication"
            element={
              <ClassCompo
                myName={name}
                company="infosys"
                employeeObj={employee}
              />
            }
          ></Route>
          <Route
            exact
            path="/functioncompcommunication"
            element={
              <FunctionCompoCommunication
                myName={name}
                company="infosys"
                employeeObj={employee}
              />
            }
          ></Route>
          <Route exact path = "/conditionalRendComponent" element={<ConditionalRendComp/>}>

          </Route>
          <Route exact path="/stateCommunication" element={<StateCompoCommun/>}></Route>
          <Route exact path="/stateinFunctionComponent" element={<StateInFunctionComp/>}></Route>
          <Route exact path="/stylingComp" element={<StylingComp/>}></Route>
          <Route exact path="/eventBinding" element={<Binding/>}></Route>
        </Routes>
      </Router>
      <Sidebar>
          <Menu>
            {/* <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu> */}
            {/* <MenuItem> Menu Bar1 </MenuItem>
            <MenuItem> Menu Bar2 </MenuItem> */}
          </Menu>
        </Sidebar>
    </>
  );
};

export default Website;
