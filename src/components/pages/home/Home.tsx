import { Hero, Projects, WhyChooseUs } from './sections'
import { useRef } from 'react'
import GetStarted from './sections/GetStarted'
import { Footer } from '../../layouts'

const Home = () => {
  const ref = useRef(null)
  // useHomeAnimation()

  return (
    <>
      <main
        data-scroll-container
        ref={ref}
        className='
            main
            md:mx-auto
          '
      >
        <Hero />
        <Projects />
        <GetStarted />
        <WhyChooseUs />
      </main>
    </>
  ) as JSX.Element
}

export default Home
