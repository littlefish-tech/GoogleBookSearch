import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Footer><a href="https://vast-garden-33544.herokuapp.com/" style={{color: "black"}}>@ 2020 Google Book Search Copyright</a></Footer>
      </div>
    </Router>
  );
}

export default App;