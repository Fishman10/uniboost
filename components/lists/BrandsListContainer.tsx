import { useEffect } from "react";
import { connect } from "react-redux";

import { ListHeadContainer } from "../lists/ListHeadContainer";
import { ListBody } from "../lists/ListBody";

import { toggleItem, clearSelectedItems } from "../../redux/listAction";
import { getBrandsList } from "../../redux/brandsAction";
import { getProductsList } from "../../redux/productsAction";

import { getBrands} from "../../redux/selectors/brandsSelector";
import { Brand, Product } from "../../types/data";

type PropsType = {
  getBrandsList: () => Brand[];
  getProductsList: () => Product[];
  brands: Brand[];
  products: Product[];
  selectedItemsId: string[] | number[];
  toggleItem: (id: string | number) => void;
  clearSelectedItems: () => void;
};

const BrandsList: React.FC<PropsType> = ({
  getBrandsList,
  getProductsList,
  brands,
  selectedItemsId,
  toggleItem,
  clearSelectedItems,
  products
}) => {
  useEffect(() => {
    if (products.length === 0) {
      getProductsList()
    }
    getBrandsList();
    clearSelectedItems();
  }, []);

  return (
    <section className="container">
      <ListHeadContainer />
      <ListBody
        list={brands}
        selectedItemsId={selectedItemsId}
        toggleItem={toggleItem}
      />
    </section>
  );
};

export const BrandsListContainer = connect(
  (state) => ({
    brands: getBrands(state),
    selectedItemsId: state.lists.selectedItemsId,
    products: state.lists.products,
    // products: getProducts(state),
  }),
  {
    getBrandsList,
    toggleItem,
    clearSelectedItems,
    getProductsList
  }
)(BrandsList);
