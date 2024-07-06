import PreLoader from "@/components/Preloader";
import System from "@/models/system";
import AnythingLLMIcon from "@/media/logo/anything-llm-icon.png";
import OpenAiLogo from "@/media/llmprovider/openai.png";
import GenericOpenAiLogo from "@/media/llmprovider/generic-openai.png";
import AzureOpenAiLogo from "@/media/llmprovider/azure.png";
import AnthropicLogo from "@/media/llmprovider/anthropic.png";
import GeminiLogo from "@/media/llmprovider/gemini.png";
import OllamaLogo from "@/media/llmprovider/ollama.png";
import TogetherAILogo from "@/media/llmprovider/togetherai.png";
import LMStudioLogo from "@/media/llmprovider/lmstudio.png";
import LocalAiLogo from "@/media/llmprovider/localai.png";
import MistralLogo from "@/media/llmprovider/mistral.jpeg";
import HuggingFaceLogo from "@/media/llmprovider/huggingface.png";
import PerplexityLogo from "@/media/llmprovider/perplexity.png";
import OpenRouterLogo from "@/media/llmprovider/openrouter.jpeg";
import GroqLogo from "@/media/llmprovider/groq.png";
import KoboldCPPLogo from "@/media/llmprovider/koboldcpp.png";
import TextGenWebUILogo from "@/media/llmprovider/text-generation-webui.png";
import LiteLLMLogo from "@/media/llmprovider/litellm.png";

import CohereLogo from "@/media/llmprovider/cohere.png";
import ZillizLogo from "@/media/vectordbs/zilliz.png";
import AstraDBLogo from "@/media/vectordbs/astraDB.png";
import ChromaLogo from "@/media/vectordbs/chroma.png";
import PineconeLogo from "@/media/vectordbs/pinecone.png";
import LanceDbLogo from "@/media/vectordbs/lancedb.png";
import WeaviateLogo from "@/media/vectordbs/weaviate.png";
import QDrantLogo from "@/media/vectordbs/qdrant.png";
import MilvusLogo from "@/media/vectordbs/milvus.png";
import VoyageAiLogo from "@/media/embeddingprovider/voyageai.png";

import React, { useState, useEffect } from "react";
import paths from "@/utils/paths";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TITLE = "privacy.title";
const DESCRIPTION = "privacy.description";

export const LLM_SELECTION_PRIVACY = {
  openai: {
    name: "openai.name",
    description: ["openai.description.0", "openai.description.1"],
    logo: OpenAiLogo,
  },
  azure: {
    name: "azure.name",
    description: ["azure.description.0", "azure.description.1"],
    logo: AzureOpenAiLogo,
  },
  anthropic: {
    name: "anthropic.name",
    description: ["anthropic.description.0", "anthropic.description.1"],
    logo: AnthropicLogo,
  },
  gemini: {
    name: "gemini.name",
    description: ["gemini.description.0", "gemini.description.1"],
    logo: GeminiLogo,
  },
  lmstudio: {
    name: "lmstudio.name",
    description: ["lmstudio.description.0"],
    logo: LMStudioLogo,
  },
  localai: {
    name: "localai.name",
    description: ["localai.description.0"],
    logo: LocalAiLogo,
  },
  ollama: {
    name: "ollama.name",
    description: ["ollama.description.0"],
    logo: OllamaLogo,
  },
  native: {
    name: "native.name",
    description: ["native.description.0"],
    logo: AnythingLLMIcon,
  },
  togetherai: {
    name: "togetherai.name",
    description: ["togetherai.description.0", "togetherai.description.1"],
    logo: TogetherAILogo,
  },
  mistral: {
    name: "mistral.name",
    description: ["mistral.description.0"],
    logo: MistralLogo,
  },
  huggingface: {
    name: "huggingface.name",
    description: ["huggingface.description.0"],
    logo: HuggingFaceLogo,
  },
  perplexity: {
    name: "perplexity.name",
    description: ["perplexity.description.0", "perplexity.description.1"],
    logo: PerplexityLogo,
  },
  openrouter: {
    name: "openrouter.name",
    description: ["openrouter.description.0", "openrouter.description.1"],
    logo: OpenRouterLogo,
  },
  groq: {
    name: "groq.name",
    description: ["groq.description.0", "groq.description.1"],
    logo: GroqLogo,
  },
  koboldcpp: {
    name: "koboldcpp.name",
    description: ["koboldcpp.description.0"],
    logo: KoboldCPPLogo,
  },
  textgenwebui: {
    name: "textgenwebui.name",
    description: ["textgenwebui.description.0"],
    logo: TextGenWebUILogo,
  },
  "generic-openai": {
    name: "generic-openai.name",
    description: ["generic-openai.description.0"],
    logo: GenericOpenAiLogo,
  },
  cohere: {
    name: "cohere.name",
    description: ["cohere.description.0"],
    logo: CohereLogo,
  },
  litellm: {
    name: "litellm.name",
    description: ["litellm.description.0"],
    logo: LiteLLMLogo,
  },
};

export const VECTOR_DB_PRIVACY = {
  chroma: {
    name: "chroma.name",
    description: ["chroma.description.0", "chroma.description.1"],
    logo: ChromaLogo,
  },
  pinecone: {
    name: "pinecone.name",
    description: ["pinecone.description.0", "pinecone.description.1"],
    logo: PineconeLogo,
  },
  qdrant: {
    name: "qdrant.name",
    description: ["qdrant.description.0"],
    logo: QDrantLogo,
  },
  weaviate: {
    name: "weaviate.name",
    description: ["weaviate.description.0"],
    logo: WeaviateLogo,
  },
  milvus: {
    name: "milvus.name",
    description: ["milvus.description.0"],
    logo: MilvusLogo,
  },
  zilliz: {
    name: "zilliz.name",
    description: ["zilliz.description.0"],
    logo: ZillizLogo,
  },
  astra: {
    name: "astra.name",
    description: ["astra.description.0"],
    logo: AstraDBLogo,
  },
  lancedb: {
    name: "lancedb.name",
    description: ["lancedb.description.0"],
    logo: LanceDbLogo,
  },
};

export const EMBEDDING_ENGINE_PRIVACY = {
  native: {
    name: "native.name",
    description: ["native.description.0"],
    logo: AnythingLLMIcon,
  },
  openai: {
    name: "openai.name",
    description: ["openai.description.0", "openai.description.1"],
    logo: OpenAiLogo,
  },
  azure: {
    name: "azure.name",
    description: ["azure.description.0", "azure.description.1"],
    logo: AzureOpenAiLogo,
  },
  localai: {
    name: "localai.name",
    description: ["localai.description.0"],
    logo: LocalAiLogo,
  },
  ollama: {
    name: "ollama.name",
    description: ["ollama.description.0"],
    logo: OllamaLogo,
  },
  lmstudio: {
    name: "lmstudio.name",
    description: ["lmstudio.description.0"],
    logo: LMStudioLogo,
  },
  cohere: {
    name: "cohere.name",
    description: ["cohere.description.0"],
    logo: CohereLogo,
  },
  voyageai: {
    name: "voyageai.name",
    description: ["voyageai.description.0"],
    logo: VoyageAiLogo,
  },
  litellm: {
    name: "litellm.name",
    description: ["litellm.description.0"],
    logo: LiteLLMLogo,
  },
  "generic-openai": {
    name: "generic-openai.name",
    description: ["generic-openai.description.0"],
    logo: GenericOpenAiLogo,
  },
};

export default function DataHandling({ setHeader, setForwardBtn, setBackBtn }) {
  const [llmChoice, setLLMChoice] = useState("openai");
  const [loading, setLoading] = useState(true);
  const [vectorDb, setVectorDb] = useState("pinecone");
  const [embeddingEngine, setEmbeddingEngine] = useState("openai");
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    setHeader({
      title: t(TITLE),
      description: t(DESCRIPTION),
    });
    setForwardBtn({ showing: true, disabled: false, onClick: handleForward });
    setBackBtn({ showing: false, disabled: false, onClick: handleBack });
    async function fetchKeys() {
      const _settings = await System.keys();
      setLLMChoice(_settings?.LLMProvider || "openai");
      setVectorDb(_settings?.VectorDB || "lancedb");
      setEmbeddingEngine(_settings?.EmbeddingEngine || "openai");

      setLoading(false);
    }
    fetchKeys();
  }, []);

  function handleForward() {
    navigate(paths.onboarding.survey());
  }

  function handleBack() {
    navigate(paths.onboarding.userSetup());
  }

  if (loading)
    return (
      <div className="w-full h-full flex justify-center items-center p-20">
        <PreLoader />
      </div>
    );

  return (
    <div className="w-full flex items-center justify-center flex-col gap-y-6">
      <div className="p-8 flex flex-col gap-8">
        <div className="flex flex-col gap-y-2 border-b border-zinc-500/50 pb-4">
          <div className="text-white text-base font-bold">
            {t("privacy.llm")}
          </div>
          <div className="flex items-center gap-2.5">
            <img
              src={LLM_SELECTION_PRIVACY[llmChoice].logo}
              alt="LLM Logo"
              className="w-8 h-8 rounded"
            />
            <p className="text-white text-sm font-bold">
              {t(`llmProviders.${llmChoice}.name`)}
            </p>
          </div>
          <ul className="flex flex-col list-disc ml-4">
            {LLM_SELECTION_PRIVACY[llmChoice].description.map((desc, index) => (
              <li className="text-white/90 text-sm" key={index}>
                {t(`llmProviders.${llmChoice}.description.${index}`)}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-2 border-b border-zinc-500/50 pb-4">
          <div className="text-white text-base font-bold">
            {t("privacy.embedding")}
          </div>
          <div className="flex items-center gap-2.5">
            <img
              src={EMBEDDING_ENGINE_PRIVACY[embeddingEngine].logo}
              alt="Embedding Engine Logo"
              className="w-8 h-8 rounded"
            />
            <p className="text-white text-sm font-bold">
              {t(`embeddingEngines.${embeddingEngine}.name`)}
            </p>
          </div>
          <ul className="flex flex-col list-disc ml-4">
            {EMBEDDING_ENGINE_PRIVACY[embeddingEngine].description.map(
              (desc, index) => (
                <li className="text-white/90 text-sm" key={index}>
                  {t(
                    `embeddingEngines.${embeddingEngine}.description.${index}`
                  )}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex flex-col gap-y-2 pb-4">
          <div className="text-white text-base font-bold">
            {t("privacy.vector")}
          </div>
          <div className="flex items-center gap-2.5">
            <img
              src={VECTOR_DB_PRIVACY[vectorDb].logo}
              alt="Vector DB Logo"
              className="w-8 h-8 rounded"
            />
            <p className="text-white text-sm font-bold">
              {t(`vectorDbs.${vectorDb}.name`)}
            </p>
          </div>
          <ul className="flex flex-col list-disc ml-4">
            {VECTOR_DB_PRIVACY[vectorDb].description.map((desc, index) => (
              <li className="text-white/90 text-sm" key={index}>
                {t(`vectorDbs.${vectorDb}.description.${index}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-white/60 text-sm font-medium py-1">
        {t("privacy.reconfigure")}
      </p>
    </div>
  );
}
