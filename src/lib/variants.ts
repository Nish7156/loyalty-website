import type { Variants, Transition } from 'framer-motion'

// Custom cubic bezier needs explicit typing as a tuple
const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const springTransition: Transition = {
  duration: 0.6,
  ease: springEase,
}

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: springEase,
    } as Transition,
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: springEase,
    } as Transition,
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: springEase,
    } as Transition,
  },
}
