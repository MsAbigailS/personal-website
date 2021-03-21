// Here I practiced with arrays and mapping over items
// Each card on the education timeline comes from the array below
import CalcsendLogo from '../images/calcsendLogo.png';
import TemporaryLogo from '../images/temporaryLogo.png';
import UnixIcon from '../images/unix2.png';
import Mars from '../images/mars3.png';
import PersonalIcon from '../images/personalweb.png';
import React from 'react';
const data = [
    {
        text: "CalcSend",
        date: "Start date - End date",
        description: "A collaborative project under The Association of Computing Machinery. CalcSend acts as an advanced mathematics calculator with clear front-end accessibility and Wolfram Alpha API services. I was both part of the front- and back-end team.",
        image: CalcsendLogo,
        category: {
            tag: "Organization",
            color: "#E6BEAE"
        },
        link: {
            url:
                "https://github.com/MsAbigailS/CalcSend",
            text: "See project"
        }
    },
    {
        text: "MIPS File Input and Manipulation",
        date: "Start date - End date",
        description: "A collaborative project under The Association of Computing Machinery. CalcSend acts as an advanced mathematics calculator with clear front-end accessibility and Wolfram Alpha API services. I was both part of the front- and back-end team.",
        image: Mars,
        category: {
            tag: "Academic",
            color: "#E6BEAE"
        },
        link: {
            url:
                "https://github.com/MsAbigailS/CalcSend",
            text: "See project"
        }
    },
    {
        text: "UNIX Makefile and Gawk",
        date: "Start date - End date",
        description: "A collaborative project under The Association of Computing Machinery. CalcSend acts as an advanced mathematics calculator with clear front-end accessibility and Wolfram Alpha API services. I was both part of the front- and back-end team.",
        image: UnixIcon,
        category: {
            tag: "Academic",
            color: "#E6BEAE"
        },
        link: {
            url:
                "https://github.com/MsAbigailS/CalcSend",
            text: "See project"
        }
    },
    {
        text: "UNIX Tarball with File Manipulation",
        date: "Start date - End date",
        description: "A collaborative project under The Association of Computing Machinery. CalcSend acts as an advanced mathematics calculator with clear front-end accessibility and Wolfram Alpha API services. I was both part of the front- and back-end team.",
        image: UnixIcon,
        category: {
            tag: "Academic",
            color: "#E6BEAE"
        },
        link: {
            url:
                "https://github.com/MsAbigailS/CalcSend",
            text: "See project"
        }
    },
    {
        text: "Personal Website",
        date: "Start date - End date",
        description: "A collaborative project under The Association of Computing Machinery. CalcSend acts as an advanced mathematics calculator with clear front-end accessibility and Wolfram Alpha API services. I was both part of the front- and back-end team.",
        image: PersonalIcon,
        category: {
            tag: "Personal",
            color: "#E6BEAE"
        },
        link: {
            url:
                "https://github.com/MsAbigailS/CalcSend",
            text: "See project"
        }
    }
    
];

export default data;