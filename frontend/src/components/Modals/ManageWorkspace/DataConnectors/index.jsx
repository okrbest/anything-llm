import ConnectorImages from "@/components/DataConnectorOption/media";
import { MagnifyingGlass } from "@phosphor-icons/react";
import GithubOptions from "./Connectors/Github";
import YoutubeOptions from "./Connectors/Youtube";
import ConfluenceOptions from "./Connectors/Confluence";
import { useState } from "react";
import ConnectorOption from "./ConnectorOption";
import WebsiteDepthOptions from "./Connectors/WebsiteDepth";
import { useTranslation } from "react-i18next";

export const DATA_CONNECTORS = {
  github: {
    name: "dataConnectors.github.name",
    image: ConnectorImages.github,
    description: "dataConnectors.github.description",
    options: <GithubOptions />,
  },
  "youtube-transcript": {
    name: "dataConnectors.youtubeTranscript.name",
    image: ConnectorImages.youtube,
    description: "dataConnectors.youtubeTranscript.description",
    options: <YoutubeOptions />,
  },
  "website-depth": {
    name: "dataConnectors.websiteDepth.name",
    image: ConnectorImages.websiteDepth,
    description: "dataConnectors.websiteDepth.description",
    options: <WebsiteDepthOptions />,
  },
  confluence: {
    name: "dataConnectors.confluence.name",
    image: ConnectorImages.confluence,
    description: "dataConnectors.confluence.description",
    options: <ConfluenceOptions />,
  },
};

export default function DataConnectors() {
  const { t } = useTranslation();
  const [selectedConnector, setSelectedConnector] = useState("github");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConnectors = Object.keys(DATA_CONNECTORS).filter((slug) =>
    t(DATA_CONNECTORS[slug].name)
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex upload-modal -mt-10 relative min-h-[80vh] w-[70vw]">
      <div className="w-full p-4 top-0 z-20">
        <div className="w-full flex items-center sticky top-0 z-50">
          <MagnifyingGlass
            size={16}
            weight="bold"
            className="absolute left-4 z-30 text-white"
          />
          <input
            type="text"
            placeholder={t("dataConnectors.searchPlaceholder")}
            className="border-none bg-zinc-600 z-20 pl-10 h-[38px] rounded-full w-full px-4 py-1 text-sm border-2 border-slate-300/40 outline-none focus:border-white text-white"
            autoComplete="off"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="mt-2 flex flex-col gap-y-2">
          {filteredConnectors.length > 0 ? (
            filteredConnectors.map((slug, index) => (
              <ConnectorOption
                key={index}
                slug={slug}
                selectedConnector={selectedConnector}
                setSelectedConnector={setSelectedConnector}
                image={DATA_CONNECTORS[slug].image}
                name={t(DATA_CONNECTORS[slug].name)}
                description={t(DATA_CONNECTORS[slug].description)}
              />
            ))
          ) : (
            <div className="text-white text-center mt-4">
              {t("dataConnectors.noConnectorsFound")}
            </div>
          )}
        </div>
      </div>
      <div className="xl:block hidden absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-white/20 -translate-x-1/2"></div>
      <div className="w-full p-4 top-0 text-white min-w-[500px]">
        {DATA_CONNECTORS[selectedConnector].options}
      </div>
    </div>
  );
}
