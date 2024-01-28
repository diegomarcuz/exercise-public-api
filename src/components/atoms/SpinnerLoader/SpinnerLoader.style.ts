import styled from 'styled-components';

type CssUnit = 'px' | 'em' | 'rem' | '';

export type SpinnerLoaderStyleProps = {
  $size?: `${number}${CssUnit}`;
  $color?: string;
};

export const Spinner = styled.div<SpinnerLoaderStyleProps>`
  width: ${props => props.$size};
  padding: calc(${props => props.$size} * 0.1);
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${props => props.$color};
  mask: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: circle 1s infinite linear;

  @keyframes circle {
    to {
      transform: rotate(1turn);
    }
  }
`;
