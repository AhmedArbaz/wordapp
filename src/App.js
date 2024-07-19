// import logo from './logo.svg';
import './App.css';
import Navebar from './Components/Navebar';
import TextForm from './Components/TextForm';
// import About from './Components/About';




function App() {
  return (
    <div className="App">
      <>
      <Navebar title='TextUtils2' aboutText='About TextUtils'/>
      
      <div className='container'>
      <TextForm heading='Enter the text to analyze below'/>
      {/* <About/> */}
      </div>


     
      </>
    </div>

  );
}

export default App;
