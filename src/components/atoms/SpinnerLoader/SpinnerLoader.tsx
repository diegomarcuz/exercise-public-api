import * as S from './SpinnerLoader.style';

type SpinnerLoaderProps = React.HTMLAttributes<HTMLDivElement> &
  S.SpinnerLoaderStyleProps;

function SpinnerLoader({ ...props }: SpinnerLoaderProps) {
  return <S.Spinner role="alert" aria-busy="true" {...props} />;
}

export default SpinnerLoader;
