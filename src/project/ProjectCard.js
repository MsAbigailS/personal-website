import React from 'react';
import timelineData from './data';
import TimelineItem from './ProjectItem';

const ProjectCard = () =>
    timelineData.length > 0 && (
        <div className="project-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default ProjectCard; 