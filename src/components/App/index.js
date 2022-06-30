// == Import
import './styles.scss';

import Navbar from '../Navbar';
import Hero from '../Hero';
import ContactButtons from '../ContactButtons';
import About from '../About';
import Works from '../Works';

// == Composant
function App() {
  return (
    <div className="app">
      <div className="hero">
        <Navbar />
        <Hero />
      </div>
      <main>
        <About />
      </main>
      <ContactButtons />
      <Works />
    </div>
  );
}

// == Export
export default App;
