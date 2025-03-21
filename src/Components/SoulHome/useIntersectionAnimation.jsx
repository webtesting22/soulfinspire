import { useEffect } from "react";

const useIntersectionAnimation = (ref, delay = 50, threshold = 0.5, animationClass = "animate") => {
    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Wait the specified delay then add the animation class
                        setTimeout(() => {
                            entry.target.classList.add(animationClass);
                        }, delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, delay, threshold, animationClass]);
};

export default useIntersectionAnimation;
