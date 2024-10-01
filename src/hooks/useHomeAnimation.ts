import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import { useEffect } from 'react'
const useHomeAnimation = () => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    if (window.innerWidth >= 540) {
      gsap.context(() => {
        const tl = gsap.timeline()

        ScrollTrigger.create({
          animation: tl,
          trigger: '.hero_section',
          start: '1px top',
          end: '+=900',
          scrub: true,
        })
        tl.to('.hero_swiper', {
          duration: 1,
          xPercent: -55,
        })

        tl.to(
          '.title .char',
          { y: '100%', opacity: 0, stagger: { amount: 0.2 } },
          '0'
        )

        tl.to('.home_shape', { y: '-100%', opacity: 0, duration: 1 }, '<.1')

        if (innerWidth >= 940) {
          tl.to('.card1', { x: '0', opacity: 1, scale: 1 }, '<.1')
          tl.to('.card2', { x: '0', opacity: 1, scale: 1 }, '<.1')
        } else {
          tl.to('.card1', { x: '0', opacity: 1, scale: 1 }, '<.1')
          tl.to('.card2', { x: '0', opacity: 1, scale: 1 }, '<.1')
        }

        tl.to(
          '.paragraph .word',
          { y: '100%', opacity: 0, stagger: { amount: 0.15 } },
          '<.1'
        )
        tl.to('.get_started', { y: '-100%', opacity: 0, duration: 0.5 }, '<.1')
      })
    }
  }, [])
}

export default useHomeAnimation
