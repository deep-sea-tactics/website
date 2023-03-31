import site from './site.json'

export function serializeSchema(thing) {
    return `<script type="application/ld+json">${JSON.stringify(thing, null, 2)}</script>`
}

export const websiteSchema = 
{
    "@context": "http://schema.org",
    "@type": "Organization",
    "@id": "https://deepseatactics.com/",
    "name": "Deep Sea Tactics",
    "alternateName": 
    [
    "Landstown High School Deep Sea Tactics",
    "Landstown Deep Sea Tactics"
    ],
    "logo": "https://deepseatactics.com/images/horizontal_logo.png",
    "sameAs": "https://deepseatactics.com",
    "mainEntityOfPage": "https://deepseatactics.com",
    "description": "Landstown High School's innovative underwater robotics team.",
    "parentOrganization": 
    {
        "@type": "HighSchool",
        "name": "Landstown High School Governor's STEM and Technology Academy",
        "alternateName": 
        [
            "Landstown",
            "Landstown High School",
            "Landstown High School STEM academy",
            "Landstown HS",
            "LHS",
            "Landstown High",
            "Landstown Eagles",
            "Eagles",
            "Landstown High School Tech Academy",
            "Landstown High School STEM and Technology Academy",
            "Governor's STEM Academy at Landstown High School"
        ],
        "image": "https://www.bjuarchitects.com/wp-content/uploads/2016/02/front.jpg",
        "sameAs": "https://en.wikipedia.org/wiki/Landstown_High_School",
        "mainEntityOfPage": "https://landstownhs.vbschools.com/",
        "address": "2001 Concert Drive Virginia Beach, VA 23456",
        "naics": "611110",
        "telephone": "(757) 648-5500",
        "location": 
        {
            "@type": "Place",
            "address": "2001 Concert Drive Virginia Beach, VA 23456",
            "geo":
            {
                "@type": "GeoCoordinates",
                "latitude": 36.7796828,
                "longitude": -76.1006447,
            },
        },
        "parentOrganization": 
        {
            "@type": "Organization",
            "name": "Virginia Beach City Public Schools",
            "image": "https://resources.finalsite.net/videos/t_video_vp9_1080/v1659644394/vbschoolscom/osxjcr2t4axfjrebs9t0/SchoolsCompilationWebsiteDraft2.webm",
            "logo": "https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1646127051/vbschoolscom/iribbwhg3k8eth5piggo/logo.png",
            "sameAs": 
            [
                "https://en.wikipedia.org/wiki/Virginia_Beach_City_Public_Schools",
                "https://schoolquality.virginia.gov/divisions/virginia-beach-city-public-schools"
            ],
            "mainEntityOfPage": "https://www.vbschools.com/",
            "address": "2512 George Mason Drive Virginia Beach, Virginia, 23456-0038 United States",
            "location": 
            {
                "@type": "Place",
                "address": "2512 George Mason Drive Virginia Beach, Virginia, 23456-0038 United States",
                "geo":
                {
                    "@type": "GeoCoordinates",
                    "latitude": 36.7517741,
                    "longitude": -76.0614749,
                },
            },
            "naics": "611110",
            "telephone": "(757) 263-1000",
        },
    },
    "member": 
    [{
        "@type": "Person",
        "@id": "https://github.com/LeoDog896",	
        "name": "LeoDog896",
        "alternateName": "Tristan F.",
        "mainEntityOfPage": "https://leodog896.com/",
    },
    {
        "@type": "Person",
        "@id": "https://github.com/willuhmjs",
        "name": "William Faircloth",
        "alternateName": 
        [
            "willuhmjs",
            "willuhm-js"
        ],
        "mainEntityOfPage": "https://willuhmjs.com",
    },
    {
        "@type": "Person",
        "@id": "https://github.com/Daniel-Tomov",
        "name": "Daniel Tomov",
        "alternateName": 
        [
            "Daniel-Tomov",
            "Daniel_Tomov",
        ],
        "mainEntityOfPage": "https://danieltomov.tk",
    }],
    "memberOf": 
    {
        "@type": "Organization",
        "@id": "https://materovcompetition.org/",
        "name": "MATE ROV Competition",
        "image": "https://materovcompetition.org/sites/all/themes/nexus/templates/landing/images/volunteers.jpg",
        "logo": "https://materovcompetition.org/sites/default/files/CompMastheadLogo.jpg",
        "sameAs": 
        [
            "https://sanctuaries.noaa.gov/earthisblue/wk56-rov.html",
            "https://twitter.com/matecenter",
            "https://robotics.nasa.gov/mate/",
            "https://www.facebook.com/materovcompetition/"
        ],
        "mainEntityOfPage": "https://materovcompetition.org/",
        "keywords": 
        [
            "MATE",
            "MATE ROV",
            "MATE ROV Competition",
            "ROV Competition",
            "Remotely Operated Vehicle",
            "remotely operated vehicle",
            "schools",
            "teams",
            "robotics",
            "robots",
            "robot",
            "underwater robot",
            "underwater robotics",
            "competition",
            "learners",
            "education",
            "challenge",
            "global",
            "world",
            "international"
        ],
        "subOrganization": 
        {
            "@type": "Organization",
            "@id": "https://materovcompetition.org/midatlantic",
            "name": "MATE Mid-Atlantic Regional ROV Competition",
        },
    },
    "keywords": 
    [
        "MATE",
        "MATE ROV",
        "MATE ROV Competition",
        "ROV Competition",
        "Remotely Operated Vehicle",
        "remotely operated vehicle",
        "schools",
        "teams",
        "robotics",
        "robots",
        "robot",
        "underwater robot",
        "underwater robotics",
        "competition",
        "learners",
        "education",
        "challenge",
        "global",
        "world",
        "international",
        "innovative",
        "high school",
        "regional",
        "virginia beach",
        "VB",
        "LHS",
        "STEM",
        "Deep Sea Tactics"
    ],
}   
