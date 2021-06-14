import { createSelector } from 'reselect';

const getDealersSelector = (state) => {
  return state.lists.list
}

const getSearchValue = (state) => {
  return state.lists.searchValue
}

export const getProducts = (state) => {
  return state.lists.products
}

export const getDealers = createSelector(getDealersSelector, getSearchValue, getProducts, (list, searchValue, products) => {
  if (searchValue) {
    const result = products.filter(item => {
      if (item.name.toLowerCase().includes(searchValue) || item.brand.toLowerCase().includes(searchValue)
        || item.dealer.toLowerCase().includes(searchValue) || item.id.includes(searchValue)) {
       return item
      }
    })
    const dealersResult = []
    const dealersNames = []
    result.forEach(product => {
      list.filter(dealer => {
        if (product.dealer.toLowerCase() === dealer.name.toLocaleLowerCase() && !dealersNames.includes(dealer.name)) {
          dealersResult.push(dealer)
          dealersNames.push(dealer.name)
        }
      })
    })
    return dealersResult
  }
  return list
})