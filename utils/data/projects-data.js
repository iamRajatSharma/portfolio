import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Ebharatisampat (E Library)',
        description: `eBharati Sampat is an innovative platform designed to empower users with easy access to a wide range of educational resources and job opportunities. The website features a comprehensive OCR (Optical Character Recognition) system, enabling users to digitize and manage documents efficiently. With a user-friendly interface and a robust backend, eBharati Sampat ensures seamless navigation and reliable performance. As the lead developer, I was responsible for the overall project architecture, frontend and backend development, database design, and integration of OCR technology. My contributions ensured a smooth and engaging user experience, leading to a successful launch and positive user feedback.`,
        tools: ['PHP', 'Javascript', 'MySQL', 'Google-Vision OCR API', 'AWS S3', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Learn Samskrit Online (E Commerce)',
        description: 'Learn Samskrit Online is a dedicated platform for learning the ancient language of Sanskrit. The website offers a structured and interactive approach to mastering Sanskrit, catering to beginners and advanced learners alike. Through a blend of modern technology and traditional teaching methods, users can access a variety of lessons, exercises, and resources to enhance their language skills.',
        tools: ['PHP', 'Javascript', "Google Maps", "MySQL", "HTML", "CSS", "cPanel", "Apache Server"],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://learnsamskrit.online/',
        image: travel,
    },
    {
        id: 3,
        name: 'NCISM India (E Commerce)',
        description: 'NCISM Electives is an educational platform designed to provide students with access to a wide range of elective courses across various disciplines. The website offers a streamlined and user-friendly interface for students to explore, enroll in, and manage their elective courses, ensuring a flexible and personalized learning experience.',
        tools: ['PHP', 'Javascript', "Google Maps", "MySQL", "Ubuntu Operating System", "HTML", "CSS", "cPanel", "Apache Server"],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
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