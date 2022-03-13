import React from 'react';
import { CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from '@heroicons/react/solid';
import bgImg from '../../assets/photosession.svg';
import { FaCopyright } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';

const Hero = () => {
	return (
		<div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
			<div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
				<div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
					<p className='text-2xl'>Уникальные фотосессии ждут вас</p>
					<h1 className='py-3 text-5xl md:text-5xl font-bold'>Studio.</h1>
					<p className='text-2xl'>Brand #1 в Беларуси</p>
					<button className='py-3 px-6 sm:w-[60%] my-4 transition-all duration-250'>Начать</button>
				</div>
				<div>
					<img className='w-full' src={bgImg} alt="background-image" />
				</div>
				<div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 
				md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-400 
				rounded-xl text-center shadow-xl'>
					<div className='flex justify-center flex-wrap px-4'>
						<p className='flex px-3 py-2 items-center text-slate-500 text-2xl'>Фотографирует не камера, а фотограф!<FaCopyright className='h-6 text-indigo-600' /></p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero