import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import Customer from "./Customer"
import "./Customer.css"

export const CustomerList = () => {
    const { customers } = useContext(CustomerContext)

    return (
        <>
            <h2>Customers</h2>

            <div className="customers">
            {
                customers.map(loc => <Customer key={loc.id} customer={loc} />)
            }
            </div>
        </>
    )
}
