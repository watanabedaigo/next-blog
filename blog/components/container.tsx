import { ReactNode } from 'react';
import styles from 'styles/container.module.scss'

type ContainerProps = {
  children: ReactNode;
  large: boolean;
}

export default function Container(props: ContainerProps) {
  const { children, large } = props;

  return (
    <div className={large ? styles.container_large : styles.container_default}>
      {children}
    </div>
  )
}