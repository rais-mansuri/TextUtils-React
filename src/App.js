
import { useState } from 'react';
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

  let removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
  }

  let toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
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

  return (
    <>
      <BrowserRouter>
        {/* <Navbar title="TextUtil" about="About Us"></Navbar> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alerts} />
        <div className="container my-3">
         <Routes>
          <Route path="/about" element={<About showAlert={showAlert} mode={mode}/>} />
          <Route path="/" element={<TextForm mode={mode} heading="Try TextUitls - Word Counter | Remove extra spaces | Character Counter"/>} />
         </Routes>
          {/* <TextForm heading="Enter the text of analyze" showAlert={showAlert} mode={mode}/> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
