import profile from '../data/profile.json';

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="copyright">
                    &copy; {new Date().getFullYear()}{' '}
                    <strong>
                        <a href={profile.social.github} target="_blank" rel="noreferrer">
                            {profile.name}
                        </a>
                    </strong>
                </div>
            </div>
        </footer>
    );
}
