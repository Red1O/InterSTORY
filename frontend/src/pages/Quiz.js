import React, { useState, useEffect, useRef } from 'react';
import CloudBG from '../components/CloudBG';
import Shi from '../assets/shi.png';
import Zheng from '../assets/zheng.png';
import JSConfetti from 'js-confetti'


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const [currentFact, setCurrentFact] = useState(0);
  const [factPaused, setFactPaused] = useState(false);
  const jsConfettiRef = useRef(null);
  useEffect(() => {
    jsConfettiRef.current = new JSConfetti();
  }, []);
  const questions = [
    {
      questionText: 'Care a fost primul stat cucerit de Qin în procesul de unificare?',
      answerOptions: [
        { answerText: 'Zhao', isCorrect: false },
        { answerText: 'Wei', isCorrect: false },
        { answerText: 'Han', isCorrect: true },
        { answerText: 'Chu', isCorrect: false },
      ],
      explanation: 'Bătălia de la Chenggao (230 î.Hr.) a marcat începutul războaielor de unificare ale Qin. Han a fost primul stat cucerit sub conducerea generalului Wang Jian.'
    },
    {
      questionText: 'Cine a fost generalul care a condus cucerirea statului Han?',
      answerOptions: [
        { answerText: 'Wang Ben', isCorrect: false },
        { answerText: 'Wang Jian', isCorrect: true },
        { answerText: 'Li Xin', isCorrect: false },
        { answerText: 'Huan Yi', isCorrect: false },
      ],
      explanation: 'Armata Qin, condusă de generalul Wang Jian, a învins rapid forțele Han, capturând capitala lor și forțându-i să se predea.'
    },
    {
      questionText: 'Ce tactică militară inovatoare a folosit Wang Jian împotriva Han?',
      answerOptions: [
        { answerText: 'Secerișul de Iarbă', isCorrect: false },
        { answerText: 'Cercul de Fier', isCorrect: false },
        { answerText: 'Strategia Apei', isCorrect: false },
        { answerText: 'Pătratul de Fier', isCorrect: true },
      ],
      explanation: 'Generalul Wang Jian a folosit formația "Pătrat de Fier" (铁方阵), în care infanteria grea forma un zid de scuturi impenetrabil, iar arcașii trăgeau din spatele acestuia.'
    },
    {
      questionText: 'Care tactică a fost folosită pentru a cuceri capitala Wei, Daliang?',
      answerOptions: [
        { answerText: 'Asediu prelungit', isCorrect: false },
        { answerText: 'Inundarea orașului', isCorrect: true },
        { answerText: 'Atacul subteran', isCorrect: false },
        { answerText: 'Blocadă economică', isCorrect: false },
      ],
      explanation: 'Qin a demonstrat abilități remarcabile de inginerie militară prin construirea unui sistem complex de diguri și canale pentru a devia râul Galben spre Daliang. Devierea râurilor pentru a ataca orașe fortificate a devenit o tactică emblematică a statului Qin.'
    },
    {
      questionText: 'Care stat a fost cel mai dificil de cucerit pentru Qin?',
      answerOptions: [
        { answerText: 'Zhao', isCorrect: false },
        { answerText: 'Yan', isCorrect: false },
        { answerText: 'Chu', isCorrect: true },
        { answerText: 'Qi', isCorrect: false },
        
      ],
      explanation: 'Bătălia împotriva Chu a fost cea mai dificilă din toate războaiele de unificare, necesitând resurse masive și strategie superioară pentru a învinge un stat cu populație și teritoriu mai mare decât a statului Qin.'
    },
    {
      questionText: 'Care general a suferit o înfrângere catastrofală în prima tentativă de a cuceri Chu?',
      answerOptions: [
        { answerText: 'Wang Jian', isCorrect: false },
        { answerText: 'Li Xin', isCorrect: true },
        { answerText: 'Wang Ben', isCorrect: false },
        { answerText: 'Meng Ao', isCorrect: false },
      ],
      explanation: 'Inițial, Qin Shi Huang l-a trimis pe tânărul și arogantul general Li Xin să conducă campania împotriva Chu. Rezultatul a fost dezastruos: generalul Chu Xiang Yan l-a atras într-o ambuscadă în mlaștinile din Huaiyang, unde mobilitatea superioară a carelor de luptă Qin a fost anulată.'
    },
    {
      questionText: 'Ce persoană a încercat să-l asasineze pe Qin Shi Huang în timpul campaniei împotriva Yan?',
      answerOptions: [
        { answerText: 'Jing Ke', isCorrect: true },
        { answerText: 'Li Zuoche', isCorrect: false },
        { answerText: 'Feng Gai', isCorrect: false },
        { answerText: 'Hou Sheng', isCorrect: false },
      ],
      explanation: 'Văzând situația disperată, regele Yan a apelat la o strategie extremă: asasinarea lui Qin Shi Huang. Asasinul Jing Ke s-a oferit voluntar pentru această misiune suicidală. Acest eveniment a devenit unul dintre cele mai faimoase episoade din istoria Chinei.'
    },
    {
      questionText: 'Care a fost ultimul stat cucerit de Qin pentru a unifica China?',
      answerOptions: [
        { answerText: 'Yan', isCorrect: false },
        { answerText: 'Chu', isCorrect: false },
        { answerText: 'Qi', isCorrect: true },
        { answerText: 'Wei', isCorrect: false },
      ],
      explanation: 'Cucerirea Qi (221 î.Hr.) a marcat ultima etapă a unificării Chinei sub conducerea Qin. Spre deosebire de campaniile anterioare, această cucerire a fost realizată fără o bătălie majoră, deoarece Qi s-a predat'
    },
    {
      questionText: 'Ce strategie a folosit Wang Ben pentru a determina Qi să se predea?',
      answerOptions: [
        { answerText: 'Război psihologic și demonstrație de forță', isCorrect: true },
        { answerText: 'Asediu militar direct', isCorrect: false },
        { answerText: 'Atacuri navale coordonate', isCorrect: false },
        { answerText: 'Alianță diplomatică cu nobilii Qi', isCorrect: false },
      ],
      explanation: 'Wang Ben a folosit o combinație de război psihologic și demonstrație de forță. După victoriile răsunătoare împotriva celorlalte state, Qin a avansat cu o armată masivă spre granițele Qi. Văzând situația disperată și nevrând să-și expună poporul la suferințele unui război, regele Qi a decis să se predea fără rezistență majoră.'
    },
    {
      questionText: 'Ce reformă importantă a implementat Qin Shi Huang după unificarea Chinei?',
      answerOptions: [
        { answerText: 'Crearea sistemului feudal', isCorrect: false },
        
        { answerText: 'Introducerea democrației locale', isCorrect: false },
        { answerText: 'Descentralizarea puterii militare', isCorrect: false },
        { answerText: 'Standardizarea scrierii, monedelor și măsurătorilor', isCorrect: true },
      ],
      explanation: 'Una dintre cele mai durabile moșteniri ale dinastiei Qin a fost standardizarea. Aceasta a inclus: sistemul "Small Seal" de scriere, monede rotunde cu gaură pătrată, unități de măsură standardizate, lățimea osiilor carelor și coduri legale uniforme.'
    },
  ];


  const funFacts = [
    "Qin Shi Huang a unificat nu doar teritoriile, ci și multe aspecte culturale: a standardizat scrierea, monedele, măsurile și chiar lățimea osiilor de car pentru a crea drumuri uniforme.",
    "Armata de Teracotă a lui Qin Shi Huang a fost descoperită întâmplător în 1974 de către fermieri care săpau o fântână. Conține peste 8.000 de soldați în mărime naturală, toți cu fețe unice.",
    "Pentru a-și proteja mormântul de hoți, Qin Shi Huang a ordonat construirea unor capcane mecanice și râuri de mercur în jurul mausoleului său - analizele moderne arată că solul din zonă conține într-adevăr nivele ridicate de mercur.",
    "Marele Zid din perioada Qin era construit în principal din pământ, argilă și pietriș - nu din cărămidă și piatră cum este versiunea pe care o vedem astăzi, reconstruită în mare parte în timpul dinastiei Ming.",
    "Qin Shi Huang a ordonat arderea cărților și îngroparea cărturarilor vii pentru a elimina ideologiile care contraziceau filozofia legalistă a statului Qin.",
    "Numele 'China' provine probabil din 'Qin' (pronunțat 'cin'), fiind transmis prin intermediul Drumului Mătăsii către civilizațiile occidentale.",
    "Qin Shi Huang a supraviețuit la cel puțin trei tentative de asasinat, ceea ce l-a făcut extrem de paranoic și l-a determinat să construiască multiple palate conectate prin tuneluri secrete.",
    "Sistemul de scriere standardizat de Qin este baza pentru scrierea chineză folosită și astăzi, peste 2.200 de ani mai târziu.",
    "Carele de război din timpul dinastiei Qin erau echipate cu arbaleste mecanice care puteau trage până la 10 săgeți simultan.",
    "Primul împărat a trimis expediții în căutarea elixirului nemuririi, iar una dintre acestea ar fi putut ajunge până în Japonia.",
    "Titlul 'Huang Di' (Împărat) creat de Qin Shi Huang este format din titlurile mitice ale celor mai venerați conducători legendari chinezi.",
    "Qin Shi Huang a avut peste 50 de copii, dar a desemnat un succesor doar pe patul de moarte, prin testament sigilat.",
    "Moneda standard introdusă de Qin – rotundă cu gaură pătrată – a rămas stilul dominant al monedelor chineze timp de peste 2.000 de ani.",
    "Subteranele mormântului lui Qin Shi Huang nu au fost încă excavate complet de arheologi, de teamă că expunerea la aer ar putea deteriora artefactele.",
    "Coordonatele astronomice ale stelelor și planetelor sunt perfect aliniate cu dispunerea mausoleului lui Qin Shi Huang, demonstrând avansul astronomic al perioadei."
  ];

  const buttonStyle = `
    px-5 py-3
    bg-[rgb(200,193,174)] text-[rgb(71,88,76)] 
    border-3 border-[rgb(71,88,76)] rounded-lg
    transition-all duration-300 ease-in-out
    hover:bg-[rgb(71,88,76)] hover:text-[rgb(200,193,174)]
    hover:-translate-y-1 hover:shadow-xl
    text-xl font-medium
    my-2
  `;


  const handleAnswerOptionClick = (isCorrect, index) => {
    setSelectedAnswer(index);
    
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setShowExplanation(true);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowScore(true);
      jsConfettiRef.current && jsConfettiRef.current.addConfetti({
        confettiColors: [
          'rgb(71, 88, 76)',
          'rgb(200, 193, 174)',
          'rgb(212, 175, 55)'
        ],
        confettiRadius: 6,
        confettiNumber: 500,
      });
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };


  useEffect(() => {
    let timer;
    if (!factPaused) {
      timer = setInterval(() => {
        setCurrentFact((prevFact) => (prevFact + 1) % funFacts.length);
      }, 8000); 
    }
    
    return () => clearInterval(timer);
  }, [factPaused, funFacts.length]);

  const nextFact = () => {
    setCurrentFact((prevFact) => (prevFact + 1) % funFacts.length);
  };

  const prevFact = () => {
    setCurrentFact((prevFact) => (prevFact === 0 ? funFacts.length - 1 : prevFact - 1));
  };

  const togglePause = () => {
    setFactPaused(!factPaused);
  };

  return (
    <div className="flex flex-col items-center justify-center relative " style={{ 
      minHeight: 'calc(100vh - 80px)', 
      backgroundColor: 'rgb(233, 226, 207)',
      padding: '20px'
    }}>
      <CloudBG />
      <div className="absolute bottom-0 right-0 h-4/5  overflow-hidden" style={{ zIndex: 1 }}>
      <img 
        src={Shi} 
        alt="Qin Shi Huang" 
        className="h-full object-contain "
        style={{ 
          filter: 'brightness(0) saturate(100%) invert(31%) sepia(12%) saturate(935%) hue-rotate(86deg) brightness(95%) contrast(100%)',
          transformOrigin: 'bottom right'
        }}
      />
    </div>
  
    <div className="pl-16 absolute bottom-0 left-0 h-4/5  overflow-hidden" style={{ zIndex: 1 }}>
      <img 
        src={Zheng} 
        alt="Zheng" 
        className="h-full object-contain "
        style={{ 
          filter: 'brightness(0) saturate(100%) invert(31%) sepia(12%) saturate(935%) hue-rotate(86deg) brightness(95%) contrast(100%)',
          transformOrigin: 'bottom left'
        }}
      />
    </div>
      
      <div className="relative z-10 w-full max-w-4xl max-h-xl">
        {showScore ? (
          <div className="bg-[rgb(200,193,174)] p-8 rounded-lg border-4 border-[rgb(71,88,76)] text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-[rgb(71,88,76)]">
              Scorul tău este {score} din {questions.length}
            </h2>
            <p className="mb-6 text-lg text-[rgb(71,88,76)]">
              {score > 7 
                ? 'Excelent! Ești un adevărat expert în istoria crearii dinastiei Qin!' 
                : score > 5 
                  ? 'Bine! Ai cunoștințe solide despre unificarea Chinei.' 
                  : 'Continuă să înveți despre fascinanta istorie a crearii dinastiei Qin!'}
            </p>
            <button 
              onClick={resetQuiz} 
              className={buttonStyle}
            >
              Încearcă din nou
            </button>
          </div>
        ) : (
          <div className="bg-[rgb(200,193,174)] p-8 rounded-lg border-4 border-[rgb(71,88,76)] shadow-xl">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium text-[rgb(71,88,76)]">
                  Întrebarea {currentQuestion + 1}/{questions.length}
                </h2>
                <span className="text-lg font-medium text-[rgb(71,88,76)]">
                  Scor: {score}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[rgb(71,88,76)]">
                {questions[currentQuestion].questionText}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                  disabled={selectedAnswer !== null}
                  className={`text-center p-4 rounded-md transition-all ${
                    selectedAnswer === index && !answerOption.isCorrect
                      ? 'bg-red-200 border-2 border-red-500 text-[rgb(71,88,76)]'
                      : selectedAnswer !== null && answerOption.isCorrect
                      ? 'bg-green-200 border-2 border-green-500 text-[rgb(71,88,76)]'
                      : 'bg-[rgb(233,226,207)] border-2 border-[rgb(71,88,76)] text-[rgb(71,88,76)] hover:bg-[rgb(71,88,76)] hover:text-[rgb(233,226,207)]'
                  }`}
                >
                  <span className="font-medium text-lg">{answerOption.answerText}</span>
                </button>
              ))}
            </div>
            
            {showExplanation && (
              <div className="mt-6 p-4 bg-[rgb(233,226,207)] border-2 border-[rgb(71,88,76)] rounded-md">
                <h4 className="font-bold mb-2 text-[rgb(71,88,76)]">Explicație:</h4>
                <p className="text-[rgb(71,88,76)]">{questions[currentQuestion].explanation}</p>
              </div>
            )}

            {selectedAnswer !== null && (
              <div className="mt-4 flex justify-center">
                <button
                  onClick={goToNextQuestion}
                  className="flex items-center justify-center px-8 py-4 bg-[rgb(233,226,207)] text-[rgb(71,88,76)] rounded-lg border-2 border-[rgb(71,88,76)] hover:bg-[rgb(71,88,76)] hover:text-[rgb(233,226,207)] transition-all"
                >
                  <span className="mr-2 text-xl font-medium">Următoarea întrebare</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

<div className="fixed bottom-0 left-0 right-0 bg-[rgb(200,193,174)] py-4 px-6 shadow-lg z-20 opacity-90">
  <div className="flex items-center justify-between mb-1 max-w-6xl mx-auto">
    <button
      onClick={prevFact}
      className="flex items-center justify-center w-10 h-10 text-[rgb(71,88,76)] hover:bg-[rgb(190,183,164)] rounded-full transition-all"
      aria-label="Faptul anterior"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
      </svg>
    </button>

    <div className="flex-1 mx-8 h-[80px] flex items-center justify-center overflow-y-auto">
      <p className="italic text-lg text-center text-[rgb(71,88,76)] m-0">
        {funFacts[currentFact]}
      </p>
    </div>

    <div className="flex items-center">
      <button
        onClick={togglePause}
        className="flex items-center justify-center w-10 h-10 mx-2 text-[rgb(71,88,76)] hover:bg-[rgb(190,183,164)] rounded-full transition-all"
        aria-label={factPaused ? "Continuă" : "Pauză"}
      >
        {factPaused ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
          </svg>
        )}
      </button>
      
      <button
        onClick={nextFact}
        className="flex items-center justify-center w-10 h-10 text-[rgb(71,88,76)] hover:bg-[rgb(190,183,164)] rounded-full transition-all"
        aria-label="Faptul următor"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </button>
    </div>
  </div>
  <div className="text-center text-sm text-[rgb(71,88,76)]">
    <span>Știați că... ({currentFact + 1}/{funFacts.length})</span>
  </div>
</div>
  </div>
);
};

export default Quiz;