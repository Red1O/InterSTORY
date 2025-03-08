import React, { useState } from 'react';
import CloudBG from '../components/CloudBG';
import sunImage from '../assets/sun.jpg';

const About = () => {
  // Use state to handle image loading errors
  const [imageError, setImageError] = useState(false);

  // Handle image loading error
  const handleImageError = () => {
    console.error("Failed to load profile image");
    setImageError(true);
  };

  return (
    <div className="flex flex-col relative" style={{ minHeight: 'calc(100vh - 80px)', backgroundColor: 'rgb(233, 226, 207)' }}>
      <CloudBG />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif mb-8 text-center" style={{ color: 'rgb(71, 88, 76)' }}>
            About InterSTORY
          </h1>
          
          {/* Creator Section */}
          <div className="mb-16 p-6 rounded-lg shadow-lg" style={{ backgroundColor: 'rgb(200, 193, 174)', border: '2px solid rgb(71, 88, 76)' }}>
            <h2 className="text-2xl font-serif mb-6 pb-2 border-b-2" style={{ color: 'rgb(71, 88, 76)', borderColor: 'rgb(71, 88, 76)' }}>
              The Creator
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
                  InterSTORY was created to make history more accessible and engaging through interactive storytelling.
                  With a background in technology and a passion for history, I developed this platform to bridge the 
                  gap between traditional learning and modern interactive experiences.
                </p>
                <p className="text-lg" style={{ color: 'rgb(71, 88, 76)' }}>
                  My goal is to create immersive historical experiences that educate while entertaining, making the 
                  lessons of the past more relevant and accessible to today's audience.
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
          
          {/* Contributors Section */}
          <div className="mb-16 p-6 rounded-lg shadow-lg" style={{ backgroundColor: 'rgb(200, 193, 174)', border: '2px solid rgb(71, 88, 76)' }}>
            <h2 className="text-2xl font-serif mb-6 pb-2 border-b-2" style={{ color: 'rgb(71, 88, 76)', borderColor: 'rgb(71, 88, 76)' }}>
              Acknowledgements
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Research Assistance</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-2">Doamna Monica Madaras</li>
                </ul>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-2">Maresanu Mina</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Design & Technical Help</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-2">Suciu Alex</li>
                  <li className="mb-2">Chiorean Casian</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Special Thanks</h3>
                <p className="text-lg" style={{ color: 'rgb(71, 88, 76)' }}>
                  To all the friends and family who provided encouragement, feedback, and support throughout this project's development.
                </p>
              </div>
            </div>
          </div>
          
          {/* Technologies Section */}
          <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: 'rgb(200, 193, 174)', border: '2px solid rgb(71, 88, 76)' }}>
            <h2 className="text-2xl font-serif mb-6 pb-2 border-b-2" style={{ color: 'rgb(71, 88, 76)', borderColor: 'rgb(71, 88, 76)' }}>
              Technologies Used
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-opacity-70 rounded-lg" style={{ backgroundColor: 'rgba(233, 226, 207, 0.7)' }}>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Frontend</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-1">React.js</li>
                  <li className="mb-1">HTML5</li>
                  <li className="mb-1">CSS3</li>
                  <li className="mb-1">JavaScript (ES6+)</li>
                  <li className="mb-1">Tailwind CSS</li>
                </ul>
              </div>
              
              <div className="p-4 bg-opacity-70 rounded-lg" style={{ backgroundColor: 'rgba(233, 226, 207, 0.7)' }}>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Backend</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-1">Node.js</li>
                </ul>
              </div>
              
              <div className="p-4 bg-opacity-70 rounded-lg" style={{ backgroundColor: 'rgba(233, 226, 207, 0.7)' }}>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Development Tools</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-1">Git & GitHub</li>
                  <li className="mb-1">VS Code</li>
                  <li className="mb-1">npm</li>
                </ul>
              </div>
              
              <div className="p-4 bg-opacity-70 rounded-lg" style={{ backgroundColor: 'rgba(233, 226, 207, 0.7)' }}>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Design</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-1">Figma</li>
                  <li className="mb-1">Photopea</li>
                </ul>
              </div>
              
              <div className="p-4 bg-opacity-70 rounded-lg" style={{ backgroundColor: 'rgba(233, 226, 207, 0.7)' }}>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Deployment</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-1">Vercel</li>
                </ul>
              </div>
              
              <div className="p-4 bg-opacity-70 rounded-lg" style={{ backgroundColor: 'rgba(233, 226, 207, 0.7)' }}>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'rgb(71, 88, 76)' }}>Libraries</h3>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-1">React Router</li>
                </ul>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
                  <li className="mb-1">NextUI</li>
                </ul>
                <ul className="list-disc pl-6" style={{ color: 'rgb(71, 88, 76)' }}>
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