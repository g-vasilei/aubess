import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Category from './pages/Category'
import NotFound from './pages/NotFound'

function App() {
   const Layout = () => {
      return (
         <>
            <Header />
            <Outlet />
            <Footer />
         </>
      )
   }

   const router = createBrowserRouter([
      {
         path: '/',
         element: <Layout />,
         children: [
            {
               path: '/',
               element: <Home />,
            },
            {
               path: '/products',
               element: <Products />,
            },
            {
               path: '/category/:cat_slug',
               element: <Category />,
            },
            {
               path: '/product/:slug',
               element: <Product />,
            },
            {
               path: '/contact',
               element: <Contact />,
            },
            {
               path: '/about-us',
               element: <AboutUs />,
            },
            {
               path: '/not-found',
               element: <NotFound />,
            },
            {
               path: '*',
               element: <NotFound />,
            },
         ],
      },
   ])

   return <RouterProvider router={router} />
}

export default App
