import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { renderHook } from '@testing-library/react-hooks'
import useGetDogs from '../../src/hooks/useGetDogs'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

it('should able to fetch data', async () => {
  const { result, waitFor } = renderHook(() => useGetDogs(), { wrapper })
  await waitFor(() => result.current.isSuccess)
  expect(result.current.data).toBeTruthy()
})
