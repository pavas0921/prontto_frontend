import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from 'react';
import { ButtonGroup } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { getAllClient, selectClientState } from "../../../features/client/clientSlice";
import "./styles.css";


const ClientTable = () => {

    const dispatch = useDispatch()
    const clientInfo = useSelector(selectClientState);
    const { clients, loading } = clientInfo || {}
    const { item, status } = clients || {}

    useEffect(() => {
        dispatch(getAllClient())
    }, []);

    useEffect(() => {
        if (!clientInfo) {
            console.log(clientInfo)
        }

        console.log("***", item)

    }, [clientInfo]);

    return (
        <div className='div-table-user'>
            <div className="div-title-user">
                <h3>Lista de Clientes</h3>
            </div>

            <div className='div-table'>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Cédula</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item && item.length > 0 && item.map((row, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{row.name}</td>
                                <td>{row.lastname}</td>
                                <td>{row.id}</td>
                                <td>{row.address}</td>
                                <td>{row.phone}</td>
                                <td>{row.email}</td>
                                <td>
                                    <ButtonGroup>
                                        {/* Botón de editar */}
                                        <button className="btn btn-sm" onClick={() => goToUser(row._id)}  >
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                        {/* Botón de eliminar */}
                                        <button className="btn btn-s"  >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                        {/* Botón de ver detalles */}
                                        <button className="btn btn"  >
                                            <FontAwesomeIcon icon={faEye} />
                                        </button>
                                    </ButtonGroup>
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        </div >
    )
}

export default ClientTable
