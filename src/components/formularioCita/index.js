import React from "react";
import { postMedicalConsultation } from "../../services";
import { useNavigate } from "react-router-dom";

function Form(props) {
  const [state, setState] = React.useState({
    id: "",
    createdAt: "",
    name: "",
    email: "",
    fecha: "",
    hora: "",
    petname: "",
    petplace: "",
    especialidad: "",
  });

  const History = useNavigate();
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit =  (event) => {
    event.preventDefault();
    postMedicalConsultation(state);
    History("/home")
  };

  return (
    <form onSubmit={handleSubmit}>
      <br></br>

      <h3>Reserva de cita</h3>

      <input
        placeholder="Nombre"
        name="name"
        onChange={handleChange}
        required
      ></input>

      <input
        placeholder="Email"
        name="email"
        onChange={handleChange}
        required
      ></input>
      <input
        placeholder="Fecha"
        name="fecha"
        onChange={handleChange}
        required
      ></input>
      <input
        placeholder=" Hora"
        name="hora"
        onChange={handleChange}
        required
      ></input>
      <input
        placeholder="Mascota"
        name="petname"
        onChange={handleChange}
        required
      ></input>

      <input
        placeholder="Sede"
        name="petplace"
        onChange={handleChange}
        required
      ></input>

      <input
        placeholder="Especialidad"
        name="especialidad"
        onChange={handleChange}
        required
      ></input>

      <button className="btn btn-primary" type="submit"  variant="contained">
        Agregar
      </button>
    </form>
  );
}

export default Form;