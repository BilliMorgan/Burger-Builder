import * as actionType from './actionTypes';

import axios from "../../axios-orders";

export const addIngredient = (name) => {
  return {
    type: actionType.ADD_INGREDIENT,
    ingredientName: name
  }
}

export const removeIngredient = (name) => {
  return {
    type: actionType.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionType.SET_INGREDIENTS,
    ingredients: ingredients
  }
}
export const fetchIngredientsFailed = () =>{
  return {
    type: actionType.FETCH_INGREDIENTS_FAILED
  }
}

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://burger-builder-11cf6.firebaseio.com/ingredients.json")
      .then((response) => {
        dispatch (setIngredients(response.data))
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed())
      });

  }
}