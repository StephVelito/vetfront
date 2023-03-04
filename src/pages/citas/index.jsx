import { useState } from "react";
import { postMedicalConsultation } from "../../services";
import { Link } from "react-router-dom";
import {
	CssBaseline,
	Box,
	Avatar,
	Typography,
	Grid,
	TextField,
	Button,
	Container,
  } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { useNavigate } from "react-router-dom";
  
function Registercite() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
	  name: "",
	  email: "",
	  fecha: "",
	  petname: "",
	  petplace: "",
	  especialidad: "",
	});
	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(formData);
		await postMedicalConsultation(formData);
		navigate("/home");
	  };
	
	  const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
		  ...formData,
		  [name]: value,
		});
	  };
	  return (
		<Container component="main" maxWidth="xs">
		  <CssBaseline />
		  <Box
			sx={{
			  marginTop: 8,
			  display: "flex",
			  flexDirection: "column",
			  alignItems: "center",
			}}
		  >
			<Avatar sx={{ m: 1, bgcolor: "warning.main" }}>
			  <PetsIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
			  Reserva de cita
			</Typography>
			<Box component="form" noValidate handleSubmit={fetch} sx={{ mt: 3 }}>
			  <Grid container spacing={2}>
				<Grid item xs={12} >
				  <TextField
					autoComplete="given-name"
					name="name"
					required
					fullWidth
					id="name"
					label="Nombres"
					autoFocus
					value={formData.name}
					onChange={handleInputChange}
				  />
				</Grid>
	
				<Grid item xs={12} >
				  <TextField
					required
					fullWidth
					id="email"
					label="email"
					name="email"
					autoComplete="email"
					value={formData.email}
					onChange={handleInputChange}
				  />
				</Grid>
	
				<Grid item xs={12}>
				  <TextField
					required
					fullWidth
					id="fecha"
					label="fecha"
					name="fecha"
					value={formData.fecha}
					onChange={handleInputChange}
				  />
				</Grid>
	
				<Grid item xs={12}>
				  <TextField
					required
					fullWidth
					id="petname"
					label="Nombre de tu mascota"
					name="petname"
					autoComplete="given-name"
					value={formData.petname}
					onChange={handleInputChange}
				  />
				</Grid>
	
				<Grid item xs={12}>
				  <TextField
					required
					fullWidth
					id="petplace"
					label="Sede"
					name="petplace"
					value={formData.petplace}
					onChange={handleInputChange}
				  />
				</Grid>
	
				<Grid item xs={12}>
				  <TextField
					required
					fullWidth
					id="especialidad"
					label="especialidad"
					name="especialidad"
				  />
				</Grid>
	
			  </Grid>
			  <Button
				type="submit"
				fullWidth
				variant="contained"
				sx={{ mt: 3, mb: 2 }}
			  ><Link to= "/"> Registrar Cita  </Link>
				
			  </Button>
			</Box>
		  </Box>
		</Container>
	  );
	}
	





  
  export default Registercite;
  