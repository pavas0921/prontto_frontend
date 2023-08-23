import jwt_decode from 'jwt-decode';



export const decodeToken = (token) => {
    //const secretKey = "$2a$12$AwfuFO/3sROx8V2iFZPRqOvPqY/si8Qeg0iiQ1GQy7I5xkGC6L9S2"
    try {
        const decoded = jwt_decode(token);
        console.log(decoded);
        return decoded // Aquí tendrás el contenido decodificado del token
      } catch (error) {
        console.error('Error al decodificar el token:', error.message);
      }
}





