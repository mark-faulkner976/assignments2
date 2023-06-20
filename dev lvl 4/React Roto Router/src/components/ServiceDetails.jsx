import { useParams } from "react-router-dom";
import servicesData from "./servicesData";
import React from "react";

export default function ServiceDetails() {
    const {serviceId} = useParams()
    const foundService = servicesData.find(service => service._id === serviceId)

    console.log(useParams())
    console.log(foundService +'foundService')
    console.log(serviceId +'serviceId')

    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{foundService.name} - ${foundService.price}</h3>
            <p>{foundService.description}</p>
        </div>
    )
}