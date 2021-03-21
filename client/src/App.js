import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInPage from "./pages/SignIn";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={SignInPage} exact />
            </Switch>
        </Router>
    );
}

export default App;
