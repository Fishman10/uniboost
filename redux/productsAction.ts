import { productsAPI } from '../api/productsAPI';
import { Dispatch } from "redux";
import { Product } from '../types/data';
import { ListsAction, ListsActionTypes } from '../types/lists';
import { products } from "../add/lists";

export const getProducts = (list: Product[]): ListsAction => {
  return ({
    type: ListsActionTypes.GET_PRODUCTS,
    payload: list,
  });
}

export const getProductsList = () => async (dispatch: Dispatch<ListsAction>) => {
  const data = await productsAPI.getProducts('token')
  //temporary solutions
  dispatch(getProducts(products));
};