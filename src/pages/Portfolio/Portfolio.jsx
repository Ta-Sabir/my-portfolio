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
                  <div
                    className={`${styles.flex} justify-between gap-2 mt-[20px]`}
                  >
                    <h3 className="text-[var(--main-color)] text-[15px] text-center font-semibold ">
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
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
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
