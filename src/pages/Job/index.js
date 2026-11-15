import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DefaultPicture from "../../assets/profile.png";
import { SurveyContext, ThemeContext } from "../../Contextor";
import { useFetch } from "../../hooks";

export default function Job(props) {
  let { jobId } = useParams();
  jobId = parseInt(jobId);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const apiURL = `http://localhost:8000/job?id=${jobId}`;
  // `https://shiny-backend--softgeekvert.replit.app/freelance?id=${jobId}`;
  const { isLoading, data, error } = useFetch(apiURL);

  const jobData = data?.jobData;
  const skills = jobData?.skills;

  const skillSet = skills?.map((skill, index) => {
    return (
      <span key={index} className="skill-tag">
        {skill} 
      </span>
    );
  });

  const availabilityTag = (color) => {
    return (
      <svg style={{color:color}}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="8"></circle>
      </svg>
    );
  };

  if (error) {
    return <p className="text-center">Une erreur est survenue!</p>;
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center text-bold" style={{ fontSize: "30px" }}>
          Profils prestataire
        </h1>
        <div className="centered">
          <div className="profile-container">
            {isLoading ? (
              <div className="loader centered"></div>
            ) : !jobData ? (
              <div className="error">Une erreur est survenue!</div>
            ) : (
              <div className={`profile-wrapper dz-flex-12 bkgd-${theme}`}>
                <div className="dz-flex-4 dz-flex-end" style={{ paddingRight: "50px",paddingTop: "25px"}}>
                  <img
                    className="card-img"
                    src={jobData.picture}
                    alt="freelance"
                    height={130}
                    width={130}
                  />
                </div>
                <div className="dz-flex-8 dz-flex-wrap">
                  <div className="dz-flex-12 dz-align-center">
                    <span className="dz-flex-7" style={{ fontSize: "20px", fontWeight: "bold" }}>
                      {jobData.name}
                    </span>
                    <span className="dz-flex-5 dz-flex-" style={{ fontSize: "14px", padding:"0px 10px" }}>
                      {jobData.location}
                    </span>
                  </div>
                  <div className="dz-flex-12" style={{ fontSize: "16px", fontWeight: "bold" }}>{jobData.job}</div>
                  <div
                    className="dz-flex-wrap dz-flex-12 dz-align-center"
                    style={{ gap: "4px", padding: "5px 0px" }}
                  >
                    {skillSet}
                  </div>
                  <div className="dz-flex-12" style={{ fontSize: "20px", fontWeight: "bold" }}>€{jobData.budget} / jour</div>

                  {jobData.available === true ? 
                    <div className="dz-flex-12">
                      {availabilityTag("green")}
                      <span>Ouvert</span>
                    </div>
                   : 
                    <div className="dz-flex-12">
                      {availabilityTag("red")}
                      <span>Fermé</span>
                    </div>
                  }
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
