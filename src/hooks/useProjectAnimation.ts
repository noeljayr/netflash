import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const useProjectsAnimation = () => {
  // gsap.registerPlugin(ScrollTrigger)
  // useGSAP(() => {
  //   if (window.innerWidth >= 540) {
  //     const tl = gsap.timeline()

  //     ScrollTrigger.create({
  //       animation: tl,
  //       trigger: '.projects__section',
  //       start: 'top 80%',
  //       end: 'top center',
  //       scrub: true,
  //     })
  //     tl.fromTo(
  //       '.projects__section',
  //       { y: 200, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 1 },
  //       '<'
  //     )
  //   }
  // }, [])
}

export default useProjectsAnimation
