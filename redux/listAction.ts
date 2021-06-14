import { ListsAction, ListsActionTypes } from '../types/lists';

export const setSearchValue = (text: string): ListsAction => ({
  type: ListsActionTypes.SET_SEARCH_VALUE,
  payload: text,
});

export const toggleItem = (id: number | string): ListsAction => ({
  type: ListsActionTypes.TOGGLE_ITEM,
  payload: id
})

export const removeItem = (): ListsAction => ({
  type: ListsActionTypes.REMOVE_ITEM
})

export const doSomething = (): ListsAction => ({
  type: ListsActionTypes.DO_SOMETHING
})

export const clearSelectedItems = (): ListsAction => ({
  type: ListsActionTypes.CLEAR_SELECTED_ITEMS
})


