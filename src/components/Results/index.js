import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SurveyContext, ThemeContext } from "../../Contextor";
import { useFetch } from "../../hooks";

export default function Results(props) {
  const { response, saveResponse } = useContext(SurveyContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const respData = () => {
    let respHolder = "";
    let count = 1;
    for (const resp in response) {
      respHolder += `a${count}=${response[resp]}&`;
      count++;
    }
    return respHolder;
  };
  const apiURL = "https://shiny-backend-9dgm.onrender.com/results?" + respData();
  const { isLoading, data, error } = useFetch("https://shiny-backend--softgeekvert.replit.app/results?" + respData());

  const surveyResult = data?.resultsData;

  const skillNeeded = surveyResult?.map((result, index) => {
    return (
      <span key={index} className="job-title" style={{fontSize: "26px"}}>{result.title}{index < surveyResult.length-1 && ", "}</span>
    );
  });
  const userAnswers = surveyResult?.map((result, index) => {
    return (
      <div key={index} className="job-wrapper">
        <span className="job-title text-justify-">{result.title}</span>
        <p className="job-description text-justify">{result.description}</p>
      </div>
    );
  });

  if (error) {
    return <p className="text-center">Une erreur est survenue!</p>;
  }
  return (
    <div className={`results-container `}>
      {isLoading ? (
        <div className="loader centered"></div>
        ) : (
          <div className={`container-large- result-wrapper bkgd-${theme}`}>
            <p className="text-center result-content" style={{padding: "20px 0px", fontSize: "26px"}}>
              Les compétences dont vous avez besoin : {skillNeeded}
            </p>
            
            <div className="text-center result-content" style={{padding: "30px 0px" }}>
              <Link style={{ paddingRight:"50px",paddingLeft:"50px"}} className="link action-btn" to="/freelances">
                Découvrez nos profils
              </Link>
            </div>
            <div className="text-center result-content" style={{padding: "20px" }}>{userAnswers}</div>
            <div className="text-justify result-content" style={{padding: "30px 0px" }}>
              <Link className="pagination" to="/freelances">Découvrez nos profils dès maintenant!</Link>
            </div>
          </div>
      )}
    </div>
  );
}
