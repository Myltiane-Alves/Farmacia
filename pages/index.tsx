import { Inter } from '@next/font/google'
import { Fragment } from 'react'
import Header from '@/Components/Header/Header'
import HeaderSlide from '@/Components/Sliders/HeadSlider'
import MainCategories from '@/Components/SectionMainCategory'
import NewProducts from '@/Components/SectionNewProducts'
import BigPromation from '@/Components/SectionBigPromation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
      <Header />
      <HeaderSlide />
      <MainCategories />
      <NewProducts />
      <BigPromation />
    </Fragment>
      
  )
}
