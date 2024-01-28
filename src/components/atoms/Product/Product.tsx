import { Button } from '@mui/material';
import * as S from './Product.style';

export interface ProductProps {
  title: string;
  pictures: {
    id: string;
    url: string;
    maxWidth?: number;
    maxHeight?: number;
  }[];
  description?: string;
  buttonProps?: {
    onClick: () => void;
    children: React.ReactNode;
  };
}

const Product = ({
  pictures,
  title,
  description,
  buttonProps,
}: ProductProps) => {
  return (
    <S.Card aria-label={title}>
      <S.ImageContainer>
        {pictures.map(picture => (
          <img key={picture.id} src={picture.url} alt="" />
        ))}
      </S.ImageContainer>
      <h3>{title}</h3>
      <p>{description}</p>

      {buttonProps && (
        <Button
          onClick={buttonProps.onClick}
          variant="text"
          sx={{
            display: 'flex',
            gap: '8px',
          }}
        >
          {buttonProps.children}
        </Button>
      )}
    </S.Card>
  );
};

export default Product;
