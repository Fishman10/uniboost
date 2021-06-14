import styles from "../styles/Footer.module.css";

import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { References } from "./References";

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className="container">
      <Logo />
      <Menu />
      <button><img src="flag.png" /></button>
      <div className={styles.contact}>
        <input placeholder="Email"></input>
        <button></button>
      </div>
    </div>
    <div className="container">
      <References />
    </div>
  </footer>
);
