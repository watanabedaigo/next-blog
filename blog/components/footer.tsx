import Logo from './logo'
import Container from './container'
import Social from './social'
import styles from 'styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container
        large={false}
      >
        <div className={styles.flexBox}>
          <Logo
            boxOn={false}
          />
          <Social />
        </div>
      </Container>
    </footer>
  )
}