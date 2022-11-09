import { NavLink } from "react-router-dom"
import  "./Navbar.css"
import logo from "../../assets/images/icons/Safha-logo.jpeg"
const Navbar = () => {
    const links = [
        {
            to: '/',
            text: 'Home'
        },
        {
            to: '/books',
            text: 'Books'
        },
        {
            to: '/categories',
            text: 'Categories'
        },
        {
            to: '/reviews',
            text: 'Reviews'
        },
        {
            to: '/about',
            text: 'About'
        },
        {
            to: '/signup',
            text: 'Signup'
        },
    ]
    return( 
    <header>
        <nav>
        <div className="col-4">
            <img id="main-logo" src={logo} alt="Logo not found"/>
        </div>
        <div id="menu" className='col-6'>
            {
            links.map((link, i) => {
                return (
                    <NavLink className={({isActive}) => {
                    let item = "navItems" + ' '
                    item += isActive ? isActive : ''
                    return item
                        }} key={i} to={link.to}>
                            <div>{link.text}</div>
                    </NavLink>
                )
            })
            }
            </div>
        </nav>
    </header>
    )
}
export default Navbar