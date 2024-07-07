import { BrowserRouter as Router, Switch, Route,Routes } from 'react-router-dom';
import Register from "./Pages/Register/Register"
import Login from "./Pages/Login";
import Page404 from './Pages/404';

const RoutesHandler = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" exact element={<Register />} /> */}
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/product:id" element={<Product />} /> */}
        <Route path="*" element={<Page404/>}/> {/* Si no exista la ruta  */}
        {/* <Route component={NotFound} /> */}
      </Routes>
    </Router>
  )
  
}

export default RoutesHandler;