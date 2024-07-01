import Skeleton from '../../components/Skeleton/Skeleton';

function withSkeleton(Component, count) {
  return function withSkeleton(props) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton count={count} />;
    }

    return <Component {...restProps} />;
  };
}

export default withSkeleton;
