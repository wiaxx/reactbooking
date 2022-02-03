import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='menyHolder-1'>
                <li className='menyList'>
                    <Link to='/' className='menyLinks'>Home</Link>
                </li>
                <li className='menyList'>
                    <Link to='/services/hairdresser' className='menyLinks'>Hairdresser</Link>
                </li>
                <li className='menyList'>
                    <Link to='/services/beauty' className='menyLinks'>Beauty</Link>
                </li>
            </div>
            <div className='menyHolder'>
                <li className='menyList'>
                    <Link to='/mybookings' className='menyLinks'>My bookings</Link>
                </li>
                <li className='menyList'>
                    <Link to='/mypage' className='menyLinks'>Log In</Link>
                </li>
            </div>
        </nav>
    )
}

export default Navbar;