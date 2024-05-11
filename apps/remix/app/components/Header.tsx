import { Link } from "@remix-run/react";
import { VmailLogo } from "./icons/vmail";
import { useTranslation } from "react-i18next";
import GithubPlat from "./icons/GitHubPlat";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="fixed top-0 z-20 h-20 w-full px-5 backdrop-blur-xl md:px-10 text-white flex items-center justify-between first-letter:shadow-sm">
      <Link to="/" className="font-bold flex items-center justify-center gap-3">
        <VmailLogo />
        <button className="cool-btn">
          <span>TM.TXWD.EU.ORG</span>
        </button>
      </Link>
      <Link
        to="/about"
        className="ml-auto text-sm md:text-base hidden md:block">
        {t("About")}
      </Link>
      <Link
        to="/privacy"
        className="ml-3 md:ml-8 text-sm md:text-base hidden md:block">
        {t("Privacy")}
      </Link>
      <Link
        to="/terms"
        className="ml-3 md:ml-8 text-sm md:text-base hidden md:block">
        {t("Terms")}
      </Link>
    </div>
  );
}
