import React from 'react'
import useFetch from '../components/useFetch';
import useInput from '../components/useInput';

const CreateAccount = () => {
    const [username, resetUsername] = useInput('')
    const [firstname, resetFirstname] = useInput('')
    const [lastname, resetLastname] = useInput('')
    const [email, resetEmail] = useInput('')
    const [password, resetPassword] = useInput('')

    const { loading, data, error } = useFetch('/api/users')
    if (loading) return <h1>Loading ...</h1>
    if (error) return <pre>JSON.stringify(error, null, 2)</pre>
    let userExist = data.find(user => user.username === username.value || user.email === email.value);

    const requestOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "userID": 0,
            "username": username.value,
            "firstName": firstname.value,
            "lastName": lastname.value,
            "email": email.value,
            "password": password.value
        })
    }

    // const fetchData = () => {
    //     fetch('/api/users', requestOption)
    //         // const data = await result.json();
    //         // console.log(data)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }

    const submit = async (e) => {
        e.preventDefault();
        console.log(requestOption)

        if (!userExist) {
            try {
                await fetch('/api/users', requestOption)
                    .then(response => {
                        console.log(response)
                    })
                    resetUsername();
                    resetFirstname();
                    resetLastname();
                    resetEmail();
                    resetPassword();
            } catch (error) {
                console.error("An error: ", error)
            }
        } else {
            alert(`Username ${username.value} and/or ${email.value} is already taken, please choose another one`)
        }
    }

    return (
        <main className='createAccountMain' >
            <h1 className='createAccountTitle'>Create account</h1>
            <form className='createAccountForm' onSubmit={submit}>
                <input type='text' placeholder='username' maxLength='10' {...username} />
                <input type='text' placeholder='firstname' maxLength='50' {...firstname} />
                <input type='text' placeholder='lastname' maxLength='50' {...lastname} />
                <input type='email' placeholder='email@adress.com' maxLength='150' {...email} />
                <input type='password' placeholder='password' maxLength='100' {...password} />
                <button>OK</button>
            </form>
        </main >
    )
}

export default CreateAccount;