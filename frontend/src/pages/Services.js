import ServiceBox from "../components/serviceBox";
import { useState, useEffect, useCallback } from 'react';

const Services = () => {

    let [serviceList, setServiceList] = useState([]);

    const fetchData = useCallback(() => {
        fetch('./data.json', {
            headers: {"Content-type": "text/html"}
        })
            .then(res => res.json())
            .then(data => {
                setServiceList(data)
                // console.log(data)
            })
    }, [])

    useEffect(()=> {
        fetchData()
    }, [fetchData])

    return (
        <div className="service-main">
            <h1 className="hairdress-title">This is hairdressers page!</h1>
            <div className="main-service-box">
            {serviceList.map(service => (
                <ServiceBox key={service.id} service={service} />
            ))}
            </div>
        </div>
    )
}

export default Services;