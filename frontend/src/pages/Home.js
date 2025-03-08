import React from 'react';
import { Link } from 'react-router-dom';
import d1 from '../assets/d1.png';
import CloudBG from '../components/CloudBG';

const Home = () => {
  return (
    <section className="hero flex flex-col items-center justify-center relative overflow-hidden" style={{ height: 'calc(100vh - 80px)', backgroundColor: 'rgb(233, 226, 207)' }}>
      {/* Cloud background component */}
      <CloudBG />
      
      {/* Main content */}
      <div className="absolute right-0 top-0 h-full flex items-center justify-center" style={{ zIndex: 10 }}>
        <img src={d1} alt="Qin Dynasty" className="h-3/4 object-contain" />
      </div>
      
      <div className="hero-containerQin text-center mb-12 relative z-10">
        <div className="welcome">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'rgb(71, 88, 76)' }}>Welcome to InterSTORY</h1>
          <p className="text-xl mb-8 leading-relaxed text-left" style={{ color: 'rgb(71, 88, 76)' }}>
            Discover the fascinating history of the Qin Dynasty, the first imperial dynasty of China. Learn about its rise to power, significant achievements, and eventual downfall. This preview will give you a glimpse into the key events and figures that shaped this pivotal period in Chinese history.
          </p>
          <Link to="/prez">
            <button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded-full shadow-lg animate-pulse" style={{ backgroundColor: 'rgb(71, 88, 76)' }}>
              Explore Dinastia Qin
            </button>
          </Link> 
        </div>
      </div>
    </section>
  );
}

export default Home;