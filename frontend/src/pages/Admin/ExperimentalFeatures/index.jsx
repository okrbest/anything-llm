import { useEffect, useState } from "react";
import Sidebar from "@/components/SettingsSidebar";
import { isMobile } from "react-device-detect";
import Admin from "@/models/admin";
import { FullScreenLoader } from "@/components/Preloader";
import { CaretRight, Flask } from "@phosphor-icons/react";
import { configurableFeatures } from "./features";
import ModalWrapper from "@/components/ModalWrapper";
import paths from "@/utils/paths";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";

export default function ExperimentalFeatures() {
  const { t } = useTranslation();
  const [featureFlags, setFeatureFlags] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedFeature, setSelectedFeature] = useState(
    "experimental_live_file_sync"
  );

  useEffect(() => {
    async function fetchSettings() {
      setLoading(true);
      const { settings } = await Admin.systemPreferences();
      setFeatureFlags(settings?.feature_flags ?? {});
      setLoading(false);
    }
    fetchSettings();
  }, []);

  const refresh = async () => {
    const { settings } = await Admin.systemPreferences();
    setFeatureFlags(settings?.feature_flags ?? {});
  };

  if (loading) {
    return (
      <div
        style={{ height: isMobile ? "100%" : "calc(100% - 32px)" }}
        className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] w-full h-full flex justify-center items-center"
      >
        <FullScreenLoader />
      </div>
    );
  }

  return (
    <FeatureLayout>
      <div className="flex-1 flex gap-x-6 p-4 mt-10">
        {/* Feature settings nav */}
        <div className="flex flex-col gap-y-[18px]">
          <div className="text-white flex items-center gap-x-2">
            <Flask size={24} />
            <p className="text-lg font-medium">
              {t("experimentalFeatures.title")}
            </p>
          </div>
          {/* Feature list */}
          <FeatureList
            features={configurableFeatures}
            selectedFeature={selectedFeature}
            handleClick={setSelectedFeature}
            activeFeatures={Object.keys(featureFlags).filter(
              (flag) => featureFlags[flag]
            )}
          />
        </div>

        {/* Selected feature setting panel */}
        <FeatureVerification>
          <div className="flex-[2] flex flex-col gap-y-[18px] mt-10">
            <div className="bg-[#303237] text-white rounded-xl flex-1 p-4">
              {selectedFeature ? (
                <SelectedFeatureComponent
                  feature={configurableFeatures[selectedFeature]}
                  settings={featureFlags}
                  refresh={refresh}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-white/60">
                  <Flask size={40} />
                  <p className="font-medium">
                    {t("experimentalFeatures.selectFeature")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </FeatureVerification>
      </div>
    </FeatureLayout>
  );
}

function FeatureLayout({ children }) {
  return (
    <div
      id="workspace-feature-settings-container"
      className="w-screen h-screen overflow-hidden bg-sidebar flex md:mt-0 mt-6"
    >
      <Sidebar />
      <div
        style={{ height: isMobile ? "100%" : "calc(100% - 32px)" }}
        className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] w-full h-full flex"
      >
        {children}
      </div>
    </div>
  );
}

function FeatureList({
  features = [],
  selectedFeature = null,
  handleClick = null,
  activeFeatures = [],
}) {
  const { t } = useTranslation();
  if (Object.keys(features).length === 0) return null;

  return (
    <div
      className={`bg-white/5 text-white rounded-xl ${
        isMobile ? "w-full" : "min-w-[360px] w-fit"
      }`}
    >
      {Object.entries(features).map(([feature, settings], index) => (
        <div
          key={feature}
          className={`py-3 px-4 flex items-center justify-between ${
            index === 0 ? "rounded-t-xl" : ""
          } ${
            index === Object.keys(features).length - 1
              ? "rounded-b-xl"
              : "border-b border-white/10"
          } cursor-pointer transition-all duration-300  hover:bg-white/5 ${
            selectedFeature === feature ? "bg-white/10" : ""
          }`}
          onClick={() => handleClick?.(feature)}
        >
          <div className="text-sm font-light">
            {t(`features.${feature}.title`)}
          </div>
          <div className="flex items-center gap-x-2">
            <div className="text-sm text-white/60 font-medium">
              {activeFeatures.includes(settings.key)
                ? t("experimentalFeatures.on")
                : t("experimentalFeatures.off")}
            </div>
            <CaretRight size={14} weight="bold" className="text-white/80" />
          </div>
        </div>
      ))}
    </div>
  );
}

function SelectedFeatureComponent({ feature, settings, refresh }) {
  const Component = feature?.component;
  return Component ? (
    <Component
      enabled={settings[feature.key]}
      feature={feature.key}
      onToggle={refresh}
    />
  ) : null;
}

function FeatureVerification({ children }) {
  const { t } = useTranslation();
  if (
    !window.localStorage.getItem("anythingllm_tos_experimental_feature_set")
  ) {
    function acceptTos(e) {
      e.preventDefault();

      window.localStorage.setItem(
        "anythingllm_tos_experimental_feature_set",
        "accepted"
      );
      showToast(t("experimentalFeatures.accepted"), "success");
      setTimeout(() => {
        window.location.reload();
      }, 2_500);
      return;
    }

    return (
      <>
        <ModalWrapper isOpen={true}>
          <form
            onSubmit={acceptTos}
            className="relative w-full max-w-2xl max-h-full"
          >
            <div className="relative bg-main-gradient rounded-lg shadow">
              <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-500/50">
                <h3 className="text-xl font-semibold text-white">
                  {t("experimentalFeatures.tosTitle")}
                </h3>
              </div>
              <div className="p-6 space-y-6 flex h-full w-full">
                <div className="w-full flex flex-col gap-y-4 text-white">
                  <p>{t("experimentalFeatures.tosIntro")}</p>

                  <div>
                    <p>{t("experimentalFeatures.tosRisksIntro")}</p>
                    <ul className="list-disc ml-6 text-sm font-mono">
                      <li>{t("experimentalFeatures.tosRisk1")}</li>
                      <li>{t("experimentalFeatures.tosRisk2")}</li>
                      <li>{t("experimentalFeatures.tosRisk3")}</li>
                      <li>{t("experimentalFeatures.tosRisk4")}</li>
                      <li>{t("experimentalFeatures.tosRisk5")}</li>
                      <li>{t("experimentalFeatures.tosRisk6")}</li>
                    </ul>
                  </div>

                  <div>
                    <p>{t("experimentalFeatures.tosConditionsIntro")}</p>
                    <ul className="list-disc ml-6 text-sm font-mono">
                      <li>{t("experimentalFeatures.tosCondition1")}</li>
                      <li>{t("experimentalFeatures.tosCondition2")}</li>
                      <li>{t("experimentalFeatures.tosCondition3")}</li>
                      <li>{t("experimentalFeatures.tosCondition4")}</li>
                      <li>{t("experimentalFeatures.tosCondition5")}</li>
                    </ul>
                  </div>

                  <p>
                    {t("experimentalFeatures.tosConclusion1")}{" "}
                    <a
                      href="https://docs.useanything.com/beta-preview/overview"
                      className="underline text-blue-500"
                    >
                      docs.useanything.com
                    </a>{" "}
                    {t("experimentalFeatures.tosConclusion2")}{" "}
                    <a
                      href="mailto:team@mintplexlabs.com"
                      className="underline text-blue-500"
                    >
                      team@mintplexlabs.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-between items-center p-6 space-x-2 border-t rounded-b border-gray-500/50">
                <a
                  href={paths.home()}
                  className="px-4 py-2 rounded-lg text-white hover:bg-stone-900 transition-all duration-300"
                >
                  {t("experimentalFeatures.reject")}
                </a>
                <button
                  type="submit"
                  className="transition-all duration-300 border border-slate-200 px-4 py-2 rounded-lg text-white text-sm items-center flex gap-x-2 hover:bg-slate-200 hover:text-slate-800 focus:ring-gray-800"
                >
                  {t("experimentalFeatures.accept")}
                </button>
              </div>
            </div>
          </form>
        </ModalWrapper>
        {children}
      </>
    );
  }
  return <>{children}</>;
}
