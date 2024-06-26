import React from 'react'
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/User/Dashboard';
import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/AdminRoute';
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Orders from './pages/User/Orders';
import Profile from './pages/User/Profile';

function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/dashboard' element={<PrivateRoute/>}>
    <Route path='user' element={<Dashboard/>}/>
    <Route path='user/orders' element={<Orders/>}/>
    <Route path='user/profile' element={<Profile/>}/>
    </Route>
    <Route path='/dashboard' element={<AdminRoute/>}>
    <Route path='admin' element={<AdminDashboard/>}/>
    <Route path='admin/create-category' element={<CreateCategory/>}/>
    <Route path='admin/create-product' element={<CreateProduct/>}/>
    <Route path='admin/users' element={<Users/>}/>
    </Route>
    <Route path="/forgot-password" element={<ForgotPasssword />} />
    <Route path='/About' element={<About/>}/>
    <Route path='/Policy' element={<Policy/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/*' element={<PageNotFound/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/*' element={<PageNotFound/>}/>
    
  </Routes>
    </>
  );
}

export default App;
