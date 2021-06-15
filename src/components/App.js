import React from 'react'
import '../styles.css'
import Navbar from './Navbar'
import Sections from './Sections'
import Services from './Services'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sections />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
