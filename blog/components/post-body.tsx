import { ReactNode } from 'react';
import styles from 'styles/post-body.module.scss'

type PostBodyProps = {
  children: ReactNode;
};

export default function PostBody(props: PostBodyProps) {
  const { children } = props;

  return (
    <div className={styles.post_body}>
      {children}
    </div>
  )
}