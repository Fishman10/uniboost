import { connect } from "react-redux";

import styles from "../../styles/ListHead.module.css";

import { TabsNav } from "./TabsNav";
import { Search } from "./Search";
import { HeadOptions } from "./HeadOptions";

import {
  setSearchValue,
  removeItem,
  doSomething,
} from "../../redux/listAction";

type PropsType = {
  removeItem: () => void;
  doSomething: () => void;
  setSearchValue: (text: string) => void;
};

const ListHead: React.FC<PropsType> = ({
  setSearchValue,
  removeItem,
  doSomething,
}) => {
  return (
    <div className={`${styles.head} container`}>
      <TabsNav />
      <Search
        setSearchValue={setSearchValue}
      />
      <HeadOptions removeItem={removeItem} doSomething={doSomething} />
    </div>
  );
};

export const ListHeadContainer = connect(
  (state) => ({
    hasSearchStarted: state.lists.hasSearchStarted,
    activeTab: state.lists.activeTab,
  }),
  {
    removeItem,
    doSomething,
    setSearchValue,
  }
)(ListHead);
