import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectRolState } from "../../../features/rol/rolSlice";
import {
    selectStoreState
} from "../../../features/store/storeSlice";
import { getUserById, selectUserState, updateUser } from "../../../features/user/userSlice";
import { decodeToken } from '../../../helpers/decodeToken';
import { Loader } from "../../Loader";
import "./styles.css";



const UserProfile = () => {

    const [userData, setUserData] = useState({})
    const [updatedData, setUpdatedData] = useState({})
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const rolData = useSelector(selectRolState);
    const { rol } = rolData;
    const { dataRol } = rol;
    const userStore = useSelector(selectStoreState);
    const { store } = userStore;
    const { dataStore } = store;
    const { id } = useParams();
    const userInfo = useSelector(selectUserState);
    const { users } = userInfo
    const { item } = users
    const token = sessionStorage.getItem("token")

    useEffect(() => {
        if (token) {
            const decodedToken = decodeToken(token);
            console.log("token", decodedToken)
            if (!item) {
                dispatch(getUserById(id))
            }
        } else {
            navigate("/")
        }

    }, []);

    useEffect(() => {
        console.log(userInfo)
    }, [userInfo]);



    useEffect(() => {
        if (item && item.length >= 0) {
            setUserData(item.find(item => item._id === id))
        }
    }, [item]);

    useEffect(() => {
        console.log(userData)
    }, [userData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData((updatedData) => ({
            ...updatedData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        updatedData._id = id
        updatedData.token = token
        console.log("hola", updatedData)
        dispatch(updateUser(updatedData))
    }

    return (

        <div className='div-profile-main'>

            <div className="container div-user-title">
                <h1>Perfil de Usuario</h1>
            </div>

            {userData && userData.idRol && userData.idStore && (

                <div className="container row align-items-start">

                    <Form className="form" onSubmit={handleSubmit}>
                        <div className="col div-user-inputs">
                            <Form.Group className="mb-3 user-form-inputs">
                                <Form.Control
                                    type="text"
                                    placeholder="Nombres"
                                    name="name"
                                    defaultValue={userData.name}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 user-form-inputs">
                                <Form.Control
                                    type="text"
                                    placeholder="Apellidos"
                                    name="lastname"
                                    defaultValue={userData.lastname}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 user-form-inputs">
                                <Form.Control
                                    type="text"
                                    placeholder="Número de documento"
                                    name="id"
                                    defaultValue={userData.id}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 user-form-inputs">
                                <Form.Control
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    name="email"
                                    defaultValue={userData.email}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </div>

                        <div className="col div-user-inputs">
                            <Form.Group className="mb-3 user-form-inputs">
                                <Form.Control
                                    type="password"
                                    placeholder="Contraseña"
                                    name="password"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Select
                                className="mb-3 user-form-inputs"
                                aria-label="Default select example"
                                name="idRol"
                            >
                                <option>{userData.idRol.name}</option>
                            </Form.Select>



                            <Form.Select
                                className="mb-3 user-form-inputs"
                                aria-label="Default select example"
                                name="idRol"
                            >
                                <option>{userData.idStore.name}</option>
                            </Form.Select>



                        </div>


                        <div className="div-button">
                            <Button variant="primary" className='button' type="submit">
                                Actualizar Usuario
                            </Button>
                            <Button variant="primary" className='button' >
                                Regresar
                            </Button>


                        </div>


                    </Form>
                    {userInfo.loading && (
                        <div className='div_loader'>
                            <Loader />
                        </div>

                    )}

                    {
                        !userInfo.loading && users && users.status === 200 && (
                            <div className='div_loader'><Alert variant="warning" >Usuario actualizado con éxito</Alert></div>
                        )
                    }



                </div >
            )
            }





        </div >

    )




}

export default UserProfile