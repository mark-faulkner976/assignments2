import servicesData from "./servicesData"
import { Link } from "react-router-dom"


export default function Services() {
    const services = servicesData.map(service => (
        <h3>
            <Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price} { }
        </h3>
    ))
    return (
        <>
            <h1>There are many services a plumber can give. The real question is what service can you give to the plumber? </h1>
            <h1>Products List Page</h1>
            {services}
        </>
    )
}