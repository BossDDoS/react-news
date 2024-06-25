import styles from './styles.module.css';

const Skeleton = ({ count = 1 }) => {
  return (
    <>
      {count > 1 ? (
        <ul className={styles.list}>
          {[...Array(count)].map((_, index) => (
            <li key={index} className={styles.item}>
              2
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.banner}></div>
      )}
    </>
  );
};

export default Skeleton;
