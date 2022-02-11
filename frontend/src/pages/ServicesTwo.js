import ServiceBox from "../components/ServiceBox";
import { useState, useEffect, useCallback } from 'react';

const ServicesTwo = () => {
    let [serviceList, setServiceList] = useState([]);

    const fetchData = useCallback(() => {
        fetch(`/api/services/beauty`, {
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
            <h1 className="service-title">Beauty</h1>
            <div className="main-service-box">
                {serviceList.map(service => (
                    <ServiceBox key={service.id} service={service} />
                ))}
            </div>
        </div>
    )
}

export default ServicesTwo;