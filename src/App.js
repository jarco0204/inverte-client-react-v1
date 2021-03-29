import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import MainComponent from "./pages/UserMain";
import PrepareOrder from "./pages/Prepare";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={SignInPage} exact />
            </Switch>
            <Switch>
                <Route path="/username/main" component={MainComponent} exact />
            </Switch>
            <Switch>
                <Route
                    path="/username/prepare"
                    component={PrepareOrder}
                    exact
                />
            </Switch>
        </Router>
    );
}

export default App;
