import ServiceBox from "../components/ServiceBox";
import { useState, useEffect, useCallback } from 'react';
// import { useParams } from 'react-router-dom';

const Services = () => {
    // let { type } = useParams();

    let [serviceList, setServiceList] = useState([]);

    const fetchData = useCallback(() => {
        fetch(`/api/services/hairdresser`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setServiceList(data)
            })
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div className="service-main">
            <h1 className="service-title">Hairdressers!</h1>
            <div className="main-service-box">
                {serviceList.map(service => (
                    <ServiceBox key={service.id} service={service} />
                ))}
            </div>
        </div>
    )
}

export default Services;