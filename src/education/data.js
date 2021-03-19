// Here I practiced with arrays and mapping over items
// Each card on the education timeline comes from the array below

import React from 'react';
const data = [
    {
        backgroundURL: "https://www.utdallas.edu/enroll/files/current-students.jpg",
        text: "Academic Excellence Scholarship",
        date: "Dec 15, 2019",
        description: "I was awarded the selective Academic Excellence Scholarship (AES) based on my high school academic accomplishments, community involvement, leadership, distinction in extracurricular activities, and work experience.",
        category: {
            tag: "Scholarship",
            color: "#CAE2BC"
        },
        link: {
            url:
                "https://www.utdallas.edu/enroll/freshman/aes/",
            text: "UTD Terry Scholars 2020"
        }
    },
    {
        backgroundURL: "https://media.racecheck.com/EventInstance/0824fe7c-7995-4ce4-b57b-14d2c0533080.png",
        text: "Terry Scholar Award",
        date: "Apr 8, 2020",
        description: "I became one of 10 UT Dallas freshmen selected for the prestigious scholarship on the basis of academic excellence, leadership, service, and financial need. Covers all expenses of a rigorous academic education and offers a diverse array of extracurricular experience with a focus on service and leadership.",
        category: {
            tag: "Scholarship",
            color: "#CAE2BC"
        },
        link: {
            url:
                "https://honors.utdallas.edu/terry/2020-scholars",
            text: "UTD Terry Scholars 2020"
        }
    },
    {
        backgroundURL: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/347ce4b2a0f178dd8687ae2a47672203",
        text: "The University of Texas at Dallas",
        date: "Aug 15 2020",
        description: "I began my first semester at UTD! I enrolled in the Erik Jonsson School of Engineering and Computer Science in pursuit of a degree in both computer science and software engineering.",
        category: {
            tag: "School",
            color: "#E6BEAE"
        },
        link: {
            url:
                "https://www.utdallas.edu/",
            text: "Campus Information"
        }
    },
    {
        backgroundURL: "https://www.acm.org/binaries/content/gallery/acm/ctas/ambassadors-for-acm.jpg/ambassadors-for-acm.jpg/acm%3Adesktopcta",
        text: "Association of Computing Machinery, Projects Division",
        date: "Sep 9, 2020",
        description: "I was accepted into the Project's Division of ACM! With four other team members, I worked to create CalcSend -- my first website that features both a front-end in Javascript React and back-end with API calls to Wolfram Alpha.",
        category: {
            tag: "Clubs & Organizations",
            color: "#F1BF98"
        },
        link: {
            url:
                "https://www.acmutd.co/projects",
            text: "UTD Terry Scholars 2020"
        }
    }
];

export default data;