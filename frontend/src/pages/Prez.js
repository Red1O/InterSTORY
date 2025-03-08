import React, { useState } from 'react';
import qin0 from '../assets/qin0.png';
import qin1 from '../assets/qin1.png';
import qin2 from '../assets/qin2.png';
import qin3 from '../assets/qin3.png';
import qin4 from '../assets/qin4.png';
import qin5 from '../assets/qin5.png';
import qin6 from '../assets/qin6.png';
import qinph from '../assets/qinphh.png';
import ref1 from '../assets/qinphh1.png';
import ref2 from '../assets/qinphh2.png';
import ref3 from '../assets/qinphh3.png';
import CloudBG from '../components/CloudBG';

const images = [qin0, qin1, qin2, qin3, qin4, qin5, qin6];
const texts = [
  `**Qin cucerește Han:**
  Bătălia de la Chenggao (230 î.Hr.) a marcat începutul războaielor de unificare ale Qin. Han a fost primul stat care a căzut.
  
  Armata Qin, condusă de generalul Wang Jian, a învins rapid forțele Han, capturând capitala lor și forțându-i să se predea. Forțele Qin au folosit o combinație de asalturi directe și război psihologic pentru a demoraliza trupele Han.
  
  Comandanți cheie de partea Han, precum generalul Zhang Ping, au fost fie uciși, fie capturați în timpul bătăliei. Căderea Han a fost un pas semnificativ către obiectivul Qin de a unifica China.`,

  `**Qin cucerește Zhou:**
  Cucerirea Zhou (228 î.Hr.) a fost relativ pașnică, deoarece Zhou era deja slăbit. Statul Zhou, suferind de conflicte interne și apărări slăbite, a oferit puțină rezistență forțelor Qin.
  
  Armata Qin, sub comanda generalului Wang Ben, a preluat rapid controlul teritoriului Zhou. Regele Zhou, văzând inutilitatea rezistenței, s-a predat fără o bătălie majoră. Acest lucru a permis Qin să-și consolideze puterea în regiune cu pierderi minime de sânge.
  
  Preluarea pașnică a Zhou a demonstrat influența crescândă și priceperea strategică a Qin.`,

  `**Qin cucerește Wei:**
  Bătălia de la Daliang (225 î.Hr.) a văzut forțele Qin breșând apărările capitalei Wei prin devierea râului Galben. Armata Qin, condusă de generalul Wang Jian, a folosit o strategie strălucită pentru a inunda capitala Wei, Daliang, forțând regele Wei să se predea.
  
  Inundațiile au provocat haos în oraș, ducând la prăbușirea apărărilor Wei. Comandanți cheie ai Wei, precum generalul Xin Sheng, nu au reușit să monteze o apărare eficientă și au fost fie uciși, fie capturați.
  
  Căderea Wei a fost o mărturie a strategiilor militare inovatoare ale Qin și a capacității lor de a se adapta la diferite provocări.`,

  `**Qin cucerește Chu:**
  Bătălia de la Julu (223 î.Hr.) a fost o victorie decisivă pentru Qin, ducând la căderea Chu, cel mai mare stat. Armata Qin, comandată de generalul Wang Jian, a întâmpinat o rezistență feroce din partea forțelor Chu conduse de generalul Xiang Yan.
  
  Forțele Qin au folosit o combinație de tactici de încercuire și uzură pentru a epuiza armata Chu. Generalul Xiang Yan a fost ucis în bătălie, ducând la prăbușirea rezistenței Chu și capturarea capitalei lor.
  
  Cucerirea Chu a fost un moment important în eforturile de unificare ale Qin, demonstrând puterea lor militară și priceperea strategică.`,

  `**Qin cucerește Yan:**
  Bătălia de la Yishui (222 î.Hr.) a văzut forțele Qin învingând Yan, în ciuda încercării Yan de a-l asasina pe regele Qin. Armata Qin, condusă de generalul Wang Ben, a învins forțele Yan și a capturat capitala lor.
  
  Încercarea disperată a regelui Yan de a-l asasina pe regele Qin a eșuat, pecetluind soarta Yan. Comandanți cheie de partea Yan, precum generalul Ju Wu, au fost fie uciși, fie capturați în timpul bătăliei.
  
  Căderea Yan a evidențiat reziliența și determinarea Qin de a-și atinge obiectivul de unificare.`,

  `**Qin cucerește Qi:**
  Cucerirea Qi (221 î.Hr.) a fost realizată fără o bătălie, deoarece Qi s-a predat puterii copleșitoare a Qin. Regele Qi, recunoscând inutilitatea rezistenței, a ales să se predea pașnic forțelor Qin, conduse de generalul Wang Jian, evitând astfel vărsarea inutilă de sânge.
  
  Predarea pașnică a permis Qin să integreze resursele și forța de muncă a Qi în imperiul lor fără pierderi semnificative. Această cucerire finală a marcat sfârșitul perioadei Statelor Combatante și începutul unei Chine unificate sub conducerea Qin.`,

  `**Qin unifică China:**
  Până în 221 î.Hr., Qin cucerise toate statele combatante, stabilind primul imperiu chinez unificat. Dinastia Qin, sub conducerea lui Qin Shi Huang, a implementat reforme semnificative pentru a centraliza puterea, a standardiza legile și a construi infrastructura, punând bazele unei Chine unificate.
  
  Reformele cheie au inclus standardizarea greutăților și măsurilor, construcția de drumuri și canale și înființarea unei birocrații centralizate. Aceste reforme au ajutat la consolidarea guvernului central și la promovarea stabilității economice și sociale în întregul imperiu nou unificat.
  
  Unificarea Chinei sub conducerea Qin a fost o realizare monumentală care a pregătit scena pentru dinastiile viitoare să construiască pe această bază.`
];

const getBackgroundImage = (index) => {
  if (index === 0) return qinph;
  if (index === 1 || index === 2) return ref1;
  if (index === 3 || index === 4) return ref2;
  return ref3;
};

const scrollbarStyles = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;  /* Chrome, Safari, Opera */
  }
  
  .bg-image-container {
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
  }
  
  .button-disabled {
    opacity: 0.5 !important;
    cursor: not-allowed !important;
    pointer-events: none;
  }
`;

const Prez = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [fade, setFade] = useState(false);
  // Add a state to disable buttons during animations
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    // Only proceed if we're not currently animating and not at the end
    if (isAnimating || currentIndex >= images.length - 1) return;
    
    // Lock the buttons by setting isAnimating to true
    setIsAnimating(true);
    
    setNextIndex(currentIndex + 1);
    setFade(true);
    
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setFade(false);
      
      // Add a small delay after the transition completes before unlocking the buttons
      // This prevents any timing issues with rapid clicking
      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 1000); 
  };

  const handleRevert = () => {
    // Only proceed if we're not currently animating
    if (isAnimating) return;
    
    // Lock the buttons
    setIsAnimating(true);
    
    setNextIndex(0);
    setFade(true);
    
    setTimeout(() => {
      setCurrentIndex(0);
      setFade(false);
      
      // Unlock buttons after animation completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 1000); 
  };

  const handleUndo = () => {
    // Only proceed if we're not currently animating and not at the beginning
    if (isAnimating || currentIndex <= 0) return;
    
    // Lock the buttons
    setIsAnimating(true);
    
    setNextIndex(currentIndex - 1);
    setFade(true);
    
    setTimeout(() => {
      setCurrentIndex(currentIndex - 1);
      setFade(false);
      
      // Unlock buttons after animation completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 1000); 
  };

  return (
    <div className="flex flex-col relative" style={{ height: 'calc(100vh - 80px)', backgroundColor: 'rgb(233, 226, 207)' }}>
      <style>{scrollbarStyles}</style>
      <CloudBG />
      <div className="pl-24 flex flex-1 w-full relative" style={{ zIndex: 2 }}>
        <div className="flex-shrink-0 w-[calc(50%-25px)] flex items-center justify-center relative p-12">
          <div className="w-[617px] h-[300px] flex items-center justify-center">
            <img
              src={images[currentIndex]}
              alt={`Qin ${currentIndex}`}
              className="max-w-full max-h-full object-contain absolute"
              style={{ zIndex: 10 }}
            />
            <img
              src={images[nextIndex]}
              alt={`Qin ${nextIndex}`}
              className={`max-w-full max-h-full object-contain absolute transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
              style={{ zIndex: 11 }}
            />
          </div>
        </div>
        <div className="flex-shrink-0 w-[calc(50%+25px)] flex flex-col items-center justify-center">
          <div 
            className={`relative py-8 px-8 transition-opacity duration-1000 hide-scrollbar ${fade ? 'opacity-0' : 'opacity-100'}`} 
            style={{ 
              backgroundColor: 'rgb(200, 193, 174)', 
              color: 'rgb(71, 88, 76)', 
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)', 
              borderRadius: '8px', 
              border: '4px solid rgb(71, 88, 76)', 
              overflowY: 'auto', 
              height: '650px', 
              width: '500px',
              position: 'relative'
            }}
          >
            <div className="bg-image-container">
              <img
                src={getBackgroundImage(currentIndex)}
                alt="Background"
                className="bg-image"
              />
            </div>
            <p className="relative font-serif text-lg whitespace-pre-line" style={{ zIndex: 15, marginTop: '300px' }}>
              {texts[currentIndex]}
            </p>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            {currentIndex > 0 && (
              <button 
                onClick={handleUndo} 
                className={`px-4 py-2 transition duration-150 hover:shadow-md ${isAnimating ? 'button-disabled' : ''}`} 
                style={{ 
                  backgroundColor: 'rgb(71, 88, 76)', 
                  color: 'rgb(233, 226, 207)', 
                  borderRadius: '8px', 
                  border: '2px solid rgb(233, 226, 207)'
                }}
                disabled={isAnimating}
              >
                &#8592; Undo
              </button>
            )}
            <button 
              onClick={handleRevert} 
              className={`px-4 py-2 transition duration-150 hover:shadow-md ${isAnimating ? 'button-disabled' : ''}`}
              style={{ 
                backgroundColor: 'rgb(71, 88, 76)', 
                color: 'rgb(233, 226, 207)', 
                borderRadius: '8px', 
                border: '2px solid rgb(233, 226, 207)'
              }}
              disabled={isAnimating}
            >
              Revert
            </button>
            {currentIndex < images.length - 1 && (
              <button 
                onClick={handleNext} 
                className={`px-4 py-2 transition duration-150 hover:shadow-md ${isAnimating ? 'button-disabled' : ''}`}
                style={{ 
                  backgroundColor: 'rgb(71, 88, 76)', 
                  color: 'rgb(233, 226, 207)', 
                  borderRadius: '8px', 
                  border: '2px solid rgb(233, 226, 207)'
                }}
                disabled={isAnimating}
              >
                Next &#8594;
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prez;