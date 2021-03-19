// Here I practiced with arrays and mapping over items
// Each card on the education timeline comes from the array below
import CalcsendLogo from '../images/calcsendLogo.png';
import TemporaryLogo from '../images/temporaryLogo.png';
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
            text: "Github"
        }
    },
    {
        text: "Color Generator",
        date: "TEMP",
        description: "THIS IS WHERE THE DESCRIPTION FOR MY SUPER AWESOME, AWESOME DESCRIPTION WILL BE.",
        image: TemporaryLogo,
        category: {
            tag: "TYPE",
            color: "#CAE2BC"
        },
        link: {
            url:
                "TEMP",
            text: "TEMP"
        }
    },
    {
        text: "DeepLens AI",
        date: "TEMP2",
        description: "THIS IS WHERE THE DESCRIPTION FOR ANOTHER ONE OF MY SUPER AWESOME PROJECTS WILL BE!",
        image: TemporaryLogo,
        category: {
            tag: "TYPE",
            color: "#CAE2BC"
        },
        link: {
            url:
                "TEMP2",
            text: "TEMP2"
        }
    },
    {
        text: "Art Docent",
        date: "TEMP2",
        description: "THIS IS WHERE THE DESCRIPTION FOR ANOTHER ONE OF MY SUPER AWESOME PROJECTS WILL BE! I WANT TO MAKE SURE TO EXPLAIN THAT A DOCENT IS SOMEONE THAT ACTS AS A GUIDE. TRY TO DO SOMETHING CLEVER HERE!",
        image: TemporaryLogo,
        category: {
            tag: "TYPE",
            color: "#CAE2BC"
        },
        link: {
            url:
                "TEMP2",
            text: "TEMP2"
        }
    }
];

export default data;