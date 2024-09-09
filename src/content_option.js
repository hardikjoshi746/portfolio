import image1 from './assets/images/Home.png'
import image2 from './assets/images/3.webp'
import image3 from './assets/images/4.png'
import image4 from './assets/images/5.jpeg'
import image5 from './assets/images/6.jpeg'
import image6 from './assets/images/8.png'
import image7 from './assets/images/9.png'
import image8 from './assets/images/10.jpeg'
import myImage from './assets/images/myImage.jpg'

const logotext = "Hardik";
const meta = {
    title: "Hardik Joshi",
    description: "I'm Hardik Joshi Software Devloper _ Full stack devloper,currently Studying at Northeastern University",
};

const introdata = {
    title: "I'm Hardik Joshi",
    animated: {
        first: "I love solving problem",
        second: "I am a software developer",
    },
    description: "I'm Software Devloper, currently persuing Master's in Information Systems at Northeastern University",
    your_img_url: myImage,
};

const dataabout = {
    title: "Who am I",
    aboutme: "I am a skilled software engineer currently pursuing a Master of Science in Information Systems at Northeastern University, set to graduate in December 2024. With a strong foundation in computer science from R.G.P.V., I have gained hands-on experience through internships at Ipser Labs and Amstech Technologies. During these internships, I contributed to developing sophisticated web applications, optimizing performance, and enhancing user engagement. As a Teaching Assistant at Northeastern University, I had the opportunity to support students in mastering various design tools. My expertise spans full-stack development, DevOps, cloud services, and CI/CD pipelines, which I have demonstrated through academic projects involving Docker, Jenkins, and Kubernetes. I am proficient in multiple programming languages and DevOps tools, making me a versatile and dynamic engineer who thrives in challenging environments.",
};
const worktimeline = [
    {
        jobtitle: "JOB TITLE",
        where: "COMPANY",
        date: "DURATION",
    },
    {
        jobtitle: "Software Engineering Intern",
        where: "IpserLabs",
        date: "Jan 2024 - May 2024",
    },
    {
        jobtitle: "Teaching Assistant",
        where: "Northeastern University",
        date: "May 2024 - Dec 2024",
    },
    {
        jobtitle: "Software Engineering Intern",
        where: "Amstech Technologies",
        date: "Sep 2019 - Dec 2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "GoLang",
        value: 90,
    },
    {
        name: "Terraform",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 90,
    },
    {
        name: "SQL",
        value: 70,
    },
    {
        name: "Infrastructure As A Code",
        value: 85,
    },
    {
        name: "System design",
        value: 85,
    },
    {
        name: "Data Structure and Algorithms",
        value: 85,
    },
    {
        name: "Docker and Kubernetes",
        value: 91,
    },
    {
        name: "Node.js",
        value: 80,
    },
    {
        name: "MongoDB",
        value: 86,
    },
    {
        name: "CI/CD (Jenkins, Github Actions, Circle CI)",
        value: 89,
    },
];

const services = [{
        title: "AWS Academy Graduate, AWS",
        description: "Issued on: April 2021",
    },
    {
        title: "IBM DevOps Essentials, Coursera",
        description: "Issued on: March 2024",
    },
    {
        title: "The Web Developer Bootcamp 2024, Udemy",
        description: "Issued on: August 2024",
    },
];

const dataportfolio = [
    {
        id: 1,
        img: image1,
        title: "Camp Vistas",
        description: "Complete MERN stack application with user authentication and cloud deployment.",
        link: "https://github.com/hardikjoshi746/Camp-Vistas",
        aboutTheProject: 'Camp Vistas is a comprehensive platform designed to enhance the camping experience for enthusiasts. Key Features and Achievements: User Authentication: Implemented secure sign-up and login processes, resulting in over 1,000 registered users within the first month. This ensures user data security and provides a personalized experience. Campsite Listings: Added more than 500 campsites with detailed information and user reviews. This feature improved user engagement by 75% as users can make informed decisions about their camping trips. Interactive Mapping: Integrated a mapping feature that helps users locate campsites quickly and efficiently, increasing user interaction time by 40%. Responsive Design: Optimized the platform for both desktop and mobile devices, leading to a 50% increase in mobile user access. This ensures a seamless experience across all devices.',
      },
      {
        id: 2,
        img: image3,
        title: "Accelerated Integration and Seamless Docker Deployment",
        description: "Optimizing deployment processes using Docker for improved efficiency.",
        link: "https://github.com/hardikjoshi746/DevOps",
        aboutTheProject: 'I created a continuous integration and continuous delivery (CI/CD) pipeline using Jenkins to automate the building, testing, and deployment of a Java project on a Tomcat server. The pipeline uses Maven to build the code and Docker to deploy the built code to Docker Hub. This automation has reduced the code integration and testing cycle time by 70%, resulting in faster feature delivery and improved time-to-market Implemented a rigorous unit and integration testing process within the Jenkins pipeline. This ensures that all code changes are thoroughly tested before they are deployed to production. As a result, the project has achieved a 95% pass rate for unit and integration tests, effectively minimizing code defects and ensuring high-quality software releases Used Ansible playbooks to automate the creation and deployment of Docker images. This ensures that all Docker images are created using the same consistent process and that they are all deployed to Docker Hub in the same way. As a result, the project has maintained a consistent Docker image consistency rate of 99%, guaranteeing reliable deployments with minimal errors.',
      },
      {
        id: 3,
        img: image2,
        title: "Automated CI/CD Pipeline with Jenkins and SonarQube",
        description: "Building continuous integration pipelines to streamline development.",
        link: "https://github.com/hardikjoshi746/vprofile-project",
        aboutTheProject: 'I orchestrated a Jenkins pipeline that continuously monitors the Git repository for code changes every 5 minutes. This ensures that new code is integrated into the project quickly and efficiently, reducing development delays.  Integrated SonarQube into the pipeline to automatically assess code quality. This ensures that the pipeline will fail if the code quality score drops below 80%. This implementation significantly enhanced overall software quality. Finally, I configured the pipeline to generate deployable artifacts after successful build and testing. This guarantees that only validated and high-quality code is deployed. This improvement increased project reliability and stability by minimizing potential bugs or errors.',
      },
      {
        id: 4,
        img: image8,
        title: "Post-Pay",
        description: "An eCommerce application designed for flexible post-payment options.",
        aboutTheProject: 'As a project leader, I led a team of 5 talented designers in the development of an online shopping website that offers users the convenience of shopping from multiple stores and placing items in a single cart. The project aimed to provide a seamless and user-friendly shopping experience to customers by incorporating innovative payment systems and intuitive website design. We designed a payment system that enables users to pay later based on their credit score, which is a unique and effective feature that differentiates our website from other competitors in the market. Our team utilized Moqups to create wireframes and Figma to design the website, ensuring its user-friendliness and aesthetic appeal. Throughout the project, we collaborated closely with other teams to conduct a comprehensive analysis of multiple shopping websites, identifying areas for improvement and incorporating best practices into our own design. Overall, our team s efforts resulted in a successful launch of the website, which has been positively received by customers and achieved significant business growth.',
      },
      {
        id: 5,
        img: image4,
        title: "Easy Connect",
        description: "A full-stack web application designed to connect people seamlessly.",
        link: "https://github.com/hardikjoshi746/Easy-Connect",
        aboutTheProject: `As a team leader, I spearheaded the development of a cutting-edge online communication platform designed to facilitate seamless interactions among multiple concurrent users. To achieve this goal, we implemented advanced features such as group chat and video conferencing, which allowed for effective and efficient communication.
To ensure the platform was highly responsive and user-friendly, I led the development of the frontend using React Js, HTML, and CSS. For the backend design, we utilized robust technologies such as MongoDB, Node Js, and Express, which enabled us to build a scalable and reliable system.
Overall, our team was able to deliver an exceptional online communication application that met the needs of our clients and provided a superior user experience.`,
      },
      {
        id: 6,
        img: image5,
        title: "Stock, Forex, Commodity, and Shares Price Prediction",
        description: "A machine learning-based system for predicting market prices.",
        link: "https://github.com/hardikjoshi746/Stock-Price-Prediction",
        aboutTheProject: `As part of my work, I designed a comprehensive Django framework capable of analyzing and displaying the rise and fall of stock predictions. To achieve this, I programmed a utility utilizing cutting-edge machine learning techniques such as Long Short-Term Memory (LSTM) and Recurrent Neural Network (RNN) models. This utility was able to achieve an impressive 88% predicting power for stocks.
To ensure that the analysis was based on accurate and relevant data, I applied stock analysis to values spanning the past 10 years. The results of this analysis enabled me to make informed predictions and document an estimate of the stock's worth for the upcoming day.
Overall, my work represents a significant step forward in stock prediction technology, utilizing advanced machine learning techniques to achieve a high degree of accuracy in predicting stock market trends. This framework can be utilized by individuals and organizations seeking to make informed investment decisions, enabling them to stay ahead of the curve and capitalize on market opportunities.`,
      },
      {
        id: 7,
        img: image6,
        title: "Online Voting System",
        description: "A secure online voting platform ensuring privacy and authenticity.",
        link: "https://github.com/hardikjoshi746/Secure-Online-Voting-System-Development",
        aboutTheProject: `As a skilled developer, I successfully created a robust online voting website utilizing Java, HTML, CSS, and JS. In order to ensure the security of the platform, I developed a secure portal capable of validating government IDs to enable users to vote.
To facilitate the storage and management of user and recipient details, I managed an SQL database, which was carefully designed to ensure efficient data handling and maximum security.
To ensure the scalability of the system, I devised strategies to upscale system capacity to handle more than 100 entries in the database, ensuring that the platform can continue to function effectively as the user base grows.
Overall, my work represents a significant step forward in developing secure and efficient online voting platforms, utilizing cutting-edge technologies and a strategic approach to ensure optimal performance and user experience. This platform can be utilized by organizations and governments seeking to modernize their voting systems and increase voter turnout`,
      },
      {
        id: 8,
        img: image7,
        title: "Hospital Managment System",
        description: "Managment System created to streamline process.",
        link: "https://github.com/hardikjoshi746/Hospital-and-NGO-Management-System",
        aboutTheProject: `We developed an innovative application using Java Swing to cater specifically to the needs of elderly and cardiac patients. This platform enables patients to connect with non-governmental organizations (NGOs), physicians, and hospitals, which provide all necessary equipment to the patients. The funding for these services is provided by generous donors.
The application is designed to provide real-time data on patient needs, which is presented directly to the mayor for review. The data is carefully analyzed, and the mayor can then make informed decisions on how to allocate resources to provide the best possible care for patients.
Our use of Java Swing ensured that the application is user-friendly and accessible to all users, including elderly patients. The platform is scalable and can be adapted to suit the needs of different patient populations.`,
      }

];

const contactConfig = {
    YOUR_EMAIL: "hardik21joshi@gmail.com",
    YOUR_FONE: "(857)200-9265",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    YOUR_USER_ID: process.env.REACT_APP_EMAILJS_USER_ID,
};

const socialprofils = {
    github: "https://github.com/hardikjoshi746",
    linkedin: "https://www.linkedin.com/in/hardikjoshi746/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};