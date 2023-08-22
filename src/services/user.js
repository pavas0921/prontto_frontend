//const API_BASE_URL = "https://prontto-backend.onrender.com";
const API_BASE_URL = "http://localhost:4000";

export const getAllUsersApi = async (token) => {
  try {
    const url = `${API_BASE_URL}/user`;
    const req = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await req.json();
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
  }
};

export const createUserAPI = async (body) => {
  try {
    const url = `${API_BASE_URL}/user`;
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${body.token}`,
      },
      body: JSON.stringify(body),
    });
    const data = await req.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(error);
  }
};

export const updateUserAPI = async (body) => {
  try {
    const { _id, token } = body
    const url = `${API_BASE_URL}/user/${_id}`;
    const req = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const data = await req.json();
    console.log(data)
    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(error);
  }
};

//Get user by _id
export const getUserByIdApi = async (id) => {
  try {
    const req = await fetch(`${API_BASE_URL}/user/${id}`, {
      method: "GET",
      headers: {
        //Authorization: `Bearer ${token}`,
      },
    });
    const data = await req.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(error);
  }
};
