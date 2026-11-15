import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SurveyContext, ThemeContext } from "../../Contextor";
import lightLogo from "../../assets/light-logo.png";
import darkLogo from "../../assets/dark-logo.png";

export default function Header(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    function toggleNav(target) {
        if (document.querySelector(target).className === 'modal-parent') {
            document.querySelector(target).className = 'jma-show';
        }   else {
            document.querySelector(target).className = 'modal-parent';
        }
    }

    return (
        <>
            <div className={`container-large nav-bar dz-flex-12 ${theme}`}>
                <Link className="app-logo dz-flex-1" to="/"><img className="logo" width="150px" src={theme === "dark" ? lightLogo : darkLogo}alt="logo"/></Link>
                
                <span className="nav-link dz-flex-11 dz-flex-end">
                    {/* <Link className="link dz-hide-mobile" to="/">Accueil</Link> */}
                    <Link className="link dz-hide-mobile" to="/post">Déposer une offre</Link>
                    <Link className="link dz-hide-mobile" to="/freelances">Freelances</Link>
                    <Link className="link dz-hide-mobile" to="/jobs">Jobs</Link>
                    <Link className="link dz-hide-mobile" to="/login">Se connecter</Link>
                    <Link className="link action-btn" to="/survey/1">Faire le test</Link>
                    <button onClick={()=>{toggleNav('#mobile-nav')}} className={`menu-btn btn dz-hide-nomobile ${theme}`}>
                        <svg className="jma-svg" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </span>
            </div>
            <div className="modal-parent dz-animate-top-" id="mobile-nav">
                {/* <div className='modal-underlay' onClick={() => { toggleNav('#mobile-nav') }}></div> */}
                <div className={`jma-modal overlay-content dz-animate-top- ${theme}`} style={{right:"auto",left:"0%"}}>
                    {/* <button className="action-btn " style={{ fontSize: "22px"}} onClick={() => { toggleNav('#mobile-nav') }}>&times;</button> */}
                    <span className="link jma-pdg-16 jma-block text-center" onClick={() => { toggleNav('#mobile-nav') }}><Link  className="nav-btn-mobile" to="/jobs">Jobs</Link></span>
                    <span className="link jma-pdg-16 jma-block text-center" onClick={() => { toggleNav('#mobile-nav') }}><Link  className="nav-btn-mobile" to="/freelances">Freelances</Link></span>
                    <span className="link jma-pdg-16 jma-block text-center" onClick={() => { toggleNav('#mobile-nav') }}><Link  className="nav-btn-mobile" to="/post">Déposer une offre</Link></span>
                    <span className="link jma-pdg-16 jma-block text-center" onClick={() => { toggleNav('#mobile-nav') }}><Link  className="nav-btn-mobile" to="/register">S'inscrire</Link></span>
                </div>
            </div>
        </>
    )
}