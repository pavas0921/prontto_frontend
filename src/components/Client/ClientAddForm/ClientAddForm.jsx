import React from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { Loader } from '../../Loader';
import "./styles.css";

const ClientAddForm = () => {
    return (
        <div className='client_main_div'>
            <div className='client_title'>
                <h1>Creación de Clientes</h1>
            </div>

            <div className='client_form_container'>
                <Form className="form">
                    <div className='div_column'>
                        <div className='input_container'>
                            <Form.Control
                                type="text"
                                placeholder='Nombres'
                                id="inputPassword5"
                                className="mb-3 user-form-inputs"
                            />
                        </div>
                        <div className='input_container'>
                            <Form.Control
                                type="text"
                                placeholder='Apellidos'
                                id="inputPassword5"
                                className="mb-3 user-form-inputs"
                            />
                        </div>
                        <div className='input_container'>
                            <Form.Control
                                type="text"
                                placeholder='Cédula'
                                id="inputPassword5"
                                className="mb-3 user-form-inputs"
                            />
                        </div>
                    </div>
                    <div className="div_column">
                        <div className='input_container'>
                            <Form.Control
                                type="text"
                                placeholder='Dirección'
                                id="inputPassword5"
                                className="mb-3 user-form-inputs"
                            />
                        </div>
                        <div className='input_container'>
                            <Form.Control
                                type="text"
                                placeholder='Celular'
                                id="inputPassword5"
                                className="mb-3 user-form-inputs"
                            />
                        </div>
                        <div className='input_container'>
                            <Form.Control
                                type="text"
                                placeholder='Email'
                                id="inputPassword5"
                                className="mb-3 user-form-inputs"
                            />
                        </div>
                    </div>
                    <div className='client-add-button'>
                        <Button variant="primary">Registrar Usuario</Button>
                        <Button variant="primary">Listado de Usuarios</Button>
                    </div>
                </Form>
            </div>
            <div className='mt-5'>
                <Loader />
            </div>
            <div className='mt-5'>
                <Alert variant="warning" >Usuario actualizado con éxito</Alert>
            </div>
        </div>
    )
}

export default ClientAddForm
