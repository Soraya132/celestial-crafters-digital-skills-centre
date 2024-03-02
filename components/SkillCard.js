import Link from "next/link";
const SkillCard = ({ imgUrl, title, subtitle, link }) => (
  <div className="flex md:flex-row flex-col gap-4">
    <Link href={`${link}`}>
      <img
        src={imgUrl}
        alt={title}
        className="w-full md:w-[250px] lg:w-[300px] h-[250px] rounded-lg object-cover"
      />
    </Link>
    <div className="w-full flex justify-between items-center">
      <Link
        href={`${link}`}
        className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]"
      >
        <h4 className="font-[500] md:text-[32px] lg:text-[42px] text-[26px] text-lightRed">
          {title}
        </h4>
        <p className="py-2 font-normal text-[20px]">{subtitle}</p>
      </Link>

      <Link
        href={`${link}`}
        className="lg:flex hidden mt-10 items-center justify-center w-[70px] h-[70px] hover:scale-105 rounded-full bg-secondary-color border-[1px] border-white"
      >
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[30%] h-[30%] object-contain"
        />
      </Link>
    </div>
  </div>
);

export default SkillCard;
