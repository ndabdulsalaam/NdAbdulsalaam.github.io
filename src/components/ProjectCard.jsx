export default function ProjectCard({ project }) {
    return (
        <div className={`col-lg-4 col-md-6 portfolio-item filter-${project.category}`}>
            <div className="portfolio-wrap">
                <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                    loading="lazy"
                />
                <div className="card-body">
                    <h5 className="card-title text-center">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                </div>
            </div>
            <div className="portfolio-links text-center">
                <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project"
                >
                    <i className="bx bx-link-external"></i> View Project
                </a>
            </div>
        </div>
    );
}
