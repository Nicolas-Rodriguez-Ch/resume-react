import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import AboutPage from './components/AboutPage/AboutPage'
import PortfolioPage from './components/PorfolioPage/PorffolioPage';
import ContactPage from './components/ContactPage/ContactPage';
import { useState } from 'react';


function App() {
  const [style, setStyle] = useState('none');

  const renderFunction = () => {
    setStyle('none');
  }
  return (
    <div className="App">
      <HeaderComponent 
        renderFunction = {renderFunction}
        style = {style}
        setStyle = {setStyle}
      />
      <AboutPage 
        style = {style}
        setStyle = {setStyle}
      />
      <PortfolioPage 
        style = {style}
        setStyle = {setStyle}
      />
      <ContactPage 
        style = {style}
        setStyle = {setStyle}
      />
    </div>
  );
}

export default App;
