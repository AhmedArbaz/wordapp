// import logo from './logo.svg';
import './App.css';
import Navebar from './Components/Navebar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert.js';
import About from './Components/About';






function App() {
  const [mode, setmode] = useState('light');//Whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode ==='light'){
      setmode('dark')
      document.body.style.backgroundColor = "#05305b";
      showAlert('Dark mode has been enabled','success')
      document.title = "TextUtils - Dark mode"
      
          // //This is for your understanding if you want to blink something
          // setInterval(() => {
          //   document.title = 'Dark mode enabled'
          // }, 2000);

          // setInterval(() => {
          //   document.title = "Install TextUtils Now"
          // }, 1500);
      
    }
    else{
      setmode ("light")
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been alert','success')
      document.title = "TextUtils - Light mode"

      

    }

  }



  return (
    <div className="App">
      <>
      <Navebar title='TextUtils' aboutText='About TextUtils'  mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert}/>
      
      <div className='container'>
      <TextForm heading='Enter the text to analyze below' showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>
      <About  mode={mode} toggleMode={toggleMode}/>
      </div>


     
      </>
    </div>

  );
}

export default App;
