import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import Contact from "./components/contact.jsx";

function App() {
   

  return <div className='App'>
  <Router>
     <div>
       
       
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
         
       </Routes>

     </div>
   </Router>
</div>
}

export default App
