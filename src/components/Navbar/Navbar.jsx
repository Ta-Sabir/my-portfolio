import "./Navbar.css";
import styles from "../../style";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants/index";
import { imageLogo } from "../../assets/index";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showLanguageMenu, setshowLanguageMenu] = useState(false);
  const toggleLanguageMenu = () => {
    setshowLanguageMenu(!showLanguageMenu);
  };
  const [showPhoneMenu, setshowPhoneMenu] = useState(false);
  return (
    // START NAVBAR COMPONENT
    <nav
      className={`navbar ${styles.flexBetween} py-[20px] xl:px-[65px] px-[20px]`}
    >
      <div className="navbar-brand">
        <a
          href="/"
          className="logo font-bold text-[30px] text-[var(--main-color)]"
        >
          <img
            style={{ width: "48px", borderRadius: "50%" }}
            src={imageLogo}
            alt="image logo"
          />
        </a>
      </div>
      <div className={`navbar-menu ${styles.flexBetween} gap-9`}>
        <div
          className={`navbar-links lg:flex hidden  ${styles.flexBetween} gap-6`}
        >
          {navLinks.map((item) => {
            return (
              <NavLink
                to={item.id === "home" ? "/" : item.id}
                key={item.id}
                className="text-[20px] text-[var(--main-color)]"
              >
                {t(`navbar.${item.id}`)}
              </NavLink>
            );
          })}
        </div>
        <div className="navbar-end">
          <div className={`dropdown ${styles.flex} gap-5`}>
            <span
              onClick={() => {
                setshowPhoneMenu(true);
              }}
              className="icon-menu lg:hidden block text-[27px] text-[var(--main-color)] cursor-pointer"
            ></span>
            <button
              onClick={() => {
                toggleLanguageMenu();
              }}
              className={`${styles.flexBetween} gap-2 p-[8px]`}
            >
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M478.33 433.6l-90-218a22 22 0 00-40.67 0l-90 218a22 22 0 1040.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 00458 464a22 22 0 0020.32-30.4zM334.83 362L368 281.65 401.17 362zm-66.99-19.08a22 22 0 00-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 000-44H214V70a22 22 0 00-44 0v20H54a22 22 0 000 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 00-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1021.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0030.75-4.9z"></path>
                </svg>
              </span>
              <span className="lg:block hidden">{t("navbar.language")}</span>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M112 184l144 144 144-144"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          {showLanguageMenu && (
            <div
              className={`languages-dorpdown ${
                showLanguageMenu ? "open" : ""
              } z-50`}
            >
              <div
                onClick={() => {
                  // @ts-ignore
                  i18n.changeLanguage("en");
                  setshowLanguageMenu(false);
                }}
                className="dropdown-item text-[15px] text-[var(--main-color)] font-black px-[15px] py-[6px] transition-all cursor-pointer"
              >
                {t("navbar.english")}
              </div>
              <div
                onClick={() => {
                  // @ts-ignore
                  i18n.changeLanguage("ar");
                  setshowLanguageMenu(false);
                }}
                className="dropdown-item text-[15px] text-[var(--main-color)] font-black px-[15px] py-[6px] transition-all cursor-pointer"
              >
                {t("navbar.arabic")}
              </div>
            </div>
          )}
        </div>
      </div>
      {showPhoneMenu && (
        <div className="phone-menu fixed inset-0 z-50 lg:hidden block animation">
          <div
            className={`phone-menu-content ${styles.flexColumn} justify-start gap-4 bg-[#fff] w-[85%] md:w-[70%] my-[100px] mx-auto px-[38px] py-[30px] rounded-xl`}
          >
            <div
              onClick={() => {
                setshowPhoneMenu(false);
              }}
              className="close-icon text-right hover:text-[var(--main-color)]"
            >
              <button className="icon-x text-[23px] border-none hover:rotate-[180deg]"></button>
            </div>

            {navLinks.map((item) => {
              return (
                <NavLink
                  to={item.id === "home" ? "/" : item.id}
                  key={item.id}
                  onClick={() => {
                    setshowPhoneMenu(false);
                  }}
                  className="text-[20px] font-medium text-[var(--main-color)] w-[100%] hover:ml-[6px] transition-all"
                >
                  {t(`navbar.${item.id}`)}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
    // END NAVBAR COMPONENT
  );
};

export default Navbar;
