import CommonHeader from "@/components/Common/CommonHeader";
import SkillsPageTemplate from "@/components/Common/SkillsPageTemplate";

const softwareDevelopment = () => {
  const title = "Software Development";
  const overview =
    "Our Software Development Workshop provides a comprehensive learning experience in programming languages, software engineering principles, and development tools. Participants gain practical skills in web development, mobile app development, and software project management. Our expert instructors guide students through hands-on projects and real-world scenarios to prepare them for careers in software development.";
  const skills =[
    {
        "name": "HTML",
        "description": "The standard markup language for creating web pages and web applications.",
        "src": "/html.jpg"
    },
    {
        "name": "CSS",
        "description": "The style sheet language used for describing the presentation of a document written in HTML.",
        "src": "/web10.jpg"
    },
    {
        "name": "React",
        "description": "A JavaScript library for building user interfaces, often used for building single-page applications.",
        "src": "/react.jpg"
    },
    {
        "name": "JavaScript",
        "description": "A programming language commonly used to create interactive effects within web browsers.",
        "src": "/js.jpg"
    },
    {
        "name": "Python",
        "description": "A high-level programming language known for its readability and simplicity, commonly used for web development, data analysis, and artificial intelligence applications.",
        "src": "/python.jpg"
    }
]

  const equipment =
    "Through generous donations, our center ensures that all participants have access to computers, software licenses, and development environments. Our onsite workshops offer a supportive learning environment for aspiring software developers in Nairobi slums. Participants have access to cutting-edge technology and industry-standard software tools to enhance their learning experience.";
  return (
    <div>
      <CommonHeader
        hero="/webdev.jpg"
        title={`${title} onsite workshop`}
        description="Embark on a journey to become a software development wizard. From front-end design to back-end functionality and mobile app development, our workshop covers it all, empowering you to build innovative digital solutions."
      />
      <SkillsPageTemplate
        title={title}
        overview={overview}
        skills={skills}
        equipment={equipment}
      />
    </div>
  );
};

export default softwareDevelopment;
