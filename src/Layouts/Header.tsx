import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { navArr } from "@/utils/Home";
import { useRouter } from "next/router";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { logo } from "@/assests/Home";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(currentPath);

  const listenScrollEvent = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    setActiveMenu(currentPath);
  }, [currentPath]);

  const handleMenuClick = (path:any) => {
    setActiveMenu(path);
    setIsMenuOpen(false);
    router.push(path);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all hidden lg:block duration-500 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
      style={{
        height: isScrolled ? "4rem" : "5rem",
        color: isScrolled ? "white" : "#111827",
      }}
    >
      <section className="w-full main-container">
        <div className="h-16 center_between w-full px-10 z-40 ">
          <div className="w-full h-full cursor-pointer flex items-center">
            <Link href="/">
              <img src={logo.src} alt="" className="h-16  cursor-pointer" />
            </Link>
          </div>
          {/* <div className="flex gap-3 ml-auto justify-center lg:justify-end">
            <span className="flex gap-4 text-black">
              {iconArr.map((item) => (
                <Link href={item.path} target="_blank" key={item.id}>
                  <div className="text-6xl">{item.icon}</div>
                </Link>
              ))}
            </span>
          </div> */}

          <div className="lg:hidden flex items-center">
            {isMenuOpen ? (
              <CloseIcon
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer text-black"
              />
            ) : (
              <MenuIcon
                onClick={() => setIsMenuOpen(true)}
                className="cursor-pointer text-black"
              />
            )}
          </div>
        </div>
        <div
          className={`w-full h-14 bg-[#5e5c5c] main-container text-white flex items-center justify-between uppercase font-serif px-4 md:px-10 ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex`}
        >
          <div className="flex gap-6 flex-col lg:flex-row lg:items-center">
            {navArr.map((item) => (
              <span
                key={item.id}
                className={`flex h-full w-fit items-center p-4 group cursor-pointer relative hover:bg-green-500 ${
                  activeMenu === item.path ? "bg-green-500" : "!text-white"
                }`}
                onClick={() => handleMenuClick(item.path)}
              >
                <p>{item.title}</p>
                {item.subMenu && <ExpandMoreIcon />}
                {item.subMenu && (
                  <div className="absolute top-full left-0 z-30 w-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white shadow-md rounded">
                    {item.subMenu.map((subItem) => (
                      <h2
                        key={subItem.id}
                        className={`text-md p-3 hover:bg-gray-200 border border-green-600 ${
                          currentPath === subItem.path
                            ? "text-blue-900"
                            : "text-gray-700"
                        }`}
                        onClick={() => handleMenuClick(subItem.path)}
                      >
                        {subItem.title}
                      </h2>
                    ))}
                  </div>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>
    </header>
  );
}
