import React from 'react'

import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
			<div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
				<div>
					<h6 className='font-bold uppercase pt-2'>Решения</h6>
					<ul>
						<li className='py-1'>Фотосессия</li>
						<li className='py-1'>Фотосессия</li>
						<li className='py-1'>Фотосессия</li>
						<li className='py-1'>Фотосессия</li>
						<li className='py-1'>Фотосессия</li>
					</ul>
				</div>

				<div>
					<h6 className='font-bold uppercase pt-2'>Компания</h6>
					<ul>
						<li className='py-1'>Про нас</li>
						<li className='py-1'>Про нас</li>
						<li className='py-1'>Про нас</li>
						<li className='py-1'>Про нас</li>
						<li className='py-1'>Про нас</li>
					</ul>
				</div>

				<div>
					<h6 className='font-bold uppercase pt-2'>Положения</h6>
					<ul className=''>
						<li className='py-1'>Про нас</li>
						<li className='py-1'>Фотосессия</li>
						<li className='py-1'>Фотосессия</li>
						<li className='py-1'>Фотосессия</li>
						<li className='py-1'>Фотосессия</li>
					</ul>
				</div>

				<div>
					<h6 className='font-bold uppercase pt-2'>Помощь</h6>
					<ul>
						<li className='py-1'>a_bolgert2017@gmail.com</li>
						<li className='py-1'>Фотосессия</li>
						<li className='py-1'>Фотосессия</li>
						<li className='py-1'>Фотосессия</li>
						<li className='py-1'>Фотосессия</li>
					</ul>
				</div>
			</div>

			<div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
				<p className='py-4'>2022 Studio. Все права защищены</p>
				<div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
					<FaFacebook />
					<FaInstagram />
					<FaTwitter />
					<FaGithub />
				</div>
			</div>
		</div>
	)
}

export default Footer