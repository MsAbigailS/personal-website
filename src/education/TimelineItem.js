import React from 'react';
const TimelineItem = ({ data }) => (
    <div className="information-card"
    style={{backgroundImage: `url(${data.backgroundURL})`}}>
                <div className="more-container">
                    <div className="content">
                        <button className="btn">
                            Learn More
                        </button>
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

    // NOTE Working Education Timeline
    // <div className="timeline-item">
    //     <div className="timeline-item-content">
    //         <span className="tag" style={{ background: data.category.color }}>
    //             {data.category.tag}
    //         </span>
    //         <time>{data.date}</time>
    //         {/* <p>{data.text}</p> */}
    //         {data.link && (
    //             <a
    //                 href={data.link.url}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //                 {data.text}
    //             </a>
    //         )}
    //         <p className="description">
    //             {data.description}
    //         </p>
    //         <span className="circle" />
    //     </div>
    // </div>
);

export default TimelineItem;