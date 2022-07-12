import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className='h-screen flex items-center justify-evenly first-letter:'>
        <Link to='/cart-card' className='py-3 px-3 bg-gray-700 text-white'>
            Cart Card
        </Link>
        <Link to='/nav' className='py-3 px-3 bg-gray-700 text-white'>
            Nav
        </Link>
        <Link to='/navbar' className='py-3 px-3 bg-gray-700 text-white'>
            Navbar
        </Link>
        <Link to='/navbar-submenu' className='py-3 px-3 bg-gray-700 text-white'>
            Navbar Submenu
        </Link>
        <Link to='/login' className='py-3 px-3 bg-gray-700 text-white'>
            Login
        </Link>
        <Link to='/register' className='py-3 px-3 bg-gray-700 text-white'>
            Register
        </Link>
        <Link to='/scalable' className='py-3 px-3 bg-gray-700 text-white'>
            Scalable
        </Link>
    </div>
  )
}

export default Home