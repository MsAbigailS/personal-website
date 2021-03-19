import React from 'react';
import timelineData from './data';
import TimelineItem from './TimelineItem';

const EducationTimeline = () =>
    timelineData.length > 0 && (
        <div className="education-layout">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default EducationTimeline; 