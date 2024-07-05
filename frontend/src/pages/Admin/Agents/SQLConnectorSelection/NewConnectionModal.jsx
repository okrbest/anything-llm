import { useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import ModalWrapper from "@/components/ModalWrapper";
import { WarningOctagon, X } from "@phosphor-icons/react";
import { DB_LOGOS } from "./DBConnection";

const DEFAULT_ENGINE = "postgresql";
const DEFAULT_CONFIG = {
  username: null,
  password: null,
  host: null,
  port: null,
  database: null,
};

export default function NewSQLConnection({ isOpen, closeModal, onSubmit }) {
  const { t } = useTranslation();
  const [engine, setEngine] = useState(DEFAULT_ENGINE);
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  if (!isOpen) return null;

  function assembleConnectionString({
    engine,
    username = "",
    password = "",
    host = "",
    port = "",
    database = "",
  }) {
    if ([username, password, host, database].every((i) => !!i) === false)
      return t("newSQLConnection.connectionStringMessage");
    switch (engine) {
      case "postgresql":
        return `postgres://${username}:${password}@${host}:${port}/${database}`;
      case "mysql":
        return `mysql://${username}:${password}@${host}:${port}/${database}`;
      case "sql-server":
        return `mssql://${username}:${password}@${host}:${port}/${database}`;
      default:
        return null;
    }
  }

  function handleClose() {
    setEngine(DEFAULT_ENGINE);
    setConfig(DEFAULT_CONFIG);
    closeModal();
  }

  function onFormChange() {
    const form = new FormData(document.getElementById("sql-connection-form"));
    setConfig({
      username: form.get("username").trim(),
      password: form.get("password"),
      host: form.get("host").trim(),
      port: form.get("port").trim(),
      database: form.get("database").trim(),
    });
  }

  async function handleUpdate(e) {
    e.preventDefault();
    e.stopPropagation();
    const form = new FormData(e.target);
    onSubmit({
      engine,
      database_id: form.get("name"),
      connectionString: assembleConnectionString({ engine, ...config }),
    });
    handleClose();
    return false;
  }

  return createPortal(
    <ModalWrapper isOpen={isOpen}>
      <div className="relative w-full md:w-1/3 max-w-2xl max-h-full md:mt-8">
        <div className="relative bg-main-gradient rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.25)] max-h-[85vh] overflow-y-scroll no-scroll">
          <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-500/50">
            <h3 className="text-xl font-semibold text-white">
              {t("newSQLConnection.title")}
            </h3>
            <button
              onClick={handleClose}
              type="button"
              className="border-none transition-all duration-300 text-gray-400 bg-transparent hover:border-white/60 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center bg-sidebar-button hover:bg-menu-item-selected-gradient hover:border-slate-100 hover:border-opacity-50 border-transparent border"
              data-modal-hide="staticModal"
            >
              <X className="text-gray-300 text-lg" />
            </button>
          </div>

          <form
            id="sql-connection-form"
            onSubmit={handleUpdate}
            onChange={onFormChange}
          >
            <div className="py-[17px] px-[20px] flex flex-col gap-y-6">
              <p className="text-sm text-white">
                {t("newSQLConnection.description")}
              </p>
              <div className="flex flex-col w-full">
                <div className="border border-red-800 bg-zinc-800 p-4 rounded-lg flex items-center gap-x-2 text-sm text-red-400">
                  <WarningOctagon size={28} className="shrink-0" />
                  <p>
                    <b>{t("newSQLConnection.warning.title")}</b>{" "}
                    {t("newSQLConnection.warning.message")}
                  </p>
                </div>

                <label className="text-white text-sm font-semibold block my-4">
                  {t("newSQLConnection.selectEngine")}
                </label>
                <div className="grid md:grid-cols-4 gap-4 grid-cols-2">
                  <DBEngine
                    provider="postgresql"
                    active={engine === "postgresql"}
                    onClick={() => setEngine("postgresql")}
                  />
                  <DBEngine
                    provider="mysql"
                    active={engine === "mysql"}
                    onClick={() => setEngine("mysql")}
                  />
                  <DBEngine
                    provider="sql-server"
                    active={engine === "sql-server"}
                    onClick={() => setEngine("sql-server")}
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <label className="text-white text-sm font-semibold block mb-4">
                  {t("newSQLConnection.connectionName")}
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-none bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
                  placeholder={t("newSQLConnection.connectionNamePlaceholder")}
                  required={true}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="text-white text-sm font-semibold block mb-4">
                    {t("newSQLConnection.databaseUser")}
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="border-none bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
                    placeholder={t("newSQLConnection.databaseUserPlaceholder")}
                    required={true}
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white text-sm font-semibold block mb-4">
                    {t("newSQLConnection.databaseUserPassword")}
                  </label>
                  <input
                    type="text"
                    name="password"
                    className="border-none bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
                    placeholder={t(
                      "newSQLConnection.databaseUserPasswordPlaceholder"
                    )}
                    required={true}
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <label className="text-white text-sm font-semibold block mb-4">
                    {t("newSQLConnection.serverEndpoint")}
                  </label>
                  <input
                    type="text"
                    name="host"
                    className="border-none bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
                    placeholder={t(
                      "newSQLConnection.serverEndpointPlaceholder"
                    )}
                    required={true}
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-semibold block mb-4">
                    {t("newSQLConnection.port")}
                  </label>
                  <input
                    type="text"
                    name="port"
                    className="border-none bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
                    placeholder={t("newSQLConnection.portPlaceholder")}
                    required={false}
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-white text-sm font-semibold block mb-4">
                  {t("newSQLConnection.database")}
                </label>
                <input
                  type="text"
                  name="database"
                  className="border-none bg-zinc-900 text-white placeholder:text-white/20 text-sm rounded-lg focus:border-white block w-full p-2.5"
                  placeholder={t("newSQLConnection.databasePlaceholder")}
                  required={true}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <p className="text-white/40 text-sm">
                {assembleConnectionString({ engine, ...config })}
              </p>
            </div>
            <div className="flex w-full justify-between items-center p-3 space-x-2 border-t rounded-b border-gray-500/50">
              <button
                type="button"
                onClick={handleClose}
                className="border-none text-xs px-2 py-1 font-semibold rounded-lg bg-white hover:bg-transparent border-2 border-transparent hover:border-white hover:text-white h-[32px] w-fit -mr-8 whitespace-nowrap shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
              >
                {t("newSQLConnection.cancelButton")}
              </button>
              <button
                type="submit"
                form="sql-connection-form"
                className="border-none text-xs px-2 py-1 font-semibold rounded-lg bg-primary-button hover:bg-secondary border-2 border-transparent hover:border-[#46C8FF] hover:text-white h-[32px] w-fit -mr-8 whitespace-nowrap shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
              >
                {t("newSQLConnection.saveButton")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </ModalWrapper>,
    document.getElementById("workspace-agent-settings-container")
  );
}

function DBEngine({ provider, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col p-4 border border-white/40 bg-zinc-800 rounded-lg w-fit hover:bg-zinc-700 ${
        active ? "!bg-blue-500/50" : ""
      }`}
    >
      <img
        src={DB_LOGOS[provider]}
        className="h-[100px] rounded-md"
        alt={provider}
      />
    </button>
  );
}
