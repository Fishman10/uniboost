import { useState } from "react";
import { faUser, faChartBar, faGem } from "@fortawesome/free-regular-svg-icons";
import { faOutdent, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/SideMenu.module.css";

export const SideMenu: React.FC = () => {
  const [show, setShow] = useState(true);

  const toggleSideBar = () => {
    setShow((show) => !show);
  };

  return (
    <aside className={show ? styles["side-menu"] : styles["hidden-menu"]}>
      <button>
        <FontAwesomeIcon icon={faQrcode} />
      </button>
      <button>
        <FontAwesomeIcon icon={faUser} />
      </button>
      <button>
        <FontAwesomeIcon icon={faGem} />
      </button>
      <button>
        <FontAwesomeIcon icon={faChartBar} />
      </button>
      <button onClick={toggleSideBar}>
        <FontAwesomeIcon icon={faOutdent} />
      </button>
    </aside>
  );
};
