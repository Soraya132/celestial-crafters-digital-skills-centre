import CommonHeader from "@/components/Common/CommonHeader";
import SkillsPageTemplate from "@/components/Common/SkillsPageTemplate";

const dataAnalysis = () => {
  const title = "Data Analysis";
  const overview =
    "Our workshop teaches essential skills in data collection, cleaning, analysis, and visualization. Participants learn to work with popular data analysis tools and programming languages such as Python, R, and SQL. Through hands-on projects and case studies, students gain practical experience in analyzing real-world datasets and deriving actionable insights.";
  const skills = [
    {
        "name": "Data Analysis",
        "description": "Data analysis involves examining, cleansing, transforming, and modeling data to discover useful information, conclusions, and support decision-making.",
        "src": "/cyber10.jpg"
    },
    {
        "name": "Statistical Analysis",
        "description": "Statistical analysis is the process of collecting, cleaning, and analyzing numerical data to uncover patterns, trends, and relationships.",
        "src": "/network6.jpg"
    },
    {
        "name": "Predictive Modeling",
        "description": "Predictive modeling is the process of using statistical techniques to predict future outcomes based on historical data.",
        "src": "/cyber11.jpg"
    },
    {
        "name": "Machine Learning",
        "description": "Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.",
        "src": "/cyber13.jpg"
    },
    {
        "name": "Data Visualization",
        "description": "Data visualization is the graphical representation of data and information to aid understanding and communication.",
        "src": "/cyber12.jpg"
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
