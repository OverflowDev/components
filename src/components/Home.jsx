import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className='h-screen flex items-center justify-around first-letter:'>
        <Link to='/cart-card' className='py-3 px-3 bg-gray-700 text-white'>
            Cart Card
        </Link>
        <Link to='/navbar' className='py-3 px-3 bg-gray-700 text-white'>
            Navbar
        </Link>
        <Link to='/navbar-submenu' className='py-3 px-3 bg-gray-700 text-white'>
            Navbar Submenu
        </Link>
    </div>
  )
}

export default Home