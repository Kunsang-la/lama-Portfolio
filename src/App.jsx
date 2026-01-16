import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Education />
      <Skills />
      <Hobbies />
      <Footer /> 
    </div>
  );
}

export default App;
