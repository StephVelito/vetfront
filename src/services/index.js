const url = "http127.0.0.1:3000/registro";
const urlUsers = "http://127.0.0.1:3000/login";
const url2 = "https://638679fcd9b24b1be3d92521.mockapi.io/api/v1/medicalConsultation2";



// GET : Listar
// POST: Crear
// PUT: Actualizar
// DELETE: Eliminar
export const getProfile = async () => {
	try {
		const response = await fetch("http://127.0.0.1:3000/login");
		const data = await response.json();
		return data;
	} catch (error) {
		console.log("Error", error);
	}
};

export const postLogin = async (body) => {
  try {
		const response = await fetch("http://127.0.0.1:3000/login",
    { method: "post",
      body: body});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log("Error", error);
	}
};


export const get = async () => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const get2 = async () => {
	try {
		const response = await fetch(url2);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getById = async (id) => {
  try {
    const response = await fetch(url + "/" + id);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const post = async (body) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (user) => {
  try {
    const response = await fetch(urlUsers, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(urlUsers);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};




export const getUsers2 = async () => {
  try {
    const response = await fetch(url2);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// id: Tarea
export const update = async (id, body) => {
  try {
    const response = await fetch(`${url2}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};



export const update2 = async (id, body) => {
  try {
    const response = await fetch(`${url2}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};



export const postMedicalConsultation = async (user) => {
  try {
    const response = await fetch(url2, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


// Para la eliminar un registro unicamente necesito el id
export const destroy = async (id) => {
  try {
    const response = await fetch(`${url2}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};