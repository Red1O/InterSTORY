import React, { useState, useEffect, useRef } from 'react';
import CloudBG from '../components/CloudBG';
import sunImage from '../assets/sun.jpg';

const About = () => {
  // Use state to handle image loading errors
  const [imageError, setImageError] = useState(false);

  // Handle image loading error
  const handleImageError = () => {
    console.error("Nu s-a putut încărca imaginea de profil");
    setImageError(true);
  };
  
  // Refs for the sections to animate
  const creatorRef = useRef(null);
  const acknowledgementsRef = useRef(null);
  const technologiesRef = useRef(null);
  const techItemRefs = useRef([]);

  // Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe main sections
    if (creatorRef.current) observer.observe(creatorRef.current);
    if (acknowledgementsRef.current) observer.observe(acknowledgementsRef.current);
    if (technologiesRef.current) observer.observe(technologiesRef.current);

    // Observe technology items
    techItemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (creatorRef.current) observer.unobserve(creatorRef.current);
      if (acknowledgementsRef.current) observer.unobserve(acknowledgementsRef.current);
      if (technologiesRef.current) observer.unobserve(technologiesRef.current);
      techItemRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Add tech item refs
  const addTechItemRef = (el) => {
    if (el && !techItemRefs.current.includes(el)) {
      techItemRefs.current.push(el);
    }
  };

  return (
    <div className="flex flex-col relative" style={{ minHeight: 'calc(100vh - 80px)', backgroundColor: 'rgb(233, 226, 207)' }}>
      <style>
        {`
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
          }
          .tech-item {
            transition-delay: calc(var(--index) * 100ms);
          }
        `}
      </style>
      <CloudBG />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif mb-8 text-center" style={{ color: 'rgb(71, 88, 76)' }}>
            Despre InterSTORY
          </h1>
          
          {/* Creator Section */}
          <div 
            ref={creatorRef}
            className="mb-16 p-6 rounded-lg shadow-lg fade-in" 
            style={{ backgroundColor: 'rgb(200, 193, 174)', border: '2px solid rgb(71, 88, 76)' }}
          >
            <h2 className="text-2xl font-serif mb-6 pb-2 border-b-2" style={{ color: 'rgb(71, 88, 76)', borderColor: 'rgb(71, 88, 76)' }}>
              Creatorul
            </h2>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4" style={{ borderColor: 'rgb(71, 88, 76)' }}>
                  {/* Use conditional rendering for image with fallback */}
                  {imageError ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-lg font-serif" style={{ color: 'rgb(71, 88, 76)' }}>R</span>
                    </div>
                  ) : (
                    <img 
                      src={sunImage}
                      alt="Creator" 
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  )}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-xl font-serif mb-4" style={{ color: 'rgb(71, 88, 76)' }}>Darius</h3>
                <p className="text-lg mb-4" style={{ color: 'rgb(71, 88, 76)' }}>
                  InterSTORY a fost creat pentru a face istoria mai accesibilă și mai captivantă prin narațiune interactivă.
                  Cu experiență în tehnologie și pasiune pentru istorie, am dezvoltat această platformă pentru a construi o punte
                  între metodele tradiționale de învățare și experiențele interactive moderne.
                </p>
                <p className="text-lg" style={{ color: 'rgb(71, 88, 76)' }}>
                  Scopul meu este de a crea experiențe istorice captivante care educă în timp ce distrează, făcând
                  lecțiile trecutului mai relevante și mai accesibile pentru publicul de astăzi.
                </p>
                
                {/* GitHub link */}
                <div className="mt-6 flex space-x-4">
                  <a href="https://github.com/Red1O" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline" style={{ color: 'rgb(71, 88, 76)' }}>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Acknowledgements Section */}
          <div 
            ref={acknowledgementsRef}
            className="mb-16 p-6 rounded-lg shadow-lg fade-in" 
            style={{ backgroundColor: 'rgb(200, 193, 174)', border: '2px solid rgb(71, 88, 76)' }}
          >
            <h2 className="text-2xl font-serif mb-6 pb-2 border-b-2" style={{ color: 'rgb(71, 88, 76)', borderColor: 'rgb(71, 88, 76)' }}>
              Mulțumiri
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Asistență în Cercetare</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-2">Doamna Madaras Monica</li>
                </ul>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-2">Maresanu Mina</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Ajutor Tehnic și Design</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-2">Suciu Alex</li>
                  <li className="mb-2">Chiorean Casian</li>
                  <li className="mb-2">Domnul Ion Laslo</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Mulțumiri Speciale</h3>
                <p className="text-lg" style={{ color: 'rgb(71, 88, 76)' }}>
                  Tuturor prietenilor și familiei care au oferit încurajare, feedback și sprijin pe parcursul dezvoltării acestui proiect.
                </p>
              </div>
            </div>
          </div>
          
          {/* Technologies Section */}
          <div 
            ref={technologiesRef}
            className="p-6 rounded-lg shadow-lg fade-in" 
            style={{ backgroundColor: 'rgb(200, 193, 174)', border: '2px solid rgb(71, 88, 76)' }}
          >
            <h2 className="text-2xl font-serif mb-6 pb-2 border-b-2" style={{ color: 'rgb(71, 88, 76)', borderColor: 'rgb(71, 88, 76)' }}>
              Tehnologii Utilizate
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                ref={(el) => addTechItemRef(el)} 
                className="p-4 bg-opacity-70 rounded-lg fade-in tech-item" 
                style={{ backgroundColor: 'rgba(233, 226, 207, 0.7)', '--index': 0 }}
              >
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Frontend</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-1">React.js</li>
                  <li className="mb-1">HTML5</li>
                  <li className="mb-1">CSS3</li>
                  <li className="mb-1">JavaScript (ES6+)</li>
                  <li className="mb-1">Tailwind CSS</li>
                </ul>
              </div>
              
              <div 
                ref={(el) => addTechItemRef(el)} 
                className="p-4 bg-opacity-70 rounded-lg fade-in tech-item" 
                style={{ backgroundColor: 'rgba(233, 226, 207, 0.7)', '--index': 1 }}
              >
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Backend</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-1">Node.js</li>
                </ul>
              </div>
              
              <div 
                ref={(el) => addTechItemRef(el)} 
                className="p-4 bg-opacity-70 rounded-lg fade-in tech-item" 
                style={{ backgroundColor: 'rgba(233, 226, 207, 0.7)', '--index': 2 }}
              >
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Instrumente de Dezvoltare</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-1">Git & GitHub</li>
                  <li className="mb-1">VS Code</li>
                  <li className="mb-1">npm</li>
                </ul>
              </div>
              
              <div 
                ref={(el) => addTechItemRef(el)} 
                className="p-4 bg-opacity-70 rounded-lg fade-in tech-item" 
                style={{ backgroundColor: 'rgba(233, 226, 207, 0.7)', '--index': 3 }}
              >
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Design</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-1">Figma</li>
                  <li className="mb-1">Photopea</li>
                </ul>
              </div>
              
              <div 
                ref={(el) => addTechItemRef(el)} 
                className="p-4 bg-opacity-70 rounded-lg fade-in tech-item" 
                style={{ backgroundColor: 'rgba(233, 226, 207, 0.7)', '--index': 4 }}
              >
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Deployment</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-1">Vercel</li>
                </ul>
              </div>
              
              <div 
                ref={(el) => addTechItemRef(el)} 
                className="p-4 bg-opacity-70 rounded-lg fade-in tech-item" 
                style={{ backgroundColor: 'rgba(233, 226, 207, 0.7)', '--index': 5 }}
              >
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Biblioteci</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-1">React Router</li>
                  <li className="mb-1">NextUI</li>
                  <li className="mb-1">FramerMotion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;