import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  ingredients: null,
  totalPrice: 40,
  error: false,
  building: false,
};

const INGREDIENT_PRICES = {
  salad: 1.5,
  cheese: 10,
  meat: 1.5,
  bacon: 5,
};

// add ingredients logic
const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updatedState;
};

// remove ingredient logic
const removeIngredient = (state, action) => {
  const updatedIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updatedSt;
};

// set ingredients logic
const setIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    error: false,
    totalPrice: 40,
    building: false,
  });
};

const fetchIngredientsFail = (state, action) => {
  return updateObject(state, {
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  //
  switch (action.type) {
    //
    // add ingredients
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);

    // remove ingredient
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);

    // set ingredients
    case actionTypes.SET_INGREDIENTS:
      return setIngredient(state, action);

    // fetch ingredient failed
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFail(state, action);

    default:
      return state;
  }
};

export default reducer;
