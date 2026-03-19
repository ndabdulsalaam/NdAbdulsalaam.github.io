import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import profile from '../data/profile.json';

export default function Hero() {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: profile.titles,
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 2000,
        });

        return () => typed.destroy();
    }, []);

    return (
        <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>{profile.name}</h1>
                <p>
                    I'm a <span ref={typedRef} className="typed"></span>
                </p>
            </div>
        </section>
    );
}
