import ApprovalStats from './ApprovalStats';
import ConnectionStats from './ConnectionStats';
import styles from './Stats.module.css';

const Stats = () => {
  return (
    <div className={styles.statsContainer}>
      <h1>Connection Stats</h1>
      <div className={styles.gridContainer}>
        <ConnectionStats />
        <div className={styles.approvalStatsContainer}>
          <ApprovalStats />
        </div>
      </div>
    </div>
  );
};

export default Stats;
