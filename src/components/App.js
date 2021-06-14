import React from 'react'
import '../styles.css'
import Navbar from './Navbar'
import Sections from './Sections'
import Services from './Services'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sections />
      <Services />
    </div>
  );
}

export default App;
