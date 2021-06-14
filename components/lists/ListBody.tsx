import classNames from "classnames/bind";

import styles from "../../styles/ListBody.module.css";
import { Item } from "../../types/data";

type PropsType = {
  selectedItemsId: string[] | number[];
  toggleItem: (id: string | number) => void;
  list: Item[];
}

export const ListBody: React.FC<PropsType> = ({ selectedItemsId, toggleItem, list }) => {
  const cx = classNames.bind(styles);

  return (
    <div className={styles.list}>
      <div className={styles.item} key="0">
        <input
          onChange={() => toggleItem("common-checkbox")}
          className={styles["hidden-checkbox"]}
          type="checkbox"
          id="common-checkbox"
        />
        <label htmlFor="common-checkbox"></label>
        <div>Название</div>
        <div>Заметки</div>
      </div>

      {list.map((item) => {
        const classItem = cx({
          item: true,
          active: selectedItemsId.includes(item.id),
        });

        return (
          <div
            onClick={() => toggleItem(item.id)}
            data-id={item.id}
            className={classItem}
            key={item.id}
          >
            <input
              checked={selectedItemsId.includes(item.id)}
              className={styles["hidden-checkbox"]}
              type="checkbox"
              id={item.id}
              data-id={item.id}
              readOnly
            />
            <label htmlFor={item.id}></label>
            <div>{item.name}</div>
            <div>{item.comment}</div>
          </div>
        );
      })}
    </div>
  );
};
