import React, { Component } from "react";
import Tab from "@material-ui/core/Tab";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Home from "./Home";
import Copyright from "@material-ui/icons/Copyright";
import { withStyles } from "@material-ui/core/styles";

const StyledAppBar = withStyles({
  root: {
    background: "rgba(76, 20, 40, 0)",
    boxShadow: "0px"
  }
})(AppBar);

const StyledCopyright = withStyles({
  root: {
    marginRight: "1em",
    color: "white"
  }
})(Copyright);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <StyledAppBar position='fixed'> */}
          {/* </StyledAppBar> */}
          <div className="main-container">
            {/* <Link to='/'><Tab label="Home"/></Link> */}
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
