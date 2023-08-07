const API_BASE_URL = "https://prontto-backend.onrender.com";
//const API_BASE_URL = "http://localhost:4000";

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
