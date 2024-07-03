import React from "react";
import { useTranslation } from "react-i18next";

export default function HuggingFaceOptions({ settings }) {
  const { t } = useTranslation("common");

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center gap-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("huggingface.inferenceEndpoint")}
          </label>
          <input
            type="url"
            name="HuggingFaceLLMEndpoint"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder={t("huggingface.inferenceEndpointPlaceholder")}
            defaultValue={settings?.HuggingFaceLLMEndpoint}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("huggingface.accessToken")}
          </label>
          <input
            type="password"
            name="HuggingFaceLLMAccessToken"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder={t("huggingface.accessTokenPlaceholder")}
            defaultValue={
              settings?.HuggingFaceLLMAccessToken ? "*".repeat(20) : ""
            }
            required={true}
            autoComplete="new-password"
            spellCheck={false}
          />
        </div>
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("huggingface.tokenLimit")}
          </label>
          <input
            type="number"
            name="HuggingFaceLLMTokenLimit"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder="4096"
            min={1}
            onScroll={(e) => e.target.blur()}
            defaultValue={settings?.HuggingFaceLLMTokenLimit}
            required={true}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
