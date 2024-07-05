import React from "react";
import { useTranslation } from "react-i18next";

export function GoogleSearchOptions({ settings }) {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-sm text-white/60 my-2">
        {t("webSearchOptions.googleSearch.info")} &nbsp;
        <a
          href="https://programmablesearchengine.google.com/controlpanel/create"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 underline"
        >
          Google Programmable Search Engine
        </a>
      </p>
      <div className="flex gap-x-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("webSearchOptions.googleSearch.searchEngineId")}
          </label>
          <input
            type="text"
            name="env::AgentGoogleSearchEngineId"
            className="border-none bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder={t(
              "webSearchOptions.googleSearch.searchEnginePlaceholder"
            )}
            defaultValue={settings?.AgentGoogleSearchEngineId}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("webSearchOptions.googleSearch.apiKey")}
          </label>
          <input
            type="password"
            name="env::AgentGoogleSearchEngineKey"
            className="border-none bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder={t("webSearchOptions.googleSearch.apiKeyPlaceholder")}
            defaultValue={
              settings?.AgentGoogleSearchEngineKey ? "*".repeat(20) : ""
            }
            required={true}
            autoComplete="new-password"
            spellCheck={false}
          />
        </div>
      </div>
    </>
  );
}

export function SerperDotDevOptions({ settings }) {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-sm text-white/60 my-2">
        {t("webSearchOptions.serperDotDev.info")} &nbsp;
        <a
          href="https://serper.dev"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 underline"
        >
          Serper.dev
        </a>
      </p>
      <div className="flex gap-x-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("webSearchOptions.serperDotDev.apiKey")}
          </label>
          <input
            type="password"
            name="env::AgentSerperApiKey"
            className="border-none bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder={t("webSearchOptions.serperDotDev.apiKeyPlaceholder")}
            defaultValue={settings?.AgentSerperApiKey ? "*".repeat(20) : ""}
            required={true}
            autoComplete="new-password"
            spellCheck={false}
          />
        </div>
      </div>
    </>
  );
}

export function BingSearchOptions({ settings }) {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-sm text-white/60 my-2">
        {t("webSearchOptions.bingSearch.info")} &nbsp;
        <a
          href="https://portal.azure.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 underline"
        >
          Azure Portal
        </a>
      </p>
      <div className="flex gap-x-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("webSearchOptions.bingSearch.apiKey")}
          </label>
          <input
            type="password"
            name="env::AgentBingSearchApiKey"
            className="border-none bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder={t("webSearchOptions.bingSearch.apiKeyPlaceholder")}
            defaultValue={settings?.AgentBingSearchApiKey ? "*".repeat(20) : ""}
            required={true}
            autoComplete="new-password"
            spellCheck={false}
          />
        </div>
      </div>
      <p className="text-sm text-white/60 my-2">
        {t("webSearchOptions.bingSearch.setupInstructions")}
      </p>
      <ol className="list-decimal text-sm text-white/60 ml-6">
        {t("webSearchOptions.bingSearch.setupSteps", {
          returnObjects: true,
        }).map((step, index) => (
          <li key={index}>
            <a
              href="https://portal.azure.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-300 underline"
            >
              {step}
            </a>
          </li>
        ))}
      </ol>
    </>
  );
}

export function SerplySearchOptions({ settings }) {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-sm text-white/60 my-2">
        {t("webSearchOptions.serplySearch.info")} &nbsp;
        <a
          href="https://serply.io"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 underline"
        >
          Serply.io
        </a>
      </p>
      <div className="flex gap-x-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("webSearchOptions.serplySearch.apiKey")}
          </label>
          <input
            type="password"
            name="env::AgentSerplyApiKey"
            className="border-none bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder={t("webSearchOptions.serplySearch.apiKeyPlaceholder")}
            defaultValue={settings?.AgentSerplyApiKey ? "*".repeat(20) : ""}
            required={true}
            autoComplete="new-password"
            spellCheck={false}
          />
        </div>
      </div>
    </>
  );
}

export function SearXNGOptions({ settings }) {
  const { t } = useTranslation();

  return (
    <div className="flex gap-x-4">
      <div className="flex flex-col w-60">
        <label className="text-white text-sm font-semibold block mb-4">
          {t("webSearchOptions.searXNG.apiUrl")}
        </label>
        <input
          type="url"
          name="env::AgentSearXNGApiUrl"
          className="border-none bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
          placeholder={t("webSearchOptions.searXNG.apiUrlPlaceholder")}
          defaultValue={settings?.AgentSearXNGApiUrl}
          required={true}
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </div>
  );
}
