import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import './App.css'
import React, {useState} from 'react';
import BubbleDetails from "./components/Bubble/BubbleDetails";
import DashboardPage from "./views/DashboardPage";
import NavBar from "./components/UI/NavBar";
import BarChart from "./components/UI/BarChart";
import LoginRegistrationPage from "./views/LoginRegistrationPage";

function App() {
    const [formSubmitted, setFormSubmitted] = useState(false)

    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <DashboardPage formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}/>
                    </Route>
                    <Route exact path="/create">
                    </Route>
                    <Route exact path="/show/:id">
                        <BubbleDetails />
                    </Route>
                    <Route exact path="/chart">
                        <LoginRegistrationPage />
                    </Route>
                    <Route exact path="/jeremy">
                        <BarChart />
                    </Route>

                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
