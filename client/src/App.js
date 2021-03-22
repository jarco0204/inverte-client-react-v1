import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import MainComponent from "./pages/UserMain";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={SignInPage} exact />
            </Switch>
            <Switch>
                <Route path="/username/main" component={MainComponent} exact />
            </Switch>
        </Router>
    );
}

export default App;
