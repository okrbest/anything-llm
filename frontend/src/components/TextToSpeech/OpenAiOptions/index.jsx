import { useTranslation } from "react-i18next";

function toProperCase(string) {
  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default function OpenAiTextToSpeechOptions({ settings }) {
  const { t } = useTranslation();
  const apiKey = settings?.TTSOpenAIKey;

  const voiceModels = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"];

  return (
    <div className="flex gap-x-4">
      <div className="flex flex-col w-60">
        <label className="text-white text-sm font-semibold block mb-4">
          {t("textToSpeech.providers.openai.apiKeyLabel")}
        </label>
        <input
          type="password"
          name="TTSOpenAIKey"
          className="bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
          placeholder={t("textToSpeech.providers.openai.apiKeyPlaceholder")}
          defaultValue={apiKey ? "*".repeat(20) : ""}
          required={true}
          autoComplete="new-password"
          spellCheck={false}
        />
      </div>
      <div className="flex flex-col w-60">
        <label className="text-white text-sm font-semibold block mb-4">
          {t("textToSpeech.voiceModelLabel")}
        </label>
        <select
          name="TTSOpenAIVoiceModel"
          defaultValue={settings?.TTSOpenAIVoiceModel ?? "alloy"}
          className="bg-zinc-900 border-gray-500 text-white text-sm rounded-lg block w-full p-2.5"
        >
          {voiceModels.map((voice) => {
            return (
              <option key={voice} value={voice}>
                {toProperCase(voice)}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
