import { useTranslation } from "react-i18next";
import AgentWebSearchSelection from "./WebSearchSelection";
import AgentSQLConnectorSelection from "./SQLConnectorSelection";
import GenericSkillPanel from "./GenericSkillPanel";
import DefaultSkillPanel from "./DefaultSkillPanel";
import {
  Brain,
  File,
  Browser,
  ChartBar,
  FileMagnifyingGlass,
} from "@phosphor-icons/react";
import RAGImage from "@/media/agents/rag-memory.png";
import SummarizeImage from "@/media/agents/view-summarize.png";
import ScrapeWebsitesImage from "@/media/agents/scrape-websites.png";
import GenerateChartsImage from "@/media/agents/generate-charts.png";
import GenerateSaveImages from "@/media/agents/generate-save-files.png";

export const getDefaultSkills = (t) => ({
  "rag-memory": {
    title: t("agentSetting.skills.ragMemory.title"),
    description: t("agentSetting.skills.ragMemory.description"),
    component: DefaultSkillPanel,
    icon: Brain,
    image: RAGImage,
  },
  "view-summarize": {
    title: t("agentSetting.skills.viewSummarize.title"),
    description: t("agentSetting.skills.viewSummarize.description"),
    component: DefaultSkillPanel,
    icon: File,
    image: SummarizeImage,
  },
  "scrape-websites": {
    title: t("agentSetting.skills.scrapeWebsites.title"),
    description: t("agentSetting.skills.scrapeWebsites.description"),
    component: DefaultSkillPanel,
    icon: Browser,
    image: ScrapeWebsitesImage,
  },
});

export const getConfigurableSkills = (t) => ({
  "save-file-to-browser": {
    title: t("agentSetting.skills.generateSaveFiles.title"),
    description: t("agentSetting.skills.generateSaveFiles.description"),
    component: GenericSkillPanel,
    skill: "save-file-to-browser",
    icon: FileMagnifyingGlass,
    image: GenerateSaveImages,
  },
  "create-chart": {
    title: t("agentSetting.skills.createChart.title"),
    description: t("agentSetting.skills.createChart.description"),
    component: GenericSkillPanel,
    skill: "create-chart",
    icon: ChartBar,
    image: GenerateChartsImage,
  },
  "web-browsing": {
    title: t("agentSetting.skills.webBrowsing.title"),
    component: AgentWebSearchSelection,
    skill: "web-browsing",
  },
  "sql-agent": {
    title: t("agentSetting.skills.sqlAgent.title"),
    component: AgentSQLConnectorSelection,
    skill: "sql-agent",
  },
});
