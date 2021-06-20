import React, {useState, useEffect} from 'react'
import '../styles.css'
import Navbar from './Navbar'
import Sections from './Sections'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import White from './White'

function App() {

  const [navTxtColor, setNavTxtColor] = useState('')



  window.addEventListener('scroll', setNavTxtColor)

  function handleNavTxtColor(){
    if(window.scrollY === 0 && window.scrollY < 830) {
      setNavTxtColor('black')
    } else if(window.scrollY > 830 && window.scrollY <= 1930){
      setNavTxtColor('#0a56ee')
    } else if(window.scrollY > 1930 && window.scrollY <= 3020){
      setNavTxtColor('#54deea')
    } else if(window.scrollY > 3020 && window.scrollY <= 4030){
      setNavTxtColor('#fa7500')
    } else if(window.scrollY > 4030 && window.scrollY <= 5130){
      setNavTxtColor('#e0e0e0')
    } else if(window.scrollY > 5130 && window.scrollY <= 6520){
      setNavTxtColor('#aee6cb')
    } else if(window.scrollY > 6520 && window.scrollY <= 7600){
      setNavTxtColor('#fff3b6')
    } else if(window.scrollY > 7600 && window.scrollY <= 8700){
      setNavTxtColor('#22354f')
    } else if(window.scrollY > 8700 && window.scrollY <= 8930){
      setNavTxtColor('#9b4459')
    } else {
      setNavTxtColor('black')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavTxtColor)
  }, [])

  return (
    <div className="App">
      <main>
        <Navbar 
          navTxtColor={navTxtColor}
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
