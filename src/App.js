import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import AboutPage from './components/AboutPage/AboutPage';
import PortfolioPage from './components/PorfolioPage/PorffolioPage';
import ContactPage from './components/ContactPage/ContactPage';
import { useState } from 'react';


function App() {
  const [aboutStyle, setAboutStyle] = useState('');
  const [portfolioStyle, setPortfolioStyle] = useState('none');
  const [contactStyle, setContactStyle] = useState('none');

  return (
    <div className="App">
      <HeaderComponent 
        aboutStyle = {aboutStyle}
        setAboutStyle = {setAboutStyle}
        portfolioStyle = {portfolioStyle}
        setPortfolioStyle = {setPortfolioStyle}
        contactStyle = {contactStyle}
        setContactStyle = {setContactStyle}
      />
      <AboutPage 
        aboutStyle = {aboutStyle}
      />
      <PortfolioPage 
        portfolioStyle = {portfolioStyle}
      />
      <ContactPage 
        contactStyle = {contactStyle}
      />
    </div>
  );
}

export default App;
