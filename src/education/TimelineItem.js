import React from 'react';
const TimelineItem = ({ data }) => (
    <div className="information-card"
    style={{backgroundImage: `url(${data.backgroundURL})`}}>
                <div className="more-container">
                    <div className="content">
                        <a href={data.link.url} target="_blank">
                            <button className="btn">
                                Learn More
                            </button>
                        </a>
                    </div>
                </div>
                <div className="informations-container">
                    <div className="title">
                        {data.text}
                    </div>
                    <div className="time">
                        {data.date}
                    </div>
                    <div className="tag">
                        {data.category.tag}
                    </div>
                    <div className="more-information">
                    
                        <div className="info-and-date-container">
                            <div className="box info">
                            {data.description}
                                <div className="icon">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
);

export default TimelineItem;