import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { getProfile, updateProfile, getUserIndividual } from "../../services";



const Update = () => {
  const { user: userContext } = useContext(AuthContext);


  const [user, setUser] = useState(null);

  const [nombre,setNombre] = useState("");
  const [apellido,setApellido] = useState("");
  const [correo,setCorreo] = useState("");
  const [petName,setPetName] = useState("");
  const [petAge,setPetAge] = useState("");
  const [pet,setPet] = useState("");
  const [distrito,setDistrito] = useState("");

  const fetchUser = async () => {
    const id = JSON.parse(localStorage.getItem("user")) ?? {};
    const userData = await getUserIndividual(id.id,id.content);
    setUser(userData.mesagge);
  }

  const updateUser = async (event) => {
    event.preventDefault();
    const id = JSON.parse(localStorage.getItem("user")) ?? {};
    let dataToSend = {
        "nombre" : nombre,
        "apellido" : apellido,
        "correo" : correo,
        "petName": petName,
        "petAge": petAge,
        "pet": pet,
        "distrito": distrito
    }
    const response = await updateProfile(id.id,id.content,dataToSend);

    console.log(response);

    // setUser({
    //   ...response,
    //   ...userContext,
    // });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if(user !== null) {
      setNombre(user.nombre);
      setApellido(user.apellido);
      setCorreo(user.correo);
      setPetName(user.petName);
      setPetAge(user.petAge);
      setPet(user.pet);
      setDistrito(user.distrito);
    }
  }, [user]);

  return (
    <div
      className="container"
      style={{
        maxWidth: "500px",
      }}
    >
      <div className="d-flex justify-content-center mt-3">
        <div className="row">
          <div className="col-12">
            <h6 className="text-gray">Actualizar datos</h6>
          </div>
          <div className="col-12 mt-3">
            {user && (
              <form onSubmit={(event) => updateUser(event)}>
                <div className="row d-flex">
                
                  <div className="col-6">
                    <label htmlFor="">Nombres</label>
                    <input
                      type="text"
                      className="form-control"
                      value={nombre}
                      onChange={ (event) => setNombre(event.target.value)}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="">Apellidos</label>
                    <input
                      type="text"
                      className="form-control"
                      value={apellido}
                      onChange={ (event) => setApellido(event.target.value)}
                    />
                  </div>
                  <div className="col-12 mt-3">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      value={correo}
                      className="form-control"
                      onChange={ (event) => setCorreo(event.target.value)}
                    />
                  </div>
                  <div className="col-12 mt-3">
                    <label htmlFor="">Nombre del Paciente</label>
                    <input
                      type="text"
                      value={petName}
                      className="form-control"
                      onChange={ (event) => setPetName(event.target.value)}
                    />
                  </div>
                  <div className="col-12 mt-3">
                    <label htmlFor="">Raza</label>
                    <input
                      type="text"
                      className="form-control"
                      value={pet}
                      onChange={ (event) => setPet(event.target.value)}
                    />
                  </div>
                  <div className="col-6 mt-3">
                    <label htmlFor="">Edad</label>
                    <input
                      type="text"
                      className="form-control"
                      value={petAge}
                      onChange={ (event) => setPetAge(event.target.value)}
                    />
                  </div>
                  
                  
                  <div className="col-6 mt-3">
                    <label htmlFor="">Distrito</label>
                    <input
                      type="text"
                      className="form-control"
                      value={distrito}
                      onChange={ (event) => setDistrito(event.target.value)}
                    />
                  </div>
                  <div className="col-12 mt-3 d-flex gap-2">
                    <button className="btn btn-primary" type="submit"> Guardar </button>
                  </div>



                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;