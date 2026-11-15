import { useEffect, useReducer,useRef,useState,useContext } from "react";
import { Link } from "react-router-dom";
import { SurveyContext, ThemeContext } from "../../Contextor";
import { useFetch } from "../../hooks";

export default function JobForm(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
    // const { user, setUser } = useContext(MyContext);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dateRef = useRef(null);
    const budgetRef = useRef(null);
    const { isLoading, data, error } = useFetch("https://shiny-backend--softgeekvert.replit.app/survey");

    function postjob(params) {
      
    }
  return (
    <div className="dz-w-96-m grid-c-2 col-gap-2 container">
      <div className="dz-w-90-m dz-w-350-l dz-centered-">
        <div className="text-center- dz-xxlarge dz-bold dz-w-100 dz-padding">Trouvez un freelance, sans commission</div>
        <div className="text-justify dz-xlarge dz-w-100 dz-padding">Déposez votre mission gratuitement et contactez les freelances sans intermédiaire.</div>
      </div>
      <div className={`form needs-validation bkgd-${theme} dz-round-large`}>
        <h1 className="text-center dz-xlarge">Déposez votre mission (gratuit)</h1>
        <form action="" method="post" className="needs-validation dz-w-90-m dz-w-350-l dz-centered">
          <div className="dz-padding-top-bottom dz-w-100">
            <label htmlFor="validationCustomUsername" className="form-label dz-medium dz-padding-top-bottom">
            Quel est votre besoin ?
            </label>
            <div className="input-group has-validation dz-w-90">
              <input
                ref={titleRef}
                type="email"
                className="form-control dz-padding dz-w-100 dz-round-large dz-border-0-"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              ></input>
              <div className="invalid-feedback dz-small"></div>
            </div>
          </div>
          <div className="dz-padding-top-bottom dz-w-100">
            <label htmlFor="validationCustomUsername" className="form-label dz-medium dz-padding-top-bottom">
            Décrivez votre projet
            </label>
            <div className="input-group has-validation dz-w-90">
              <textarea style={{minHeight:"150px"}}
                ref={descriptionRef}
                minLength={6}
                type="password"
                className="form-control dz-padding dz-w-100 dz-round-large dz-border-0-"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              ></textarea>
              <div className="invalid-feedback dz-small"></div>
            </div>
          </div>

          {/* <div className="dz-padding-top-bottom dz-w-100">
            
          </div> */}
          <div className="dz-padding-top-bottom dz-w-100 gap-2 grid-c-2">
            <div className=" dz-w-100">
                <label htmlFor="validationCustomUsername" className="form-label dz-medium dz-padding-top-bottom">
                Quand démarrer ?
                </label>
                <div className="input-group has-validation dz-w-96">
                    <select ref={dateRef}
                    minLength={6}
                    type="password"
                    className="form-control dz-padding dz-w-100 dz-round-large dz-border-0-"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required>
                        <option value="unkown">Delai inderteminé</option>
                        <option value="immediate">Besoin immédiat</option>
                        <option value="next-week">La semaine prochaine</option>
                        <option value="next-month">Le mois prochain</option>
                        <option value="in-3-months">Dans 3 mois</option>
                    </select>
                <div className="invalid-feedback dz-small"></div>
                </div>
            </div>
            <div className=" dz-w-100">
                <label htmlFor="validationCustomUsername" className="form-label dz-medium dz-padding-top-bottom dz-padding-top-bottom">
                Budget estimé
                </label>
                <div className="input-group has-validation dz-w-90">
                    <input ref={budgetRef}
                    minLength={6}
                    type="number"
                    className="form-control dz-padding dz-w-100 dz-round-large dz-border-0-"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required></input>
                <div className="invalid-feedback dz-small"></div>
                </div>
            </div>
          </div>
          <div className="dz-w-100 dz-padding-top-bottom">
            <button onClick={postjob} className="dz-btn dz-round dz-padding dz-w-100 dz-primary dz-text-white dz-ripple dz-border-0 dz-medium" type="submit">
              Publier maintenant
            </button>
          </div>
          <div className="lien_inscription">
            <p>
              Vous n'avez pas de compte?{" "}
              <Link to="/signup" className="dz-text-primary">Inscrivez-vous</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
