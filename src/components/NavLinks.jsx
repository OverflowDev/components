import {Link} from 'react-router-dom'
function NavLinks() {
    const Links = [
        {
            name:'Men',
            submenu:true, 
            sublinks:[
                {
                    Head: 'Topwear',
                    sublink: [
                        {name: 'T-shirt', link:'/'},
                        {name: 'Casual shirts', link:'/'},
                        {name: 'Formal shirts', link:'/'},
                        {name: 'T-shirt', link:'/'},
                        {name: 'T-shirt', link:'/'},
                    ],
                },
                {
                    Head: 'Bottom Wear',
                    sublink: [
                        {name: 'T-shirt', link:'/'},
                        {name: 'Casual shirts', link:'/'},
                        {name: 'Formal shirts', link:'/'},
                        {name: 'T-shirt', link:'/'},
                        {name: 'T-shirt', link:'/'},
                    ],
                },
                {
                    Head: 'Inner Wear',
                    sublink: [
                        {name: 'T-shirt', link:'/'},
                        {name: 'Casual shirts', link:'/'},
                        {name: 'Formal shirts', link:'/'},
                        {name: 'T-shirt', link:'/'},
                        {name: 'T-shirt', link:'/'},
                    ],
                },
                {
                    Head: 'Sleep Wear',
                    sublink: [
                        {name: 'T-shirt', link:'/'},
                        {name: 'Casual shirts', link:'/'},
                        {name: 'Formal shirts', link:'/'},
                        {name: 'T-shirt', link:'/'},
                        {name: 'T-shirt', link:'/'},
                    ],
                },
            ]
        },
        {name:'Women'},
        {name:'Kids'},
    ]
  return (
    <>
        {
            Links.map(link => (
                <div>
                    <div className="px-3 text-left md:cursor-pointer group">
                        <h1 className="py-7">{link.name}</h1>
                        {link.submenu && (
                            <div>
                                <div className='absolute top-20  hidden group-hover:block hover:block'>
                                    <div className='py-3'>
                                        <div className='w-4 h-4 left-3 absolute mt-1 bg-blue-300 rotate-45'></div>
                                    </div>
                                    <div className='bg-blue-400 p-5 grid grid-cols-3 gap-10'>
                                        {
                                            link.sublinks.map((mysublinks) => (
                                                <div>
                                                    <h1 className='text-lg font-semibold'>{mysublinks.Head}</h1>
                                                    {mysublinks.sublink.map((slink) => (
                                                        <li className='text-sm text-white-600 my-2.5'>
                                                            <Link 
                                                                to={slink.link} 
                                                                className='hover:text-blue-400'
                                                            >
                                                                {slink.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default NavLinks