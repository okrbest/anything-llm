import { useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { Warning } from "@phosphor-icons/react";
import { Tooltip } from "react-tooltip";

export default function ConfluenceOptions() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    try {
      setLoading(true);
      showToast(t("confluence.scraping"), "info", {
        clear: true,
        autoClose: false,
      });
      const { data, error } = await System.dataConnectors.confluence.collect({
        pageUrl: form.get("pageUrl"),
        username: form.get("username"),
        accessToken: form.get("accessToken"),
      });

      if (!!error) {
        showToast(error, "error", { clear: true });
        setLoading(false);
        return;
      }

      showToast(
        t("confluence.success", {
          spaceKey: data.spaceKey,
          destination: data.destination,
        }),
        "success",
        { clear: true }
      );
      e.target.reset();
      setLoading(false);
    } catch (e) {
      console.error(e);
      showToast(e.message, "error", { clear: true });
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full px-1 md:pb-6 pb-16">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="w-full flex flex-col py-2">
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col pr-10">
                <div className="flex flex-col gap-y-1 mb-4">
                  <label className="text-white text-sm font-bold flex gap-x-2 items-center">
                    <p className="font-bold text-white">
                      {t("confluence.pageUrl.label")}
                    </p>
                  </label>
                  <p className="text-xs font-normal text-white/50">
                    {t("confluence.pageUrl.description")}
                  </p>
                </div>
                <input
                  type="url"
                  name="pageUrl"
                  className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
                  placeholder="https://example.atlassian.net/wiki/spaces/~7120208c08555d52224113949698b933a3bb56/pages/851969/Test+anythingLLM+page"
                  required={true}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <div className="flex flex-col pr-10">
                <div className="flex flex-col gap-y-1 mb-4">
                  <label className="text-white text-sm font-bold">
                    {t("confluence.username.label")}
                  </label>
                  <p className="text-xs font-normal text-white/50">
                    {t("confluence.username.description")}
                  </p>
                </div>
                <input
                  type="email"
                  name="username"
                  className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
                  placeholder="jdoe@example.com"
                  required={true}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <div className="flex flex-col pr-10">
                <div className="flex flex-col gap-y-1 mb-4">
                  <label className="text-white text-sm font-bold flex gap-x-2 items-center">
                    <p className="font-bold text-white">
                      {t("confluence.accessToken.label")}
                    </p>
                    <Warning
                      size={14}
                      className="ml-1 text-orange-500 cursor-pointer"
                      data-tooltip-id="access-token-tooltip"
                      data-tooltip-place="right"
                    />
                    <Tooltip
                      delayHide={300}
                      id="access-token-tooltip"
                      className="max-w-xs"
                      clickable={true}
                    >
                      <p className="text-sm">
                        {t("confluence.accessToken.tooltip.text")}{" "}
                        <a
                          href="https://id.atlassian.com/manage-profile/security/api-tokens"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {t("confluence.accessToken.tooltip.linkText")}
                        </a>
                        .
                      </p>
                    </Tooltip>
                  </label>
                  <p className="text-xs font-normal text-white/50">
                    {t("confluence.accessToken.description")}
                  </p>
                </div>
                <input
                  type="password"
                  name="accessToken"
                  className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
                  placeholder="abcd1234"
                  required={true}
                  autoComplete="new-password"
                  spellCheck={false}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 w-full pr-10">
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full justify-center border border-slate-200 px-4 py-2 rounded-lg text-dark-text text-sm font-bold items-center flex gap-x-2 bg-slate-200 hover:bg-slate-300 hover:text-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {loading
                ? t("confluence.submit.loading")
                : t("confluence.submit.default")}
            </button>
            {loading && (
              <p className="text-xs text-white/50">
                {t("confluence.submit.description")}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
