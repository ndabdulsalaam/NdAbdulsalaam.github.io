import profile from '../data/profile.json';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>About</h2>
                    <p>{profile.about}</p>
                </div>
                <div className="content" data-aos="fade-up" data-aos-delay="100">
                    <h4>Expertise</h4>
                    <ul>
                        {profile.expertise.map((item) => (
                            <li key={item}>
                                <i className="bi bi-chevron-right"></i>
                                <strong>{item}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="fst-italic" data-aos="fade-up" data-aos-delay="200">
                    {profile.tagline}
                </p>
            </div>
        </section>
    );
}
