import React, { useState, useEffect, useRef } from 'react';
import CloudBG from '../components/CloudBG';

const Sources = () => {
  
  const categoryRefs = useRef([]);
  const noteRef = useRef(null);    
  const headerRef = useRef(null); 
  const resetRefs = () => {
    categoryRefs.current = [];
  };

  
  const addCategoryRef = (el) => {
    if (el && !categoryRefs.current.includes(el)) {
      categoryRefs.current.push(el);
    }
  };

 
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
          observer.unobserve(entry.target); // opr observarea după animație
        }
      });
    };

    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);

    categoryRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    if (noteRef.current) observer.observe(noteRef.current);

    
    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      categoryRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
      if (noteRef.current) observer.unobserve(noteRef.current);
    };
  }, []); // rulaza doar la punerea componentei

  
  const sourceCategories = [
    {
      category: "Cercetări Istorice", 
      sources: [
        {
          title: "Shiji (Înregistrările Marelui Istoric) de Sima Qian",
          url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjt6vjut5mMAxVYFhAIHcVWHCMQFnoECAwQAQ&url=https%3A%2F%2Fd-nb.info%2F113996416X%2F34&usg=AOvVaw28JvjwNRaIeeQFtwYEgckL&opi=89978449",
          description: "Cea mai importantă și timpurie sursă primară pentru istoria Dinastiei Qin și viața lui Qin Shi Huang, scrisă în jurul anului 94 î.Hr. Această ediție conține traducerea completă în engleză a capodoperei istorice chineze."
        },
        {
          title: "Dinastia Qin: Prima Dinastie Imperială a Chinei",
          url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi7pdyVmvqLAxW8gP0HHdWaNQQQFnoECA4QAw&url=https%3A%2F%2Fwww.history.com%2Ftopics%2Fancient-china%2Fqin-dynasty%23%3A~%3Atext%3DThe%2520Qin%2520Dynasty%2520established%2520the%2Con%2520the%2520dynasties%2520that%2520followed.&usg=AOvVaw3xagoG9TvpuHbtseLDfve_&opi=89978449",
          description: "Detalii despre realizările culturale și militare ale statului Qin"
        },
        {
          title: "China Antică: Dinastia Qin și structura sa politică de-a lungul anilor",
          url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiJzNfMmvqLAxX5gP0HHVGsAC8QFnoECA4QAQ&url=https%3A%2F%2Fyuri-pines-sinology.com%2Ffiles%2Fqin-for-encyclopedia-of-empires-final.pdf&usg=AOvVaw0WVOoBTozBMyxPyQaRbx6i&opi=89978449",
          description: "Prezentare cuprinzătoare a perioadei Dinastiei Qin și a structurii politice",
        },
        {
          title: "Cercetări asupra Armatei de Teracotă",
          url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiEwOOqmfqLAxX2ExAIHSggNq4QFnoECB8QAQ&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fterra-cotta-army&usg=AOvVaw3Lqr6hxkxGAVDP2GVdeHo6&opi=89978449",
          description: "Documentație și descoperiri arheologice despre Războinicii de Teracotă"
        }
      ]
    },
    {
      category: "Tehnologii și Invenții",
      sources: [
        {
          title: "Metalurgia Chineză Antică",
          url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwif-aWOnPqLAxXHGhAIHXY5DV0QFnoECBYQAQ&url=https%3A%2F%2Fwww.nature.com%2Farticles%2Fs40494-022-00674-w&usg=AOvVaw2k8XiBU6qDdKARnN5xYOl_&opi=89978449",
          description: "Cercetări privind tehnicile antice chineze de prelucrare a bronzului și fierului",
        },
        {
          title: "Sistemele de Irigații ale Chinei Antice",
          url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjM09qquvqLAxVXBxAIHc7zFF8QFnoECBAQAQ&url=https%3A%2F%2Fstorymaps.arcgis.com%2Fstories%2F5ef6c06d1ec84ae6a5f94dd7fe6998cc&usg=AOvVaw3wTsRIoXg6KYuNqTakn6PZ&opi=89978449",
          description: "Detalii despre sistemele avansate de gestionare a apei create în perioada Statelor Combatante",
        }
      ]
    },
    {
      category: "Artă și Referințe Culturale", 
      sources: [
        {
          title: "Muzeul Metropolitan - Colecția de Artă Chineză",
          url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiGjYj6uvqLAxU9HRAIHWX8AmMQFnoECAoQAQ&url=https%3A%2F%2Fasianartnewspaper.com%2Fchinese-art-of-the-qin-and-han-empires%2F&usg=AOvVaw11buciZ3IIjLLf_7Uf17Bt&opi=89978449",
          description: "Referințe vizuale și artefacte din perioada Dinastiei Qin",
        },
        {
          title: "Caligrafia Chineză Antică",
          url: "https://www.chinahighlights.com/travelguide/culture/chinese-calligraphy.htm",
          description: "Evoluția sistemelor de scriere și standardizarea în timpul erei Qin",
        },
        {
          title: "Construcția și importanța Marelui Zid Chinezesc",
          url: "https://www.history.com/topics/ancient-china/great-wall-of-china",
          description: "Detalii despre cum împăratul Qin a ordonat conectarea secțiunilor de zid existente pentru a crea o barieră defensivă împotriva invaziilor din nord"
        }
      ]
    },
    {
      category: "Jurnale Academice", 
      sources: [
        {
          title: "Cercetări Arheologice în Asia",
          url: "https://www.sciencedirect.com/journal/archaeological-research-in-asia",
          description: "Descoperiri arheologice recente legate de civilizațiile chineze antice",
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
     
      <style>
        {`
          /* Stilul inițial pentru elementele care vor fi animate */
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          /* Stilul aplicat când elementul devine vizibil */
          .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
          }
          /* Adaugă întârziere incrementală pentru categorii */
          .category-item {
            transition-delay: calc(var(--index) * 150ms);
          }
        `}
      </style>
    
      <div className="flex-grow relative" style={{ backgroundColor: 'rgb(233, 226, 207)', minHeight: 'calc(100vh - 80px)' }}>
        <CloudBG />
        
        
        <div className="container mx-auto py-12 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            <div ref={headerRef} className="fade-in">
              <h1 className="text-4xl font-serif mb-8 text-center" style={{ color: 'rgb(71, 88, 76)' }}>
                Surse și Referințe
              </h1>
              
              <p className="text-lg mb-10 font-serif text-center" style={{ color: 'rgb(71, 88, 76)' }}>
                Această pagină conține o compilație a resurselor utilizate în cercetarea și dezvoltarea InterSTORY, precum și diverse curiozități despre Dinastia Qin și cultura sa.
              </p>
            </div>
            
            {/*  fadein intarziat */}
            {sourceCategories.map((category, index) => (
              <div 
                key={index}
                ref={(el) => addCategoryRef(el)}
                className="mb-12 p-6 rounded-lg shadow-lg fade-in category-item" 
                style={{ 
                  backgroundColor: 'rgb(200, 193, 174)',
                  border: '2px solid rgb(71, 88, 76)',
                  '--index': index //calculul întârzierii
                }}
              >
                <h2 className="text-2xl font-serif mb-4 pb-2 border-b-2" style={{ color: 'rgb(71, 88, 76)', borderColor: 'rgb(71, 88, 76)' }}>
                  {category.category}
                </h2>
                
              
                <div className="space-y-4">
                  {category.sources.map((source, sourceIndex) => (
                    <div key={sourceIndex} className="p-4 rounded" style={{ backgroundColor: 'rgba(233, 226, 207, 0.7)' }}>
                      <h3 className="text-xl font-serif" style={{ color: 'rgb(71, 88, 76)' }}>
                        <a 
                          href={source.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center"
                        >
                          {source.title}
                          
                          <svg 
                            className="w-4 h-4 ml-1" 
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>
                      </h3>
                      <p className="text-base mt-2" style={{ color: 'rgb(71, 88, 76)' }}>
                        {source.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* fade-inu */}
            <div 
              ref={noteRef}
              className="mt-16 p-6 rounded-lg shadow-lg fade-in" 
              style={{ backgroundColor: 'rgb(200, 193, 174)', border: '2px solid rgb(71, 88, 76)' }}
            >
              <h2 className="text-2xl font-serif mb-4" style={{ color: 'rgb(71, 88, 76)' }}>Usage Note</h2>
              <p className="text-lg font-serif" style={{ color: 'rgb(71, 88, 76)' }}>
                All sources listed above have been used for educational and research purposes.
                InterSTORY aims to provide an accurate historical perspective while making history enjoyable to explore.
                If you are the owner of any of these resources and have concerns about their inclusion, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sources;