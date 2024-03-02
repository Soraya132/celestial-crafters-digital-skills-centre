import CommonHeader from "@/components/Common/CommonHeader";
import Link from "next/link";
import Image from "next/image";
import SkillsPageTemplate from "@/components/Common/SkillsPageTemplate";

const Page = () => {
  const title = "graphic design";
  const overview =
    "Our Graphic Design Workshop equips participants with the skills and knowledge needed to excel in the field of graphic design. From typography to color theory, layout design to logo creation, our comprehensive program covers a wide range of topics to unleash your creativity.";
  const skills = [
    { name: "Typography", description: "hellow", src: "/challenge.jpg" },
    { name: "Color Theory", description: "hellow", src: "/challenge.jpg" },
    {
      name: "Layout Design",
      description: "hellow",
      src: "/challenge.jpg",
    },
    {
      name: "Logo Design",
      description: "hellow",
      src: "/challenge.jpg",
    },
    { name: "Illustration", description: "hellow", src: "/challenge.jpg" },
  ];
  const equipment =
    "With the help of donors, our center provides all the necessary equipment and materials for the workshop. The course is held onsite to ensure accessibility for women in Nairobi slums.";
  return (
    <div>
      <CommonHeader
        hero="/design1.jpg"
        title={`${title} onsite workshop`}
        description=" Dive into the world of visual communication and creativity with our Graphic Design workshop. Learn the fundamentals of design principles, typography, and layout to bring your ideas to life"
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

export default Page;
