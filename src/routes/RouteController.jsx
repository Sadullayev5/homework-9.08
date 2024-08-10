import { lazy , Suspense } from 'react';

const Home = lazy(() => import('./Home/Home'));
const Products = lazy(() => import('./products/Products'));
const Login = lazy(() => import('./login/Login'));
const Profile = lazy(() => import('./profile/Profile'));
const SingleProduct = lazy(() => import('./singleProduct/SingleProduct'));
import { Routes , Route} from 'react-router-dom'

const RouteController = () => {


  return (
    <Routes>
        <Route path='/' element={<Suspense fallback={<h1>Loading...</h1>}><Home/></Suspense>} />
        <Route path='/products' element={<Suspense fallback={<h1>Loading...</h1>}><Products/></Suspense>} />
        <Route path='/login' element={<Suspense fallback={<h1>Loading...</h1>}><Login/></Suspense>} />
        <Route path='/profile' element={<Suspense fallback={<h1>Loading...</h1>}><Profile/></Suspense>} />
        <Route path='/singleproduct/:id' element={<Suspense fallback={<h1>Loading...</h1>}><SingleProduct/></Suspense>} />
    </Routes>
  )
}

export default RouteController