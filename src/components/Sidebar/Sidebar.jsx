import "./Sidebar.css";
import styles from "../../style";
import { imageLogo, Signature } from "../../assets/index";
import { socialMedia } from "../../constants/index";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  return (
    // START SIDEBAR COMPONENT
    <aside
      className={`${styles.flexColumn} justify-center gap-4 text-center bg-[#fafafa] p-[20px] pt-[35px]`}
    >
      <div className="about-me">
        <figure className="avatar relative w-fit mx-auto">
          <img
            src={imageLogo}
            alt="imageLogo"
            className="w-[135px] rounded-full"
          />
          <div className="avilable w-[15px] h-[15px] bg-[#3EA917] border-[2px] border-[#fafafa] rounded-full absolute bottom-[0] right-[25px]"></div>
        </figure>
        <h2 className="text-[#232323] font-bold my-[8px]">
          {t("sidebar.name")}
        </h2>
        <h4 className="text-[var(--main-color)] font-semibold">
          {t("sidebar.position")}
        </h4>
        <p className="bio text-[#676363] font-semibold text-[16px] leading-[1.8] my-[5px]">
          {t("sidebar.bio")}
        </p>
      </div>
      <ul className={`social-media ${styles.flexCenter} gap-2`}>
        {socialMedia.map((item) => {
          return (
            <li
              key={item.id}
              className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[4px] bg-[#ecececfa] hover:bg-[var(--main-color)] text-[var(--main-color)] hover:text-[#FFF] text-[20px] cursor-pointer`}
            >
              <a href={item.link} className={item.icon} target="__blank"></a>
            </li>
          );
        })}
      </ul>
      <button className="flex items-center justify-between gap-1 p-[9px] w-fit mx-auto my-[8px] bg-[var(--main-color)] hover:bg-[var(--white-color)] text-[var(--white-color)] hover:text-[var(--main-color)] text-[15px] font-semibold hover:scale-[1.01] hover:translate-y-[-4px] rounded-full transition-all">
        {t("sidebar.download-cv-btn")}
        <span className="icon-save_alt text-[20px] cario"></span>
      </button>
      <figure className="signature w-[200px] mx-auto">
        <img src={Signature} alt="Signature" />
      </figure>
    </aside>
    // END SIDEBAR COMPONENT
  );
};

export default Sidebar;
