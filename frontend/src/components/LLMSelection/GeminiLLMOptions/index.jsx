import React from "react";
import { useTranslation } from "react-i18next";

export default function GeminiLLMOptions({ settings }) {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center gap-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("llm.providers.apiKeyLabel", { provider: "Google AI" })}
          </label>
          <input
            type="password"
            name="GeminiLLMApiKey"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder={t("llm.providers.apiKeyPlaceholder", {
              provider: "Google Gemini",
            })}
            defaultValue={settings?.GeminiLLMApiKey ? "*".repeat(20) : ""}
            required={true}
            autoComplete="new-password"
            spellCheck={false}
          />
        </div>

        {!settings?.credentialsOnly && (
          <>
            <div className="flex flex-col w-60">
              <label className="text-white text-sm font-semibold block mb-4">
                {t("llm.providers.modelLabel")}
              </label>
              <select
                name="GeminiLLMModelPref"
                defaultValue={settings?.GeminiLLMModelPref || "gemini-pro"}
                required={true}
                className="bg-zinc-900 border-gray-500 text-white text-sm rounded-lg block w-full p-2.5"
              >
                {[
                  "gemini-pro",
                  "gemini-1.0-pro",
                  "gemini-1.5-pro-latest",
                  "gemini-1.5-flash-latest",
                ].map((model) => {
                  return (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col w-60">
              <label className="text-white text-sm font-semibold block mb-4">
                {t("llm.providers.safetyLabel")}
              </label>
              <select
                name="GeminiSafetySetting"
                defaultValue={
                  settings?.GeminiSafetySetting || "BLOCK_MEDIUM_AND_ABOVE"
                }
                required={true}
                className="bg-zinc-900 border-gray-500 text-white text-sm rounded-lg block w-full p-2.5"
              >
                <option value="BLOCK_NONE">
                  {t("llm.providers.safety.none")}
                </option>
                <option value="BLOCK_ONLY_HIGH">
                  {t("llm.providers.safety.blockFew")}
                </option>
                <option value="BLOCK_MEDIUM_AND_ABOVE">
                  {t("llm.providers.safety.blockSome")}
                </option>
                <option value="BLOCK_LOW_AND_ABOVE">
                  {t("llm.providers.safety.blockMost")}
                </option>
              </select>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
