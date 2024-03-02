import CommonHeader from "@/components/Common/CommonHeader";
import SkillsPageTemplate from "@/components/Common/SkillsPageTemplate";

const cyberSecurity = () => {
  const title = "Cyber Security";
  const overview =
    "Our workshop provides participants with essential skills in cybersecurity and information assurance. Participants learn to identify security threats, protect systems and networks, and respond to cyber incidents. Through hands-on labs and simulations, students gain practical experience in securing and defending computer systems.";
  const skills =[
    {name: "Network Security", description: "Protect computer networks from unauthorized access and cyberattacks.", src: "/cyber.jpg"},
    {name: "Cyber Threat Intelligence", description: "Gather and analyze data to identify potential cyber threats and vulnerabilities.", src: "/cyber10.jpg"},
    {name: "Ethical Hacking", description: "Simulate cyberattacks to identify weaknesses in systems and networks.", src: "/cyber11.jpg"},
    {name: "Security Operations", description: "Monitor and manage security systems to detect and respond to security incidents.", src: "/cyber12.jpg"},
    {name: "Incident Response", description: "Develop and implement strategies to address and mitigate security breaches and incidents.", src: "/cyber13.jpg"}
]

  const equipment =
    "Through the support of our donors, our center provides access to computers, cybersecurity tools, and online resources for training. Our onsite workshops offer a supportive learning environment for women in Nairobi slums. Participants receive guidance from experienced cybersecurity professionals and hands-on experience in protecting against cyber threats.";
  return (
    <div>
      <CommonHeader
        hero="/cyberhero.jpg"
        title={`${title} onsite workshop`}
        description="Arm yourself with the knowledge and skills needed to defend against cyber threats. Our Cyber Security workshop covers threat detection, risk assessment, ethical hacking, and more to ensure digital safety and resilience."
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

export default cyberSecurity;
