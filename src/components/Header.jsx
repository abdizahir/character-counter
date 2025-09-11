import darkLogo from '../assets/images/logo-dark-theme.svg';
import lightLogo from '../assets/images/logo-light-theme.svg';
import sun from '../assets/images/icon-sun.svg';
import moon from '../assets/images/icon-moon.svg';
import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';


function Header() {
    const {toggleTheme, darkMode} = useContext(ThemeContext);
    return(
        <main className={'my-4'}>
        <header className="w-full  flex justify-between">
            <img  src={darkMode ? darkLogo : lightLogo} alt="" />
            <button style={{cursor: 'pointer'}} onClick={toggleTheme} className={darkMode ? 'p-2 bg-natural-600 rounded-md' : `p-2 bg-natural-200 rounded-md`}>
                <img src={darkMode ? sun : moon} alt="" />
            </button>
        </header>
        <h1 className='text-4xl my-10 text-center font-bold sm:text-7xl md:text-8xl'>Analyze your text in real-time.</h1>
        </main>
    );
}

export default Header;