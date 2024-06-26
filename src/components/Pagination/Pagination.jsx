import styles from './styles.module.css';

const Pagination = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
}) => {
  return (
    <div className={styles.pagination}>
      <button className={styles.arrow} disabled={currentPage === 1} onClick={handlePreviousPage}>
        {'<'}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            className={styles.pageNumber}
            disabled={currentPage === index + 1}
            onClick={() => handlePageClick(index + 1)}
            key={index}>
            {index + 1}
          </button>
        ))}
      </div>

      <button className={styles.arrow} disabled={currentPage === 10} onClick={handleNextPage}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
