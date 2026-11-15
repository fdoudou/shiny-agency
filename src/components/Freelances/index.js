import { useContext, useEffect, useState /*, useReducer,useRef*/ } from "react";
import { Link } from "react-router-dom";
import DefaultPicture from "../../assets/profile.png";
import Card from "../Card";
import { useFetch } from "../../hooks";

export default function Freelances(props) {
  const apiURL = "https://shiny-backend--softgeekvert.replit.app/freelances";//https://shiny-backend--softgeekvert.replit.app/freelances
  const { isLoading, data, error } = useFetch(apiURL);

  const freelancersList = data.freelancersList;

  if (error) {
    return <p className="dz-margin-top text-center">Une erreur est survenue!</p>;
  }

  return (
    <>
      <div className="dz-margin-top">
        <h1 className="text-center text-bold" style={{ fontSize: "30px" }}>
          Trouvez votre prestataire
        </h1>
        <p className="text-secondary text-center" style={{ fontSize: "20px",padding: "25px 0px" }}>
          Chez Shiny, nous réunissons les meilleurs profils pour vous.
        </p>
        <div>
          <div className="container">
            {isLoading ? (
              <div className="loader centered"></div>
            ) : !freelancersList ? (
              <div className="error">Une erreur est survenue!</div>
            ) : (
              <div className="card-container gap-2-">
                {freelancersList.map((profile, index) => (
                <Card
                  key={`${profile.name}-${index}`}
                  label={profile.job}
                  picture={profile.picture}
                  title={profile.name}
                  id={profile.id}
                />
              ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
