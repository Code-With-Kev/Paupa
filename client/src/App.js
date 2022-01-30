import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import './App.css'
import React, {useState} from 'react';
import AllBubbles from "./components/Bubble/AllBubbles";

function App() {
    const [formSubmitted, setFormSubmitted] = useState(false)

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <AllBubbles formSubmitted={formSubmitted}/>
                    </Route>
                    {/* <Route exact path="/pirate/new">
                        <CreatePiratePage />
                    </Route>
                    <Route exact path="/pirates/:id">
                        <DisplayOne />
                    </Route> */}
                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
