import { useState,useEffect } from 'react'
import IMAGES from './../Ui/Media.js'
import Container from './../Ui/Container.jsx'
import {FaSun, FaMoon} from 'react-icons/fa'
const Navbar = () => {
  const [theme, setTheme] = useState('light')
  const [moon, setMoon] = useState(false);
  const toggleTheme = () => {
    setMoon(!moon)
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  return(
    <header className='bg-main relative shadow-md dark:bg-[#111] dark:shadow-gray-500'>
    <Container>
    <nav className='flex items-center justify-between  h-[70px] w-full'>
    <a href='#home'>
    <img src={ IMAGES.logo } alt='logo' className='w-34 self-start sm:w-36' />
    </a>
    <span className='' onClick={toggleTheme}>
    {!moon ? <FaMoon color='#000' size='1.5rem'/> : <FaSun color='white' size='1.5rem'/>  }
    </span>
    </nav>
    </Container>
    </header>
    )
}
export default Navbar;