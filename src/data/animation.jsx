export const fadeIn = {
    hidden: {
        opacity: 0,
        y: 30
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
            duration: 0.9, 
            when: "beforeChildren",
            staggerChildren: 0.4
        }

    },
};

export const childVariant = {
    hidden: {
        opacity: 0,
        y: 30
    },
    show: {
        opacity: 1,
        y: 0,
        transition:{duration: 0.3}
    },

};

export const footerFadeIn = {
    hidden: {
        opacity: 0,
        y: 80
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6, 
          type:'spring', 
          stiffness: 120
        }

    },
};

export const fadeVariant = {
    hidden:{
        opacity: 0,
        y: 10,
    },

    show:{
        opacity: 1,
        y: 0
    },

    exit:{
        opacity: 1,
        y: -10
    }
}

export const ceoVariant = {
    hidden:{
        opacity: 0,
    },

    show:{
        opacity: 1,
          transition: {
            duration: 0.9, 
        }
    },
}
