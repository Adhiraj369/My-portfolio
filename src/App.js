
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Qualification from './components/Qualification/Qualification';
import Work from './components/Work/Work';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Work /> 
      <Services />
      <Footer />
      </main>
    </>
  );
}

export default App;
