import { Inter } from '@next/font/google'
import { Fragment } from 'react'
import Header from '@/Components/Header/Header'
import HeaderSlide from '@/Components/Sliders/HeadSlider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
      <Header />
      <HeaderSlide />
    </Fragment>
      
  )
}
