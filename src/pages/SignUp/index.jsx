import {
	Container,
	CssBaseline,
	Box,
	Avatar,
	Typography,
	Grid,
	TextField,
	Button,
  } from "@mui/material";
  
  import { Link } from "react-router-dom";
  
  import PetsIcon from "@mui/icons-material/Pets";
  import { UserModel } from "../../models/UserModel";
  import { postUser } from "../../services";
  import { useNavigate } from "react-router-dom";
  import "./index.css";
  
  function SignUp() {
	const history = useNavigate();
  
	const handleSubmit = async (event) => {
	  event.preventDefault();
	  const data = new FormData(event.currentTarget);
	  const newUser = new UserModel(
		data.get("name"),
		data.get("lastName"),
		data.get("email"),
		data.get("petname"),
		data.get("petage"),
		data.get("pet"),
		data.get("distrito"),
		data.get("password"),
	  );
	  await postUser(newUser);
	  history("/login");
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
			Registro
		  </Typography>
		  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
				/>
			  </Grid>
  
			  <Grid item xs={12} >
				<TextField
				  required
				  fullWidth
				  id="lastName"
				  label="Apellidos"
				  name="lastName"
				  autoComplete="family-name"
				/>
			  </Grid>
  
			  <Grid item xs={12}>
				<TextField
				  required
				  fullWidth
				  id="email"
				  label="Correo"
				  name="email"
				  autoComplete="email"
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
				/>
			  </Grid>
  
			  <Grid item xs={12}>
				<TextField
				  required
				  fullWidth
				  id="petage"
				  label="Edad de tu mascota"
				  name="petage"
				  autoComplete="given-name"
				/>
			  </Grid>
  
			  <Grid item xs={12}>
				<TextField
				  required
				  fullWidth
				  id="pet"
				  label="Raza de tu mascota"
				  name="pet"
				  autoComplete="given-name"
				/>
			  </Grid>
  
			  <Grid item xs={12}>
				<TextField
				  required
				  fullWidth
				  id="distrito"
				  label="Distrito"
				  name="distrito"
				  autoComplete="given-name"
				/>
			  </Grid>
  
			  <Grid item xs={12}>
				<TextField
				  required
				  fullWidth
				  name="password"
				  label="Contraseña"
				  type="password"
				  id="password"
				  autoComplete="new-password"
				/>
			  </Grid>
  
			</Grid>
			<Button
			  type="submit"
			  fullWidth
			  variant="contained"
			  sx={{ mt: 3, mb: 2 }}
			>
			  Registrar
			</Button>
			<Grid container justifyContent="flex-end">
			  <Grid item>
				<Link to="/login">Ya tengo cuenta</Link>
			  </Grid>
			</Grid>
		  </Box>
		</Box>
	  </Container>
	);
  }
  
  export default SignUp;
  