import React, { useState } from "react"
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap"
import { EditEmployeeForm } from "./EditEmployeeForm"


export const Employee = ({employee, location}) => {
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)
    return (
    <>
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__address">{employee.address}</div>
            <div className="employee__workplace">{location.name}</div>
            <Button color="info" onClick={toggleEdit}>Edit Employee</Button>
        </section>
        <Modal isOpen={editModal} toggle={toggleEdit}>
            <ModalHeader toggle={toggleEdit}>
                { employee.name }
            </ModalHeader>
            <ModalBody>
                <EditEmployeeForm employee={employee} location={location}/>
            </ModalBody>
        </Modal>
    </>
    )
}