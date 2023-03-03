
import { useState, useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import {
	Container,
	CssBaseline,
  } from "@mui/material";
  
  import { useNavigate } from "react-router-dom";

  import {Form} from "../../components"



  
  
  function Registercite () {
	const history = useNavigate();
	const { cites } = useContext(AuthContext);	


	const [user, setUser] = useState({
	
	  	name: "",
		email: "",
		fecha: "",
		hora:"",
		petname : "",
		petplace :"",
		especialidad : "",
	
	  });

	 
	
	return (
	  <Container component="main" maxWidth="xs">
		<CssBaseline />
		


		<Form/>
	  </Container>
	);
  }
  
  export default Registercite;
  