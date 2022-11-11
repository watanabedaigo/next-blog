import styles from "styles/hero.module.scss";
import Image from "next/legacy/image";
import cube from "images/cube.jpg";

type HeroProps = {
  title: string;
  subtitle: string;
  imageOn: boolean;
};

export default function Hero(props: HeroProps) {
  const { title, subtitle, imageOn } = props;

  return (
    <div className={styles.flexBox}>
      <div className={styles.wrapper}>
        <h1 className={styles.ttl}>{title}</h1>
        <p className={styles.subttl}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.img}>
          <Image
            src={cube}
            alt=""
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  );
}
