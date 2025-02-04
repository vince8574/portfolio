import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Certifications from "./components/certifications";


function App() {
  return (
    <Router basename="/portfolio">
  <div className="bg-complex-gradient min-h-screen flex flex-col">
    <Header />
    <div className="px-4 md:px-16 lg:px-32 xl:px-64 flex-grow mb-16" id="root">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="certifications" element={<Certifications />} />
      </Routes>
    </div>
    <Footer />
  </div>
</Router>
  );
}

export default App;
