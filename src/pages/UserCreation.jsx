import React from "react";
import { NavbarComponent } from "../components/Navbar";
import { UserAddForm } from "../components/User/UserAddForm";

const UserCreation = () =>{
    return (
        <div>

        <div>
            <NavbarComponent/>
        </div>
        <div>
            <UserAddForm/>
        </div>
        </div>
        
    )
}

export default UserCreation