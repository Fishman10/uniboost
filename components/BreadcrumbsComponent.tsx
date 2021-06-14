import Breadcrumbs from "nextjs-breadcrumbs";

import styles from "../styles/Breadcrumbs.module.css";

export const BreadcrumbsComponent: React.FC = () => (
  <div className={`${styles.breadcrumbs} container`}>
    <Breadcrumbs />
  </div>
);
