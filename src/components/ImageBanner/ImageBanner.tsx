import styles from './styles.module.css';

interface Props {
  image: string;
}

const ImageBanner = ({ image }: Props) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
};

export default ImageBanner;
