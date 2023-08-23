import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllRol, selectRolState } from "../../../features/rol/rolSlice";
import {
  getAllStore,
  selectStoreState,
} from "../../../features/store/storeSlice";
import { createUser, selectUserState } from "../../../features/user/userSlice";
import "./styles.css";

const UserAddForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    id: "",
    email: "",
    password: "",
    idRol: "",
    idStore: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const rolData = useSelector(selectRolState);
  const { rol } = rolData;
  const { dataRol } = rol;

  const data = useSelector(selectStoreState);
  const { store } = data;
  const { dataStore } = store;

  const userInfo = useSelector(selectUserState);

  const handleInputChange = (e) => {
    console.log("hola");
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    dispatch(createUser(userData, token));
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      dispatch(getAllRol(token));
      dispatch(getAllStore(token));
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => { }, [dataRol]);

  useEffect(() => {
    if (userInfo.users.status === 201) {
      console.log(userInfo);
    }
  }, [userInfo]);

  return (
    <div className="container user-form-main">
      <div className="container div-user-title">
        <h1>Registro de Usuarios</h1>
      </div>
      <div className="container row align-items-start">
        <Form className="form" onSubmit={handleSubmit}>
          <div className="col div-user-inputs">
            <Form.Group className="mb-3 user-form-inputs">
              <Form.Control
                type="text"
                placeholder="Nombres"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 user-form-inputs">
              <Form.Control
                type="text"
                placeholder="Apellidos"
                name="lastname"
                value={userData.lastname}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 user-form-inputs">
              <Form.Control
                type="text"
                placeholder="Cédula"
                name="id"
                value={userData.id}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 user-form-inputs">
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>
          <div className="col div-user-inputs user-form-inputs">
            <div className="col div-user-inputs">
              <Form.Group className="mb-3 user-form-inputs">
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                />
              </Form.Group>
              {dataRol &&
                dataRol.length > 0 &&
                dataRol.map((row, index) => (
                  <Form.Select
                    key={index}
                    className="mb-3 user-form-inputs"
                    aria-label="Default select example"
                    name="idRol"
                    value={userData.idRol}
                    onChange={handleInputChange}
                  >
                    <option>Open this select menu</option>
                    <option value={row._id}>{row.name}</option>
                  </Form.Select>
                ))}

              {dataStore &&
                dataStore.length > 0 &&
                dataStore.map((row, index) => (
                  <Form.Select
                    key={index}
                    className="mb-3 user-form-inputs"
                    aria-label="Default select example"
                    name="idStore"
                    value={dataStore.idRol}
                    onChange={handleInputChange}
                  >
                    <option>Open this select menu</option>
                    <option value={row._id}>{row.name}</option>
                  </Form.Select>
                ))}
            </div>
          </div>

          <div className="container div-button mt-3">
            <Button variant="primary" type="submit">
              Agregar Usuario
            </Button>
          </div>
        </Form>
      </div>
      {userInfo.users && userInfo.users.status === 201 && (
        <div
          className="container mt-3 d-flex"
          style={{ width: "30%", justifyContent: "center" }}
        >
          <Alert variant="success">Usuario creado con éxito</Alert>
        </div>
      )}
    </div>
  );
};

export default UserAddForm;
