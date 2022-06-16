import FrontImage from '../assets/fro-2.jpg'
import BackImage from '../assets/back-2.jpg'
import Eye from '../assets/eye.svg'
import Flame from '../assets/flame.svg'
import Heart from '../assets/heart-outline.svg'

function CartCard() {
  return (
    <div className=" flex justify-center items-center h-screen">
        <div className="relative cursor-pointer group overflow-hidden">
            <img src={FrontImage} alt="Front" className="h-96  duration-500 group-hover:opacity-0 " />
            <img src={BackImage} alt="Back" className="h-96 absolute top-0 z-[-1]" />

            <button className='group-hover:bottom-14 duration-500 absolute px-5 py-2 bg-white font-semibold rounded hover:bg-teal-400 left-1/4 -bottom-20'>ADD TO CART</button>
            
            <img src={Eye} alt="Eye" className='group-hover:right-2 delay-100 absolute -right-14 top-5 w-11 p-3 hover:bg-teal-400 duration-500 bg-white rounded-full' />
            <img src={Flame} alt="Eye" className='group-hover:right-2 delay-300 absolute -right-14 top-[80px] w-11 p-3 hover:bg-teal-400 duration-500 bg-white rounded-full' />
            <img src={Heart} alt="Eye" className='group-hover:right-2 delay-500 absolute -right-14 top-[140px] w-11 p-3 hover:bg-teal-400 duration-500 bg-white rounded-full' />
        </div>
        
    </div>
  )
}

export default CartCard