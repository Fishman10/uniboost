import { dealersAPI } from "../api/dealersAPI"
import { Dispatch } from "redux";
import { ListsAction, ListsActionTypes } from '../types/lists';
import { dealers } from "../add/lists";
import { Dealer } from '../types/data';

export const getDealers = (list: Dealer[]): ListsAction => ({
  type: ListsActionTypes.GET_DEALERS,
  payload: list
});

export const getDealersList = () => async (dispatch: Dispatch<ListsAction>) => {
  const data = await dealersAPI.getDealers('token')
  //temporary solutions
  dispatch(getDealers(dealers));
};