import React from "react";
import { useTranslation } from "react-i18next";

export default function GroqAiOptions({ settings }) {
  const { t } = useTranslation();

  return (
    <div className="flex gap-x-4">
      <div className="flex flex-col w-60">
        <label className="text-white text-sm font-semibold block mb-4">
          {t("llm.providers.apiKeyLabel", { provider: "Groq" })}
        </label>
        <input
          type="password"
          name="GroqApiKey"
          className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
          placeholder={t("llm.providers.apiKeyPlaceholder", {
            provider: "Groq",
          })}
          defaultValue={settings?.GroqApiKey ? "*".repeat(20) : ""}
          required={true}
          autoComplete="new-password"
          spellCheck={false}
        />
      </div>

      {!settings?.credentialsOnly && (
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("llm.providers.modelLabel")}
          </label>
          <select
            name="GroqModelPref"
            defaultValue={settings?.GroqModelPref || "llama3-8b-8192"}
            required={true}
            className="bg-zinc-900 border-gray-500 text-white text-sm rounded-lg block w-full p-2.5"
          >
            {[
              "mixtral-8x7b-32768",
              "llama3-8b-8192",
              "llama3-70b-8192",
              "gemma-7b-it",
            ].map((model) => {
              return (
                <option key={model} value={model}>
                  {model}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
}
