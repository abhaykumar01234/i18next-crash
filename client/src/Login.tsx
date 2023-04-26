import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("LOGIN_PAGE_TITLE")}</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
