import { useEffect } from "react";
import { connect } from "react-redux";

import { ListHeadContainer } from "../lists/ListHeadContainer";
import { ListBody } from "../lists/ListBody";

import { toggleItem, clearSelectedItems } from "../../redux/listAction";
import { getDealersList } from "../../redux/dealersAction";
import { getDealers } from "../../redux/selectors/dealersSelector";
import { Dealer, Product } from "../../types/data";
import { getProductsList } from "../../redux/productsAction";

type PropsType = {
  getDealersList: () => Dealer[];
  getProductsList(): () => Product[];
  dealers: Dealer[];
  selectedItemsId: string[] | number[];
  toggleItem: (id: string | number) => void;
  clearSelectedItems: () => void;
  products: Product[];
};

const DealersList: React.FC<PropsType> = ({
  getDealersList,
  getProductsList,
  dealers,
  selectedItemsId,
  toggleItem,
  clearSelectedItems,
  products,
}) => {
  useEffect(() => {
    if (products.length === 0) {
      getProductsList();
    }
    getDealersList();
    clearSelectedItems();
  }, []);

  return (
    <section className="container">
      <ListHeadContainer />
      <ListBody
        list={dealers}
        selectedItemsId={selectedItemsId}
        toggleItem={toggleItem}
      />
    </section>
  );
};

export const DealersListContainer = connect(
  (state) => ({
    dealers: getDealers(state),
    selectedItemsId: state.lists.selectedItemsId,
    products: state.lists.products,
  }),
  {
    getDealersList,
    toggleItem,
    clearSelectedItems,
    getProductsList
  }
)(DealersList);
