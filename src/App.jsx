import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Header from './components/layouts/header'
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Project from './components/pages/ProjectSingle';
import Footer from './components/layouts/footer';
import Modal from './components/pages/Modal';
import ScrollToTop from "./components/scrollToTop/scrollToTop";


function App() {
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenModal");
    
    if (!hasSeenModal) {
      setOpenModal(true);
      sessionStorage.setItem("hasSeenModal", true);
    }
  }, []);

  const handleClose = () => {
    setOpenModal(false)
  }

  return (
    <Router>
      <Modal isOpen={openModal} handleClose={handleClose} />
      <Header />
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  )
}

export default App
