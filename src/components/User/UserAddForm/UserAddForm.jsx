import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { getAllRol, selectRolState } from "../../../features/rol/rolSlice";

import "./styles.css";

const UserAddForm = () => {
    const [userData, setUserData] = useState({
        name: "", lastname: "", id: "", email: "", password: "", idRol: "", idStore: ""
    });
    const dispatch = useDispatch();
    const rolData = useSelector(selectRolState);
    const { rol } = rolData
    const { rolItem } = rol

    const handleInputChange = (e) => {
        console.log("hola")
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        dispatch(getAllRol());
    }, []);

    useEffect(() => {
        console.log(rolItem)
    }, [rolItem]);


    return (
        <div className="container user-form-main">
            <div className="container div-user-title">
                <h1>Registro de Usuarios</h1>
            </div>
            <div className="container row align-items-start">
                <Form className="form" onSubmit={handleSubmit}>
                    <div className="col div-user-inputs" >
                        <Form.Group className="mb-3 user-form-inputs">
                            <Form.Control type="text" placeholder="Nombres" name="name" value={userData.name} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3 user-form-inputs">
                            <Form.Control type="text" placeholder="Apellidos" name="lastname" value={userData.lastname} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3 user-form-inputs">
                            <Form.Control type="text" placeholder="Cédula" name="id" value={userData.id} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3 user-form-inputs">
                            <Form.Control type="email" placeholder="Correo electrónico" name="email" value={userData.email} onChange={handleInputChange} />
                        </Form.Group>
                    </div>
                    <div className="col div-user-inputs user-form-inputs" >
                        <div className="col div-user-inputs"  >
                            <Form.Group className="mb-3 user-form-inputs">
                                <Form.Control type="password" placeholder="Contraseña" name="password" value={userData.password} onChange={handleInputChange} />
                            </Form.Group>
                            {rolItem && rolItem.length > 0 && (
                                rolItem.map((row, index) => (
                                    <Form.Select key={index} className="mb-3 user-form-inputs" aria-label="Default select example" name="idRol" value={userData.idRol} onChange={handleInputChange}>
                                        <option value={row._id}>{row.name}</option>
                                    </Form.Select>
                                ))
                            )}

                            <Form.Select className="mb-3 user-form-inputs" aria-label="Default select example" name="idStore" value={userData.idStore} onChange={handleInputChange}>
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </div>



                    <div className="container div-button mt-3">
                        <Button variant="primary" type="submit">
                            Agregar Usuario
                        </Button>
                    </div>
                </Form>
            </div>



        </div>
    )
}

export default UserAddForm