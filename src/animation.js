export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.25
        },
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 0.5,
        },
    },
};

export const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 
      }
    }
  };

export const fadeAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
};

export const titleAnimation = {
    hidden: {
        y: 200,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.8, ease: "easeOut"}
    }
}

export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {duration: 1, ease: "easeOut"}
    }
}

export const scrollReveal = {
    hidden: { 
        opacity: 0, 
        scale: 1.10,
        duration: 0.5
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        }
    }
}