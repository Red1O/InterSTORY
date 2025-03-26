import React, { useState, useEffect } from 'react';
import c1l from '../assets/c1l.png';
import c1r from '../assets/c1r.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';

const CloudBG = () => {
  //  rgb(71, 88, 76)
  const greenFilter = 'brightness(0) saturate(100%) invert(31%) sepia(12%) saturate(935%) hue-rotate(86deg) brightness(95%) contrast(86%)';
  
  const cloudSizes = {
    c1l: { width: '13rem' }, 
    c1r: { width: '16rem' },
    c2: { width: '9rem' },
    c3: { width: '8rem' }
  };

  const FOLLOWER_DISTANCE = 500;
  
  const [followersActive, setFollowersActive] = useState(false);
  const [isRightCloudActive, setIsRightCloudActive] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const activationThreshold = 0.4;

  const [activeLeftSets, setActiveLeftSets] = useState([0]);
  const [activeRightSets, setActiveRightSets] = useState([0]);

  const [leftToRightCloudSets, setLeftToRightCloudSets] = useState([
    { mainPos: -200, followerPos: -200 - FOLLOWER_DISTANCE, opacity: 1, index: 0 },
    { mainPos: -screenWidth * 0.75, followerPos: -screenWidth * 0.75 - FOLLOWER_DISTANCE, opacity: 1, index: 1 },
    { mainPos: -screenWidth * 1.5, followerPos: -screenWidth * 1.5 - FOLLOWER_DISTANCE, opacity: 1, index: 2 }
  ]);

  const [rightToLeftCloudSets, setRightToLeftCloudSets] = useState([
    { mainPos: window.innerWidth + 200, followerPos: window.innerWidth + 200 + FOLLOWER_DISTANCE, opacity: 1, index: 0 },
    { mainPos: window.innerWidth + screenWidth * 0.75, followerPos: window.innerWidth + screenWidth * 0.75 + FOLLOWER_DISTANCE, opacity: 1, index: 1 },
    { mainPos: window.innerWidth + screenWidth * 1.5, followerPos: window.innerWidth + screenWidth * 1.5 + FOLLOWER_DISTANCE, opacity: 1, index: 2 }
  ]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    setTimeout(() => {
      setIsRightCloudActive(true);
    }, 200);
    
    setTimeout(() => {
      setFollowersActive(true);
    }, 3000);
    
    const leftToRightSpeed = 1.2;
    const rightToLeftSpeed = 1.1;

    const leftToRightInterval = setInterval(() => {
      setLeftToRightCloudSets(prevSets => {
        const updatedSets = prevSets.map(set => {
          return {
            ...set,
            mainPos: set.mainPos + leftToRightSpeed,
            followerPos: set.followerPos + leftToRightSpeed,
          };
        });
        
        updatedSets.forEach(set => {
          if (set.mainPos >= screenWidth * activationThreshold && set.mainPos <= screenWidth * (activationThreshold + 0.02)) {
            const nextSetIndex = (set.index + 1) % 3;
            
            if (!activeLeftSets.includes(nextSetIndex)) {
              setActiveLeftSets(prev => [...prev, nextSetIndex]);
            }
          }
        });
        
        return updatedSets.map(set => {
          if (set.mainPos > screenWidth + 300 && set.followerPos > screenWidth + 300) {
            const positions = updatedSets.map(s => s.mainPos);
            const minPos = Math.min(...positions);
            
            setActiveLeftSets(prev => prev.filter(idx => idx !== set.index));
            
            return {
              ...set,
              mainPos: minPos - screenWidth * 0.75,
              followerPos: minPos - screenWidth * 0.75 - FOLLOWER_DISTANCE
            };
          }
          return set;
        });
      });
    }, 30);
    
    const rightToLeftInterval = setInterval(() => {
      if (!isRightCloudActive) return;
      
      setRightToLeftCloudSets(prevSets => {
        const updatedSets = prevSets.map(set => {
          return {
            ...set,
            mainPos: set.mainPos - rightToLeftSpeed,
            followerPos: set.followerPos - rightToLeftSpeed,
          };
        });
        
        updatedSets.forEach(set => {
          if (set.mainPos <= screenWidth * (1 - activationThreshold) && 
              set.mainPos >= screenWidth * (1 - activationThreshold - 0.02)) {
            const nextSetIndex = (set.index + 1) % 3;
            
            if (!activeRightSets.includes(nextSetIndex)) {
              setActiveRightSets(prev => [...prev, nextSetIndex]);
            }
          }
        });
        
        return updatedSets.map(set => {
          if (set.mainPos < -300 && set.followerPos < -300) {
            const positions = updatedSets.map(s => s.mainPos);
            const maxPos = Math.max(...positions);
            
            setActiveRightSets(prev => prev.filter(idx => idx !== set.index));
            
            return {
              ...set,
              mainPos: maxPos + screenWidth * 0.75,
              followerPos: maxPos + screenWidth * 0.75 + FOLLOWER_DISTANCE
            };
          }
          return set;
        });
      });
    }, 30);
    
    return () => {
      clearInterval(leftToRightInterval);
      clearInterval(rightToLeftInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, [isRightCloudActive, screenWidth, activeLeftSets, activeRightSets, activationThreshold]);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
      {leftToRightCloudSets.map((set, index) => (
        <div key={`cloud1-${index}`} 
          className="absolute"
          style={{ 
            left: `${set.mainPos}px`, 
            top: '10px',
            width: cloudSizes.c1l.width,
            maxWidth: cloudSizes.c1l.width,
            opacity: activeLeftSets.includes(set.index) ? 0.8 : 0,
            transition: 'opacity 0.5s ease'
          }}
        >
          <img 
            src={c1l}
            alt={`Cloud 1-${index}`} 
            className="w-full h-auto object-contain"
            style={{ filter: greenFilter, opacity: 0.7 }}
          />
        </div>
      ))}
      
      {leftToRightCloudSets.map((set, index) => (
        <div key={`cloud3-${index}`} 
          className="absolute"
          style={{ 
            left: `${set.followerPos}px`, 
            top: '35px',
            width: cloudSizes.c3.width,
            maxWidth: cloudSizes.c3.width,
            opacity: followersActive && activeLeftSets.includes(set.index) ? 0.8 : 0,
            transition: 'opacity 0.5s ease'
          }}
        >
          <img 
            src={c3} 
            alt={`Cloud 3-${index}`} 
            className="w-full h-auto object-contain"
            style={{ filter: greenFilter, opacity: 0.7 }}
          />
        </div>
      ))}
      
      {rightToLeftCloudSets.map((set, index) => (
        <div key={`cloud2-${index}`} 
          className="absolute"
          style={{ 
            left: `${set.mainPos}px`, 
            top: '50px',
            width: cloudSizes.c1r.width,
            maxWidth: cloudSizes.c1r.width,
            opacity: activeRightSets.includes(set.index) ? 1 : 0,
            transition: 'opacity 0.5s ease'
          }}
        >
          <img 
            src={c1r} 
            alt={`Cloud 2-${index}`} 
            className="w-full h-auto object-contain"
            style={{ 
              filter: greenFilter,
              transform: 'scaleX(-1)',
              opacity: 0.7
            }}
          />
        </div>
      ))}
      
      {rightToLeftCloudSets.map((set, index) => (
        <div key={`cloud4-${index}`} 
          className="absolute"
          style={{ 
            left: `${set.followerPos}px`, 
            top: '70px',
            width: cloudSizes.c2.width,
            maxWidth: cloudSizes.c2.width,
            opacity: followersActive && isRightCloudActive && activeRightSets.includes(set.index) ? 1 : 0,
            transition: 'opacity 0.5s ease'
          }}
        >
          <img 
            src={c2} 
            alt={`Cloud 4-${index}`} 
            className="w-full h-auto object-contain"
            style={{ 
              filter: greenFilter,
              transform: 'scaleX(-1)',
              opacity: 0.7
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CloudBG;