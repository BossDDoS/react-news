import withSkeleton from '../../helpers/hocs/withSkeleton';
import NewsItem from '../NewsItem/NewsItem';

import styles from './styles.module.css';

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((obj) => (
        <NewsItem item={obj} key={obj.id} />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, 10);

export default NewsListWithSkeleton;
