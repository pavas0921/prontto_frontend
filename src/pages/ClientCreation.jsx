import React from 'react'
import { ClientAddForm } from '../components/Client/ClientAddForm'
import { NavbarComponent } from '../components/Navbar'

const ClientCreation = () => {
    return (
        <div>
            <div>
                <NavbarComponent />
            </div>
            <div>
                <ClientAddForm />
            </div>
        </div>
    )
}

export default ClientCreation
