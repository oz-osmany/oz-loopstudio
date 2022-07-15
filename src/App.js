import './css/main.css'
import bannerDesktop from './images/desktop/image-hero.jpg'
import bannerMobile from './images/mobile/image-hero.jpg'
import interactiveD from './images/desktop/image-interactive.jpg'
import interactiveM from './images/mobile/image-interactive.jpg'
 import hamburger from './images/icon-hamburger.svg'
import {datos, datosM,iconsD,iconsM } from './data/datos'
import { Menu } from './components/Menu'


const App=()=> {
  const menuAction=()=>{
    alert("Solo es una prueba");
  }
  return (
    <div className="container ">
      <header className='container__inner header'>
        <div className='header__flex'>
          <div className='header__logo'>
            {/* Logo */}
            <h2>loopstudios</h2>
          </div>
          <div className='header__menu'>
            {/* Menu */}
            <Menu />
            
            <img src={hamburger} onClick={menuAction}/>
            
            <div class="mobile">
            </div>
          </div>
        </div>
      </header>
      <div className='cuerpo'>
        <div className='banner'>
          <img src={bannerDesktop} className="banner__imageD"/>
          <img src={bannerMobile} className="banner__imageM"/>
          {/* Texto IMMERSIVE */}
          <div class=" banner banner__letrero">
            <p>Immersive experiences that deliver</p>
          </div>
        </div>
        <main className='principal container__inner'>
          {/* Interactive section */}
          <section className='principal__interactive'>
            <div className='principal__image'>
               <img src={interactiveD} />             
                  <div className='principal__interactive_info'>
                    <div className='principal__interactive_info_inner'>
                      <h1>The leader in interactive VR</h1>
                      <p>
                        Founded in 2011, Loopstudios has been producing world-class virtual reality
                        projects for some of the best companies around the globe. Our award-winning
                        creations have transformed businesses through digital experiences that bind
                        to their brand.
                        
                      </p>
                    </div>
                  </div>
            </div>
          </section>
          {/* Our creactions section  */}
          <section className='principal__section'>
              <div class='principal__creation'>  
                <div class='principal__creation_title'>
                  <h1>OUR CREATIONS</h1>
                </div> 
                <div class='principal__creation_button'>
                  <button>SEE ALL</button>
                </div>
              </div>
              {/* Se muestran las imagenes */}
              <div className='principal__galery'>
                <div class="principal__galery_colum">
                      <div className='principal__galeryD'>
                          {
                            datos.map((dato,index)=>{
                              return(
                                <div className='cards'>
                                  <img src={dato.imagen} />  
                                  <div className='principal__galery_title'>
                                    <h1> {dato.titulo}</h1>
                                  </div>                                
                              </div>
                              )
                            })
                          }                         
                      </div>
                      <div className='principal__galeryM'>
                          {
                            datosM.map((dato,index)=>{
                              return(
                                <div className='cards'>
                                  <img src={dato.imagen} />    
                                  <div className='principal__galery_title'>
                                    <h1> {dato.titulo}</h1>
                                  </div>                             
                              </div>
                              )
                            })
                          }                         
                      </div>
                    <div>
                  </div>
                </div>
              </div>
          </section>
          <div>
         
          </div>
        </main>
        <footer className='footer container__inner'>
          <div >
              {/* Logo */}
              <div className='footer__logo'>
                <h2>loopstudios</h2>
              </div>
              {/* Menu */}
              <div className='footer__menu'>
                <Menu  />
              </div>
          </div>
          <div className='footer__info'>
              <div className='footer__redes'>
                 {
                    iconsD.map(icon=>{
                      return(
                        <img  src={icon}/>
                      )
                    })
                 }   
                 
              </div>              
              <div className='footer__rights'>
                
                 © 2021 Loopstudios. All rights reserved.
              </div>              
          </div>
        
        </footer>
      </div>
    </div>
  );
}

export default App;
