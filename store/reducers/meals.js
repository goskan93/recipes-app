import { MEALS } from "../../data/data";
import * as actionTypes from "../actions/meals";
const initState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FAVOURITE:
      const index = state.favoriteMeals.findIndex((x) => x.id === action.id);
      let updatedFavMeals;
      if (index >= 0) {
        updatedFavMeals = state.favoriteMeals.filter((x) => x.id !== action.id);
      } else {
        updatedFavMeals = state.favoriteMeals.concat(state.meals.find((x) => x.id === action.id));
      }
      return { ...state, favoriteMeals: updatedFavMeals };
    case actionTypes.SET_FILTERS: {
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter((x) => {
        if (appliedFilters.glutenFree && !x.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !x.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !x.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !x.isVegetarian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: filteredMeals };
    }
    default:
      return state;
  }
};

export default reducer;
