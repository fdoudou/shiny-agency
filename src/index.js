import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ThemeProvider, SurveyProvider} from "./Contextor";
// import './index.css';
import './style.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 
import Profile from "./pages/Profile";
import JobListing from "./pages/Jobs"; 
import Job from "./pages/Job";
import JobForm from "./pages/Post";
import Survey from "./pages/Surveys";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Results from "./components/Results";
import Freelances from "./components/Freelances";
import ClientForm from "./components/ClientForm";
import FreelanceForm from "./components/FreelanceForm";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SurveyProvider >
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/survey/:questionNumber' element={<Survey/>}>
              <Route path='client' element={<ClientForm/>}/>
              <Route path='freelance' element={<FreelanceForm/>}/>
            </Route>
            <Route path='/profile/:profileId' element={<Profile/>}/>
            <Route path='/freelances' element={<Freelances/>}/>
            <Route path='/results' element={<Results/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/account' element={<Login/>}/>
            <Route path='/post' element={<JobForm/>}/>
            <Route path='/jobs' element={<JobListing/>}/>
            <Route path='/job/:jobId' element={<Job/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
          <Footer/>
        </SurveyProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();