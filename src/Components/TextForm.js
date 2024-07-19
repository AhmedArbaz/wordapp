import React from 'react'

import { useState } from 'react'


const TextForm = (props) => {
    
    const handleUpClick =()=>{
       
        let newText = text.toUpperCase()
        setText(newText) //ya text ki state change kar day ga
        props.showAlert('Converted to UpperCase','success')
    }

    const handlelow =()=>{
        
        let newText = text.toLowerCase()
        setText(newText) //ya text ki state change kar day ga
        props.showAlert('Converted to Lower Case','success')
    }

    const handleCopyText = ()=>{
        
        navigator.clipboard.writeText(text)
        document.getSelection().removeAllRanges()
        props.showAlert('Copied to Clipboard','success')
        
    
      }
      const handleRemoveSpaces = () =>{
          let newText = text.split(/[ ]+/);
          //ya jo /[ ]+/ lagaya hay ais ka matlab hay ak ya ak say zada spaces hon to aus ko khatam kar do phir join kar raha hay only one by one spaces say
          setText(newText.join(" "))
          props.showAlert('Removed Extra Spaces','success')
          
      
        }

    const handletoClearText = ()=>{
        let newText = " "
        setText(newText)
        props.showAlert('Text Cleared','success')
    
      }



    const handleOnChange =(event)=>{
        console.log("Onchange");
        setText(event.target.value)
    }


    const [text,setText]  = useState('')
  return (
   <>
   <div className="container"  style={{color:props.mode==='dark'?'white':'#05305b'}}>

  <h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3 my-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#05305b':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>

<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelow}>Convert to LowerCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopyText}>CopyText</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleRemoveSpaces}>Remove Extra Spaces</button>

<button disabled= {text.length===0} className='btn btn-primary mx-2' onClick={handletoClearText}>ClearText</button>


   </div>

   <div className="container my-2"  style={{color:props.mode==='dark'?'white':'#05305b'}}>
    <h1>Your Text Summary</h1>
    {/* ya ab ham nay split kia hay regural expression say /\s+/ ka matlab hay kay any space including new lines */}
    <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
    {/* <p>{0.008 * text.split(" ").length} Minutes read</p> */}
    <p>{text=== ""?0:0.008*text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes</p>

          
      {/* Sentences Count by me */}
      <h3>Sentences Count</h3>
      {/* space dalnay say word count ho raha tha aus ko khatam karnay kay liay ham nay filter ko use kia jo kay jab tak word nahi ay ga count nahi karay ga */}
      <p>{text.split(".").length-1 + text.split("?").length-1 + text.split("!").length-1 + text.split(";").length-1 + text.split(":").length-1} Sentences</p>

    <h2>Preview</h2>
    <div className="container " style={{color:props.mode==='dark'?'#808080':'black'}}>


    <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
   </div>
   </>
  )
}

export default TextForm
