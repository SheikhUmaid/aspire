import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

// Program Pages
import YouthDevelopment from './pages/Programs/YouthDevelopment';
import WomenEmpowerment from './pages/Programs/WomenEmpowerment';
import SportsPromotion from './pages/Programs/SportsPromotion';
import DigitalSkills from './pages/Programs/DigitalSkills';
import MentalHealth from './pages/Programs/MentalHealth';
import HealthMedicalCamps from './pages/Programs/HealthMedicalCamps';
import VaccinationPrograms from './pages/Programs/VaccinationPrograms';
import AnimalWelfare from './pages/Programs/AnimalWelfare';

// Other Pages (temporary simple components)
import CommunityAwareness from './pages/CommunityAwareness/CommunityAwareness';
import Approach from './pages/Approach/Approach';
import Partners from './pages/Partners/Partners';
import Impact from './pages/Impact/Impact';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Program Routes */}
            <Route path="/programs/youth-development" element={<YouthDevelopment />} />
            <Route path="/programs/women-empowerment" element={<WomenEmpowerment />} />
            <Route path="/programs/sports-promotion" element={<SportsPromotion />} />
            <Route path="/programs/digital-skills" element={<DigitalSkills />} />
            <Route path="/programs/mental-health" element={<MentalHealth />} />
            <Route path="/programs/health-medical-camps" element={<HealthMedicalCamps />} />
            <Route path="/programs/vaccination-programs" element={<VaccinationPrograms />} />
            <Route path="/programs/animal-welfare" element={<AnimalWelfare />} />

            {/* Other Pages */}
            <Route path="/community-awareness" element={<CommunityAwareness />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/impact" element={<Impact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
