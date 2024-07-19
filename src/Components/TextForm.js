import React from 'react'

import { useState } from 'react'


const TextForm = (props) => {
    
    const handleUpClick =()=>{
       
        let newText = text.toUpperCase()
        setText(newText) //ya text ki state change kar day ga
    }

    const handlelow =()=>{
        
        let newText = text.toLowerCase()
        setText(newText) //ya text ki state change kar day ga
    }

    const handleCopyText = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        
    
      }

    const handletoClearText = ()=>{
        let newText = " "
        setText(newText)
    
      }



    const handleOnChange =(event)=>{
        console.log("Onchange");
        setText(event.target.value)
    }


    const [text,setText]  = useState('')
  return (
   <>
   <div className="container">

  <h1>{props.heading}</h1>
<div className="mb-3 my-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>

<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upperCase</button>
<button className="btn btn-primary mx-1" onClick={handlelow}>Convert to upperCase</button>
<button className='btn btn-primary mx-2' onClick={handleCopyText}>CopyText</button>

<button className='btn btn-primary mx-2' onClick={handletoClearText}>ClearText</button>


   </div>

   <div className="container my-2">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length-1} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>

          
      {/* Sentences Count by me */}
      <h3>Sentences Count</h3>
      <p>{text.split(".").length-1 + text.split("?").length-1 + text.split("!").length-1 + text.split(";").length-1 + text.split(":").length-1} Sentences</p>

    <h2>Preview</h2>
    <div className="container text-black-50">


    <p>{text.length>0?text:"Enter something into text box above to preview it here"}</p>
    </div>
   </div>
   </>
  )
}

export default TextForm
