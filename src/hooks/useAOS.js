import { useEffect } from 'react';

/**
 * Simple AOS (Animate On Scroll) hook using IntersectionObserver.
 * Adds 'aos-animate' class to elements with data-aos attribute when visible.
 */
export default function useAOS() {
    useEffect(() => {
        const animatedElements = document.querySelectorAll('[data-aos]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const delay = entry.target.getAttribute('data-aos-delay');
                        if (delay) {
                            setTimeout(() => {
                                entry.target.classList.add('aos-animate');
                            }, parseInt(delay));
                        } else {
                            entry.target.classList.add('aos-animate');
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        animatedElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    });
}
