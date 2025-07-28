import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Global/Header';
import Navbar from './components/Global/Navbar';
import Home from './pages/Home';
import AboutPurbanchal from './pages/AboutPurbanchal';
import Programs from './pages/Programs';
import ScrollToTop from './components/Global/ScrollToTop';

import EventDetailPage from './pages/EventDetailPage';

import Events from './pages//Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';




function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-purbanchal" element={<AboutPurbanchal />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:slug" element={<EventDetailPage />} />

                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>

    );
}


export default App;
