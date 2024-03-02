import CommonHeader from "@/components/Common/CommonHeader";
import SkillsPageTemplate from "@/components/Common/SkillsPageTemplate";

const machineLearning = () => {
  const title = "AI/Machine Learning";
  const overview =
    "Our workshop provides participants with a comprehensive understanding of artificial intelligence and machine learning concepts. Participants learn to develop machine learning models, analyze data, and make predictions. Through hands-on projects and experiments, students gain practical experience in building AI applications.";
  const skills =[
    {
        "name": "Machine Learning Algorithms",
        "description": "Algorithms used to train models and make predictions from data, enabling machines to learn and improve over time.",
        "src": "/AI.jpg"
    },
    {
        "name": "Deep Learning",
        "description": "A subset of machine learning that uses neural networks with multiple layers to learn from large amounts of data.",
        "src": "/digital.jpg"
    },
    {
        "name": "Data Preprocessing",
        "description": "The process of cleaning, transforming, and preparing raw data for analysis to improve the accuracy of machine learning models.",
        "src": "/machine.jpg"
    },
    {
        "name": "Model Evaluation",
        "description": "Assessing the performance and effectiveness of machine learning models based on various metrics and criteria.",
        "src": "/machine5.jpg"
    },
    {
        "name": "Natural Language Processing",
        "description": "The branch of artificial intelligence focused on enabling computers to understand, interpret, and generate human language.",
        "src": "/machinlearning.jpg"
    }
]

  const equipment =
    "With the support of our donors, our center provides access to computers, machine learning libraries, and online resources for training. Our onsite workshops offer hands-on learning experiences for women in Nairobi slums. Participants learn from industry experts and receive guidance to develop their machine learning projects.";
  return (
    <div>
      <CommonHeader
        hero="/machine.jpg"
        title={`${title} onsite workshop`}
        description=" Step into the future of technology with our AI/Machine Learning workshop. Gain expertise in algorithms, programming languages, and application development to create intelligent solutions for diverse industries."
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

export default machineLearning;
