const url = "http://localhost:3000/registro";
const urlUsers = "http://localhost:3000/login";
const url2 = "http://localhost:3000/Citas";
const urlUpdate = "http://localhost:3000/usuarios";


// GET : Listar
// POST: Crear
// PUT: Actualizar
// DELETE: Eliminar
export const getProfile = async () => {
	try {
		const response = await fetch(urlUsers);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log("Error", error);
	}
};

export const postLogin = async (body) => {
  console.log(body);
  try {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
		const response = await fetch(urlUsers,
    { method: "post",
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: 'follow'
    });
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
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);
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

export const updateProfile = async (id,token,body) => {
  try {
    const response = await fetch(`${urlUpdate}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "Authorization": "BEAR " + token
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserIndividual = async (id,token) => {
  try {
    const response = await fetch(`${urlUpdate}/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": "BEAR " + token
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


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

export const postMedicalConsultation = async (cite) => {
  try {
    const token = JSON.parse(localStorage.getItem("user")) ?? {};
    console.log(token);
    const response = await fetch(url2, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": "BEAR " + token.content
      },
      body: JSON.stringify(cite),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getMedicalConsultation = async (cite) => {
  try {
    const response = await fetch(url2, {
      method: "GET",
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