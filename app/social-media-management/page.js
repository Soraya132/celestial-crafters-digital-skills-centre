import CommonHeader from "@/components/Common/CommonHeader";
import SkillsPageTemplate from "@/components/Common/SkillsPageTemplate";

const socialMedia = () => {
  const title = "Social Media Management";
  const overview =
    "Our workshop teaches participants how to effectively manage and optimize social media platforms for businesses and organizations. Participants learn social media marketing strategies, content creation, and analytics. Through hands-on projects and case studies, students gain practical experience in developing and executing social media campaigns.";
  const skills = [
    {
        "name": "Social Media Strategy",
        "description": "Developing a plan to achieve specific goals and objectives on social media platforms, including audience targeting and content scheduling.",
        "src": "/social.jpg"
    },
    {
        "name": "Content Planning",
        "description": "Creating a strategy for producing and distributing content across social media channels, tailored to audience interests and preferences.",
        "src": "/social1.jpg"
    },
    {
        "name": "Community Management",
        "description": "Engaging with online communities to build relationships, foster discussions, and address customer inquiries or concerns.",
        "src": "/social2.jpg"
    },
    {
        "name": "Analytics",
        "description": "Collecting and analyzing data from social media platforms to measure performance, track audience engagement, and inform strategic decisions.",
        "src": "/dataanalyshero.jpg"
    },
    {
        "name": "Advertising",
        "description": "Creating and optimizing paid campaigns on social media platforms to reach target audiences, increase brand visibility, and drive conversions.",
        "src": "/social3.jpg"
    }
]

  const equipment =
    "With the support of our donors, our center provides access to computers, social media management tools, and online resources for training. Our onsite workshops offer hands-on experience and practical skills for women in Nairobi slums. Participants learn from industry experts and receive personalized guidance to build their social media presence.";

  return (
    <div>
      <CommonHeader
        hero="/social.jpg"
        title={`${title} onsite workshop`}
        description="Navigate the ever-changing landscape of social media with confidence. Our Social Media Management workshop equips you with strategies and tools to build brand presence, create engaging content, and analyze performance metrics."
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

export default socialMedia;
