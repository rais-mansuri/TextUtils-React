
import react, { useState,useEffect } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alerts, setAlert] = useState();

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  let toggleMode = () => {
    if (mode === 'light') {

      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  }
  useEffect(() => {
console.log("mode",mode)
  }, [mode]);

  return (
    <>
      <BrowserRouter>
        {/* <Navbar title="TextUtil" about="About Us"></Navbar> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alerts} />
        <div className="container my-3">
         <Routes>
          <Route path="/about" element={<About showAlert={showAlert}/>} />
          <Route path="/" element={<TextForm mode={mode} heading="Enter the text of analyze"/>} />
         </Routes>
          {/* <TextForm heading="Enter the text of analyze" showAlert={showAlert} mode={mode}/> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
