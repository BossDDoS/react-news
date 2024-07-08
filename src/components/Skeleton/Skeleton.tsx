import { DirectionType } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
  count?: number;
  direction?: DirectionType;
}

const Skeleton = ({ count = 1, direction = 'column' }: Props) => {
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
