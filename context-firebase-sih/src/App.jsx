import './App.css'
import Signin from './Routes/Signin'
import Signup  from './Routes/Signup'
import { AxiosComponent } from './Routes/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import { Protected } from './Routes/Protected'
import Navbar from './Routes/NavBar';
import HeroPage from './Routes/HeroPage'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Protected><Navbar/><HeroPage/></Protected>
    },
    {
      path:"/product",
      element:<Protected><Navbar/><AxiosComponent/></Protected>
    },
    {
      path:"/signin",
      element:<Signin/>
    },
    {
      path:"/signup",
      element:<Signup/>
    }
  ])

  return (
    <AuthContext>
    <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  )
}

export default App
