import { getLatestNews } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import { NewsApiResponse } from '../../interfaces';

import BannerList from '../BannerList/BannerList';

import styles from './styles.module.css';

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannerList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
