import CommonHeader from "@/components/Common/CommonHeader";
import SkillsPageTemplate from "@/components/Common/SkillsPageTemplate";

const dataAnalysis = () => {
  const title = "Data Analysis";
  const overview =
    "Our workshop teaches essential skills in data collection, cleaning, analysis, and visualization. Participants learn to work with popular data analysis tools and programming languages such as Python, R, and SQL. Through hands-on projects and case studies, students gain practical experience in analyzing real-world datasets and deriving actionable insights.";
  const skills = [
    {
        "name": "Network Security",
        "description": "Protect computer networks from unauthorized access and cyberattacks.",
        "src": "/cyber.jpg"
    },
    {
        "name": "Cyber Threat Intelligence",
        "description": "Gather and analyze data to identify potential cyber threats and vulnerabilities.",
        "src": "/challenge.jpg"
    },
    {
        "name": "Ethical Hacking",
        "description": "Simulate cyberattacks to identify weaknesses in systems and networks.",
        "src": "/challenge.jpg"
    },
    {
        "name": "Security Operations",
        "description": "Monitor and manage security systems to detect and respond to security incidents.",
        "src": "/challenge.jpg"
    },
    {
        "name": "Incident Response",
        "description": "Develop and implement strategies to address and mitigate security breaches and incidents.",
        "src": "/challenge.jpg"
    }
]

  const equipment =
    "With the support of our donors, our center provides access to computers, statistical software, and online resources for data analysis training. Our onsite workshops offer hands-on learning experiences tailored to the needs of women in Nairobi slums. Participants receive guidance from experienced instructors and mentorship from industry professionals.";
  return (
    <div>
      <CommonHeader
        hero="/datahero.jpg"
        title={`${title} onsite workshop`}
        description="Discover the power of data and unlock valuable insights with our Data Analysis workshop. Learn to analyze, visualize, and interpret data to make informed decisions and drive business success."
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

export default dataAnalysis;
