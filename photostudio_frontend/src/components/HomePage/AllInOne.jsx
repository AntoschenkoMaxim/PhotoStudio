import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const AllInOne = () => {
	return (
		<div name='allinone' className='w-full my-32'>
			<div className='max-w-[1240px] mx-auto px-2'>
				<h2 className='text-5xl font-bold text-center'>Наши возможности</h2>
				<p className='text-2xl py-8 text-gray-500 text-center'>Мы стараемся угодить всем, поэтому наши условия направлены только на достижение максимально положительного результата.</p>

				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
							<h3 className='font-bold text-lg'>Качество</h3>
							<p className='text-lg pt-2 pb-4'>Наши фотографии всегда получаются в лучшем качестве, что оставляет клиента довольным.</p>
						</div>
					</div>

					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
							<h3 className='font-bold text-lg'>Фотоаппаратура</h3>
							<p className='text-lg pt-2 pb-4'>Для наших фотосессий мы используем только самую современную и качественную аппаратуру.</p>
						</div>
					</div>

					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
							<h3 className='font-bold text-lg'>Места</h3>
							<p className='text-lg pt-2 pb-4'>Для наших фотосессий мы выбираем самые необыкновенные и лучшие места.</p>
						</div>
					</div>

					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
							<h3 className='font-bold text-lg'>Связь</h3>
							<p className='text-lg pt-2 pb-4'>В течении всего процесса проведения фотосъёмки наш менеджер поддерживает связь с клиентом.</p>
						</div>
					</div>

					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
							<h3 className='font-bold text-lg'>Ракурсы</h3>
							<p className='text-lg pt-2 pb-4'>Для ваших фотосессий мы подбираем лучшие ракурсы фотографий, для того чтобы они были самыми яркими.</p>
						</div>
					</div>

					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
							<h3 className='font-bold text-lg'>Подход</h3>
							<p className='text-lg pt-2 pb-4'>Каждому нашему клиенту мы обеспечиваем личный подход, так мы достигаем полного понимания.</p>
						</div>
					</div>

					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
							<h3 className='font-bold text-lg'>Цена</h3>
							<p className='text-lg pt-2 pb-4'>Мы работаем по самым лояльным ценам, что даёт возможность заказать фотосессию любому.</p>
						</div>
					</div>

					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
							<h3 className='font-bold text-lg'>Скидки</h3>
							<p className='text-lg pt-2 pb-4'>Постоянным клиентам полагаются хорошие скидки на последующие фотосессии с их участием.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AllInOne