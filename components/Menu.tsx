import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames/bind";

import styles from "../styles/Header.module.css";

export const Menu: React.FC = () => {
  const router = useRouter();
  const cx = classNames.bind(styles);
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <Link href="/lists/products">
            <a
              title=""
              className={cx({
                "active-link": router.pathname === "/lists",
              })}
            >
              Списки
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a title="">Категории</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a title="">Товары</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a title="">Бренды </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a title="">Тренды</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
