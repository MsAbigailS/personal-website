// Here I practiced with arrays and mapping over items
// Each card on the education timeline comes from the array below

import React from 'react';
const data = [
    {
        text: "The University of Texas at Dallas",
        date: "Aug 15 2020",
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
        text: "Terry Scholar Award",
        date: "FIND DATE",
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
        text: "Academic Excellence Scholarship",
        date: "FIND DATE",
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
        text: "Association of Computing Machinery, Projects Division",
        date: "FIND DATE",
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