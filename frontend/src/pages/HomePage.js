import { useEffect, useState } from "react";
// import useFetch from "../components/useFetch";
const imgURL = 'https://api.unsplash.com/photos/PibraWHb4h8?client_id=MrBKjudpbn-DaRLVMzoMnS-_1SsFcfWXYBUaSGDkMlw';

const HomePage = () => {

    const [img, setImage] = useState();

    const fetchImg = async () => {
        const result = await fetch(imgURL);
        const img = await result.json();
        const bgURL = img.urls.regular;
        // console.log(img)
        setImage(bgURL);
    };

    useEffect(() => {
        fetchImg()
    }, [img]);

    // test
    /*
    useEffect(() => {
        fetch('https://api.unsplash.com/photos/PibraWHb4h8?client_id=MrBKjudpbn-DaRLVMzoMnS-_1SsFcfWXYBUaSGDkMlw')
            .then((response) => response.json())
            .then(setImage)
    }, []);
    */

    /*
    const { loading, data, error } = useFetch(imgURL);
    if (loading) return <h1>loading ...</h1>;
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    return <pre>{JSON.stringify(data.urls.regular, null, 2)}</pre>;

    return (
        <header style={{ backgroundImage: `url(${data.urls.regular})` }}>
            <h1>Chill out & relax!</h1>
        </header>
    )
*/

    return (
        <header style={{ backgroundImage: `url(${img})` }}>
            <h1>Chill out & relax!</h1>
        </header>
    )
};

export default HomePage;