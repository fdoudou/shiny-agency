import { useContext, /*useEffect, useReducer,useRef,useState*/ } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SurveyContext, ThemeContext } from "../../Contextor";
// import "./style.css";

export default function JobCard({ label, title, picture, id }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Link to={`/job/${id}`} className={`card-wrapper bkgd-${theme}`}>
      <div className="card-label" style={{ paddingLeft: "25px",paddingTop: "5px"}}>{label}</div>
      <div className="dz-flex-12 dz-flex-wrap dz-flex-center dz-align-center">
        <div className="dz-flex-12 dz-flex-center" style={{ paddingTop: "25px"}}>
          <img
          className="card-img"
          src={picture}
          alt="freelance"
          height={80}
          width={80}
          />
        </div>
        <p className="dz-flex-12 dz-flex-center">{title}</p>
      </div>
    </Link>
  );
}

JobCard.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
};
JobCard.defaultProps = {
  title: "Mon titre par défaut",
  label: "",
  picture: "DefaultPicture",
};