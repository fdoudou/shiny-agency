import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from '../../Contextor'
import error404 from "../../assets/404.svg";

export default function ClientForm(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="container home-wrapper-">
            <div className={`home-wrapper bkgd-${theme}`}>
                <p className="text-center" style={{ fontSize:"20px",padding:"20px 0px" }}>Une erreur est survenue!</p>
                <div className="home-illustration-wrapper centered">
                    <img className="home-illustration" loading="lazy" src={error404} alt="home-illustration"/>
                </div>
                <p className="text-center" style={{ fontSize:"20px",padding:"20px 0px" }}>Il semblerait que la page que vous cherchez n’existe pas</p>
            </div>
        </div>
    )
}