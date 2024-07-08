import Skeleton from '../../components/Skeleton/Skeleton';
import { DirectionType } from '../../interfaces';

interface Props {
  isLoading: boolean;
}

function withSkeleton<P extends object>(
  Component: React.ComponentType,
  count?: number,
  direction?: DirectionType,
) {
  return function withSkeleton(props: Props & P) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;
