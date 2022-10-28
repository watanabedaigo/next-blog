import Link from 'next/link'
import styles from 'styles/logo.module.scss'

type LogoProps = {
  boxOn: boolean;
};

export default function Logo(props: LogoProps) {
  const {boxOn} = props;
  
  return (
    <Link href="/" className={boxOn ? styles.logo_box : styles.logo_basic }>
      CUBE
    </Link >
  )
}