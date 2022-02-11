// rfce = short hand for function component, take name from filename

import React from 'react';

function Test() {
  return <div></div>;
}

export default Test;


// rce = short hand for class component


/*
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
    */