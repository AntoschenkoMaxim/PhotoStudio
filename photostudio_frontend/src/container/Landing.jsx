import React from 'react'
import Navbar from '../components/HomePage/Navbar'
import Hero from '../components/HomePage/Hero'
import About from '../components/HomePage/About'
import Advantages from '../components/HomePage/Advantages'
import AllInOne from '../components/HomePage/AllInOne'
import Pricing from '../components/HomePage/Pricing'
import Footer from '../components/HomePage/Footer'

const Landing = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Advantages />
			<AllInOne />
			<Pricing />
			<Footer />
		</>
	)
}

export default Landing