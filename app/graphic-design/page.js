import CommonHeader from "@/components/Common/CommonHeader";
import Link from "next/link";
import Image from "next/image";
import SkillsPageTemplate from "@/components/Common/SkillsPageTemplate";

const Page = () => {
  const title = "graphic design";
  const overview =
    "Our Graphic Design Workshop equips participants with the skills and knowledge needed to excel in the field of graphic design. From typography to color theory, layout design to logo creation, our comprehensive program covers a wide range of topics to unleash your creativity.";
  const skills = [
    { name: "Typography", description: "Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing, and adjusting the space between pairs of letters.", src: "/graphic10.jpg" },
    { name: "Color Theory", description: "Color theory is a body of practical guidance to color mixing and the visual effects of a specific color combination. It involves the study of hues, tones, shades, and how colors interact with each other.", src: "/graphic11.jpg" },
    { name: "Layout Design", description: "Layout design refers to the arrangement of visual elements on a page. It involves organizing text, images, and other graphic elements in a way that is visually appealing and communicates the intended message effectively.", src: "graphic12.jpg" },
    { name: "Logo Design", description: "Logo design is the process of creating a visual symbol or mark to represent a business, brand, or organization. It involves combining text and images in a unique and memorable way to create a recognizable identity.", src: "graphic13.jpg" },
    { name: "Illustration", description: "Illustration is the art of creating images, often to accompany text or convey a concept. It involves using various techniques and mediums to create visual representations of ideas, stories, or information.", src: "graphic14.jpg" }
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
