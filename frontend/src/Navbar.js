import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='menyHolder-1'>
                <li className='menyList'>
                    <Link to='/' className='menyLinks'>Home</Link>
                </li>
                <li className='menyList'>
                    <Link to='/services' className='menyLinks'>Tjänster</Link>
                </li>
                <li className='menyList'>
                    <Link to='/services2' className='menyLinks'> Tjänster 2</Link>
                </li>
            </div>
            <div className='menyHolder'>
                <li className='menyList'>
                    <Link to='/mybookings' className='menyLinks'>Mina bokningar</Link>
                </li>
                <li className='menyList'>
                    <Link to='/mypage' className='menyLinks'>Logga in</Link>
                </li>
            </div>
        </nav>
    )
}

export default Navbar;