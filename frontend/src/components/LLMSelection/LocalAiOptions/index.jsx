import { useEffect, useState } from "react";
import { Info } from "@phosphor-icons/react";
import paths from "@/utils/paths";
import System from "@/models/system";
import { useTranslation } from "react-i18next"; // 추가된 부분

export default function LocalAiOptions({ settings, showAlert = false }) {
  const { t } = useTranslation(); // 추가된 부분
  const [basePathValue, setBasePathValue] = useState(settings?.LocalAiBasePath);
  const [basePath, setBasePath] = useState(settings?.LocalAiBasePath);
  const [apiKeyValue, setApiKeyValue] = useState(settings?.LocalAiApiKey);
  const [apiKey, setApiKey] = useState(settings?.LocalAiApiKey);

  return (
    <div className="w-full flex flex-col gap-y-4">
      {showAlert && (
        <div className="flex flex-col md:flex-row md:items-center gap-x-2 text-white mb-6 bg-blue-800/30 w-fit rounded-lg px-4 py-2">
          <div className="gap-x-2 flex items-center">
            <Info size={12} className="hidden md:visible" />
            <p className="text-sm md:text-base">{t("llm.localAiAlert")}</p>
          </div>
          <a
            href={paths.settings.embedder.modelPreference()}
            className="text-sm md:text-base my-2 underline"
          >
            {t("llm.manageEmbedding")} &rarr;
          </a>
        </div>
      )}
      <div className="w-full flex items-center gap-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("llm.providers.baseUrl")}
          </label>
          <input
            type="url"
            name="LocalAiBasePath"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:bg-zinc-900 focus:border-white block w-full p-2.5"
            placeholder="http://localhost:1234/v1"
            defaultValue={settings?.LocalAiBasePath}
            required={true}
            autoComplete="off"
            spellCheck={false}
            onChange={(e) => setBasePathValue(e.target.value)}
            onBlur={() => setBasePath(basePathValue)}
          />
        </div>
        {!settings?.credentialsOnly && (
          <>
            <LocalAIModelSelection
              settings={settings}
              basePath={basePath}
              apiKey={apiKey}
            />
            <div className="flex flex-col w-60">
              <label className="text-white text-sm font-semibold block mb-4">
                {t("llm.providers.tokenContextWindow")}
              </label>
              <input
                type="number"
                name="LocalAiTokenLimit"
                className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:bg-zinc-900 focus:border-white block w-full p-2.5"
                placeholder="4096"
                min={1}
                onScroll={(e) => e.target.blur()}
                defaultValue={settings?.LocalAiTokenLimit}
                required={true}
                autoComplete="off"
              />
            </div>
          </>
        )}
      </div>
      <div className="w-full flex items-center gap-4">
        <div className="flex flex-col w-60">
          <div className="flex flex-col gap-y-1 mb-4">
            <label className="text-white text-sm font-semibold flex items-center gap-x-2">
              {t("llm.providers.apiKey")}{" "}
              <p className="!text-xs !italic !font-thin">{t("llm.optional")}</p>
            </label>
          </div>

          <input
            type="password"
            name="LocalAiApiKey"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:bg-zinc-900 focus:border-white block w-full p-2.5"
            placeholder="sk-mysecretkey"
            defaultValue={settings?.LocalAiApiKey ? "*".repeat(20) : ""}
            autoComplete="off"
            spellCheck={false}
            onChange={(e) => setApiKeyValue(e.target.value)}
            onBlur={() => setApiKey(apiKeyValue)}
          />
        </div>
      </div>
    </div>
  );
}

function LocalAIModelSelection({ settings, basePath = null, apiKey = null }) {
  const [customModels, setCustomModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation(); // 추가된 부분

  useEffect(() => {
    async function findCustomModels() {
      if (!basePath || !basePath.includes("/v1")) {
        setCustomModels([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      const { models } = await System.customModels(
        "localai",
        typeof apiKey === "boolean" ? null : apiKey,
        basePath
      );
      setCustomModels(models || []);
      setLoading(false);
    }
    findCustomModels();
  }, [basePath, apiKey]);

  if (loading || customModels.length == 0) {
    return (
      <div className="flex flex-col w-60">
        <label className="text-white text-sm font-semibold block mb-4">
          {t("llm.providers.modelLabel")}
        </label>
        <select
          name="LocalAiModelPref"
          disabled={true}
          className="bg-zinc-900 border-gray-500 text-white text-sm rounded-lg block w-full p-2.5"
        >
          <option disabled={true} selected={true}>
            {basePath?.includes("/v1")
              ? t("llm.providers.loadingModels")
              : t("llm.providers.waitingForUrl")}
          </option>
        </select>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-60">
      <label className="text-white text-sm font-semibold block mb-4">
        {t("llm.providers.modelLabel")}
      </label>
      <select
        name="LocalAiModelPref"
        defaultValue={settings.LocalAiModelPref}
        required={true}
        className="bg-zinc-900 border-gray-500 text-white text-sm rounded-lg block w-full p-2.5"
      >
        {customModels.length > 0 && (
          <optgroup label={t("llm.providers.loadedModels")}>
            {customModels.map((model) => {
              return (
                <option key={model.id} value={model.id}>
                  {model.id}
                </option>
              );
            })}
          </optgroup>
        )}
      </select>
    </div>
  );
}
