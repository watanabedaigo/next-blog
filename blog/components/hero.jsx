import styles from 'styles/hero.module.scss'

export default function Hero({ title, subtitle, imageOn }) {
  return (
    <div className={styles.hero__txt}>
      <h1 className={styles.hero__ttl}>{title}</h1>
      <p className={styles.hero__subtxt}>{subtitle}</p>
      {imageOn && <figure>[画像]</figure>}
    </div>
  )
}