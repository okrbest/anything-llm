import React from "react";
import { useTranslation } from "react-i18next";

export default function ZillizCloudOptions({ settings }) {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="w-full flex items-center gap-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("vector.providers.zilliz.endpointLabel")}
          </label>
          <input
            type="text"
            name="ZillizEndpoint"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder="https://sample.api.gcp-us-west1.zillizcloud.com"
            defaultValue={settings?.ZillizEndpoint}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            {t("vector.providers.zilliz.apiTokenLabel")}
          </label>
          <input
            type="password"
            name="ZillizApiToken"
            className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder="Zilliz cluster API Token"
            defaultValue={settings?.ZillizApiToken ? "*".repeat(20) : ""}
            autoComplete="new-password"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
