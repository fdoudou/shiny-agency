import { useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { SurveyContext, ThemeContext } from "../../Contextor";
import { useFetch } from "../../hooks";

import { Link } from "react-router-dom";

export default function Survey(props) {
    let { questionNumber } = useParams();
    questionNumber = parseInt(questionNumber);
    const prev = parseInt(questionNumber) - 1;
    const next = parseInt(questionNumber) + 1;
    const { response, saveResponse } = useContext(SurveyContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const apiURL = "https://shiny-backend-9dgm.onrender.com/survey";
    const { isLoading, data, error } = useFetch("https://shiny-backend--softgeekvert.replit.app/survey");
    const surveyData = data?.surveyData;

    function saveReply(answer) {        
        // document.startViewTransition(function(){
            saveResponse({ [questionNumber]: answer })
        // });
    }

    function setActive(index) {
        const selectBox = document.getElementsByClassName('reply-box');
        for (let c = 0; c < selectBox.length; c++) {
            selectBox[c].classList.remove('selected');
        }
        selectBox[index].classList.add('selected');
    }

    if (error) {
        return <p className="text-center">Une erreur est survenue!</p>
    }

    return (
        <div className="survey-container container">
            <h1>Questionnaire</h1>
            <h2 className="question-title">Question {questionNumber}</h2>
            {/* <Link to="client">Questionnaire client</Link>
            <Link to="freelance">Questionnaire freelance</Link> */}

            {isLoading ? (<div className="loader centered"></div>) : (
                <>
                    <div className="question-content result-content text-center">
                        {surveyData && surveyData[questionNumber]}
                    </div>

                    <div className="reply-wrapper">
                        <button className={`reply-box bkgd-${theme}`} onClick={() => { saveReply(true); setActive(0) }}>Oui</button>
                        <button className={`reply-box bkgd-${theme}`} onClick={() => { saveReply(false); setActive(1) }}>Non</button>
                    </div>

                    <div className="link-wrapper">
                        {questionNumber === 1 ? <Link className="pagination" to='/survey/1'>Précédent</Link> : <Link className="pagination" to={`/survey/${prev}`}>Précédent</Link>}
                        {questionNumber === 6 ? <Link className="pagination" to='/results'>Résultats</Link> : <Link className="pagination" to={`/survey/${next}`}>Suivant</Link>}
                    </div>
                </>
            )
            }
        </div>
    )
}