import { useState, useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';

const CATEGORIES = [
    { key: '*', label: 'All' },
    { key: 'analysis', label: 'Analysis' },
    { key: 'ml', label: 'ML' },
    { key: 'viz', label: 'Dashboard' },
];

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('*');
    const gridRef = useRef(null);
    const isoRef = useRef(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        imagesLoaded(grid, () => {
            isoRef.current = new Isotope(grid, {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows',
                transitionDuration: '0.6s',
            });
        });

        return () => {
            if (isoRef.current) isoRef.current.destroy();
        };
    }, []);

    useEffect(() => {
        if (!isoRef.current) return;
        const filterValue = activeFilter === '*' ? '*' : `.filter-${activeFilter}`;
        isoRef.current.arrange({ filter: filterValue });
    }, [activeFilter]);

    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Portfolio</h2>
                    <p>A collection of my data science, analysis, and machine learning projects</p>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-filters">
                            {CATEGORIES.map((cat) => (
                                <li
                                    key={cat.key}
                                    className={activeFilter === cat.key ? 'filter-active' : ''}
                                    onClick={() => setActiveFilter(cat.key)}
                                >
                                    {cat.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" ref={gridRef} data-aos="fade-up" data-aos-delay="100">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
