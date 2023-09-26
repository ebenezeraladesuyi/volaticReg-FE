import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { element } from './routes/AllRoutes'
import { RouterProvider } from 'react-router-dom'
import IsLoading from './pages/isLoading/IsLoading'
import { Suspense } from 'react'
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

const myclient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<IsLoading />} >
      {/* <App /> */}
        <QueryClientProvider client={myclient}>
          <RouterProvider router={element} />
        </QueryClientProvider>
    </Suspense>
  </React.StrictMode>
)
