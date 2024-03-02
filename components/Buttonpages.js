import Link from "next/link";

const ButtonPages = () => {
  return (
    <Link
      href="/contact"
      className="inline-block my-5 bg-secondary-color border border-white text-white font-[500] py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
    >
      Contact us to become a donor
    </Link>
  );
};

export default ButtonPages;
