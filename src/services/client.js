const API_BASE_URL = "https://prontto-backend.onrender.com";
//const API_BASE_URL = "http://localhost:4000";

export const createClientAPI = async (body) => {
    try {
      const url = `${API_BASE_URL}/client`;
      const req = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${body.token}`,
        },
        body: JSON.stringify(body),
      });
      const data = await req.json();
      return data
    } catch (error) {
      return Promise.resolve(error);
    }
  };