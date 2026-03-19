import { useEffect, useRef } from 'react';
import profile from '../data/profile.json';

export default function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const bars = entry.target.querySelectorAll('.progress-bar');
                        bars.forEach((bar) => {
                            const value = bar.getAttribute('aria-valuenow');
                            bar.style.width = `${value}%`;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const half = Math.ceil(profile.skills.length / 2);
    const leftSkills = profile.skills.slice(0, half);
    const rightSkills = profile.skills.slice(half);

    const renderSkill = (skill) => (
        <div className="progress" key={skill.name}>
            <span className="skill">
                {skill.name} <i className="val">{skill.level}%</i>
            </span>
            <div className="progress-bar-wrap">
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    );

    return (
        <section id="skills" className="skills section-bg" ref={sectionRef}>
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Skills</h2>
                </div>
                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                        {leftSkills.map(renderSkill)}
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        {rightSkills.map(renderSkill)}
                    </div>
                </div>
            </div>
        </section>
    );
}
