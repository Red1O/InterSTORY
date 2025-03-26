import React from 'react';
import { Link } from 'react-router-dom';
import d1 from '../assets/d1.png';
import CloudBG from '../components/CloudBG';

const Home = () => {
  
  const buttonStyle = `
    px-5 py-3
    bg-[rgb(200,193,174)] text-[rgb(71,88,76)] 
    border-3 border-[rgb(71,88,76)] rounded-lg
    transition-all duration-300 ease-in-out
    hover:bg-[rgb(71,88,76)] hover:text-[rgb(200,193,174)]
    hover:-translate-y-1 hover:shadow-xl
    text-lg font-medium
  `;

  return (
    <section className="hero flex flex-col items-center justify-center relative overflow-hidden" style={{ height: 'calc(100vh - 80px)', backgroundColor: 'rgb(233, 226, 207)' }}>
     
      <CloudBG />
      <div className="absolute right-0 top-0 h-full flex items-center justify-center" style={{ zIndex: 10 }}>
        <img 
          src={d1} 
          alt="Dinastia Qin" 
          className="h-3/4 object-contain" 
          style={{ 
            filter: 'brightness(0) saturate(100%) invert(31%) sepia(12%) saturate(935%) hue-rotate(86deg) brightness(95%) contrast(86%)'
          }}//mersi chatgpt... culoarea era initial diferita la img
        />
      </div>
      
      <div className="hero-containerQin text-center mb-12 relative z-10">
        <div className="welcome">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'rgb(71, 88, 76)' }}>Welcome to InterSTORY</h1>
          <p className="text-xl mb-8 leading-relaxed text-left" style={{ color: 'rgb(71, 88, 76)' }}>
            Descoperiți istoria fascinantă a creatiei Dinastiei Qin, prima dinastie imperială a Chinei. Aflați despre ascensiunea lui Qin Shi Huang la putere, realizările sale semnificative și eventuala prăbușirea a sa. Această prezentare vă va oferi o privire asupra evenimentelor și personajelor cheie care au modelat această perioadă crucială din istoria Chinei.
          </p>
          <Link to="/prez">
            <button className={buttonStyle}>
              <span className="mr-2">Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className="inline-block ml-1">
                <path fillRule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
              </svg>
            </button>
          </Link> 
        </div>
      </div>
      <div 
        className="absolute left-6 bottom-6 text-[rgb(71,88,76)] opacity-90 font-serif"
        style={{ zIndex: 20 }}
      >
        <p className="text-base font-medium">Coordonator: </p>
        <p className="text-base font-medium">Madaras Monica</p>
        <p className="text-base font-medium"> Laslo Ion</p>
      </div>
    </section>
  );
}

export default Home;