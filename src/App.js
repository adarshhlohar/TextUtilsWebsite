import React,{useState} from 'react'
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';



function App() {


  const[mode,setMode] = useState("light");

  const toggleMode = ()=>{
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#0a1a29";
        showAlert("Dark mode can be enabled","success");
        document.title="TextUtils - Dark Mode";
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode can be enabled","success");
        document.title="TextUtils - Light Mode";
    }
  }

const[alert,setAlert] = useState(null);

const showAlert = (message,type) =>{
            setAlert({
              msg : message,
              type: type
            });

            setTimeout(()=>{
              setAlert(null);
            },2000)
}

  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggle={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
