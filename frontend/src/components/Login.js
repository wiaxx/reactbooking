import { VscAccount } from 'react-icons/vsc';
import useInput from './useInput';
import { Link } from 'react-router-dom';
import users from '../pages/users';
import Greeting from './Greeting';

const LoginForm = () => {
    const [username, resetUsername] = useInput("");
    const [password, resetPassword] = useInput("");

    const submit = (e) => {
        e.preventDefault();
        let user = users.find(user => user.username === username.value);
        // console.log(user)
        if (!user) {
            return alert('Wrong username or user does not exist');
        } else if (password.value !== user.password) {
            return alert('Incorrect password')
        } else {
            // alert(`Hello ${username.value}`);
            resetUsername();
            resetPassword();
            return <Greeting name={user.name} />
        }
    }
    return (
        <>
            <form className="loginForm" onSubmit={submit} >
                <VscAccount className="loginImg" />
                <input type='text' id="username" placeholder="username" {...username} />
                <input type='password' id="password" placeholder="password" {...password} />
                <Link to='/createaccount'>Create Account</Link>
                <button>Sign in</button>
            </form>
        </>
    )
}

export default LoginForm;