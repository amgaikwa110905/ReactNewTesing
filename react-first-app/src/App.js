
import './App.css';
import Header from './Component/header';
import Footer from './Component/footer';
import TestClassComponent from './Component/CompInDetails/ClassComp';
import FunctionalComp from './Component/CompInDetails/FunctionalComp';
import JsxComp from './Component/JsxDetails/jsxComp';
import FragComp from './Component/JsxDetails/Fragmt';
import Website from './Component/ReactRouting_Day9/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompLifeCylec from './Component/CompLifeCycle/CompLifeCylec';
import ApiIntegration from './Component/apiIntegration/ApiIntegration';
import ApiIntegrationProducts from './Component/apiIntegration/ApiIntegrationProducts';
import UseHookEffect from './Component/apiIntegration/UseHookEffect';
import ApiCallUsingUseHookEffect from './Component/apiIntegration/ApiCallUsingUseHookEffect';
import ApiCallUsinguseEffect from './Component/apiIntegration/ApiCallUsinguseEffect';
import PureComp from './Component/purCompAndCPComm/PureComp';
// import ParentComp from './Component/purCompAndCPComm/ParentComp';
// import ParentFuncComp from './Component/purCompAndCPComm/ParentFuncComp'
import FormBasic from './Component/formHandelling/FormBasic';
import AdvanceForm from './Component/formHandelling/AdvanceForm';
import LoginRef from './Component/formHandelling/loginRef'; 
import ParentComponent from './Component/propDrill/ParentComponent';
import ParentUseHook from './Component/PropDrillingUseContextHook/ParentUseHook';
import ErrorBoundries from './Component/errorBoundry/ErrorBoundries';
import MemoParent from './Component/memo/MemoParent';
import ParentCompUseMemo from './Component/memo/ParentCompUseMemo';
import UseReducerHook from './Component/useReducerHook/UseReducerHook';
import UseCallBackHook from './Component/useCallBack/UseCallBackHook';
import ControlledComp from './Component/controlled_uncontrolledComp/ControlledComp';
import UnControlledComp from './Component/controlled_uncontrolledComp/UnControlledComp';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './Component/crud_using_context_api/AddEmployee';
import EditEmployee from './Component/crud_using_context_api/EditEmployee';
import EmployeeList from './Component/crud_using_context_api/EmployeeList';
import { EmployeeProvider } from './Component/crud_using_context_api/EmployeeStore';

//Import React Router Dom Component
function App() {
  return (
    <div className='HeaderApp'>
      <header>
        {/* <Header/> */}
       {/* <h2>Welecome to React</h2>   */}
       {/* <TestClassComponent/>  */}
       {/* <Footer/> */}
       {/* <FunctionalComp/> */}
       {/* <JsxComp/> */}

       {/* <FragComp/> */}
       {/* <Website/> */}
       {/* <CompLifeCylec/> */}
       {/* <ApiIntegration/> */}
       {/* <ApiIntegrationProducts/> */}
       {/* <UseHookEffect/> */}
       {/* <ApiCallUsingUseHookEffect/> */}
{/* <ApiCallUsinguseEffect/> */}
{/* <PureComp/> */}
{/* <ParentComp/> */}
{/* <ParentFuncComp/> */}
{/* <FormBasic/> */}
{/* <AdvanceForm/> */}
{/* <LoginRef/> */}
{/* <ParentComponent/> */}
{/* <ParentUseHook/> */}
{/* <ErrorBoundries/> */}
{/* <MemoParent/> */}
{/* <ParentCompUseMemo/> */}
{/* <UseReducerHook/> */}
{/* <UseCallBackHook/> */}
{/* <ControlledComp/> */}
{/* <UnControlledComp/> */}



<Router>
{/* <EmployeeProvider> */}
  <Routes>
   
    <Route exact path='/' element={<EmployeeList/>}> </Route>
    <Route exact path='/addEmployee' element={<AddEmployee/>} ></Route>
    <Route exact path='/editEmployee' element={<EditEmployee/>}></Route>
    <Route exact path='/employeeList' element={<EmployeeList/>}></Route>
  
  </Routes>
  {/* </EmployeeProvider> */}
</Router>

      </header>
    </div>
  );
}

export default App;
