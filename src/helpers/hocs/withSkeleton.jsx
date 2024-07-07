import Skeleton from '../../components/Skeleton/Skeleton';

function withSkeleton(Component, count, direction) {
  return function withSkeleton(props) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton count={count} direction={direction} />;
    }

    return <Component {...restProps} />;
  };
}

export default withSkeleton;
