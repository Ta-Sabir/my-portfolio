import { useTranslation } from "react-i18next";
import { skillsImage, certificateImages } from "../../constants/index";
import styles from "../../style";
import { Helmet } from "react-helmet-async";
const Skills = () => {
  const { t } = useTranslation();
  return (
    // START SKILLS PAGE
    <section id="skills" className="pt-[55px]">
      <Helmet>
        <title>Skills Page</title>
        <meta
          name="description"
          content="To create websites, I use the latest technologies in the world of design and development in order to achieve a result that satisfies my clients."
        />
      </Helmet>
      <div className="section-container">
        <div className="section-title">
          <div className="title">
            <span className="icon-develop"></span>
            <h2>{t("skills.heading")}</h2>
          </div>
          <p>{t("skills.section-descrip")}</p>
        </div>
        <div className="skills-container">
          <div className={`${styles.flex} gap-4 flex-wrap mt-4`}>
            {skillsImage.map((item) => {
              return (
                <img
                  key={item.id}
                  src={item.img}
                  alt={item.id}
                  className="w-[90px] cursor-pointer"
                />
              );
            })}
          </div>
          <div className="cert">
            <div className="section-title mt-9">
              <div className="title">
                <span className="icon-award"></span>
                <h2>{t("skills.sub-section-title")}</h2>
              </div>
            </div>
            <div className={`${styles.flex} flex-wrap gap-7 mt-5 mb-12`}>
              {certificateImages.map((item) => {
                return (
                  <figure
                    key={item.id}
                    className="max-w-[360px] border-[4px] border-[var(--main-color)] truncate cursor-pointer"
                  >
                    <img
                      src={item.img}
                      alt={item.id}
                      className="hover:rotate-2 hover:scale-[1.1] transition-all"
                    />
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
    // END SKILLS PAGE
  );
};

export default Skills;
