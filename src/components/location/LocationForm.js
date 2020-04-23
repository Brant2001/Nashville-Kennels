import React, { useContext, useRef } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export default props => {
    const { addLocation } = useContext(LocationContext)
    const name = useRef("name")
    const location = useRef("location")
    const address = useRef("address")

    const constructNewLocation = () => {
        const locationId = parseInt(location.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addLocation({
                name: name.current.value,
                locationId: locationId,
                address: address.current.value
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationName">Location name: </label>
                    <input
                        type="text"
                        id="locationName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Location name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationAddress">Address: </label>
                    <input
                        type="text"
                        id="locationAddress"
                        ref={address}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Street address"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewLocation()
                    }
                }
                className="btn btn-primary">
                Save Location
            </button>
        </form>
    )
}