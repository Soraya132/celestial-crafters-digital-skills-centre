import CommonHeader from "@/components/Common/CommonHeader";
import SkillsPageTemplate from "@/components/Common/SkillsPageTemplate";

const blockchain = () => {
  const title = "Blockchain";
  const overview =
    "Our workshop provides participants with a comprehensive understanding of blockchain technology and its applications. From cryptocurrency to smart contracts, participants learn to develop decentralized applications (DApps) and explore blockchain use cases. Through hands-on projects and simulations, students gain practical experience in building and deploying blockchain solutions.";
  const skills = [
    {name:"Blockchain Fundamentals", description:"Learn the foundational concepts of blockchain.", src:"/machinlearning.jpg"},
    {name:"Cryptocurrency", description:"Explore digital currencies like Bitcoin and Ethereum.", src:"/blockchain.jpg"},
    {name:"Smart Contracts", description:"Understand self-executing contracts on the blockchain.", src:"/blockchainhero.jpg"},
    {name:"DApp Development", description:"Create decentralized applications for various use cases.", src:"/block1.jpg"},
    {name:"Blockchain Security", description:"Secure blockchain networks against cyber threats.", src:"/blockchain4.jpg"}
  ];
  const equipment =
    "Through the support of our donors, our center provides access to computers, blockchain development tools, and online resources for training. Our onsite workshops offer hands-on learning experiences for women in Nairobi slums. Participants learn from industry experts and receive guidance to develop their blockchain projects.";
  return (
    <div>
      <CommonHeader
        hero="/blockchain.jpg"
        title="Blockhain Onsite Workshop"
        description="Delve into the revolutionary world of blockchain technology. Our workshop covers blockchain development, smart contract programming, and real-world applications across various industries."
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

export default blockchain;
