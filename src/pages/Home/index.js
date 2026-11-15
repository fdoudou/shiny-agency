import { useContext,useEffect/*, useReducer,useRef,useState*/ } from "react";
import { Link } from "react-router-dom";
import { SurveyContext, ThemeContext } from "../../Contextor";
// import "./style.css";
import homeIllustration from "../../assets/home-illustration.svg";

export default function Home(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (
        <div className={`dz-margin-top-bottom-16 container-large home-wrapper bkgd-${theme}`}>
            {/* <h1>Agence Shiny</h1> */}
            <div className={`container container-large- grid-c-2 gap-2`}>
                <div className="" style={{width:"fit-content"}}>
                    <p className="home-text">
                    Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
                    </p>
                </div>
                <div className="home-illustration-wrapper">
                    <img className="home-illustration" loading="lazy" src={homeIllustration} alt="home-illustration"/>
                </div>
            </div>
            <div className="container" style={{marginTop:"45px",marginBottom:"25px"}}>
                <Link style={{ paddingRight:"50px",paddingLeft:"50px"}} className="link action-btn" to="/survey/1">Faire le test</Link>
            </div>
        </div>
    )
}