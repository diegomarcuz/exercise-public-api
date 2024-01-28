import styled from 'styled-components';
import { spacing } from '@mui/system';

export const Container = styled.section`
  margin: ${spacing({ margin: 3 }).margin}px auto;
  max-width: 1240px;
  padding: ${spacing({ padding: 3 }).padding}px;
`;
