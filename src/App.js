
import './App.css';
import Hero from './components/Hero';
import Program from './components/programs/Program';
import Reason from './components/reasons/Reason';
import Plan from './components/plans/Plan'
import Testimonials from './components/testimonials/Testimonials';
import Join from './components/join us/Join';
import Footer from './components/footer/Footer';
function App() {
  return (
  
    <div className='App'>
    <Hero />
    <Program />
    <Reason />
    <Plan />
    <Testimonials />
    <Join />
    <Footer/>
    </div>
  );
}

export default App;
