import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link as Link1 } from 'react-router-dom'
import { Link as Link2, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
	const [nav, setNav] = useState(false)
	const handleClick = () => setNav(!nav)

	const handleClose = () => setNav(!nav)

	return (
		<div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
			<div className='px-2 flex justify-between items-center w-full h-full'>
				<div className='flex items-center'>
					<h1 className='text-3xl font-bold mr-4 sm:text-4xl hover:text-indigo-600 cursor-pointer'><Link2 to='home' smooth={true} duration={500}>STUDIO.</Link2></h1>
					<ul className='hidden md:flex'>
						<li className='hover:text-indigo-600 cursor-pointer'><Link2 to='home' smooth={true} duration={500}>Главная</Link2></li>
						<li className='hover:text-indigo-600 cursor-pointer'><Link2 to='about' smooth={true} offset={-200} duration={500}>О нас</Link2></li>
						<li className='hover:text-indigo-600 cursor-pointer'><Link2 to='advantages' smooth={true} offset={-50} duration={500}>Преимущества</Link2></li>
						<li className='hover:text-indigo-600 cursor-pointer'><Link2 to='allinone' smooth={true} offset={-150} duration={500}>Платформа</Link2></li>
						<li className='hover:text-indigo-600 cursor-pointer'><Link2 to='pricing' smooth={true} offset={-50} duration={500}>Услуги</Link2></li>
					</ul>
				</div>

				<div className='hidden md:flex pr-4'>
					<Link1 to="/login">
						<button className='px-12 py-3 transition-all duration-250'>Войти</button>
					</Link1>
				</div>

				<div className='md:hidden mr-4' onClick={handleClick}>
					{!nav ? <MenuIcon className='w-5 hover:text-indigo-600 cursor-pointer' /> : <XIcon className='w-5 hover:text-indigo-600 cursor-pointer' />}
				</div>
			</div>

			<ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
				<li className='border-b-2 border-zinc-300 w-full hover:text-indigo-600 cursor-pointer'><Link2 to='home' onClick={handleClose} smooth={true} duration={500}>Главная</Link2></li>
				<li className='border-b-2 border-zinc-300 w-full hover:text-indigo-600 cursor-pointer'><Link2 to='about' onClick={handleClose} smooth={true} offset={-200} duration={500}>О нас</Link2></li>
				<li className='border-b-2 border-zinc-300 w-full hover:text-indigo-600 cursor-pointer'><Link2 to='advantages' onClick={handleClose} smooth={true} offset={-50} duration={500}>Преимущества</Link2></li>
				<li className='border-b-2 border-zinc-300 w-full hover:text-indigo-600 cursor-pointer'><Link2 to='allinone' onClick={handleClose} smooth={true} offset={-150} duration={500}>Платформа</Link2></li>
				<li className='border-b-2 border-zinc-300 w-full hover:text-indigo-600 cursor-pointer'><Link2 to='pricing' onClick={handleClose} smooth={true} offset={-50} duration={500}>Услуги</Link2></li>
				<div className='flex flex-col my-4'>
					<button className='px-8 py-3 transition-all duration-200'>
						Войти
					</button>
				</div>
			</ul>
		</div>
	)
}

export default Navbar