export const textMotion = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        stagger: 0.08,
        delay: 0.4,
        type: 'tween',
        ease: 'easeIn',
      },
    },
  }

export const sentence = {
  hidden: { opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      staggerChildren: 0.08
    }
  }
}

export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0
  }
}