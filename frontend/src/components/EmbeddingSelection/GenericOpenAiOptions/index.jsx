import { useTranslation } from "react-i18next";

export default function GenericOpenAiEmbeddingOptions({ settings }) {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="w-full flex items-center gap-4 flex-wrap">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("embedding.providers.genericOpenai.baseUrl")}
          </label>
          <input
            type="url"
            name="EmbeddingBasePath"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder="https://api.openai.com/v1"
            defaultValue={settings?.EmbeddingBasePath}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("embedding.providers.genericOpenai.model")}
          </label>
          <input
            type="text"
            name="EmbeddingModelPref"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder="text-embedding-ada-002"
            defaultValue={settings?.EmbeddingModelPref}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("embedding.providers.genericOpenai.maxChunkLength")}
          </label>
          <input
            type="number"
            name="EmbeddingModelMaxChunkLength"
            className="bg-zinc-900 text-white placeholder-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder="8192"
            min={1}
            onScroll={(e) => e.target.blur()}
            defaultValue={settings?.EmbeddingModelMaxChunkLength}
            required={false}
            autoComplete="off"
          />
        </div>
      </div>
      <div className="w-full flex items-center gap-4">
        <div className="flex flex-col w-60">
          <div className="flex flex-col gap-y-1 mb-4">
            <label className="text-white text-sm font-semibold flex items-center gap-x-2">
              {t("embedding.providers.genericOpenai.apiKeyLabel")}{" "}
              <p className="!text-xs !italic !font-thin">
                {t("embedding.providers.genericOpenai.optional")}
              </p>
            </label>
          </div>
          <input
            type="password"
            name="GenericOpenAiEmbeddingApiKey"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder="sk-mysecretkey"
            defaultValue={
              settings?.GenericOpenAiEmbeddingApiKey ? "*".repeat(20) : ""
            }
            autoComplete="new-password"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
