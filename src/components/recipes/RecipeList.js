import React, { useState, useEffect }from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeItem from "./RecipeItem";
import { BASE_URL } from "../../constants/api";
//import SearchRecipe from "./SearchRecipe";

export function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())  
      .then(json => setRecipes(json.results))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));

  }, []);

  if (loading) {
    return <Spinner animation="border" className="spinner" />
  }

  return (
    <Row>
      {recipes.map(recipe => {
        const { index, title, thumbnail } = recipe;

        return (
          <Col sm={6} md={3} key={index}>
            <RecipeItem index={index} title={title} thumbnail={thumbnail} /> 
          </Col>
        );
        
      })}
    </Row>    
  );
}

export default RecipeList;
