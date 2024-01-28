import Router from 'routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'normalize.css';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);

export default App;
