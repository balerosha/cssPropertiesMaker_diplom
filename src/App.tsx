import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { AuthContext } from "./context/AuthContext";
import { CssExamplePropertiesBlock } from "./components/CssExamplePropertiesBlock";
import { PrivatRoute } from "./components/PrivatRoute";
import "./totalStyles.css";

export function App() {
  const contextAuth = useContext(AuthContext);
  return (
    <div className="app">
      <Router>
        {contextAuth && (
          <nav className="app_navigation">
            <NavLink
              className="nav_link"
              to={{
                pathname: "/buttons",
                state: {
                  button: true,
                  input: false,
                  div: false,
                  url: "https://blooming-everglades-11675.herokuapp.com/buttons",
                },
              }}
            >
              Button
            </NavLink>
            <NavLink
              className="nav_link"
              to={{
                pathname: "/inputs",
                state: {
                  button: false,
                  input: true,
                  div: false,
                  url: "https://blooming-everglades-11675.herokuapp.com/inputs",
                },
              }}
            >
              Input
            </NavLink>
            <NavLink
              className="nav_link"
              to={{
                pathname: "/divs",
                state: {
                  button: false,
                  input: false,
                  div: true,
                  url: "https://blooming-everglades-11675.herokuapp.com/blocks",
                },
              }}
            >
              Block
            </NavLink>
          </nav>
        )}
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <PrivatRoute path="/buttons" component={CssExamplePropertiesBlock} />
          <PrivatRoute path="/inputs" component={CssExamplePropertiesBlock} />
          <PrivatRoute path="/divs" component={CssExamplePropertiesBlock} />
        </Switch>
      </Router>
    </div>
  );
}
