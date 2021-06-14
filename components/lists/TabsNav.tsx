import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../styles/ListHead.module.css";
import classNames from "classnames/bind";

import { breadcrumbs } from "../../add/breadcrumbs";

export const TabsNav: React.FC = () => {

  const cx = classNames.bind(styles);

  const router = useRouter();

  return (
    <nav className={styles.tabs}>
      <ul>
        {breadcrumbs.map((item) => {
          const classTab = cx({
            active: router.pathname === `${item.path}`,
          });
          return (
            <li className={classTab} key={item.id}>
              <Link href={`${item.path}`}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
