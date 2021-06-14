import { createSelector } from 'reselect';

const getBrandsSelector = (state) => {
  return state.lists.list
}

const getSearchValue = (state) => {
  return state.lists.searchValue
}

export const getProducts = (state) => {
  return state.lists.products
}

export const getBrands = createSelector(getBrandsSelector, getSearchValue, getProducts, (list, searchValue, products) => {
  if (searchValue) {
    const result = products.filter(item => {
      if (item.name.toLowerCase().includes(searchValue) || item.brand.toLowerCase().includes(searchValue)
        || item.dealer.toLowerCase().includes(searchValue) || item.id.includes(searchValue)) {
        return item
      }
    })
    const brandsResult = []
        const brandsNames = []
        result.forEach(product => {
          list.filter(brand => {
            if (product.brand.toLowerCase() === brand.name.toLocaleLowerCase() && !brandsNames.includes(brand.name)) {
              brandsResult.push(brand)
              brandsNames.push(brand.name)
            }
          })
        })
    return brandsResult
  }
  return list
})