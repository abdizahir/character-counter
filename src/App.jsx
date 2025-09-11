import { ThemeContext } from './store/ThemeContext';
import { useContext } from 'react';

import DensityContainer from './components/DensityContainer';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import StateContainer from './components/StateContainer';
import Footer from './components/Footer';

function App() {
  const {darkMode} = useContext(ThemeContext);
  const bgClass = darkMode ? 'bg-natural-900' : 'bg-natural-100';
  const textClass = darkMode ? 'text-natural-200' : 'text-natural-700';
  return (
      <div className={`p-4 md:py-8 md:px-40 sm:py-4 sm:px-8 ${bgClass} ${textClass}`}>
      <Header />
      <MainContainer />
      <StateContainer />
      <DensityContainer />
      <Footer />
      </div>
  )
}

export default App;
