import React from 'react'
import Nav from '../components/Nav/Nav'
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts'
import Hero from '../components/Hero/Hero'
import Footer from './Footer'
const HomePage = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    <FeaturedPosts/>
    <Footer/>
    </>
  )
}

export default HomePage