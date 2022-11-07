import { NavLink } from "react-router-dom"
import  "./Navbar.css"
const Navbar = () => {
    const links = [
        {
            to: '/',
            text: 'Home'
        },
        {
            to: '/',
            text: 'Books'
        },
        {
            to: '/',
            text: 'Categories'
        },
        {
            to: '/',
            text: 'Reviews'
        },
        {
            to: '/',
            text: 'Sign UP'
        },
    ]
    return( 
    <header>
        <nav>
            <div className='menu'>
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