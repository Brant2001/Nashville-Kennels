import React, { useContext, useState } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import LocationForm from "./LocationForm"


export default () => {
    const { locations } = useContext(LocationContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2>Locations</h2>

            <div className="fakeLink href" onClick={toggle}><Button>New Location</Button></div>

            <div className="locations">
            {
                locations.map(loc => <Location key={loc.id} location={loc} />)
            }
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Location
                </ModalHeader>
                <ModalBody>
                    <LocationForm toggler={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}