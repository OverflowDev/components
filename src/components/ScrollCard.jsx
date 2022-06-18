import { Link } from "react-router-dom"


function ScrollCard() {
  return (
    // install tailwind scrollbar and require it in tailwin config plugins 
    // plugins: [
    //     require('tailwind-scrollbar-hide')
    //   ],
    <div>
         <div className="flex overflow-x-scroll pb-10 scrollbar-hide">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">

            <div className="inline-block mr-4">
              <div className=" flex flex-col max-w-md w-56 h-56 md:w-64 md:h-64 py-4 px-6 my-16">
                <div className='uppercase text-4xl mb-3 relative'>
                  <div className='animate-bounce absolute -left-10 top-2 text-3xl'>
                    <ion-icon name="caret-forward"></ion-icon>
                  </div>
                  Categories
                </div>
                <p className='text-sm'>Calm down, do you need any latest blockchain assets? let's mix n match the categories which suits you</p>

              </div>
            </div>

            <div className="inline-block mr-4">
              <div className="group overflow-hidden relative max-w-md w-56 h-56 md:w-64 md:h-64 py-4 px-6 my-16 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out object-contain">
                  <img src="https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Features" className='absolute inset-0 w-full h-full object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125' />
                  <div className="absolute inset-0 w-full h-full bg-teal-600 opacity-50 transition-opacity duration-500 group-hover:opacity-75" ></div>
                  <Link to='/' className="absolute px-16 inset-x-0 bottom-[40%]">
                      <div className="bg-white group-hover:bg-teal-900 group-hover:text-white rounded py-4 uppercase text-center font-bold text-gray-900">
                          Robotic
                      </div>
                  </Link>
              </div>
            </div>
            <div className="inline-block mr-4">
              <div className="group overflow-hidden relative max-w-md w-56 h-56 md:w-64 md:h-64 py-4 px-6 my-16 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out object-contain">
                  <img src="https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Features" className='absolute inset-0 w-full h-full object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125' />
                  <div className="absolute inset-0 w-full h-full bg-teal-600 opacity-50 transition-opacity duration-500 group-hover:opacity-75" ></div>
                  <Link to='/' className="absolute px-16 inset-x-0 bottom-[40%]">
                      <div className="bg-white group-hover:bg-teal-900 group-hover:text-white rounded py-4 uppercase text-center font-bold text-gray-900">
                          Hardware
                      </div>
                  </Link>
              </div>
            </div>
            <div className="inline-block mr-4">
              <div className="group overflow-hidden relative max-w-md w-56 h-56 md:w-64 md:h-64 py-4 px-6 my-16 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out object-contain">
                  <img src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Features" className='absolute inset-0 w-full h-full object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125' />
                  <div className="absolute inset-0 w-full h-full bg-teal-600 opacity-50 transition-opacity duration-500 group-hover:opacity-75" ></div>
                  <Link to='/' className="absolute px-16 inset-x-0 bottom-[40%]">
                      <div className="bg-white group-hover:bg-teal-900 group-hover:text-white rounded py-4 uppercase text-center font-bold text-gray-900">
                          Laptop
                      </div>
                  </Link>
              </div>
            </div>
            <div className="inline-block mr-4">
              <div className="group overflow-hidden relative max-w-md w-56 h-56 md:w-64 md:h-64 py-4 px-6 my-16 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out object-contain">
                  <img src="https://images.unsplash.com/photo-1619709821682-ec24ace60f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Features" className='absolute inset-0 w-full h-full object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125' />
                  <div className="absolute inset-0 w-full h-full bg-teal-600 opacity-50 transition-opacity duration-500 group-hover:opacity-75" ></div>
                  <Link to='/' className="absolute px-8 inset-x-0 bottom-[40%]">
                      <div className="bg-white group-hover:bg-teal-900 group-hover:text-white rounded py-4 uppercase text-center font-bold text-gray-900">
                          Hardware Wallet
                      </div>
                  </Link>
              </div>
            </div>
              
          </div>
        </div>
    </div>
  )
}

export default ScrollCard
