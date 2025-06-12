import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Posts from './routes/Posts.tsx'
import RootLayout from './routes/RootLayout.tsx'
import NewPost from './routes/NewPost.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/', element: <Posts />, children: [{ path: '/create-post', element: <NewPost /> }]
      },
      
    ]
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
