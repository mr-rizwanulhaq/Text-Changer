import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import About from './components/About';



function App() {
  const [mode, setmode] = useState("light")
  const [btnmode, setbtnmode] = useState("dark")
  const [btntext, setbtntext] = useState("Dark Mode")
  const [alert, setAlert] = useState(null)


  let showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  let toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      setbtnmode("light");
      setbtntext("Light Mode");
      document.body.style.backgroundColor = "#5A5A5A";
      showAlert("Dark mode has been enabled", "success");

    } else {
      setmode("light")
      setbtnmode("dark")
      setbtntext("Dark Mode")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");

    }
  }


  return (
    <>


      <BrowserRouter basename='/text-changer'>
        <Navbar title="Text Changer" tabTwo="About" tabOne="Home" mode={mode} toggleMode={toggleMode} btnmode={btnmode} btntext={btntext} />
        <Alert alert={alert}/>

        
          <div className="container my-3">
            
          <Routes>  
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/text-changer" element={<TextForm heading="Enter The Text To Analyze" mode={mode} btnmode={btnmode} showAlert={showAlert} />} />
          </Routes>
          </div>
        


      </BrowserRouter>



    </>
  );
}

export default App;