import { createBrowserRouter, RouterProvider } from 'react-router'
import Homepage from './pages/Homepage'
import Login from './pages/Login'

export default function App() {
  return <RouterProvider router={router} />
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: Homepage,
    children: [
      { index: true, Component: Homepage },
      { path: 'accedi', Component: Login },
      { path: 'preferiti', Component: Login },
      { path: 'dettaglio', Component: Login },
      { path: 'ricerca', Component: Login },
    ],
  },
])