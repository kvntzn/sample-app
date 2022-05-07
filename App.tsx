import { QueryClient, QueryClientProvider } from 'react-query'
import Routes from './src/routes'

const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}
