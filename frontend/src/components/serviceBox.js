// import { Link } from 'react-router-dom';

const ServiceBox = ({ service }) => {
    return (
        <div className='serviceBox'>
            <img src={service.imgURL} alt={service.service} className="service-logo" />             <h3>{service.service}, {service.firstName}</h3>
            <p>{service.description}</p>
            <div className='servBtn'>
           { /* <Link to="/services/hairdresser/bookings" className='bookBtn'>Book</Link> */ }
               <button className="bookBtn">Book</button>
                <span className="priceSpan">{service.price}:-</span>
            </div>
        </div>
    )
}

export default ServiceBox;