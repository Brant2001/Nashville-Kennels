import React from "react"
import "./animal/Animal.css"
import "./customer/Customer.css"
import "./employee/Employee.css"
import "./location/Location.css"
import { AnimalProvider } from "./animal/AnimalProvider"
import AnimalList from "./animal/AnimalList"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import { CustomerProvider } from "./customer/CustomerProvider"
import CustomerList from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"

export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <AnimalProvider>
            <CustomerProvider>
                <EmployeeProvider>
                    <LocationProvider>
                        <AnimalList />
                        <LocationList />
                        <CustomerList />
                        <EmployeeList />
                    </LocationProvider>
                </EmployeeProvider>
            </CustomerProvider>
        </AnimalProvider>
    </>
)