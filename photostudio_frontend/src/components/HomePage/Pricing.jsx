import React from 'react'
import { Link } from 'react-router-dom'
import { CheckIcon, XIcon } from '@heroicons/react/outline'

const Pricing = () => {
	return (
		<div name='pricing' className='w-full text-white my-24'>
			<div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'> </div>

			<div className='max-w-[1240px] mx-auto py-12'>
				<div className='text-center py-8 text-slate-300'>
					<h2 className='text-3xl uppercase'>Цены</h2>
					<h3 className='text-5xl font-bold text-white py-8'>Лучшие цены только для вас</h3>
					<p className='text-3xl'>Самые доступные цены среди конкурентов, которые строятся относительно затраченного на съёмку времени и количества кадров в результате съёмки.</p>
				</div>

				<div className='grid md:grid-cols-2'>
					<div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
						<span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Стандартный</span>
						<div>
							<p className='text-6xl font-bold py-4 flex'>25$ <span className='text-xl text-slate-500 flex flex-col justify-end'>/фотосет</span></p>
						</div>
						<p className='text-2xl py-8 text-slate-500'>Стандартная съёмка без эффектов.</p>
						<div className='text-2xl'>
							<p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Удобное для вас время.</p>
							<p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Пакет, состоящий из 50 фотографий.</p>
							<p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Обратная связь по фотосессии.</p>
							<p className='flex py-4'><XIcon className='w-8 mr-5 text-red-600' />Выбор фотографий на свое усмотрение.</p>
							<p className='flex py-4'><XIcon className='w-8 mr-5 text-red-600' />Фирменное оформление диска.</p>
							<button className='w-full py-4 my-4 transition-all duration-250'>Заказать</button>
						</div>
					</div>

					<div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
						<span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Премиум</span>
						<div>
							<p className='text-6xl font-bold py-4 flex'>55$ <span className='text-xl text-slate-500 flex flex-col justify-end'>/фотосет</span></p>
						</div>
						<p className='text-2xl py-8 text-slate-500'>Премиум съёмка с эффектами.</p>
						<div className='text-2xl'>
							<p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Удобное для вас время.</p>
							<p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Пакет, состоящий из 100 фотографий.</p>
							<p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Обратная связь по фотосессии.</p>
							<p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Выбор фотографий на свое усмотрение.</p>
							<p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Фирменное оформление диска.</p>
							<button className='w-full py-4 my-4 transition-all duration-250'>Заказать</button>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default Pricing