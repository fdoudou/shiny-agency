import { useEffect, useReducer,useRef,useState,useContext } from "react";
import { Link } from "react-router-dom";
import { SurveyContext, ThemeContext } from "../../Contextor";
import { useFetch } from "../../hooks";

export default function SignupForm(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
    // const { user, setUser } = useContext(MyContext);
    const { isLoading, data, error } = useFetch("https://shiny-backend--softgeekvert.replit.app/survey");
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const phoneRef = useRef(null);
    function signup(params) {
      
    }
  return (
    <div>
      <div className="dz-margin-top-bottom-16 dz-w-96-m grid-c-2 col-gap-2 container dz-centered dz-padding">
        <div className="dz-w-350-l dz-hide">
          <h3 className="dz-xxlarge">Je suis freelance</h3>
          <div className="">Je peux référencer mon profil et trouver des clients.</div>
          <button form="registration-form" type="button" name="account-type" value="freelance" className="dz-btn dz-large dz-padding dz-ripple dz-round-xlarge">Créer profil freelance</button>
        </div>
        <div className="dz-w-350-l dz-hide">
          <h3 className="dz-xxlarge">Je suis client</h3>
          <div className="">Je recherche un freelance pour réaliser mon projet.</div>
          <button form="registration-form" type="button" name="account-type" value="client" className="dz-btn dz-large dz-padding dz-ripple dz-round-xlarge">Créer profil recruiteur</button>
        </div>
      </div>
      <div className={`form needs-validation dz-w-90-m dz-w-350-l dz-centered bkgd-${theme} dz-round-large dz-padding`}>
        <h1 className="text-center">Créer un compte</h1>
        <form id="registration-form" action="" method="post" className="needs-validation dz-w-100 dz-centered">
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
          <div className="dz-padding-top-bottom dz-w-100">
            <label htmlFor="validationCustomUsername" className="form-label dz-medium dz-padding-top-bottom">
              Numéro de téléphone
            </label>
            <div className="input-group has-validation dz-w-90">
              <input
                ref={phoneRef}
                minLength={9}
                maxLength={9}
                pattern="^\d+$"
                type="tel"
                inputMode="numeric"
                className="form-control dz-padding dz-w-100 dz-round-large dz-border-0-"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              ></input>
              <div className="invalid-feedback dz-small">Doit contenir exatement 9 chiffres.</div>
            </div>
          </div>
          <div className="dz-w-100 dz-padding-top-bottom">
            <button onClick={signup} className="dz-btn dz-round dz-padding dz-w-100 dz-primary dz-text-white dz-ripple dz-border-0 dz-medium" type="submit">
              S'inscrire
            </button>
          </div>
          <div className="">
            <p>
              Vous avez déjà un compte?{" "}
              <Link to="/login" className="dz-text-primary">Connectez-vous</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}