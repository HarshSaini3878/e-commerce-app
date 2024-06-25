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

function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/dashboard' element={<PrivateRoute/>}>
    <Route path='' element={<Dashboard/>}/>
    </Route>
    <Route path='/dashboard' element={<AdminRoute/>}>
    <Route path='admin' element={<AdminDashboard/>}/>
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
