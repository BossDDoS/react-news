import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import { CategoriesApiResponse, IFilters } from '../../interfaces';

import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';

import styles from './styles.module.css';

interface Props {
  filters: IFilters;
  changeFilters: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilters }: Props) => {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories);

  return (
    <div className={styles.filter}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => changeFilters('category', category)}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters('keywords', keywords)}
      />
    </div>
  );
};

export default NewsFilters;
