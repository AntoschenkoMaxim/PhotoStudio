import React from 'react'

const About = () => {
	return (
		<div name='about' className='w-full my-32'>
			<div className='max-w-[1240px] mx-auto'>
				<div className='text-center'>
					<h2 className='text-5xl font-bold'>Мы занимаемся фотосессиями</h2>
					<p className='text-3xl py-6 text-gray-500'>Мы занимаемся фотосессиями профессионально уже на протяжении более пяти лет, за всё это время был пройден путь развития и становления фотографа с базового уровня до профессионального. </p>
				</div>

				<div className='grid md:grid-cols-3 gap-4 px-2 text-center'>
					<div className='border py-8 rounded-xl shadow-xl'>
						<p className='text-6xl font-bold text-indigo-600'>99.9%</p>
						<p className='text-gray-400 mt-2'>остались довольны</p>
					</div>
					<div className='border py-8 rounded-xl shadow-xl'>
						<p className='text-6xl font-bold text-indigo-600'>24/7</p>
						<p className='text-gray-400 mt-2'>работа фотографа</p>
					</div >
					<div className='border py-8 rounded-xl shadow-xl '>
						<p className='text-6xl font-bold text-indigo-600'> &gt;200</p>
						<p className='text-gray-400 mt-2'>постоянных клиентов</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About