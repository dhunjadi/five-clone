import React from 'react'
import '../styles.css'
import Navbar from './Navbar'
import Sections from './Sections'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Sections />
        <Services />
        <Contact />
        <Footer />
      </main>

    </div>
  );
}

export default App;
