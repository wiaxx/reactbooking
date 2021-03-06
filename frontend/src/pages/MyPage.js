import { useState } from "react";
import LoginForm from "../components/LoginForm";
import Greeting from "../components/Greeting";

const MyPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <main className="myPageMain">
            {isLoggedIn
                ? <Greeting name="Amanda" status={setIsLoggedIn}/>
                : <LoginForm status={setIsLoggedIn} />}
        </main>
    )
}

export default MyPage;