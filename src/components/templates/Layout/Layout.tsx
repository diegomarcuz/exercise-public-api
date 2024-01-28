import { Button } from '@mui/material';
import Search from 'components/organisms/Search';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from 'routes/config';
import HomeIcon from '@mui/icons-material/Home';
import * as S from './Layout.style';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProductPage = location.pathname.includes(ROUTES.PRODUCTS);

  return (
    <S.LayoutWrapper>
      <S.Header $hasSearchBarOnly={!isProductPage}>
        {isProductPage && (
          <Button
            onClick={() => navigate('/')}
            variant="text"
            sx={{
              display: 'flex',
              gap: '8px',
            }}
          >
            <HomeIcon width={32} height={32} />
            Início
          </Button>
        )}
        <Search />
      </S.Header>

      <Outlet />
    </S.LayoutWrapper>
  );
};

export default Layout;
