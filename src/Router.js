import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Register from "./Pages/Register/Register"
import Login from "./Pages/Login";
import Page404 from './Pages/404';
import LayoutLanding from './Layouts/Landing';
import ProductsDetails from './Components/Home/ProductsDetails';
import ProductsSearched from './Components/Home/ProductsSearched';
import LayoutDashboard from './Layouts/Dashboard';
import Inventory from './Components/DashBoard/Inventory';
import AddProduct from './Components/DashBoard/Inventory/AddProduct';
import ProductDetails from './Components/DashBoard/Inventory/ProductDetails';
import EditProduct from './Components/DashBoard/Inventory/EditProduct';
import Order from './Components/DashBoard/Order';
import OrderDetail from './Components/DashBoard/Order/OrderDetail';
import Buys from './Components/DashBoard/Buys';
import BuysDetail from './Components/DashBoard/Buys/BuysDetail';
import Profile from './Components/DashBoard/Profile';
import Users from './Components/DashBoard/Users';
import AddUser from './Components/DashBoard/Users/AddUsers';
import EditUser from './Components/DashBoard/Users/EditUsers';

const RoutesHandler = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas anidadas */}
        <Route path="/" exact element={<LayoutLanding />} >
          <Route path="/search/:searchTerm" element={<ProductsSearched />} />
          <Route path="/product/:id" element={<ProductsDetails />} />
        </Route>
        <Route path="/dashboard" exact element={<LayoutDashboard />} >
        <Route path="/dashboard" element={<Inventory />}/>

        <Route path="/dashboard/inventory" element={<Inventory />} />
        <Route path="/dashboard/inventory/addProduct" element={<AddProduct />} />
        <Route path="/dashboard/inventory/detailProduct/:id" element={<ProductDetails />} />
        <Route path="/dashboard/inventory/editProduct/:id" element={<EditProduct />} />

        <Route path="/dashboard/orders" element={<Order />} />
        <Route path="/dashboard/orders/detail/:id" element={<OrderDetail />} />

        <Route path="/dashboard/buys" element={<Buys />} />
        <Route path="/dashboard/buys/detail/:id" element={<BuysDetail />} />

        <Route path="/dashboard/profile" element={<Profile />} />

        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/users/add" element={<AddUser />} />
        <Route path="/dashboard/users/edit/:id" element={<EditUser />} />

      
        </Route>
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Page404 />} /> {/* Si no exista la ruta  */}
        {/* <Route component={NotFound} /> */}
      </Routes>
    </Router>
  )

}

export default RoutesHandler;