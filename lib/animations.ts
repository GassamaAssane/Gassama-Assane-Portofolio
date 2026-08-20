// =============================================================================
// Configurations d'animations GSAP réutilisables
// =============================================================================

export const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const fadeInDown = {
  initial: { y: -40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const fadeInLeft = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const fadeInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Configuration GSAP ScrollTrigger par défaut
export const defaultScrollTrigger = {
  start: "top 85%",
  end: "bottom 15%",
  toggleActions: "play none none reverse",
};

// Easing cinématographique
export const cinematicEase = "power3.out";
export const smoothEase = "power2.inOut";
export const bounceEase = "back.out(1.7)";
