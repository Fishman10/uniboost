import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/Header.module.css";

export const Options: React.FC = () => (
  <div className={styles.options}>
    <button><FontAwesomeIcon icon={faMoon} /></button>
    <button>
      <FontAwesomeIcon icon={faSearch} />
    </button>
    <button>
      <FontAwesomeIcon icon={faBell} />
    </button>
    <button><img src="/lists/flag.png" /></button>
  </div>
);
