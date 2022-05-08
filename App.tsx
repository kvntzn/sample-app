import { QueryClient, QueryClientProvider } from 'react-query'
import useCachedResources from './src/hooks/useCachedResources'
import Routes from './src/routes'

const queryClient = new QueryClient()
export default function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    )
  }
}
