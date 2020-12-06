import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function RecipeItem({ index, title, thumbnail }) {
  return (
    <Card>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
      <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

RecipeItem.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
};

export default RecipeItem;