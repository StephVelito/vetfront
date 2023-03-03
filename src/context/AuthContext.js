import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUsers, getUsers2 } from "../services";

export const AuthContext = createContext();

// Crear un Provider: Este provider a proveer la variables y funciones
// que creemos
export const AuthProvider = (props) => {
  // La palabra children hace referencia a los components hijo
  // y este children viaja por props
  const { children } = props;

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) ?? {}
  );

  const [user2, setUser2] = useState(
    JSON.parse(localStorage.getItem("user2")) ?? {}
  );

  async function login(email, password) {
    // Traemos a TODOS los usuarios de mockapi:
    const usersDB = await getUsers();
    // Buscamos dentro de usersDB, el usuario con el email y password:

    const user = usersDB.find(
      (userDb) => userDb.email === email && userDb.pass === password
    );

    if (!user) return false;

    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    return true;
  }

  async function cites(name) {
    // Traemos a TODOS los usuarios de mockapi:
    const usersDB = await getUsers2();
    // Buscamos dentro de usersDB, el usuario con el email y password:

    const user2 = usersDB.find(
      (userDb) => userDb.name === name );

    if (!user2) return false;

    localStorage.setItem("user2", JSON.stringify(user2));
    setUser2(user2);
    return true;
  }

  function logout() {
    localStorage.clear();
    setUser({});
    Navigate('/')
  }

  // funcion para validar si la session existe
  function isAuth() {
    return Object.entries(user).length !== 0;
  }

  return (
    <AuthContext.Provider
      value={{
        user2,
        user,
        cites,
        login,
        logout,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};