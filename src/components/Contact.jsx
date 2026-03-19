import profile from '../data/profile.json';

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                </div>
                <div className="row" data-aos="fade-in">
                    <div className="d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>{profile.contact.location}</p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>{profile.contact.email}</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>{profile.contact.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
