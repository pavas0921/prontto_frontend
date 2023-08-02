import React, { useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { Login, selectLoginState } from "../../features/login/loginSlice";
import { Loader } from "../Loader";
import "./styles.css";

//Todo: Implementar el formulario de login - https://github.com/pavas0921/favs-frontend/blob/main/src/components/LoginForm/LoginForm.jsx

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({
    msg: "",
    status: false,
  });
  const dispatch = useDispatch();
  const loginData = useSelector(selectLoginState);
  const {user} = loginData;
  const {data} = user;
  const token = data?.token;
  const role = data?.role;
  const store = data?.store;
  const loading = loginData.loading;

  useEffect(() => {
    if(token){
      sessionStorage.setItem("token", token)
      sessionStorage.setItem("role", role)
      sessionStorage.setItem("store", store)
      console.log(user)
    }
   }, [token]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(credentials.email && credentials.password){
      dispatch(Login(credentials));
    }else{
      setMessage({msg: "Debe diligenciar todos los campos", status: true})
    }
    
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };



  return (
    <div className="div-main-login">
      <Form className="form-component" onSubmit={handleSubmit} >
        <div className="div-form">
          <div className="div-image">
            <Image className="image" src="https://lh3.googleusercontent.com/p/AF1QipNkfacHIn50VH7m6_4xtmckJt5-Gruy-7xabtFD" rounded />
          </div>
          <Form.Group className="inputs-formGroup" controlId="formBasicEmail">
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Nombre de Usuario"
            >
              <Form.Control
              name="email"
                className="inputs"
                type="email"
                placeholder="Nombre de Usuario"
                value={credentials.email}
              onChange={handleInputChange}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputGrid" label="Contraseña">
              <Form.Control
              name="password" className="inputs" type="password" placeholder="Contraseña" value={credentials.password}
              onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="button-formGroup">
            <Button variant="primary" type="submit">
              INICIAR
            </Button>
          </Form.Group>
          {loading && <Loader/>}
          {message.status && (
            
              <Alert variant="warning" >{message.msg}</Alert>
            
          )}
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
