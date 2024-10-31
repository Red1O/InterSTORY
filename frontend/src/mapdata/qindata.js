/*const qindata = {
  startingRegion: 'Qin',
  regions: {
    Qin: {
      coordinates: 'M250,120 L270,160 L230,190 L200,180 L200,150 Z', // Updated path for Qin
      color: '#FFD700', // Gold for Qin
      center: { x: 220, y: 160 },
      adjacent: ['Wei', 'Han'],
    },
    Wei: {
      coordinates: 'M250,120 L290,100 L330,130 L290,150 L250,140 Z', // Updated path for Wei
      color: '#808080', // Grey for Wei
      center: { x: 270, y: 130 },
      adjacent: ['Qin', 'Qi', 'Zhao'],
    },
    Han: {
      coordinates: 'M170,180 L210,180 L230,220 L160,220 L150,200 Z', // Updated path for Han
      color: '#795548', // Brown for Han
      center: { x: 190, y: 200 },
      adjacent: ['Qin', 'Chu'],
    },
    Chu: {
      coordinates: 'M130,210 L170,230 L170,290 L110,290 Z', // Updated path for Chu
      color: '#FF9800', // Orange for Chu
      center: { x: 150, y: 240 },
      adjacent: ['Han'],
    },
    Qi: {
      coordinates: 'M330,80 L370,60 L410,80 L370,100 Z', // Updated path for Qi
      color: '#FFC107', // Amber for Qi
      center: { x: 370, y: 80 },
      adjacent: ['Wei', 'Zhao'],
    },
    Zhao: {
      coordinates: 'M250,30 L290,30 L290,100 L250,80 Z', // Updated path for Zhao
      color: '#03A9F4', // Blue for Zhao
      center: { x: 270, y: 60 },
      adjacent: ['Wei', 'Qin'],
    }
  },
};

export default qindata;
*/
const qindata = {
  startingRegion: 'Qin',
  regions: {
    Qin: { coordinates: '200,150 250,120 270,160 230,190 200,180', color: '#FFD700', center: { x: 220, y: 160 }, adjacent: ['Wei', 'Han'] },
    Wei: { coordinates: '250,120 290,100 330,130 290,150 250,140', color: '#808080', center: { x: 270, y: 130 }, adjacent: ['Qin', 'Qi', 'Zhao'] },
    Han: { coordinates: '170,180 210,180 230,220 160,220 150,200', color: '#795548', center: { x: 190, y: 200 }, adjacent: ['Qin', 'Chu'] },
    Chu: { coordinates: '130,210 170,230 170,290 110,290', color: '#FF9800', center: { x: 150, y: 240 }, adjacent: ['Han'] },
    Qi: { coordinates: '330,80 370,60 410,80 370,100', color: '#FFC107', center: { x: 370, y: 80 }, adjacent: ['Wei', 'Zhao'] },
    Zhao: { coordinates: '250,30 290,30 290,100 250,80', color: '#03A9F4', center: { x: 270, y: 60 }, adjacent: ['Wei', 'Qin'] }
  },
};

export default qindata;
