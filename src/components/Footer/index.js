import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../Contextor'
import { Link } from "react-router-dom";
import lightLogo from "../../assets/light-logo.png";
import darkLogo from "../../assets/dark-logo.png";

export default function Footer(props) {
    const { toggleTheme, theme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme;
        localStorage.theme = theme;
    },[theme]);

    return (
        <div className="footer-container">
            <button className="night-mode-btn" onClick={() => { toggleTheme() }}>Changer de theme: {theme === "light" ? (<span><svg fill='none' viewBox='3 3 18 18' width='12' height='12' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' fill='currentColor' d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'></path></svg></span>) : (<span><svg fill='none' viewBox='2 2 20 20' width='12' height='12' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' fill='currentColor' d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'></path></svg></span>)}</button>
        </div>
    )
}