import profile from '../data/profile.json';

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                </div>
                <div className="contact-cards" data-aos="fade-in">
                    <div className="contact-card">
                        <i className="bi bi-geo-alt"></i>
                        <h4>Location</h4>
                        <p>{profile.contact.location}</p>
                    </div>
                    <div className="contact-card">
                        <i className="bi bi-envelope"></i>
                        <h4>Email</h4>
                        <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
                    </div>
                    <div className="contact-card">
                        <i className="bi bi-phone"></i>
                        <h4>Call</h4>
                        <a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
