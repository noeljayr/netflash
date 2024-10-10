import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

const useHomeAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const isMobile = window.innerWidth < 540;
    const isLargeScreen = window.innerWidth >= 940;

    gsap.context(() => {
      const tl = gsap.timeline();

      ScrollTrigger.create({
        animation: tl,
        trigger: '.hero_section',
        start: isMobile ? 'top 90%' : '1px top',
        end: isMobile ? '+=600' : '+=900',
        scrub: isMobile ? 0.5 : true,  // Reduced scrub intensity on mobile
      });

      tl.to('.hero_swiper', {
        duration: isMobile ? 0.8 : 1,  // Slightly faster animation on mobile
        xPercent: isMobile ? -40 : -55, // Reduced movement for mobile
      });

      tl.to(
        '.title .char',
        { y: '100%', opacity: 0, stagger: { amount: 0.2 } },
        '0'
      );

      tl.to('.home_shape', { y: '-100%', opacity: 0, duration: 1 }, '<.1');

      // Different card behavior based on screen size
      if (isLargeScreen) {
        tl.to('.card1', { x: '0', opacity: 1, scale: 1 }, '<.1');
        tl.to('.card2', { x: '0', opacity: 1, scale: 1 }, '<.1');
      } else {
        tl.to('.card1', { x: '0', opacity: 1, scale: isMobile ? 0.95 : 1 }, '<.1');
        tl.to('.card2', { x: '0', opacity: 1, scale: isMobile ? 0.95 : 1 }, '<.1');
      }

      tl.to(
        '.paragraph .word',
        { y: '100%', opacity: 0, stagger: { amount: 0.15 } },
        '<.1'
      );

      tl.to('.get_started', { y: '-100%', opacity: 0, duration: 0.5 }, '<.1');
    });
  }, []);
};

export default useHomeAnimation;
