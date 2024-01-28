import styled from 'styled-components';
import { spacing } from '@mui/system';

export const LayoutWrapper = styled.main`
  max-width: 100%;
`;

interface HeaderProps {
  $hasSearchBarOnly?: boolean;
}

export const Header = styled.header<HeaderProps>`
  padding: ${spacing({ padding: 3 }).padding}px;
  border-bottom: 1px solid #ccc;
  display: grid;
  gap: 16px;
  grid-template-columns: ${props =>
    props.$hasSearchBarOnly ? '1fr' : 'min-content 1fr;'};
`;
