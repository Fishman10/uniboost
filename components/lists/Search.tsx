import React from "react";

import styles from "../../styles/ListHead.module.css";

interface PropsType {
  setSearchValue: (text: string) => void,
}

export const Search: React.FC<PropsType> = ({setSearchValue}) => {

  const setValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  };

  return (
    <div className={styles.search}>
      <input
        onChange={setValue}
        placeholder="Поиск: товар, артикул, поставщик, бренд"
      />
    </div>
  );
};
