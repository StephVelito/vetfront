
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

import { Link} from 'react-router-dom'
import { Button } from "@mui/material";
import "./index.css"




const Navbar =() => {

  const {isAuth , logout}= useContext(AuthContext);


  return (
    <div className='text-white'>
    <nav className="navbar navbar-expand-lg bs-gray-100 ">
  <div  className="container-fluid px-4">

    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-white   " id="navbarSupportedContent">
      <ul id="menu" className="navbar-nav  mb-2 mb-lg-0 text-white ">

      <li className="nav-item text-white ">
      <Button id="navi" className="nav-link active text-white" aria-current="page" component={Link} to="/"><h6>Inicio</h6></Button>
        </li>
        <li className="nav-item text-white ">
          <Button id="navi" className="nav-link active text-white" aria-current="page" component={Link} to="/update"><h6>Actualizar datos</h6></Button>
        </li>
        <li className="nav-item text-white">
          <Button id="navi" className="nav-link active text-white" aria-current="page" component={Link} to="/cites"><h6>Reserva de citas</h6></Button>
        </li>
        <li className="nav-item">
          <Button id="navi" className="nav-link active text-white" aria-current="page" component={Link} to="/login"><h6>Login</h6></Button>
        </li>

        <li className="nav-item font-weight-bold">
          <Button id="navi"  className="nav-link active text-white font-weight-bold" aria-current="page" component={Link}  to="/login"       onClick={logout}><h6>Cerrar sesion</h6></Button>
        </li>
    
       
      </ul>
   
    </div>
  </div>
</nav>
    
 
      
      </div>

  )
}

export default Navbar
