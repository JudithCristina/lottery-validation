import React, { useEffect, useContext } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useRouteMatch,
  useLocation,
  useParams,
} from "react-router-dom";
import AuthContext from '../context/auth/AuthContext';
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import RutaPrivada from "./PrivateRoute";
import RutaPublica from "./PublicRoute";
import Home from "../views/Home/Home";
import Login from "../views/Auth/Login";

const AppRouter = () => {
  const {usuarioAutenticado } = useContext(AuthContext);

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
  <BrowserRouter>
    <Header />
    <Switch>
      <RutaPrivada exact path="/" component={Home} />
      <RutaPublica exact path="/login" component={Login} />
      {/* <RutaPublica exact path="/recovery-pass" component={RecoveryPass} />
      <RutaPublica exact path="/new-pass" component={NewPassword} />
      <RutaPrivada exact path="/perfil" component={Perfil} />
      <RutaPrivada exact path="/comunidades" component={Comunities} />
      <RutaPrivada exact path="/talleres" component={Workshop} /> */}
      {/* <RutaPrivada
        exact
        path="/creadores-de-contenido"
        component={Creators}
      /> */}
    </Switch>
    <Footer />
  </BrowserRouter>
  )
}

export default AppRouter
