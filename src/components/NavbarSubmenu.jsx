import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../assets/flame.svg'
import Button from './Button'
import NavLinks from './NavLinks'

function NavbarSubmenu() {

    const [open, setOpen] = useState(false)

  return (
    <div>
        <nav className="bg-gray-300">
            <div className="flex items-center font-medium justify-around">
                {/* Logo and Menu  */}
                <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
                    <img src={Logo} alt="Logo" className='md:cursor-pointer h-9' />
                    <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
                        <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
                    </div>
                </div>

                <ul className='md:flex hidden uppercase items-center gap-8'>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                            Home
                        </Link>
                    </li>
                    <NavLinks />
                </ul>

                <div className='md:block hidden'>
                    <Button />
                </div>
                {/* Mobile Menu  */}
                <ul className={`
                    md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
                    duration-500 ${open ? 'left-0' : 'left-[-100%]'}
                `}>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                            Home
                        </Link>
                    </li>
                    <NavLinks />
                    <div className='py-5'>
                        <Button />
                    </div>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavbarSubmenu