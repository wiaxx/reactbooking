const Greeting = ({ name, status }) => {
    return (
        <div>
            <h1 className="greeting">Hello {name}, welcome back!</h1>
            <button onClick={() => status(false)}>Log out</button>
        </div>
    )
}

export default Greeting;