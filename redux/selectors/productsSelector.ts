import { createSelector } from 'reselect';

const getProductsSelector = (state) => {
  return state.lists.list
}

const getSearchValue = (state) => {
  return state.lists.searchValue
}

export const getProducts = createSelector(getProductsSelector, getSearchValue, (products, searchValue) => {
  if (searchValue) {
    return products.filter(item => {
      if (item.name.toLowerCase().includes(searchValue) || item.brand.toLowerCase().includes(searchValue)
        || item.dealer.toLowerCase().includes(searchValue) || item.id.includes(searchValue)) {
        return item
      }
    })
  }
  return products
})