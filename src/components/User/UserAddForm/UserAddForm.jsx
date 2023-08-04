import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./styles.css";

const UserAddForm = () => {
    return (
        <div className="container user-form-main">
            <div className="container div-user-title">
                <h1>Registro de Usuarios</h1>
            </div>
            <div className="container row align-items-start">
                <Form className="form">
                    <div className="col div-user-inputs" >
                        <Form.Group className="mb-3 user-form-inputs">
                            <Form.Control type="text" placeholder="Nombres" />
                        </Form.Group>
                        <Form.Group className="mb-3 user-form-inputs">
                            <Form.Control type="text" placeholder="Apellidos" />
                        </Form.Group>
                        <Form.Group className="mb-3 user-form-inputs">
                            <Form.Control type="text" placeholder="Cédula" />
                        </Form.Group>
                        <Form.Group className="mb-3 user-form-inputs">
                            <Form.Control type="email" placeholder="Correo electrónico" />
                        </Form.Group>
                    </div>
                    <div className="col div-user-inputs user-form-inputs" >
                        <div className="col div-user-inputs"  >
                            <Form.Group className="mb-3 user-form-inputs">
                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>
                            <Form.Select className="mb-3 user-form-inputs" aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <Form.Select className="mb-3 user-form-inputs" aria-label="Default select example">
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