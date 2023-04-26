import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const lngs = {
  en: { nativeName: "English" },
  fr: { nativeName: "French" },
  de: { nativeName: "German" },
};

function App() {
  const { t, i18n } = useTranslation();
  const code = "404";
  return (
    <>
      <h1>{t("HELLO")} World</h1>
      <Link to="/login">Login</Link>
      <br />
      <div className="inline">
        {Object.entries(lngs).map(([value, { nativeName }]) => (
          <label key={value}>
            <input
              type="radio"
              name="language"
              value={value}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            />
            &nbsp; {nativeName}
          </label>
        ))}
      </div>
      <div>{t("HELLO")}</div>
      <div>{t("HELLO", { lng: "fr" })}</div>
      <div>{t("RESOURCES_MARKETING-TOOLS_CARDS.1.HEADING")}</div>
      <div>{t("name_label", { ns: "common" })}</div>
      <div>{t("common:name_label")}</div>
      <div>{t("SAVE")}</div>
      <div>{t([`error.${code}`, "error.unknown"])}</div>

      <div>{t("message", { what: "React", how: "awesome" })}</div>
      <div>{t("rowsAffected", { count: 10 })}</div>
      <div>{t("row", { count: 2 })}</div>

      <div>
        {t("message", {
          what: "React",
          how: "<i>awesome</i>",
          // interpolation: { escapeValue: false },
        })}
      </div>

      <div>{t("cost", { cost: 12000.3456, when: "today" })}</div>
      <div>{t("amount", { amount: 1205600.3456 })}</div>
      <div>
        {t("registerDate", {
          registerDate: new Date("03/06/1993"),
          formatParams: {
            registerDate: {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            },
          },
        })}
      </div>
    </>
  );
}

export default App;
