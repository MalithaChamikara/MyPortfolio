import Link from "next/link";
import Navlink from "./Navlink";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "contacts",
    path: "contacts",
  },
];
const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          Logo
        </Link>
        <div className="md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex p-4 md:p-0 rounded-lg flex-row mt-0">
            {navLinks.map((link) => {
              return (
                <li>
                  <Navlink
                    key={link.title}
                    title={link.title}
                    path={link.path}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
