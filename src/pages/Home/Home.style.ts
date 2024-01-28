import styled from 'styled-components';
import { spacing } from '@mui/system';

export const Container = styled.section`
  margin: ${spacing({ margin: 3 }).margin}px auto;
  max-width: 1240px;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 16px;
  padding: ${spacing({ padding: 3 }).padding}px;
`;
