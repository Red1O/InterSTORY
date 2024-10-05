import qin from "../asssets/qin.jpeg"

const Home =() => {
  return(
<section className="hero">
            <div className="hero-containerQin">
                <div className="welcome">
                    <h1>Welcome to InterSTORY</h1>
                    <p>Choose your story:</p>
                </div>
            </div>
            <div className="containerQin w-full">
                <div className="cell">
                    <div>
                        <img src={qin} className="photo" alt="Dinastia Qin"/>
                    </div>
                    <div className="photo-explanation">
                        <h2>Dinastia Qin</h2>
                        <p>Crearea si caderea dinastiei Qin 221-206 I.H.</p>
                    </div>
                </div>
                <div className="cell">
                  <div>
                    <img src={qin} className="photo" alt="Dinastia Qin"/> 
                  </div>
                  <div className="photo-explanation">
                      <h2>Dinastia Qin</h2>
                      <p>Crearea si caderea dinastiei Qin 221-206 I.H.</p>
                  </div>
              </div>
              <div className="cell">
                <div>
                  <img src={qin} className="photo" alt="Dinastia Qin"/>
                </div>
                <div className="photo-explanation">
                    <h2>Dinastia Qin</h2>
                    <p>Crearea si caderea dinastiei Qin 221-206 I.H.</p>
                </div>
            </div>
              <div className="cell">
                <div>
                  <img src={qin} className="photo" alt="Dinastia Qin"/>
                </div>
                <div className="photo-explanation">
                    <h2>Dinastia Qin</h2>
                    <p>Crearea si caderea dinastiei Qin 221-206 I.H.</p>
                </div>
            </div>
          </div>
        </section>
  );
}
export default Home