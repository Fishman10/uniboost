import Link from "next/link";

import styles from "../styles/Footer.module.css";

export const References: React.FC = () => (
  <nav className={styles.navbar}>
    <ul className={styles.references}>
      <li>
        <Link href="/">
          <a title="">@UniBoost 2021, All right reserved</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a title="">Terms & Conditions</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a title="">Privacy Policy</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a title="">Sales & Refunds </a>
        </Link>
      </li>
    </ul>
  </nav>
);
