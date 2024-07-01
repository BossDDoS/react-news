import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import withSkeleton from '../../helpers/hocs/withSkeleton';

import ImageBanner from '../ImageBanner/ImageBanner';

import styles from './styles.module.css';

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <ImageBanner image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 1);

export default NewsBannerWithSkeleton;
