import { Inter } from '@next/font/google'
import { Fragment } from 'react'
import Header from '@/Components/Header/Header'
import HeaderSlide from '@/Components/Sliders/HeadSlider'
import MainCategories from '@/Components/SectionMainCategory'
import NewProducts from '@/Components/SectionNewProducts'
import BigPromation from '@/Components/SectionBigPromation'
import Accessory from '@/Components/SectionAccessory'
import Announcements from '@/Components/SectionAnnoucument'
import FeaturedServices from '@/Components/FeaturedServices'
import NewsLetter from '@/Components/NewsLestter'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
      <Header />
      <HeaderSlide />
      <MainCategories />
      {/* <NewProducts /> */}
      <BigPromation />
      <Accessory />
      <Announcements />
      <FeaturedServices />
      <NewsLetter />
      <Footer />
    </Fragment>
      
  )
}
 async function getServerSideProps() {
  return {
    props: {
      
    }
  }
 }