import { useIsAgentSessionActive } from "@/utils/chat/agent";
import { useTranslation } from "react-i18next";

export default function ResetCommand({ setShowing, sendCommand }) {
  const { t } = useTranslation();
  const isActiveAgentSession = useIsAgentSessionActive();
  if (isActiveAgentSession) return null; // cannot reset during active agent chat

  return (
    <button
      onClick={() => {
        setShowing(false);
        sendCommand("/reset", true);
      }}
      className="w-full hover:cursor-pointer hover:bg-zinc-700 px-2 py-2 rounded-xl flex flex-col justify-start"
    >
      <div className="w-full flex-col text-left flex pointer-events-none">
        <div className="text-white text-sm font-bold">
          {t("resetCommand.command")}
        </div>
        <div className="text-white text-opacity-60 text-sm">
          {t("resetCommand.description")}
        </div>
      </div>
    </button>
  );
}
