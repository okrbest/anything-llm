import React, { useState } from "react";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";

export default function YoutubeOptions() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    try {
      setLoading(true);
      showToast(t("youtubeOptions.loadingMessage"), "info", {
        clear: true,
        autoClose: false,
      });

      const { data, error } = await System.dataConnectors.youtube.transcribe({
        url: form.get("url"),
      });

      if (!!error) {
        showToast(error, "error", { clear: true });
        setLoading(false);
        return;
      }

      showToast(
        t("youtubeOptions.successMessage", {
          title: data.title,
          author: data.author,
          destination: data.destination,
        }),
        "success",
        { clear: true }
      );
      e.target.reset();
      setLoading(false);
      return;
    } catch (e) {
      console.error(e);
      showToast(
        t("youtubeOptions.errorMessage", { message: e.message }),
        "error",
        { clear: true }
      );
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
                  <label className="text-white text-sm font-bold">
                    {t("youtubeOptions.title")}
                  </label>
                  <p className="text-xs font-normal text-white/50">
                    {t("youtubeOptions.description")}
                  </p>
                </div>
                <input
                  type="url"
                  name="url"
                  className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
                  placeholder={t("youtubeOptions.placeholder")}
                  required={true}
                  autoComplete="off"
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
                ? t("youtubeOptions.loadingButton")
                : t("youtubeOptions.submitButton")}
            </button>
            {loading && (
              <p className="text-xs text-white/50 max-w-sm">
                {t("youtubeOptions.transcriptionComplete")}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
