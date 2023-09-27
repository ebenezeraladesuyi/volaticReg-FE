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
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux/es/exports";
import { Store } from './hooks/Store'

const myclient = new QueryClient();
const persiststore = persistStore(Store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<IsLoading />} >
      {/* <App /> */}
        <Provider store={Store}>
          <PersistGate persistor={persiststore}>
            <QueryClientProvider client={myclient}>
                <RouterProvider router={element} />
              <ReactQueryDevtools />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
    </Suspense>
  </React.StrictMode>
)
