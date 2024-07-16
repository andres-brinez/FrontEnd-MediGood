import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Register from "./Pages/Register/Register"
import Login from "./Pages/Login";
import Page404 from './Pages/404';
import LayoutLanding from './Layouts/Landing';
import ProductsDetails from './Components/ProductsDetails';
import ProductsSearched from './Components/ProductsSearched';
import LayoutDashboard from './Layouts/Dashboard';
import Inventory from './Components/Inventory';

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
        <Route path="/dashboard" element={<Inventory />} />
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