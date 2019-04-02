import { GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE } from '../actionTypes';
import initialState from '../initialState';
import update from "immutability-helper";

export default function product (state = initialState.product, action) {
  switch(action.type) {
    case GET_ALL_PRODUCTS_SUCCESS: {
      return update(state, {
        products: { $set: action.products}
      });
    }

    case GET_ALL_PRODUCTS_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }
    default:
      return state
  }
}