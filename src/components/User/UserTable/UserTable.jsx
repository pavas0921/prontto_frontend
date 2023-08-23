import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllUsers, selectUserState } from "../../../features/user/userSlice";
import "./styles.css";



const UserTable = () => {
  const navigate = useNavigate()
  const data = useSelector(selectUserState);
  const { users } = data
  const { item } = users

  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if (token) {
      dispatch(getAllUsers(token))
    } else {
      navigate("/")
    }
  }, []);

  useEffect(() => {
    console.log(item)
  }, [item]);



  const handleAddUser = () => {
    navigate("/user/add")
  }

  const goToUser = (_id) => {
    navigate(`/user/${_id}`)
    console.log("id", _id)
  }

  return (
    <div className="div-table-user">

      <div className="div-title-user">
        <h3>Lista de usuarios</h3>
      </div>


      <Table striped responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Cédula</th>
            <th>Correo</th>
            <th>Tienda</th>
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
              <td>{row.email}</td>
              <td>{row.idStore.name}</td>
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


      <div className="div-add-button">
        <Button variant="primary" onClick={handleAddUser}>Añadir Usuario</Button>
      </div>
    </div>
  );
}

export default UserTable