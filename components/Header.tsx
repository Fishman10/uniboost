import styles from "../styles/Header.module.css";

import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import { Options } from "../components/Options";

export const Header: React.FC = () => (
  <header className={styles.color}>
    <div className={styles.header}>
      <Logo />
      <Menu />
      <Options />
    </div>
  </header>
);
