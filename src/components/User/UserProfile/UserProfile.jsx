import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectRolState } from "../../../features/rol/rolSlice";
import {
    selectStoreState
} from "../../../features/store/storeSlice";
import { selectUserState } from "../../../features/user/userSlice";
import "./styles.css";


const UserProfile = () => {

    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const rolData = useSelector(selectRolState);
    const { rol } = rolData;
    const { dataRol } = rol;

    const data = useSelector(selectStoreState);
    const { store } = data;
    const { dataStore } = store;

    const userInfo = useSelector(selectUserState);
    return (
        <div className='div-profile-main'>
            <div className="container div-user-title">
                <h1>Perfil de Usuario</h1>
            </div>
            <div className="container row align-items-start">
                <Form className="form">
                    <div className="col div-user-inputs">
                        <Form.Group className="mb-3 user-form-inputs">
                            <Form.Control
                                type="text"
                                placeholder="Nombres"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 user-form-inputs">
                            <Form.Control
                                type="text"
                                placeholder="Nombres"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 user-form-inputs">
                            <Form.Control
                                type="text"
                                placeholder="Nombres"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 user-form-inputs">
                            <Form.Control
                                type="text"
                                placeholder="Nombres"
                                name="name"
                            />
                        </Form.Group>
                    </div>

                    <div className="col div-user-inputs">
                        <Form.Group className="mb-3 user-form-inputs">
                            <Form.Control
                                type="text"
                                placeholder="Nombres"
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 user-form-inputs">
                            <Form.Control
                                type="text"
                                placeholder="Nombres"
                                name="name"
                            />
                        </Form.Group>
                    </div>


                    <div className="container div-button mt-3">
                        <Button variant="primary" type="submit">
                            Actualizar Usuario
                        </Button>
                        <Button variant="primary" type="submit">
                            Regresar
                        </Button>
                    </div>

                </Form>

            </div>



        </div >
    )
}

export default UserProfile