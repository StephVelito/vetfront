import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home2View,
  HomeView,
  ProfileView,
  LoginView,
  SignUpView,
  CiteView,
} from "../pages";
import { MainLayout } from "../layouts";
import Sidebar from "../components/Navbar/Sidebar";
import PrivateRoutes from "./PrivateRoutes";

// path => Nombre de la ruta /, /login, /registro

const Router = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home2View />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/signup" element={<SignUpView />} />


            <Route element={<MainLayout />}>
              <Route path="/home" element={<HomeView />} />

              <Route path="/perfil" element={<ProfileView />} />
              <Route path="/cites" element={<CiteView />} />
            </Route>
			
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default Router;
