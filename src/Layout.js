// import React from 'react'

import Navebar from "./Components/Navebar"
import Alert from "./Components/Alert"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import TextForm from "./Components/TextForm"

const Layout = () => {

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
      // document.title = "TextUtils - Dark mode"
      
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
      // document.title = "TextUtils - Light mode"

      

    }

  }


  return (
    <>
    <Navebar title='TextUtils' aboutText='About TextUtils'  mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm heading='Try TextUtils - Word Counter, Character Counter, Remove extra spaces' showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>
     <Outlet/> {/*ya asay kam karay ga kay hamara header aur footer same rahay aur jo change karna hay aus may outlet day do  */}
    </>
  )
}

export default Layout
