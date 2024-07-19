import React from 'react'
// import { useState } from 'react'


const About = (props) => {

    // const [myStyle,setMyStyle] = useState( {
    //     color:'black',
    //     backgroundColor:'white'
    //     })

    // const [buttonText, setbuttonText] = useState("Enable Dark Mode");
        
    //  const toggleStyle = () =>{
    //     if(myStyle.color ==='white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'

    //         })
    //         setbuttonText("Enable Dark Mode")
    //     }

    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'Black',
    //             border:'1px solid black'
    //         })
    //         setbuttonText("Enable Light mode")
    //     }
    //     }

    let myStyle = {
      color: props.mode ==='dark'?'white':'#042743',
      backgroundColor: props.mode === 'dark'?'rgb(0 78 115)':'white'
    }

  return (
   <div className="container my-3" style={{ color: props.mode ==='dark'?'white':'#042743'}}>
    <h1 className='my-3'>About Us</h1>
   <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong> Analyze Your text </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, charachter count or
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Free To use </strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word. character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
        <strong> Browser Compatible </strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, essays, etc.
      </div>
    </div>
  </div>
</div>
{/* <button className="btn btn-primary my-2" onClick={toggleStyle}>{buttonText}</button> */}
   </div>
   
  )
}

export default About
