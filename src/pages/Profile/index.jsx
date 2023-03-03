import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { getProfile } from "../../services";



const Profile = () => {
  const { user: userContext ,logouth } = useContext(AuthContext);


  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const response = await getProfile();

    setUser({
      ...response,
      ...userContext,
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
      
          </div>
          <div className="col-12 mt-3">
            {user && (
              <div className="row d-flex">
              
                <div className="col-6">
                  <label htmlFor="">Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.name}
                    readOnly
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="">Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.lastName}
                    readOnly
                  />
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    value={user.email}
                    className="form-control"
                    readOnly
                  />
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="">Nombre del Paciente</label>
                  <input
                    type="text"
                    value={user.petname}
                    className="form-control"
                    readOnly
                  />
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="">Raza</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.pet}
                    readOnly
                  />
                </div>
                <div className="col-6 mt-3">
                  <label htmlFor="">Edad</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.petage}
                    readOnly
                  />
                </div>
                
                
                <div className="col-6 mt-3">
                  <label htmlFor="">Distrito</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.distrito}
                    readOnly
                  />
                </div>



              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;