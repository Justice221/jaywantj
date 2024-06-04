import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Membership Application',
        description: "Designed Front- End layout for the application using Shopify - Polaris.Improved performance of web applications by memoizing the code with React hooks.Implemented Redux with React to add global data accessibility and easily monitor changes across the application, reducing debugging time. Redux reduced performance bottlenecks and code overhead, improving data accessibility across features and preventing unnecessary re-renders. Implemented a common Microservice architecture to increase the scalability of the application. NodeJS, Express, and CosmosDB for backend API services. Tested API End Points on Postman. Created API docs for the UI - workflow.",
        tools: ['React', 'Typescript', 'CosmosDB', 'Redux-Thunk'],
        role: 'Front-End Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Wholesale affiliate application',
        description: 'Designed UI layout using Shopify- Polaris. Migrated app to Typescript for improved readability and debugging in the codebase Optimized and reduced the user - interaction time.',
        tools: ['React', 'Typescript', 'CosmosDB', 'Redux-Thunk'],
        role: 'Front-End Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Upsell Feature',
        description: 'Created a custom cart page for the storefront. Designed layout using Rsuite library. Added business logic for the application. Tested API End Points on Postman.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Express', 'TypeScript', 'MongoDB', 'Azure CosmosDB', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Health Care Project',
        description: "My team and I developed a healthcare insurance claims dashboard application for a USA based client. As a front-end developer, I worked on creating the dashboard using ReactJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Jest for testing phase.",
        tools: ['ReactJS', 'Material UI', 'Redux', 'Jest', 'Enzyme', 'NVDA'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Front-End Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },