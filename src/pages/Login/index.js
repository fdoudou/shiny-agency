import { useEffect, useReducer,useRef,useState,useContext } from "react";
import { Link } from "react-router-dom";
import { SurveyContext, ThemeContext } from "../../Contextor";
import { useFetch } from "../../hooks";

export default function LoginForm(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
    // const { user, setUser } = useContext(MyContext);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const { isLoading, data, error } = useFetch("https://shiny-backend--softgeekvert.replit.app/survey");

    function signup(params) {
      
    }
  return (
    <div>
      <div className={`dz-margin-top-bottom-16 form needs-validation bkgd-${theme} dz-w-90-m dz-w-350-l dz-centered dz-padding dz-round-large`}>
        <h1 className="text-center">Connexion</h1>
        <form action="" method="post" className="needs-validation dz-w-100">
          <div className="dz-padding-top-bottom dz-w-100">
            <label htmlFor="validationCustomUsername" className="form-label dz-medium dz-padding-top-bottom">
              Nom d'utilisateur (adresse email)
            </label>
            <div className="input-group has-validation dz-w-90">
              <input
                ref={emailRef}
                type="email"
                className="form-control dz-padding dz-w-100 dz-round-large dz-border-0-"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              ></input>
              <div className="invalid-feedback dz-small">L'adress email de votre compte.</div>
            </div>
          </div>
          <div className="dz-padding-top-bottom dz-w-100">
            <label htmlFor="validationCustomUsername" className="form-label dz-medium dz-padding-top-bottom">
              Mot de passe
            </label>
            <div className="input-group has-validation dz-w-90">
              <input
                ref={passwordRef}
                minLength={6}
                type="password"
                className="form-control dz-padding dz-w-100 dz-round-large dz-border-0-"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              ></input>
              <div className="invalid-feedback dz-small">Le mot de passe de votre compte.</div>
            </div>
          </div>
          <div className="dz-w-100 dz-padding-top-bottom">
            <button onClick={signup} className="dz-btn dz-round dz-padding dz-w-100 dz-primary dz-text-white dz-ripple dz-border-0 dz-medium" type="submit">
              Se connecter
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
