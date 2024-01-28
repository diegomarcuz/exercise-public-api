import styled from 'styled-components';
import { spacing } from '@mui/system';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: ${spacing({ padding: 3 }).padding}px;
  border-radius: 8px;

  p {
    white-space: pre-wrap;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;

  img {
    object-fit: contain;
    border: 1px solid #ccf;
    border-radius: 8px;
    aspect-ratio: 16/9;
    width: 90%;
    margin-right: -10px;
  }
`;
