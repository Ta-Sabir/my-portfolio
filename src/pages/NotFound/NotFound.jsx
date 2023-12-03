import "./NotFound.css";
import styles from "../../style";
import { name } from "../../assets/index";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    // START NOTFOUND PAGE
    <section className="error-404">
      <div className="section-container mt-12">
        <div
          className={`section-content ${styles.flexColumn} items-center justify-center`}
        >
          <h2 className="text-[var(--main-color)] text-[22px] font-black text-center leading-[1.8]">
            {t("error.section-title")}
          </h2>
          <figure>
            <img
              src={name}
              alt="404-error image"
              className="w-[450px] cursor-pointer"
            />
          </figure>
        </div>
      </div>
    </section>
    // END NOTFOUND PAGE
  );
};

export default NotFound;
