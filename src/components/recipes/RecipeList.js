import React from "react";
import RecipeItem from "./RecipeItem";
import SearchRecipe from "./RecipeItem";

export function RecipeList() {
    return (
      <>
        <RecipeItem></RecipeItem>
        <SearchRecipe></SearchRecipe>
      </>    
    );
}

export default RecipeList;
