import React from 'react';
import { ClockIcon, CollectionIcon, ArrowSmRightIcon, LocationMarkerIcon } from '@heroicons/react/outline';

import supportImg from '../../assets/support.jpg';

const Advantages = () => {
	return (
		<div name='advantages' className='w-full mt-24'>
			<div className='w-full h-[700px] bg-gray-900/90 absolute'>
				<img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt='support-image' />
			</div>

			<div className='max-w-[1240px] mx-auto text-white relative'>
				<div className='px-4 py-12 text-center'>
					<h2 className='text-3xl pt-8 text-slate-300 uppercase'>Преимущества</h2>
					<h3 className='text-5xl font-bold py-6'>Каждый видит то, что хочет видеть.</h3>
					<p className='py-4 text-3xl text-slate-300'>Многие фотографы считают, что если они купят лучшую камеру, то смогут снимать лучшие фотографии. Лучшая камера не будет работать за вас, если в вашей голове или в сердце ничего нет.</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
					<div className='bg-white rounded-xl shadow-2xl'>
						<div className='p-8'>
							<ClockIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
							<h3 className='font-bold text-2xl my-6'>Быстрота</h3>
							<p className='text-gray-600 text-xl'>Связавшись с нашим менеджером, вы получите ответ в кратчайшие сроки по дате проведения, времени и стоимости вашей фотосессии.</p>
						</div>
						<div className='bg-slate-100 pl-8 py-4'>
							<a href='https://www.instagram.com/bbolgertt/' target="_blank" className='group flex items-center cursor-pointer text-indigo-600 hover:text-indigo-900'>Связаться <ArrowSmRightIcon className='group-hover:translate-x-3 w-5 ml-2' /></a>
						</div>
					</div>

					<div className='bg-white rounded-xl shadow-2xl'>
						<div className='p-8'>
							<CollectionIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
							<h3 className='font-bold text-2xl my-6'>Опыт</h3>
							<p className='text-gray-600 text-xl'>Мы работаем на профессиональном уровне более пяти лет,за это время у нас появилось множество довольных клиентов.</p>
						</div>
						<div className='bg-slate-100 pl-8 py-4'>
							<a href='https://www.instagram.com/bbolgertt/' target="_blank" className='group flex items-center cursor-pointer text-indigo-600 hover:text-indigo-900'>Связаться <ArrowSmRightIcon className='group-hover:translate-x-3 w-5 ml-2' /></a>
						</div>
					</div>

					<div className='bg-white rounded-xl shadow-2xl'>
						<div className='p-8'>
							<LocationMarkerIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
							<h3 className='font-bold text-2xl my-6'>Местоположение</h3>
							<p className='text-gray-600 text-xl'>Вне зависимости от вашего местоположения, мы выезжаем на любые фотосессии по вашему запросу в любую точку города Гродно абсолютно бесплатно.</p>
						</div>
						<div className='bg-slate-100 pl-8 py-4'>
							<a href='https://www.instagram.com/bbolgertt/' target="_blank" className='group flex items-center cursor-pointer text-indigo-600 hover:text-indigo-900'>Связаться <ArrowSmRightIcon className='group-hover:translate-x-3 w-5 ml-2' /></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Advantages