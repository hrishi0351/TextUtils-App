import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
// import About from './components/About';   
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether sark mode is enabled or not
  const [alert, setAlert]=useState(null); //
  
  const showAlert = (message, type) => {  
        setAlert({
          msg: message,
          type: type,
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);

  }


  const toggleMode =()=> {
    if(mode === "light"){
      setMode ('dark');
      document.body.style.backgroundColor ="black"
      showAlert('Dark mode has been enabled',"success");
      document.title = 'TextUtils-Dark Mode';
      // setInterval (() => {
      //   document.title = 'TextUtils is Amazing ';
      //   },2000);
      //   setInterval (() => {
      //     document.title = 'Install TextUtils Now ';
      //     },1500);
         }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert('light mode has been enabled',"success");
      document.title = 'TextUtils-Light Mode';
    }
  }
return (
    <>
    
    {/* <Navbar title="Textutils" aboutText="About TextUtils"/> */}
    {/* {<Navbar/> } */}

    {/* Route setup  */}
    {/* <Router> */}
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my -3'>
    {/* <Routes> */}
      {/* /user --> Component 1
      /user/home --> Component 2 */}
          {/* <Route exact path="/about"element={<About/>}/> */}
          
          {/* <Route exact path="/"  element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
