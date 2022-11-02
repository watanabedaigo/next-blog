import Social from './social'
import styles from 'styles/contact.module.scss'

export default function Contact() {

  return (
    <div className={styles.contact}>
      <h3 className={styles.contact__heading}>Contact</h3>
      <Social iconLarge={true} />
      <address>@mailaddress</address>
    </div>
  )
}