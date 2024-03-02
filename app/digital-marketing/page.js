import CommonHeader from "@/components/Common/CommonHeader";
import SkillsPageTemplate from "@/components/Common/SkillsPageTemplate";

const digitalMarketing = () => {
  const title = "Digital Marketing";
  const overview =
    "Our workshop teaches essential skills in online marketing, including search engine optimization (SEO), social media marketing, email marketing, and paid advertising. Participants learn to develop digital marketing strategies and campaigns. Through real-world projects and simulations, students gain practical experience in planning, executing, and optimizing digital marketing campaigns.";
  const skills = [
    {
        "name": "Content Marketing",
        "description": "Create and distribute valuable content to attract and engage a target audience.",
        "src": "/digital.jpg"
    },
    {
        "name": "SEO",
        "description": "Optimize website content and structure to improve visibility and ranking in search engine results.",
        "src": "/dataanalyshero.jpg"
    },
    {
        "name": "Social Media Marketing",
        "description": "Promote products or services through social media platforms to increase brand awareness and drive traffic.",
        "src": "/dataanalysis.jpg"
    },
    {
        "name": "Email Marketing",
        "description": "Send targeted emails to prospects and customers to nurture leads and increase sales.",
        "src": "/datahero.jpg"
    }
]

  const equipment =
    "With the support of our donors, our center provides access to computers, digital marketing tools, and online resources for training. Our onsite workshops offer practical skills and hands-on experience for women in Nairobi slums. Participants learn from industry experts and receive personalized guidance to succeed in the digital marketing field.";
  return (
    <div>
      <CommonHeader
        hero="/dataanalysis.jpg"
        title={`${title} onsite workshop`}
        description="Dive into the dynamic realm of digital marketing and discover how to attract, engage, and convert audiences online. From SEO and SEM to email marketing and analytics, our workshop covers essential techniques for digital success."
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

export default digitalMarketing;
