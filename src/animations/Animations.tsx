
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

};

export default Animations;