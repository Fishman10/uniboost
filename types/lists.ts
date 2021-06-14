import { Item, Product, Brand, Dealer } from './data';

export interface ListsState {
  list: Item[],
  products: Product[],
  brands: Brand[],
  dealers: Dealer[],
  selectedItemsId: string[] | number[],
  searchValue: string,
}

export enum ListsActionTypes {
  GET_PRODUCTS = 'GET_PRODUCTS',
  GET_BRANDS = 'GET_BRANDS',
  GET_DEALERS = 'GET_DEALERS',
  REMOVE_ITEM = 'REMOVE_ITEM',
  DO_SOMETHING = 'DO_SOMETHING',
  TOGGLE_ITEM = 'TOGGLE_ITEM',
  SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
  GET_SEARCH_RESULT = 'GET_SEARCH_RESULT',
  CLEAR_SELECTED_ITEMS = 'CLEAR_SELECTED_ITEMS'
}
interface getProductsAction {
  type: ListsActionTypes.GET_PRODUCTS,
  payload: Product[]
}
interface getBrandsAction {
  type: ListsActionTypes.GET_BRANDS,
  payload: Brand[]
}
interface getDealersAction {
  type: ListsActionTypes.GET_DEALERS,
  payload: Dealer[]
}
interface removeItemAction {
  type: ListsActionTypes.REMOVE_ITEM,
}
interface setSearchValueAction {
  type: ListsActionTypes.SET_SEARCH_VALUE,
  payload: string
}
interface getSearchResultAction {
  type: ListsActionTypes.GET_SEARCH_RESULT,
}
interface toggleItem {
  type: ListsActionTypes.TOGGLE_ITEM,
  payload: string | number
}
interface doSomethingAction {
  type: ListsActionTypes.DO_SOMETHING,
}
interface clearSelectedItems {
  type: ListsActionTypes.CLEAR_SELECTED_ITEMS
}

export type ListsAction = getProductsAction | getBrandsAction | getDealersAction | clearSelectedItems |
  removeItemAction | setSearchValueAction | getSearchResultAction | doSomethingAction | toggleItem
