import React from 'react';
import timelineData from './data';
import TimelineItem from './WorkItem';
import './WorkCard.css';

const WorkCard = () =>
    timelineData.length > 0 && (
        <div className="work-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default WorkCard; 