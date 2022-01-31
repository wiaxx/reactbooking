import { useEffect, useState } from "react";
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

    return (
        <header style={{ backgroundImage: `url(${img})` }}>
            <h1>Chill out & relax!</h1>
        </header>
    )
};

export default HomePage;