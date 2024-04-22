import Image from 'next/image';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Image
        src="/tesla-hero.png"
        alt="Tesla Hero Image"
        className={styles.heroImage}
        width={3333}
        height={437}
      />
    </div>
  );
};

export default Home;
