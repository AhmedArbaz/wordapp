import PropTypes from 'prop-types'





const Navebar = (props) => {
  return (
   <>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
        
      </ul>

      {/* SOLVING EXERSICE 2 */}
      
      {/* <div className="bg-primary rounded mx-2"  onClick={()=>{props.toggleMode("primary")}} style={{height:"30px",width:"30px"}}></div> */}
        
      {/* <form className="d-flex"> */}
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button> */}
      {/* </form> */}
        <div className="form-check form-switch">
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>

    </div>
  </div>
  
</nav>

   </>
  )
}

// props ki types kay liay ya props types use kartay hain 
Navebar.propTypes = {
    title: PropTypes.string,
    // ham prototypes ko is required bhi kar saktay hain jis ki vaja say ager nahi dali value to error ay ga see below
    aboutText: PropTypes.string.isRequired
}

// default props say ham default values dal saktay hain ager vaha title may na dalin to ya a jain 
Navebar.defaultProps = {
    title: "TextUtilsDefault",
    aboutText: 'AboutTextUtils Default'

}
export default Navebar






// // Using ES6 modules
// import { BrowserRouter, Route, Link } from "react-router-dom";

// // Define your routes
// const Home = () => <div>Home Page</div>;
// const About = () => <div>About Page</div>;

// // Set up your routes
// const App = () => (
//   <BrowserRouter>
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//       </ul>
//     </nav>
//     <Route path="/" exact component={Home} />
//     <Route path="/about" component={About} />
//   </BrowserRouter>
// );

// // Render your app
// ReactDOM.render(<App />, document.getElementById("root"));



// another format of root 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// // Import your components/pages
// import Layout from './pages/Layout';
// import Home from './pages/Home';
// import Blogs from './pages/Blogs';
// import Contact from './pages/Contact';
// import NoPage from './pages/NoPage';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
