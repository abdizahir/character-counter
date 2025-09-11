import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';
function Footer() {
    const {darkMode} = useContext(ThemeContext);
    const bgColor = darkMode ? 'text-natural-200' : 'text-natural-900';
    return (
        <div className={`text-center ${bgColor}`}>
            Challenge by <a className="text-xl text-blue-500 hover:text-blue-700" href="https://www.frontendmentor.io/challenges/character-counter-znSgeWs_i6" target="_blank">Frontend Mentor</a>. 
            Coded by <a className="text-xl font-bold text-blue-500 hover:text-blue-700" href="https://x.com/abdalahmohamad" target='_blank'>Abdalah</a>.
        </div>
    );
}

export default Footer;