import { useState, useEffect, useContext } from "react";
import { TaskCard } from "../../components";
import { destroy, get2, update } from "../../services";
import { MedicalModel2 } from "../../models/MedicalModel2";

import { AuthContext } from "../../context/AuthContext";

// import * as React from 'react';
//import Table from '@mui/material/Table';
//import TableBody from '@mui/material/TableBody';
//import TableCell from '@mui/material/TableCell';
//import TableContainer from '@mui/material/TableContainer';
//import TableHead from '@mui/material/TableHead';
//import TableRow from '@mui/material/TableRow';
//import Paper from '@mui/material/Paper';

function Home() {
  const { user } = useContext(AuthContext);
  const [taskList, setTaskList] = useState([]);

  async function getTasks() {
    const tasks = await get2();
    const tasksModels = tasks.map((task) => {
      return new MedicalModel2(
        task.id,
        task.createdAt,
        task.name,
        task.email,
        task.fecha,
        task.hora,
        task.petname,
        task.petplace,
        task.especialidad
      );
    });

    if (user.email !== "admin@gmail.com") {
      const myUserTasks = tasksModels.filter((task) => {
        if (task.email === user.email) return task;
      });
      setTaskList(myUserTasks);
    } else {
      setTaskList(tasksModels);
    }

    console.log(tasksModels);
  }

  //async function addTask(text) {
  //	const newTask = new MedicalModel(null, text, null, null, null, user.id);
  //	await post(newTask);
  //	await getTasks();
  //	}

  async function updateTask(
    id,
    body = { fecha: "", hora: "", especialidad: "" }
  ) {
    await update(id, body);
    await getTasks();
  }


  async function destroyTask(id) {
    await destroy(id);
    await getTasks();
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div id="titulo" className="container my-3">
      <h2>Hola {user.name} estas son tus citas registradas</h2>
      <div className="text-primary">
        <hr />
      </div>
      {/*}	
			<TableContainer>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
			<TableHead>
          <TableRow >
            <TableCell id="tables">DIA DE CITA</TableCell>
            <TableCell id="tables" align="right">HORA PROGRAMADA</TableCell>
            <TableCell id="tables" align="right">SERVICIO REQUERIDO</TableCell>
            <TableCell id="tables" align="center">MASCOTA</TableCell>
            <TableCell id="tables" align="center">SEDE</TableCell>
          </TableRow>
        </TableHead>
		</Table>
	</TableContainer>*/}
      <div className="mt-5">
        {taskList.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            destroyTask={destroyTask}
            getTasks={getTasks}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
