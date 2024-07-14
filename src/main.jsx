import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
const MINUTE = 1000 * 60;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      gcTime: 10 * MINUTE,
      staleTime: MINUTE,
      refetchOnWindowFocus: false,
      retry:2
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App /> 
    </QueryClientProvider>
  </React.StrictMode>,
)
