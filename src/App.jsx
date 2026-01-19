import { useState } from 'react';
import Header from './components/Header';
import About from './pages/About';
import Talents from './pages/Talents';
import Cases from './pages/Cases';
import LetsEngage from './pages/LetsEngage';
import Footer from './components/Footer';
import './App.css';

function App() {
  // We can keep track of active section if needed for highlighting, 
  // but for now simple stacking is the goal.
  const [currentPage, setCurrentPage] = useState('about');

  return (
    <div className="app-container">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="talents">
          <Talents />
        </section>
        <section id="cases">
          <Cases />
        </section>
        <section id="lets-engage">
          <LetsEngage />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
