import { SyntheticEvent } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import useSearch from 'services/useSearch';
import SearchIcon from '@mui/icons-material/Search';
import { ROUTES } from 'routes/config';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const isHomePage = location.pathname === ROUTES.HOME;
  const query = searchParams.get('q');
  const { data, status } = useSearch(query);

  const navigate = useNavigate();
  const onInputChange = (
    _event: SyntheticEvent,
    input: string,
    reason: string,
  ) => {
    if (reason === 'input') {
      searchParams.set('q', input);
      setSearchParams(searchParams);
      return;
    }
    if (reason === 'clear') {
      searchParams.delete('q');
      setSearchParams(searchParams);
    }
  };

  return (
    <>
      <Autocomplete
        inputValue={query ?? ''}
        options={data ?? []}
        getOptionLabel={option => option?.name}
        onChange={(_event, selectedValue, reason) => {
          if (reason === 'selectOption') {
            navigate(`/products/${selectedValue?.id}`);
          }
        }}
        isOptionEqualToValue={() => true}
        noOptionsText="Nenhum produto encontrado"
        autoHighlight={false}
        loading={status === 'loading'}
        onInputChange={onInputChange}
        renderInput={params => {
          return (
            <TextField
              {...params}
              focused={isHomePage}
              label="Faça sua busca"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {params.InputProps.endAdornment}
                    {query && (
                      <SearchIcon
                        sx={{
                          zIndex: 9,
                          cursor: 'pointer',
                        }}
                        onClick={() => {
                          navigate({
                            pathname: '/products',
                            search: searchParams.toString(),
                          });
                        }}
                      />
                    )}
                  </>
                ),
              }}
            />
          );
        }}
      />
    </>
  );
}

export default Search;
