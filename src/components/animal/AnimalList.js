import React, { useContext } from 'react'
import { AnimalContext } from './AnimalProvider'
import Animal from "./Animal"
import "./Animal.css"
import { LocationContext } from '../location/LocationProvider'
import { CustomerContext } from '../customer/CustomerProvider'


export default () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    return (
        <div className="animals">
            {
                animals.map(animal => {
                    const matchingLocation = locations.find(loc => loc.id === animal.locationId)
                    const matchingCustomer = customers.find(cus => cus.id === animal.customerId)
                    
                    return <Animal key={animal.id} animal={animal} 
                        customer={matchingCustomer}
                        location={matchingLocation}/>
                })
            }
        </div>
    )
}

