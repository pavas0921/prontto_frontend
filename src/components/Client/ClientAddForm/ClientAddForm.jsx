import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { createClient, selectClientState } from "../../../features/client/clientSlice";
import { Loader } from '../../Loader';
import "./styles.css";

const ClientAddForm = () => {

    const [clientData, setClientData] = useState({
        name: "",
        lastname: "",
        id: "",
        address: "",
        phone: "",
        email: "",
    });
    const dispatch = useDispatch();
    const clientInfo = useSelector(selectClientState);
    const { loading, clients } = clientInfo
    const { status, message, client } = clients

    useEffect(() => {
        console.log("****", client)
    }, [clientInfo]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClientData((prevClientData) => ({
            ...prevClientData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //const token = sessionStorage.getItem("token");
        dispatch(createClient(clientData));
    };


    return (
        <div className='client_main_div'>
            <div className='client_title'>
                <h1>Creación de Clientes</h1>
            </div>

            <div className='client_form_container'>
                <Form className="form" onSubmit={handleSubmit}>
                    <div className='div_column'>
                        <div className='input_container'>
                            <Form.Control
                                type="text"
                                placeholder='Nombres'
                                id="inputPassword5"
                                className="mb-3 user-form-inputs"
                                name="name"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='input_container'>
                            <Form.Control
                                type="text"
                                placeholder='Apellidos'
                                id="inputPassword5"
                                className="mb-3 user-form-inputs"
                                name="lastname"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='input_container'>
                            <Form.Control
                                type="text"
                                placeholder='Cédula'
                                id="inputPassword5"
                                className="mb-3 user-form-inputs"
                                name="id"
                                onChange={handleInputChange}
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
                                name="address"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='input_container'>
                            <Form.Control
                                type="text"
                                placeholder='Celular'
                                id="inputPassword5"
                                className="mb-3 user-form-inputs"
                                name="phone"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='input_container'>
                            <Form.Control
                                type="email"
                                placeholder='Email'
                                id="inputPassword5"
                                className="mb-3 user-form-inputs"
                                name="email"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className='client-add-button'>
                        <Button variant="primary" type='submit'>Registrar Usuario</Button>
                        <Button variant="primary">Listado de Usuarios</Button>
                    </div>
                </Form>
            </div>

            {loading && (
                <div className='mt-5'>
                    <Loader />
                </div>
            )}

            {!loading && message && status === 201 && (
                <div className='mt-5'>
                    <Alert variant="warning" >{message}</Alert>
                </div>
            )}


        </div>
    )
}

export default ClientAddForm
