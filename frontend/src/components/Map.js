
import React, { useState } from 'react';
import { ReactComponent as SvgMap } from './qinmap.svg';

const Map = () => {
  const [conqueredRegions, setConqueredRegions] = useState({
    Qin: true,
    Wei: false,
    Han: false,
    Chu: false,
    Qi: false,
    Zhao: false,
  });

  const handleRegionClick = (regionId) => {
    if (regionId !== 'Qin' && !conqueredRegions[regionId]) {
      setConqueredRegions((prev) => ({
        ...prev,
        [regionId]: true, 
      }));
    }
  };

  const getRegionStyles = (regionId) => {
    return {
      fill: conqueredRegions[regionId] 
        ? '#FFD700' 
        : (regionId === 'Qin' ? '#FFD700' : '#808080'), 
      stroke: conqueredRegions[regionId] ? 'none' : '#000', 
      strokeWidth: '2',
      cursor: 'pointer', 
    };
  };

  return (
    <div>
      
      <SvgMap 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 934 848" 
        style={{ width: '80%', height: 'auto' }} 
      >
        {}
        <path
          id="Qin"
          d="M200,150 L250,120 L270,160 L230,190 Z"
          style={getRegionStyles('Qin')}
          onClick={() => handleRegionClick('Qin')}
        />
        <path
          id="Wei"
          d="M250,120 L290,100 L330,130 L290,150 Z"
          style={getRegionStyles('Wei')}
          onClick={() => handleRegionClick('Wei')}
        />
        <path
          id="Han"
          d="M170,180 L210,180 L230,220 L160,220 Z"
          style={getRegionStyles('Han')}
          onClick={() => handleRegionClick('Han')}
        />
        <path
          id="Chu"
          d="M130,210 L170,230 L170,290 L110,290 Z"
          style={getRegionStyles('Chu')}
          onClick={() => handleRegionClick('Chu')}
        />
        <path
          id="Qi"
          d="M330,80 L370,60 L410,80 L370,100 Z"
          style={getRegionStyles('Qi')}
          onClick={() => handleRegionClick('Qi')}
        />
        <path
          id="Zhao"
          d="M250,30 L290,30 L290,100 L250,80 Z"
          style={getRegionStyles('Zhao')}
          onClick={() => handleRegionClick('Zhao')}
        />
      </SvgMap>
    </div>
  );
};

export default Map;
