import { useEffect } from "react";
import { connect } from "react-redux";

import { ListHeadContainer } from "../lists/ListHeadContainer";
import { ListBody } from "../lists/ListBody";

import { toggleItem, clearSelectedItems } from "../../redux/listAction";
import { getProductsList } from "../../redux/productsAction";
import { getProducts } from "../../redux/selectors/productsSelector";
import { Product } from "../../types/data";

type PropsType = {
  getProductsList: () => Product[];
  products: Product[];
  selectedItemsId: string[] | number[];
  toggleItem: (id: string | number) => void;
  clearSelectedItems: () => void;
};

const ProductsList: React.FC<PropsType> = ({
  products,
  selectedItemsId,
  toggleItem,
  getProductsList,
  clearSelectedItems,
}) => {
  useEffect(() => {
    getProductsList();
    clearSelectedItems();
  }, []);
  return (
    <section className="container">
      <ListHeadContainer />
      <ListBody
        list={products}
        selectedItemsId={selectedItemsId}
        toggleItem={toggleItem}
      />
    </section>
  );
};

export const ProductsListContainer = connect(
  (state) => ({
    products: getProducts(state),
    selectedItemsId: state.lists.selectedItemsId,
  }),
  {
    getProductsList,
    toggleItem,
    clearSelectedItems,
  }
)(ProductsList);
