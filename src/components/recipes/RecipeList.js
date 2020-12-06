import React, { useState, useEffect }from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeItem from "./RecipeItem";
import { BASE_URL } from "../../constants/api";
import SearchRecipe from "./SearchRecipe";

export function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())  
      .then(json => {
        setRecipes(json.results);
        setFilteredRecipes(json.results);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const filterCards = function(e) {
    const searchValue = e.target.value.toLowerCase();
    const filteredArray = recipes.filter(function(rcp) {
      const lowerCaseName = rcp.title.toLowerCase();

      if (lowerCaseName.startsWith(searchValue)) {
        return true;
      }
      return false;
    });

    setFilteredRecipes(filteredArray);
  };

  if (loading) {
    return <Spinner animation="border" className="spinner" />
  }

  return (
    <>
      <SearchRecipe handleSearch={filterCards} />
      <Row>
        {filteredRecipes.map(recipe => {
          const {index, title, thumbnail } = recipe;

          return (
            <Col sm={6} md={3} key={index}>
              <RecipeItem index ={index} title={title} thumbnail={thumbnail} /> 
            </Col>
          );
        
        })}
      </Row> 
    </>    
  );
}

export default RecipeList;