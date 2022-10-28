import styles from 'styles/hero.module.scss'

type HeroProps = {
  title: string;
  subtitle: string;
  imageOn: boolean;
};

export default function Hero(props: HeroProps) {
  const {title, subtitle, imageOn} = props;

  return (
    <div className={styles.hero__txt}>
      <h1 className={styles.hero__ttl}>{title}</h1>
      <p className={styles.hero__subtxt}>{subtitle}</p>
      {imageOn && <figure>[画像]</figure>}
    </div>
  )
}