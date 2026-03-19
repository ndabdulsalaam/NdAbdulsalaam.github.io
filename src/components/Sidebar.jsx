import { useEffect, useRef } from 'react';
import profile from '../data/profile.json';

export default function Sidebar({ activeSection }) {
    const navLinks = [
        { id: 'hero', icon: 'bx-home', label: 'Home' },
        { id: 'portfolio', icon: 'bx-book-content', label: 'Portfolio' },
        { id: 'skills', icon: 'bx-file-blank', label: 'Skills' },
        { id: 'about', icon: 'bx-user', label: 'About' },
        { id: 'contact', icon: 'bx-envelope', label: 'Contact' },
    ];

    const headerRef = useRef(null);

    const toggleMobileNav = () => {
        document.body.classList.toggle('mobile-nav-active');
    };

    return (
        <>
            <i className="bi bi-list mobile-nav-toggle" onClick={toggleMobileNav}></i>
            <header id="header" ref={headerRef}>
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img
                            src={profile.profileImage}
                            alt={profile.name}
                            className="img-fluid rounded-circle"
                        />
                        <h1 className="text-light">
                            <a href="#hero">{profile.name}</a>
                        </h1>
                        <div className="social-links mt-3 text-center">
                            <a href={profile.social.linktree} target="_blank" rel="noreferrer">
                                <i className="bx bx-link"></i>
                            </a>
                            <a href={profile.social.github} target="_blank" rel="noreferrer">
                                <i className="bx bxl-github"></i>
                            </a>
                            <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                            <a href={profile.social.twitter} target="_blank" rel="noreferrer">
                                <i className="bx bxl-twitter"></i>
                            </a>
                            <a href={`mailto:${profile.contact.email}`}>
                                <i className="bx bx-envelope"></i>
                            </a>
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        className={`nav-link scrollto${activeSection === link.id ? ' active' : ''}`}
                                        onClick={() => document.body.classList.remove('mobile-nav-active')}
                                    >
                                        <i className={`bx ${link.icon}`}></i>
                                        <span>{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
