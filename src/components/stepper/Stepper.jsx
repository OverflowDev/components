import { useState } from 'react'
import './stepper.css'


function Stepper() {

    const steps = ['Customer Info', 'Shipping info', 'Payment']

    const [currentStep, setCurrentStep] = useState(1)
    const [complete, setComplete] = useState(false)

  return (
    <div className='bg-gray-900 flex flex-col gap-10 h-screen items-center justify-center'>
        <div className='flex justify-between'>

            {steps.map((step, i) => (
                <div 
                    key={i} 
                    className={
                        `step-item
                        ${currentStep === i + 1 && 'active'} 
                        ${(i + 1 < currentStep || complete) && 'complete'}`
                    }
                >

                    <div className='step'>
                        {
                            (i + 1 < currentStep || complete) ? <ion-icon name="checkmark-sharp"></ion-icon> : i + 1
                        }
                    </div>
                    <p className='text-gray-500'>{step}</p>
                </div>
            ))}
        </div>
        {!complete && 
            <button 
                className='btn'
                onClick={() => {
                    currentStep === steps.length 
                        ? setComplete(true) 
                        : setCurrentStep((prev) => prev + 1 )
                }}
            >
                {currentStep === steps.length ? 'Finish' : 'Next'}
            </button>}
    </div>
  )
}

export default Stepper