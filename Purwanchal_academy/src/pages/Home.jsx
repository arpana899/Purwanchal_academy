import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from '../components/Landing/Carousel';
import FeaturesSection from '../components/Landing/FeaturesSection';
import WhyPurwanchal from '../components/Landing/WhyPurwanchal';
import StatSection from '../components/Landing/StatSection';
import ExploreCarousel from '../components/Landing/GalleryCategoey';
import { MissionVision } from '../components/Landing/Mission';
import StudentTestimonials from '../components/Landing/StudentsTestimonials';
import OurTeam from '../components/AboutUs/OurTeam';
import Modal from '../components/Landing/Modal';

const Home = () => {
  const [modal, setModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && !sessionStorage.getItem('modalShown')) {
      setModal(true);
      sessionStorage.setItem('modalShown', 'true');
    }
  }, [location.pathname]);

  return (
    <div className="" >
      {modal ? <Modal setModal={setModal} /> : null}
      <Carousel />
      <FeaturesSection />
      <WhyPurwanchal />
      <StatSection />
     <ExploreCarousel /> 
      <MissionVision />
      <StudentTestimonials />
      <OurTeam />
    </div>
  );
};

export default Home;
