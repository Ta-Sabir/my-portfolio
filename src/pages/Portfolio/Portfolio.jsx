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
                  <h3 className="text-[var(--main-color)] text-[15px] text-center font-semibold mt-[10px]">
                    {item.title}
                  </h3>
                  <div className={`${styles.flex} gap-2 mt-[8px]`}>
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
                    <a
                      href={item.github}
                      target="__blank"
                      className={`${styles.flex} gap-1 text-[var(--main-color)] text-[13px] font-semibold`}
                    >
                      <span data-lang="github">
                        {t("portfolio.githubCode")}
                      </span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1rem"
                        width="1rem"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                        ></path>
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
