import { brandsAPI } from './../api/brandsAPI';
import { Dispatch } from "redux";
import { Brand } from '../types/data';
import { ListsAction, ListsActionTypes } from '../types/lists';
import { brands } from "../add/lists";

export const getBrands = (list: Brand[]): ListsAction => ({
  type: ListsActionTypes.GET_BRANDS,
  payload: list
});

export const getBrandsList = () => async (dispatch: Dispatch<ListsAction>) => {
  const data = await brandsAPI.getBrands('token');
  //temporary solutions
  dispatch(getBrands(brands));
};