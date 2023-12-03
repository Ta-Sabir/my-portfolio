import "./Contact.css";
import styles from "../../style";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";
import ReactLoading from "react-loading";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xrgwdrwj");
  if (state.succeeded) {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
  return (
    // START CONTACT PAGE
    <section id="contact" className="pt-[55px]">
      <Helmet>
        <title>Contact Page</title>
        <meta
          name="description"
          content="If you have any suggestion, project or even you want to say Hello. please fill out the form below and I will reply you shortly."
        />
      </Helmet>
      <div className="section-container">
        <div className="section-title">
          <div className="title">
            <span className="icon-mail"></span>
            <h2>{t("contact.heading")}</h2>
          </div>
          <p>{t("contact.section-descrip")}</p>
        </div>
        <form
          autoComplete="off"
          target="_self"
          onSubmit={handleSubmit}
          className={`${styles.flexColumn} gap-5 mt-6`}
        >
          <div
            className={`flex items-center sm:flex-row flex-col gap-6 xl:gap-4`}
          >
            <div className="name-input relative w-full">
              <input
                type="text"
                name="name"
                className="border-[2px] border-[var(--main-color)] p-[12px] text-[15px] font-bold cario rounded-[4px]"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <label
                htmlFor="name"
                className="label text-[var(--main-color)] text-[15px] font-bold absolute top-[-10px] left-[13px] bg-[var(--white-color)] w-fit px-[7px] transition-all"
              >
                {t("contact.form.name")}
              </label>
            </div>
            <div className="email-input relative w-full">
              <input
                type="email"
                name="email"
                className="border-[2px] border-[var(--main-color)] p-[12px] text-[15px] font-bold cario rounded-[4px]"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label
                htmlFor="email"
                className="text-[var(--main-color)] text-[15px] font-bold absolute top-[-10px] left-[13px] bg-[var(--white-color)] w-fit px-[7px] transition-all"
              >
                {t("contact.form.email")}
              </label>
            </div>
          </div>
          <div
            className={`flex items-center sm:flex-row flex-col gap-6 xl:gap-4`}
          >
            <div className="name-input relative w-full">
              <input
                type="text"
                name="phone"
                className="focus border-[2px] border-[var(--main-color)] p-[12px] text-[15px] font-bold cario rounded-[4px]"
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
              <label
                htmlFor="phone"
                className="text-[var(--main-color)] text-[15px] font-bold absolute top-[-10px] left-[13px] bg-[var(--white-color)] w-fit px-[7px] transition-all"
              >
                {t("contact.form.phone")}
              </label>
            </div>
            <div className="email-input relative w-full">
              <input
                type="text"
                name="subject"
                className="border-[2px] border-[var(--main-color)] p-[12px] text-[15px] font-bold cario rounded-[4px]"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
              <label
                htmlFor="subject"
                className="text-[var(--main-color)] text-[15px] font-bold absolute top-[-10px] left-[13px] bg-[var(--white-color)] w-fit px-[7px] transition-all"
              >
                {t("contact.form.subject")}
              </label>
            </div>
          </div>
          <div
            className={`flex items-center sm:flex-row flex-col gap-6 xl:gap-4`}
          >
            <div className="message-input relative w-full">
              <textarea
                // @ts-ignore
                rows="7"
                name="message"
                className="border-[2px] border-[var(--main-color)] p-[12px] text-[15px] font-bold cario rounded-[4px] w-full focus:outline-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <label
                htmlFor="message"
                className="text-[var(--main-color)] text-[15px] font-bold absolute top-[-10px] left-[13px] bg-[var(--white-color)] w-fit px-[7px] transition-all"
              >
                {t("contact.form.message")}
              </label>
            </div>
          </div>
          <div className="button">
            <button
              type="submit"
              disabled={state.submitting}
              className={`${styles.flex} gap-2 bg-[var(--main-color)] hover:bg-transparent text-[var(--white-color)] hover:text-[var(--main-color)] border-[2px] border-[var(--main-color)] px-[20px] py-[10px] rounded-full hover:scale-[1.01] hover:translate-y-[-4px] transition-all`}
            >
              {t("contact.send-btn")}
              {state.submitting && (
                <ReactLoading
                  type={"spin"}
                  color={"black"}
                  height={"20px"}
                  width={"20px"}
                />
              )}
            </button>
          </div>
          {state.succeeded && (
            <div className="SuccessMessage bg-[#f9f9f9] w-fit mx-auto py-[15px] px-[20px] rounded-[6px] fixed top-[80px] right-[80px] animation z-[999]">
              <div className="icon icon-x text-[15px] absolute left-[17px] top-[14px] cursor-pointer"></div>
              <div
                className={`content ${styles.flex} gap-4 mt-[12px] ml-[10px]`}
              >
                <div
                  className={`icon-checkmark ${styles.flex} justify-center text-[19px] bg-[#47d764] text-[var(--white-color)] w-[35px] h-[35px] rounded-full`}
                ></div>
                <div className="content-text">
                  <h2 className="text-[15px] cario font-black">نجاح</h2>
                  <p className="text-[14px] cario font-normal">
                    تم ارسال الرسالة بنجاح
                  </p>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
    // END CONTACT PAGE
  );
};

export default Contact;
