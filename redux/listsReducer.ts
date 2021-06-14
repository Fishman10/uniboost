import { ListsState, ListsAction, ListsActionTypes } from '../types/lists'

const initialState: ListsState = {
  list: [],
  products: [],
  brands: [],
  dealers: [],
  selectedItemsId: [],
  searchValue: null,
}
export const listsReducer = (state = initialState, action: ListsAction): ListsState => {

  switch (action.type) {
    case ListsActionTypes.GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        list: action.payload
      }
    }

    case ListsActionTypes.GET_BRANDS: {
      return {
        ...state,
        brands: action.payload,
        list: action.payload
      }
    }

    case ListsActionTypes.GET_DEALERS: {
      return {
        ...state,
        dealers: action.payload,
        list: action.payload
      }
    }

    case ListsActionTypes.TOGGLE_ITEM: {
      if (action.payload === "common-checkbox") {
        if (state.selectedItemsId.length === state.list.length) {
          return {
            ...state,
            selectedItemsId: []
          }
        }
        return {
          ...state,
          selectedItemsId: state.list.map(item => item.id)
        }
      }
      if (state.selectedItemsId.includes(action.payload)) {
        return {
          ...state,
          selectedItemsId: state.selectedItemsId.filter(item => item !== action.payload)
        }
      }
      return {
        ...state,
        selectedItemsId: [...state.selectedItemsId, action.payload]
      }
    }

    case ListsActionTypes.REMOVE_ITEM: {
      return {
        ...state,
        list: state.list.filter(item => !state.selectedItemsId.includes(item.id))
      }
    }

    case ListsActionTypes.CLEAR_SELECTED_ITEMS: {
      return {
        ...state,
        selectedItemsId: []
      }
    }

    case ListsActionTypes.SET_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.payload
      }
    }

    case ListsActionTypes.DO_SOMETHING: {
      const joinData = state.list.filter(item => state.selectedItemsId.includes(item.id))
      alert(`${JSON.stringify(joinData)}`)

      return state
    }

    default: return state
  }
}