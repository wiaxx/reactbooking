const ServiceBox = ({ service }) => {
    return (
        <div className='serviceBox'>
            <img src={service.img} alt={service.service} className="service-logo" />
            <h3>{service.service}, {service.performer}</h3>
            <p>{service.description}</p>
            <div className='servBtn'>
                <button className="bookBtn">Book</button>
                <span>{service.price}:-</span>
            </div>
        </div>
    )
}

export default ServiceBox;