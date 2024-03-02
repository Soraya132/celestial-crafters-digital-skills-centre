import CommonHeader from "@/components/Common/CommonHeader";
import SkillsPageTemplate from "@/components/Common/SkillsPageTemplate";

const networking = () => {
  // Network Engineering
  const title = "Network Engineering";
  const overview =
    "Our workshop provides participants with in-depth knowledge of computer networks and network infrastructure. Participants learn to design, implement, and manage computer networks, including LANs, WANs, and wireless networks. Through hands-on labs and simulations, students gain practical experience in configuring network devices and troubleshooting network issues.";
  const skills =[
    {
        "name": "Network Fundamentals",
        "description": "Basic concepts and principles underlying computer networks, including protocols, architectures, and communication methods.",
        "src": "/network.jpg"
    },
    {
        "name": "Routing and Switching",
        "description": "The process of directing data packets between networks and devices, including the selection of optimal paths.",
        "src": "/network1.jpg"
    },
    {
        "name": "Network Security",
        "description": "Measures taken to protect computer networks from unauthorized access, cyberattacks, and data breaches.",
        "src": "/network3.jpg"
    },
    {
        "name": "Wireless Networking",
        "description": "The use of wireless communication technologies to create and manage computer networks, enabling flexible connectivity.",
        "src": "/network6.jpg"
    }
]

  const equipment =
    "Through the generosity of our donors, our center provides access to computers, networking equipment, and online resources for training. Our onsite workshops offer a supportive learning environment for women in Nairobi slums. Participants receive guidance from experienced instructors and hands-on experience in building and configuring networks.";
  return (
    <div>
      <CommonHeader
        hero="/network.jpg"
        title={`${title} onsite workshop`}
        description="Learn the fundamentals of network design, configuration, and troubleshooting. Our Network Engineering workshop prepares you to design and manage complex digital infrastructures with confidence."
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

export default networking;
