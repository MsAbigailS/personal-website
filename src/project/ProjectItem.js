import React from 'react';
const ProjectItem = ({ data }) => (
    <div className="project-item">
        <div className="project-content">
            <h3>{data.text}</h3>
            <span>
                <img src={data.image} alt="ProjectLogo" className="project-logo"/>
            </span>
            <br/>
            <time>{data.date}</time>
            <br/>
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <p>{data.description}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
        </div>
    </div>
);

export default ProjectItem;