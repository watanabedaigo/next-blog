import styles from 'styles/hero.module.scss'
import Image from 'next/legacy/image'
import cube from 'images/cube.jpeg'

type HeroProps = {
  title: string;
  subtitle: string;
  imageOn: boolean;
};

export default function Hero(props: HeroProps) {
  const { title, subtitle, imageOn } = props;

  return (
    <div className={styles.flexBox}>
      <div className={styles.hero__txt}>
        <h1 className={styles.hero__ttl}>{title}</h1>
        <p className={styles.hero__subtxt}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.hero__img}>
          <Image
            src={cube}
            alt=''
            layout='responsive'
            sizes='100vw'
            priority
            placeholder='blur'
          />
        </figure>
      )}
    </div>
  )
}