import { useContext, useEffect, useState /*, useReducer,useRef*/ } from "react";
import { Link } from "react-router-dom";
import DefaultPicture from "../../assets/profile.png";
import JobCard from "../../components/JobCard";
import { useFetch } from "../../hooks";
import { SurveyContext, ThemeContext } from "../../Contextor";

export default function JobListing(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const apiURL = "http://localhost:8000/jobs";//https://shiny-backend--softgeekvert.replit.app/freelances
  
  const { isLoading, data, error } = useFetch(apiURL);

  const jobsList = data?.jobsList;
  const skills = jobsList?.skills;

  // const skillSet = skills?.map((skill, index) => {
  //   return (
  //     <span key={index} className="skill-tag">
  //       {skill} 
  //     </span>
  //   );
  // });
  
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

  const jobWrapper = jobsList.map((job, id)=>{
    <div className={`profile-wrapper dz-flex-12 bkgd-${theme}`}>
      <div className="dz-flex-4 dz-flex-end" style={{ paddingRight: "50px",paddingTop: "25px"}}>
        <img
          className="card-img"
          src={job.picture}
          alt="freelance"
          height={130}
          width={130}
        />
      </div>
      <div className="dz-flex-8 dz-flex-wrap">
        <div className="dz-flex-12 dz-align-center">
          <span className="dz-flex-7" style={{ fontSize: "20px", fontWeight: "bold" }}>
            {job.name}
          </span>
          <span className="dz-flex-5 dz-flex-" style={{ fontSize: "14px", padding:"0px 10px" }}>
            {job.location}
          </span>
        </div>
        <div className="dz-flex-12" style={{ fontSize: "16px", fontWeight: "bold" }}>{job.job}</div>
        <div
          className="dz-flex-wrap dz-flex-12 dz-align-center"
          style={{ gap: "4px", padding: "5px 0px" }}
        >
          {/* {skillSet} */}
        </div>
        <div className="dz-flex-12" style={{ fontSize: "20px", fontWeight: "bold" }}>€{job.budget} / jour</div>

        {job.available === true ? 
          <div className="dz-flex-12">
            {/* {availabilityTag("green")} */}
            <span>Ouvert</span>
          </div>
         : 
          <div className="dz-flex-12">
            {/* {availabilityTag("red")} */}
            <span>Fermé</span>
          </div>
        }
      </div>
    </div>
  });

  if (error) {
    return <p className="text-center">Une erreur est survenue!</p>;
  }

  return (
    <>
      <div>
        <h1 className="text-center text-bold dz-xxlarge">
        Missions freelance
        </h1>
        <p className="text-secondary text-center container dz-xlarge dz-padding dz-padding-lr">
        Consultez des missions freelance publiées par des entreprises dans de nombreux domaines, pour des projets ponctuels ou des collaborations plus longues.
        </p>
        <form action="" method="post" className="text-center container dz-margin">
            <input type="search" placeholder="Rechercher par mots-clés" className="dz-padding dz-padding-lr dz-input dz-margin-right dz-w-25"></input>
            <select className="dz-padding dz-padding-lr dz-input dz-w-25">
                <option>Tous les métiers</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
            </select>
        </form>
        <div>
          <div className="container">
            {isLoading ? (
              <div className="loader centered"></div>
            ) : !jobsList ? (
              <div className="error">Une erreur est survenue!</div>
            ) : (
              {jobWrapper}
            )}
          </div>
        </div>
      </div>
    </>
  );
}
