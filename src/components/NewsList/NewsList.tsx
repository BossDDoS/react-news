import withSkeleton from '../../helpers/hocs/withSkeleton';

import NewsItem from '../NewsItem/NewsItem';

import { INews } from '../../interfaces';

import styles from './styles.module.css';

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((obj) => (
        <NewsItem item={obj} key={obj.id} />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
