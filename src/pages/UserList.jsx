import React from "react";
import { NavbarComponent } from "../components/Navbar";
import { UserTable } from "../components/User/UserTable";

const UserList = () =>{
    return(
<>
<NavbarComponent/>
<div style={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
<UserTable/>
</div>

</>
        )
}

export default UserList