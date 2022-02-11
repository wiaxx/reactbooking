// import { useEffect, useState } from "react";
import useFetch from "../components/useFetch";
const imgURL = 'https://api.unsplash.com/photos/PibraWHb4h8?client_id=MrBKjudpbn-DaRLVMzoMnS-_1SsFcfWXYBUaSGDkMlw';

const HomePage = () => {
    const { loading, data, error } = useFetch(imgURL)
    if (loading) return <h1>Loading ...</h1>
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

    return (
        <header style={{ backgroundImage: `url(${data.urls.regular})` }}>
            <h1>Chill out & relax!</h1>
        </header>
    )
};

export default HomePage;