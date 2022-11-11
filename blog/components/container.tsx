import { ReactNode } from "react";
import styles from "styles/container.module.scss";

type ContainerProps = {
  children: ReactNode;
  large: boolean;
};

export default function Container(props: ContainerProps) {
  const { children, large } = props;

  return (
    <div className={large ? styles.wrapper_large : styles.wrapper_default}>
      {children}
    </div>
  );
}
