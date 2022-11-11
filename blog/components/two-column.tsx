import { ReactNode } from "react";
import styles from "styles/two-column.module.scss";

type TwoColumnProps = {
  children: ReactNode;
};

export function TwoColumn(props: TwoColumnProps) {
  const { children } = props;

  return <div className={styles.flexBox}>{children}</div>;
}

export function TwoColumnMain(props: TwoColumnProps) {
  const { children } = props;

  return <div className={styles.flexBox__main}>{children}</div>;
}

export function TwoColumnSidebar(props: TwoColumnProps) {
  const { children } = props;

  return <div className={styles.flexBox__sidebar}>{children}</div>;
}
