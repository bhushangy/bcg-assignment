import Image from 'next/image';
import styles from './Header.module.css';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <nav>
      <div className={styles.headerContainer}>
        <button
          className={styles.logoTitleContainer}
          onClick={() => router.push('/')}
        >
          <Image src="/tesla.png" alt="Tesla Logo" width={40} height={40} />
          <h1>Tesla Power</h1>
        </button>
        <div className={styles.navLinks}>
          <button
            className="btn btn--nav"
            onClick={() => router.push('/connections')}
          >
            Connections
          </button>
          <button
            className="btn btn--nav"
            onClick={() => router.push('/stats')}
          >
            Stats
          </button>
          <button className="btn btn--nav">About</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
