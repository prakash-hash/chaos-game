import {Link} from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <>
            <div className="header">
                <div className='bar'>
                    <div style={{textDecoration:"none"}}>
                        <Link to='/'>Home</Link></div>
                    {/* <div><Link to='/about'>About</Link></div> */}
                </div>
            </div>
        </>
    )
}

export default Header
