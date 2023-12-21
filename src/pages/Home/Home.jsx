import "./Home.css";
import styles from "../../style";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  return (
    // START HOME PAGE
    <section id="home" className="pt-[55px] pb-[80px] sm:pb-[0]">
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Welcome to my personal website. You can take a look at my previous work, the techniques I use, and some of my information, and communicate with me or download my CV."
        />
      </Helmet>
      <div className="section-container">
        <div className="home-content">
          <h1 className="text-[var(--main-color)] text-[41px] text-[49px] xl:text-[68px] font-black">
            {t("home.heading")}
          </h1>
          <h3 className="text-[#ffb44b] text-[15px] lg:text-[19px] font-extrabold mt-[5px]">
            {t("home.subtitle")}
          </h3>
          <p className="text-[#676363] text-[16px] lg:text-[18px] font-semibold mt-[10px] leading-[2]">
            {t("home.short-descrip")}
          </p>
          <div className={`buttons ${styles.flex} gap-6 mt-[20px]`}>
            <NavLink
              to={"/portfolio"}
              className={`${styles.flex} gap-[8px] bg-[var(--main-color)] text-[var(--white-color)] rounded-full py-[11px] px-[20px] cursor-pointer`}
            >
              <span className="icon-briefcase"></span>
              <p className="text-[16px] font-semibold cario">
                {t("home.work-btn")}
              </p>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={`${styles.flex} gap-[8px] text-[var(--main-color)] cursor-pointer`}
            >
              <span className="icon-mail mb-[3px]"></span>
              <p className="text-[16px] font-semibold cario">
                {t("home.contact-btn")}
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
    // END HOME PAGE
  );
};

export default Home;

