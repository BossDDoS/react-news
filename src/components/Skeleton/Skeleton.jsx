import styles from './styles.module.css';

const Skeleton = ({ count = 1, direction = 'column' }) => {
  return (
    <>
      {count > 1 ? (
        <ul className={direction === 'column' ? styles.columnList : styles.rowList}>
          {[...Array(count)].map((_, index) => (
            <li key={index} className={styles.item}></li>
          ))}
        </ul>
      ) : (
        <div className={styles.banner}></div>
      )}
    </>
  );
};

export default Skeleton;
