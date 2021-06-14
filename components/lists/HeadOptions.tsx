import { faTrashAlt, faFolder } from "@fortawesome/free-regular-svg-icons";

import styles from "../../styles/ListHead.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PropsType = {
  removeItem: () => void;
  doSomething: () => void;
};

export const HeadOptions: React.FC<PropsType> = ({ removeItem, doSomething }) =>  (
  <div className={styles.options}>
    <button onClick={doSomething}>
      <FontAwesomeIcon icon={faFolder} /> + <FontAwesomeIcon icon={faFolder} />
    </button>
    <button onClick={removeItem}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  </div>
);
