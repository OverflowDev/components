import {useState, useEffect} from 'react'

function DarkMode() {

    // add to tailwindconfig  darkMode: 'class',


    const [theme, setTheme] = useState(localStorage.theme)
    // const [theme, setTheme] = useState('dark')
    const colorTheme = theme === 'dark' ? 'light' : 'dark'
    
    useEffect(() => {
        const rootElement = window.document.documentElement

        rootElement.classList.remove(colorTheme)
        rootElement.classList.add(theme)
        // optional 
        localStorage.setItem('theme', theme)

    }, [theme, colorTheme])

  return (
    <div className=' h-screen flex justify-between  p-8'>
        <div>
            <h1 className='font-bold font-rubik tracking-wider'>OVERFLOW <span className='text-blue-800'>NETWORK</span> </h1>
        </div>
        <div>

            <button 
                className='dark:text-white '
                onClick={() => setTheme(colorTheme)}
            >
                {
                    theme === 'light' ? 
                        <ion-icon name="moon-outline" size='large'></ion-icon>
                    :
                        <ion-icon name="sunny-outline" size='large'></ion-icon>
                }
            </button>
        </div>
    </div>
  )
}

export default DarkMode