import React, {useState, useEffect} from 'react'
import '../styles.css'
import Navbar from './Navbar'
import Sections from './Sections'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import White from './White'

function App() {

  const [navColor, setNavColor] = useState({})

  window.addEventListener('scroll', setNavColor)

  function handleNavTxtColor(){
    if(window.pageYOffset === 0 && window.scrollY < 830) {
      setNavColor({
        txt: 'black',
        bg: 'white'
      })
    } else if(window.pageYOffset > 830 && window.pageYOffset <= 1930){
      setNavColor({
        txt: '#0a56ee',
        bg: 'fbcf10;'
      })
    } else if(window.pageYOffset > 1930 && window.pageYOffset <= 3020){
      setNavColor({
        txt: '#54deea',
        bg: '#5b4099'
      })
    } else if(window.pageYOffset > 3020 && window.pageYOffset <= 4030){
      setNavColor({
        txt: '#fa7500',
        bg: '#5e0541'
      })
    } else if(window.pageYOffset > 4030 && window.pageYOffset <= 5130){
      setNavColor({
        txt: '#e0e0e0',
        bg: '#33332d'
      })
    } else if(window.pageYOffset > 5130 && window.pageYOffset <= 6520){
      setNavColor({
        txt: '#aee6cb',
        bg: '#033068'
      })
    } else if(window.pageYOffset > 6520 && window.pageYOffset <= 7600){
      setNavColor({
        txt: '#fff3b6',
        bg: '#55a475'
      })
    } else if(window.pageYOffset > 7600 && window.pageYOffset <= 8700){
      setNavColor({
        txt: '#22354f',
        bg: '#f2d3d3'
      })
    } else if(window.pageYOffset > 8700 && window.pageYOffset <= 9800){
      setNavColor({
        txt: '#9b4459',
        bg: '#96d8f4;'
      })
    } else {
      setNavColor({
        txt: 'black',
        bg: 'white'
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavTxtColor)
  }, [])

  return (
    <div className="App">
      <main>
        <Navbar 
          navColor={navColor}
        />
        <White />
        <Sections />
        <Services />
        <Contact />
        <Footer />
      </main>

    </div>
  );
}

export default App;
