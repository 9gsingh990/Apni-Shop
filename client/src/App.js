import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Pagenotfound from './pages/Pagenotfound.js';
import Register from './pages/Auth/Register.js';
import Login from './pages/Auth/Login.js';
import Dashboard from './pages/user/Dashboard.js';
import PrivateRoute from './components/Routes/Private.js';
import ForgotPassword from './pages/Auth/ForgotPassword.js';
import Orders from './pages/user/Orders.js';
import Profile from './pages/user/Profile.js';
import Search from './pages/Search.js';
import ProductDetails from './pages/ProjectDetails.js';
import Categories from './pages/Categories.js';
import CategoryProduct from './pages/CategoryProduct.js';
import CartPage from './pages/CartPage.js';
// import AdminRoute from './components/Routes/AdminRoute.js';
// import AdminDashboard from './pages/Admin/AdminDashboard.js';
// import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    < >
   <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/categories' element={<Categories/>}></Route>
    <Route path='/cart' element={<CartPage/>}></Route>
    <Route path='/category/:slug' element={<CategoryProduct/>}></Route>
    <Route path='/product/:slug' element={<ProductDetails/>}></Route>
    <Route path='/search' element={<Search/>}></Route>
    <Route path='/dashboard' element={<PrivateRoute/>}>
    <Route path='' element={<Dashboard/>}></Route>
    <Route path='orders' element={<Orders/>}></Route>
    <Route path='profile' element={<Profile/>}></Route>
    </Route>

    {/* <Route path='/dashboard' element={<AdminRoute/>}>
    <Route path='admin' element={<AdminDashboard/>}></Route>
    </Route> */}
    
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    
    <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='*' element={<Pagenotfound/>}></Route>
   </Routes>
     
    </>
  );
}

export default App;
