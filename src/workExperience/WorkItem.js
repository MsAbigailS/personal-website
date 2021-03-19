import React from 'react';
import './WorkItem.css';
const WorkItem = ({ data }) => (
    <div className="work-item">
        <div className="work-content">

            <div className="title">
                <div>
                    <h3 className="company-name">
                        {data.company}
                    </h3>
                    <h5>
                        {data.position}
                    </h5>
                    <time className="time">
                        {data.date}
                    </time>
                </div>
                
                <p className="position-description">
                    {data.description}
                </p>
            </div>

        
        

        </div>
        {/* <div className="employeer-information">
            <p className="employeer-contact-information">
                Employeer: {data.employeer.name}
            </p>
            <p className="employeer-contact-information">
                Contact information:
            </p>
            <p className="employeer-contact-information">    
                {data.employeer.phone}
            </p>
            <p className="employeer-contact-information">
                {data.employeer.email}
            </p>
        </div> */}
    </div>
);

export default WorkItem;