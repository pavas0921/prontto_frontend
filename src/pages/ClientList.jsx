import React from 'react'
import ClientTable from '../components/Client/ClientTable/ClientTable'
import { NavbarComponent } from '../components/Navbar'

const ClientList = () => {
    return (
        <div>
            <div >
                <NavbarComponent />
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ClientTable />
            </div>
        </div>
    )
}

export default ClientList