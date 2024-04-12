import "./Portfolio.css";
import styles from "../../style";
import { portfolioCards } from "../../constants/index";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
const Portfolio = () => {
  const { t } = useTranslation();
  return (
    // START PORTFOLIO PAGE
    <section id="portfolio" className="pt-[55px]">
      <Helmet>
        <title>Portfolio Page</title>
        <meta
          name="description"
          content="These are some of my works. To view the work, click on Live Preview, and to view the working code, click on GitHub Code."
        />
      </Helmet>
      <div className="section-container">
        <div className="section-title">
          <div className="title">
            <span className="icon-briefcase"></span>
            <h2>{t("portfolio.heading")}</h2>
          </div>
          <p>{t("portfolio.section-descrip")}</p>
        </div>
        <div
          className={`portfolio-container grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[35px] mb-[80px]`}
        >
          {portfolioCards.map((item) => {
            return (
              <div
                key={item.id}
                className="portfolio-item card max-w-[100%] h-[100%] bg-[var(--white-color)] rounded-[10px] cursor-pointer"
              >
                <div className="card-header">
                  <figure>
                    <img src={item.img} alt="" className="w-[100%] h-[100%]" />
                  </figure>
                </div>
                <div className="card-footer p-[15px] pt-0">

                  <div className={`${styles.flex} gap-2 mt-[8px]`}>
                                      <h3 className="text-[var(--main-color)] text-[15px] text-center font-semibold mt-[10px]">
                    {item.title}
                  </h3>
                    <a
                      href={item.link}
                      target="__blank"
                      className={`${styles.flex} gap-1 text-[var(--main-color)] text-[13px] font-semibold`}
                    >
                      <span data-lang="live">{t("portfolio.preview")}</span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1rem"
                        width="1rem"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                        <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    // END PORTFOLIO PAGE
  );
};

export default Portfolio;
