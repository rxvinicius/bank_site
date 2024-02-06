import { useState } from "react";
import { close, logo, menu } from "../assets";
import { bankName, navLinks } from "../constants";

const Navbar = () => {
  const liClasses = `
    font-poppins
    font-normal
    cursor-pointer
    text-[16px]
    text-white
  `;
  const [toggle, setToggle] = useState(false);

  const Link = ({ nav }) => <a href={`#${nav.id}`}>{nav.title}</a>;

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt={bankName} className="w-[166px] h-[48px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`
              ${liClasses}
              ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            `}
          >
            <Link nav={nav} />
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`
            ${toggle ? "flex" : "hidden"}
            p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar
          `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`
                  ${liClasses}
                  justify-center
                  ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                `}
              >
                <Link nav={nav} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
