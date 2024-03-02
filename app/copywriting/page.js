import CommonHeader from "@/components/Common/CommonHeader";
import SkillsPageTemplate from "@/components/Common/SkillsPageTemplate";

const Copyright = () => {
  const title = "Content/Copywriting";
  const overview =
    "Our workshop equips participants with the skills to craft compelling written content for various media channels. From creating website copy to drafting marketing emails, participants learn effective writing techniques and strategies. Through practical exercises and feedback sessions, students refine their writing skills and develop a professional portfolio.";
  const skills =[
    {name: "Copywriting", description: "Craft persuasive and engaging written content.", src: "/handwriting.jpg"},
    {name: "Content Creation", description: "Generate valuable and relevant content for various platforms.", src: "/copy1.jpg"},
    {name: "SEO Writing", description: "Optimize content to improve search engine rankings.", src: "/copy2.jpg"},
    {name: "Marketing Copy", description: "Create compelling copy to promote products or services.", src: "/copy4.jpg"},
    {name: "Editing", description: "Refine and polish written content to enhance clarity and effectiveness.", src: "/copywriting.jpg"}
]
  const equipment =
    "Through the generosity of our donors, our center provides access to computers, writing software, and online resources for content and copywriting training. Our onsite workshops offer a supportive environment for women in Nairobi slums to hone their writing skills. Participants receive personalized feedback and guidance from experienced copywriters.";
  return (
    <div>
      <CommonHeader
        hero="/copywriting.jpg"
        title="Content/Copywriting Onsite Workshop"
        description="Master the art of storytelling and persuasion with our Content/Copywriting workshop. Gain skills in writing for websites, blogs, and social media to engage audiences and drive action."
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

export default Copyright;
