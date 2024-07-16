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
        <Route path="/dashboard/addProduct" element={<AddProduct />} />
        <Route path="/dashboard/detailProduct/:id" element={<ProductDetails />} />
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