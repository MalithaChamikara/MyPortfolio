import Link from "next/link";
const Navlink = ({ path, title }) => {
  return (
    <Link
      href={path}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] rounded hover:text-white"
    >
      {title}
    </Link>
  );
};

export default Navlink;
