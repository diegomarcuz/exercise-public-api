import {
  RenderOptions,
  render as baseRender,
  renderHook,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

type TestRootProps = {
  children: React.ReactNode;
};

export function TestRoot({ children }: TestRootProps): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export function render(
  element: React.ReactElement<unknown>,
  options?: RenderOptions,
) {
  return {
    user: userEvent.setup(),
    ...baseRender(element, {
      wrapper: TestRoot as React.ComponentType<
        React.PropsWithChildren<unknown>
      >,
      ...options,
    }),
  };
}

interface RenderWithRouterOptions extends RenderOptions {
  route?: string;
  routes: RouteObject[];
}

export function renderWithRouter(
  options: RenderWithRouterOptions = { routes: [{ path: '/' }] },
) {
  const { route = '/', routes } = options;
  const router = createMemoryRouter(routes, {
    initialEntries: ['/', route],
  });

  const wrapper = ({ children }: { children?: React.ReactNode }) => {
    return (
      <TestRoot>
        <RouterProvider router={router} />
        {children}
      </TestRoot>
    );
  };

  return render(<div />, { wrapper });
}

export function renderCustomHooks<TData, TReturn>(
  hook: (data?: TData) => TReturn,
) {
  return renderHook(() => hook(), {
    wrapper: TestRoot,
  });
}
