import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RandumContextProvider } from './context.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Login from './login.jsx'
import Signup from './Signup.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  }
  ,
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<Signup/>
  }
])

createRoot(document.getElementById('root')).render(
  <RandumContextProvider>
    <RouterProvider router={router}/>
  </RandumContextProvider>
)
