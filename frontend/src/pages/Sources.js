import React from 'react';
import CloudBG from '../components/CloudBG';

const Sources = () => {
  const sourceCategories = [
    {
      category: "Historical Research",
      sources: [
        {
          title: "The Qin Dynasty: China's First Imperial Dynasty",
          url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi7pdyVmvqLAxW8gP0HHdWaNQQQFnoECA4QAw&url=https%3A%2F%2Fwww.history.com%2Ftopics%2Fancient-china%2Fqin-dynasty%23%3A~%3Atext%3DThe%2520Qin%2520Dynasty%2520established%2520the%2Con%2520the%2520dynasties%2520that%2520followed.&usg=AOvVaw3xagoG9TvpuHbtseLDfve_&opi=89978449",
          description: "Details on cultural and military achievements of the Qin state"
        },
        {
          title: "Ancient China: Qin Dynasty and its political strucuture throughout the years",
          url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiJzNfMmvqLAxX5gP0HHVGsAC8QFnoECA4QAQ&url=https%3A%2F%2Fyuri-pines-sinology.com%2Ffiles%2Fqin-for-encyclopedia-of-empires-final.pdf&usg=AOvVaw0WVOoBTozBMyxPyQaRbx6i&opi=89978449",
          description: "Comprehensive overview of the Qin Dynasty period and political structure",
        },
        {
          title: "Terracotta Army Research",
          url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiEwOOqmfqLAxX2ExAIHSggNq4QFnoECB8QAQ&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fterra-cotta-army&usg=AOvVaw3Lqr6hxkxGAVDP2GVdeHo6&opi=89978449",
          description: "Documentation and archaeological findings on the Terracotta Warriors"
        }
      ]
    },
    {
      category: "Technologies & Inventions",
      sources: [
        {
          title: "Ancient Chinese Metallurgy",
          url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwif-aWOnPqLAxXHGhAIHXY5DV0QFnoECBYQAQ&url=https%3A%2F%2Fwww.nature.com%2Farticles%2Fs40494-022-00674-w&usg=AOvVaw2k8XiBU6qDdKARnN5xYOl_&opi=89978449",
          description: "Research on ancient Chinese bronze and iron working techniques",
        },
        {
          title: "Irrigation Systems of Ancient China",
          url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjM09qquvqLAxVXBxAIHc7zFF8QFnoECBAQAQ&url=https%3A%2F%2Fstorymaps.arcgis.com%2Fstories%2F5ef6c06d1ec84ae6a5f94dd7fe6998cc&usg=AOvVaw3wTsRIoXg6KYuNqTakn6PZ&opi=89978449",
          description: "Details on the advanced water management systems created during the Warring States period",
        }
      ]
    },
    {
      category: "Art & Cultural References",
      sources: [
        {
          title: "Metropolitan Museum - Chinese Art Collection",
          url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiGjYj6uvqLAxU9HRAIHWX8AmMQFnoECAoQAQ&url=https%3A%2F%2Fasianartnewspaper.com%2Fchinese-art-of-the-qin-and-han-empires%2F&usg=AOvVaw11buciZ3IIjLLf_7Uf17Bt&opi=89978449",
          description: "Visual references and artifacts from the Qin Dynasty period",
        },
        {
          title: "Ancient Chinese Calligraphy",
          url: "https://www.chinahighlights.com/travelguide/culture/chinese-calligraphy.htm",
          description: "Evolution of writing systems and the standardization during the Qin era",
        }
      ]
    },
    {
      category: "Academic Journals",
      sources: [
        {
          title: "Archaeological Research in Asia",
          url: "https://www.sciencedirect.com/journal/archaeological-research-in-asia",
          description: "Recent archaeological findings related to ancient Chinese civilizations",
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow relative" style={{ backgroundColor: 'rgb(233, 226, 207)', minHeight: 'calc(100vh - 80px)' }}>
        <CloudBG />
        
        <div className="container mx-auto py-12 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif mb-8 text-center" style={{ color: 'rgb(71, 88, 76)' }}>
              Sources & References
            </h1>
            
            <p className="text-lg mb-10 font-serif text-center" style={{ color: 'rgb(71, 88, 76)' }}>
              This page contains a compilation of the resources used in the research and development of InterSTORY, and various more curiosities about the Qin Dynasty and its culture.
            </p>
            
            {sourceCategories.map((category, index) => (
              <div 
                key={index} 
                className="mb-12 p-6 rounded-lg shadow-lg" 
                style={{ 
                  backgroundColor: 'rgb(200, 193, 174)',
                  border: '2px solid rgb(71, 88, 76)'
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

            <div className="mt-16 p-6 rounded-lg shadow-lg" style={{ backgroundColor: 'rgb(200, 193, 174)', border: '2px solid rgb(71, 88, 76)' }}>
              <h2 className="text-2xl font-serif mb-4" style={{ color: 'rgb(71, 88, 76)' }}>Note on Usage</h2>
              <p className="text-lg font-serif" style={{ color: 'rgb(71, 88, 76)' }}>
                All sources listed above have been used for educational and research purposes. 
                InterSTORY aims to provide an accurate historical perspective while making history accessible through interactive storytelling.
                If you own any of these resources and have concerns about their inclusion, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sources;