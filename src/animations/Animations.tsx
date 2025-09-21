
const commonTransition = {
    duration: 0.3,
    ease: "easeOut",
} as const;

const staggerTransition = {
    staggerChildren: 0.3,
    delayChildren: 0.2,
};

const Animations = {

    displayNavEn: {
        hidden: {opacity: 0, x: -320},
        visible: {opacity: 1, x: 0, transition: {...commonTransition}},
        exit: {opacity: 0, x: -320, transition: {...commonTransition}},
    },

    displayNavAr: {
        hidden: {opacity: 0, x: 320},
        visible: {opacity: 1, x: 0, transition: {...commonTransition}},
        exit: {opacity: 0, x: 320, transition: {...commonTransition}},
    },

    parentVariants: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { ...commonTransition, ...staggerTransition },
        },
        exit: { opacity: 0, transition: {...commonTransition} },
    },

    parentVariantsNoStagger: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { ...commonTransition},
        },
        exit: { opacity: 0, transition: {...commonTransition} },
    },

    displayList: {
        hidden: {opacity:0, height: 0},
        visible: {opacity: 1, height: 'fit-content', transition: { ...commonTransition},},
        exit: {opacity: 0, height: 0, transition: { ...commonTransition},}
    },

    loadingVariants: {
        hidden: {opacity: 0.5},
        visible: {opacity: 1, transition : {type : 'wheel' , duration : 2 , repeat : Infinity , repeatType : 'mirror'}}
    },

    toTopVariants: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: {...commonTransition} },
    },

    toLeftVariants: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: {...commonTransition} },
    },

    toRightVariants: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: {...commonTransition} },
    },

    scaleVariants: {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: {...commonTransition} },
        exit: { scale: 0.9, opacity: 0, transition: {...commonTransition} },
    },

    opacityVariants: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: {...commonTransition} },
        exit: { opacity: 0, transition: {...commonTransition} },
    },

    loadingImageVariants: {
        hidden: {rotate: 0, opacity: 0.5, scale: 1},
        visible: {
            rotate: 360, opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1], 
            transition : { duration : 2.5 , repeat : Infinity, ease: "linear"}
        }
    },

    slidingBackground: {
        initial: { x: 0, width: 0, height: 0 },
        animate: (custom: { x: number; width: number; height: number }) => ({
            x: custom.x,
            width: custom.width,
            height: custom.height,
            transition: {
                type: "tween" as const,
                ease: "easeInOut" as const,
                duration: 0.3,
            }
        })
    },

    errorPageVariants: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { 
                duration: 0.6, 
                ease: "easeOut" as const,
                staggerChildren: 0.2,
                delayChildren: 0.1
            } 
        }
    },

    floatingVariants: {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" as const
            }
        }
    },

    glitchVariants: {
        animate: {
            x: [0, -2, 2, 0],
            transition: {
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 3
            }
        }
    },

    decorativeBlueCircle: {
        animate: {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
        },
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "linear" as const
        }
    },

    decorativeGreenCircle: {
        animate: {
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
        },
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "linear" as const
        }
    },

    floatingParticleGreen: {
        animate: {
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
        },
        transition: {
            duration: 2,
            repeat: Infinity,
            delay: 0.5
        }
    },

    floatingParticleBlue: {
        animate: {
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5]
        },
        transition: {
            duration: 2.5,
            repeat: Infinity,
            delay: 1
        }
    },

    progressBarFill: {
        initial: { width: 0 },
        animate: { width: "100%" },
        transition: { duration: 2, ease: "easeInOut" as const, delay: 0.5 }
    },

    stepCircleFill: {
        initial: { width: "0%" },
        completed: {
            width: "100%",
            transition: { duration: 0.5, ease: "easeInOut" as const }
        }
    },

    checkmarkAnimation: {
        hidden: { scale: 0, rotate: -90 },
        visible: { scale: 1, rotate: 0, transition: { duration: 0.3 } },
        exit: { scale: 0, rotate: 90, transition: { duration: 0.3 } }
    },

    stepNumberAnimation: {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { duration: 0.3 } },
        exit: { scale: 0, transition: { duration: 0.3 } }
    },

    progressLine: {
        initial: { width: "0%" },
        animate: (custom: { progress: number }) => ({
            width: `${custom.progress}%`,
            transition: {
                duration: 1,
                ease: "easeInOut" as const,
            },
        }),
    },

    buttonHover: {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
    },

    refreshButtonHover: {
        whileHover: { scale: 1.05, rotate: 180 },
        whileTap: { scale: 0.95 },
        transition: { type: "spring" as const, stiffness: 300 }
    },

    iconHover: {
        whileHover: { scale: 1.1, rotate: 5 },
        transition: { type: "spring" as const, stiffness: 300 }
    },

};

export default Animations;