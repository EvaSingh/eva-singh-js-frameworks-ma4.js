import React from "react";
//import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import RecipeList from "../recipes/RecipeList";
import RecipeItem from "../recipes/RecipeItem";

function Layout() {
    return(
      <Router>
        <Container>
          <Switch>
              <Route path="/" exact component={RecipeList} />
              <Route path="/recipe/:index" component={RecipeItem} />
          </Switch>
        </Container>
      </Router>   
    );
}

export default Layout;