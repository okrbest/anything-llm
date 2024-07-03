import { useTranslation } from "react-i18next";

export default function GenericOpenAiOptions({ settings }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-4 flex-wrap">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("llm.providers.baseUrl")}
          </label>
          <input
            type="url"
            name="GenericOpenAiBasePath"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder={t("llm.providers.baseUrlPlaceholder")}
            defaultValue={settings?.GenericOpenAiBasePath}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("llm.providers.apiKey")}
          </label>
          <input
            type="password"
            name="GenericOpenAiKey"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder={t("llm.providers.apiKeyPlaceholder")}
            defaultValue={settings?.GenericOpenAiKey ? "*".repeat(20) : ""}
            required={false}
            autoComplete="new-password"
            spellCheck={false}
          />
        </div>
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("llm.providers.modelName")}
          </label>
          <input
            type="text"
            name="GenericOpenAiModelPref"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder={t("llm.providers.modelNamePlaceholder")}
            defaultValue={settings?.GenericOpenAiModelPref}
            required={true}
            autoComplete="off"
          />
        </div>
      </div>
      <div className="flex gap-x-4 flex-wrap">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("llm.providers.tokenContextWindow")}
          </label>
          <input
            type="number"
            name="GenericOpenAiTokenLimit"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder={t("llm.providers.tokenContextWindowPlaceholder")}
            min={1}
            onScroll={(e) => e.target.blur()}
            defaultValue={settings?.GenericOpenAiTokenLimit}
            required={true}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("llm.providers.maxTokens")}
          </label>
          <input
            type="number"
            name="GenericOpenAiMaxTokens"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder={t("llm.providers.maxTokensPlaceholder")}
            min={1}
            defaultValue={settings?.GenericOpenAiMaxTokens || 1024}
            required={true}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
