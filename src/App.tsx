import React from 'react';
import './App.css';
import Header from "./Compnents/Header/Header";
import Navbar from "./Compnents/Navbar/Navbar";
import Profile from "./Compnents/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./Compnents/Dialogs/Dialogs";


 export  const App = () => {
    return(
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route exact path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

 

