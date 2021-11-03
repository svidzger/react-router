import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";

function NavBar() {
  const linkStyle = {
    margin: "5px",
    textDecoration: "none",
    color: "blue",
    fontWeight: "bold",
  };

  return (
    <Router>
      <div className="App">
        <header
          style={{
            backgroundColor: `black`,
            paddingTop: `20px`,
            paddingBottom: `20px`,
          }}
        >
          <h1 style={{ color: `white` }}>Welcome to React Router</h1>
        </header>

        <Link to="/" style={linkStyle}>Home</Link>{''}
        <Link to="/about" style={linkStyle}>About</Link>{''}
        <Link to="/contact" style={linkStyle}>Contact</Link>{''}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="*" render={() => <h1 style={{color: `red`}}>Page not found!</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default NavBar;
