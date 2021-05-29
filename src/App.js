import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Setting from "./components/Navbar/Setting/Setting";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Navbar/Music/Music";
import News from "./components/Navbar/News/News";
import Navbar from "./components/Navbar/Navbar";
import {addPostToState} from "./redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPostToState={addPostToState}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news777' component={News}/>
                    <Route path='/music777' component={Music}/>git status
                    <Route path='/setting' component={Setting}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
