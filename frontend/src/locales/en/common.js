const TRANSLATIONS = {
  common: {
    "workspaces-name": "Workspaces Name",
    error: "error",
    success: "success",
    user: "User",
    selection: "Model Selection",
    saving: "Saving...",
    save: "Save changes",
    previous: "Previous Page",
    next: "Next Page",
    cancel: "Cancel",
    create: "Create",
    close: "Close",
    download: "Download",
    back: "Back",
    on: "On",
    off: "Off",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "Instance Settings",
    system: "System Preferences",
    invites: "Invitation",
    users: "Users",
    workspaces: "Workspaces",
    "workspace-chats": "Workspace Chat",
    agents: "Agent Skills",
    appearance: "Appearance",
    "api-keys": "API Keys",
    llm: "LLM Preference",
    voice: "Voice and Speech Support",
    transcription: "Transcription Model",
    embedder: "Embedding Preferences",
    "text-splitting": "Text Splitter & Chunking",
    "vector-database": "Vector Database",
    embeds: "Chat Embed Widgets",
    "embed-chats": "Chat Embed History",
    security: "Security",
    "event-logs": "Event Logs",
    privacy: "Privacy & Data",
    experimental: "Experimental Features",
  },

  // Page Definitions
  login: {
    "multi-user": {
      welcome: "Welcome to",
      "placeholder-username": "Username",
      "placeholder-password": "Password",
      login: "Login",
      validating: "Validating...",
      "forgot-pass": "Forgot password",
      reset: "Reset",
    },
    "sign-in": {
      start: "Sign in to your",
      end: "account.",
    },
  },

  recoveryCodes: {
    title: "Recovery Codes",
    description:
      "In order to reset your password in the future, you will need these recovery codes. Download or copy your recovery codes to save them.",
    warning: "These recovery codes are only shown once!",
    successMessage: "Recovery codes copied to clipboard",
  },

  welcomeMessage: {
    part1:
      "Welcome to TeamplGPT, TeamplGPT is an open-source AI tool by OKR Best that turns anything into a trained chatbot you can query and chat with. TeamplGPT is a BYOK (bring-your-own-keys) software so there is no subscription, fee, or charges for this software outside of the services you want to use with it.",
    part2:
      "TeamplGPT is the easiest way to put powerful AI products like OpenAi, GPT-4, LangChain, PineconeDB, ChromaDB, and other services together in a neat package with no fuss to increase your productivity by 100x.",
    part3:
      "TeamplGPT can run totally locally on your machine with little overhead you wont even notice it's there! No GPU needed. Cloud and on-premises installation is available as well.\nThe AI tooling ecosystem gets more powerful everyday. TeamplGPT makes it easy to use.",
    githubIssue: "Create an issue on Github",
    user1: "How do I get started?!",
    part4:
      "It's simple. All collections are organized into buckets we call \"Workspaces\". Workspaces are buckets of files, documents, images, PDFs, and other files which will be transformed into something LLM's can understand and use in conversation.\n\nYou can add and remove files at anytime.",
    createWorkspace: "Create your first workspace",
    user2:
      "Is this like an AI dropbox or something? What about chatting? It is a chatbot isn't it?",
    part5:
      "TeamplGPT is more than a smarter Dropbox.\n\nTeamplGPT offers two ways of talking with your data:\n\nQuery: Your chats will return data or inferences found with the documents in your workspace it has access to. Adding more documents to the Workspace make it smarter!\n\nConversational: Your documents + your on-going chat history both contribute to the LLM knowledge at the same time. Great for appending real-time text-based info or corrections and misunderstandings the LLM might have.\n\nYou can toggle between either mode in the middle of chatting!",
    user3: "Wow, this sounds amazing, let me try it out already!",
    part6: "Have Fun!",
    starOnGithub: "Star on GitHub",
    contact: "Contact OKR Best",
  },

  sidebar: {
    home: "Home",
    newWorkspace: "New Workspace",
    showSidebar: "Show sidebar",
  },

  newWorkspaceModal: {
    title: "New Workspace",
    workspaceName: "Workspace Name",
    myWorkspace: "My Workspace",
  },

  userButton: {
    account: "Account",
    support: "Support",
    signOut: "Sign out",
  },

  accountModal: {
    title: "Edit Account",
    uploadError: "Failed to upload profile picture: {{error}}",
    uploadSuccess: "Profile picture uploaded.",
    removeError: "Failed to remove profile picture: {{error}}",
    updateSuccess: "Profile updated.",
    updateError: "Failed to update user: {{error}}",
    profilePictureAlt: "User profile picture",
    profilePicture: "Profile Picture",
    removeProfilePicture: "Remove Profile Picture",
    username: "Username",
    usernamePlaceholder: "User's username",
    newPassword: "New Password",
    newPasswordPlaceholder: "{{username}}'s new password",
    preferredLanguage: "Preferred language",
    updateAccount: "Update Account",
  },

  adminSystem: {
    title: "System Preferences",
    description:
      "These are the overall settings and configurations of your instance.",
    toastSuccess: "System preferences updated successfully.",
    limitMessagesTitle: "Limit messages per user per day",
    limitMessagesDescription:
      "Restrict non-admin users to a number of successful queries or chats within a 24 hour window. Enable this to prevent users from running up OpenAI costs.",
    messageLimit: "Message limit per day",
  },

  adminInvites: {
    title: "Invitations",
    description:
      "Create invitation links for people in your organization to accept and sign up with. Invitations can only be used by a single user.",
    createInvite: "Create Invite Link",
    status: "Status",
    acceptedBy: "Accepted By",
    createdBy: "Created By",
    created: "Created",
  },

  newInviteModal: {
    title: "Create new invite",
    error: "Error: {{error}}",
    description:
      "After creation you will be able to copy the invite and send it to a new user where they can create an account as the <strong>default</strong> role and automatically be added to workspaces selected.",
    autoAdd: "Auto-add invitee to workspaces",
    autoAddDescription:
      "You can optionally automatically assign the user to the workspaces below by selecting them. By default, the user will not have any workspaces visible. You can assign workspaces later post-invite acceptance.",
    createInvite: "Create Invite Link",
    copyInvite: "Copy Invite Link",
    copied: "Copied Link",
  },

  newUserModal: {
    title: "Create a new account",
    username: "Username",
    usernamePlaceholder: "My username",
    password: "Password",
    passwordPlaceholder: "Your password",
    error: "Error: {{error}}",
    info: "After creating your account you will be able to login with these credentials and start using workspaces.",
    acceptInvite: "Accept Invitation",
  },

  adminUsers: {
    title: "Users",
    description:
      "These are all the accounts which have an account on this instance. Removing an account will instantly remove their access to this instance.",
    addUser: "Add user",
    username: "Username",
    role: "Role",
    dateAdded: "Date Added",
  },
  roleHint: {
    permissions: "Permissions",
    default: [
      "Can only send chats with workspaces they are added to by admin or managers.",
      "Cannot modify any settings at all.",
    ],
    manager: [
      "Can view, create, and delete any workspaces and modify workspace-specific settings.",
      "Can create, update and invite new users to the instance.",
      "Cannot modify LLM, vectorDB, embedding, or other connections.",
    ],
    admin: [
      "Highest user level privilege.",
      "Can see and do everything across the system.",
    ],
  },

  editUser: {
    title: "Edit {{username}}",
    username: "Username",
    usernamePlaceholder: "User's username",
    password: "New Password",
    passwordPlaceholder: "{{username}}'s new password",
    role: "Role",
    defaultRole: "Default",
    managerRole: "Manager",
    adminRole: "Administrator",
    error: "Error: {{error}}",
    cancel: "Cancel",
    updateUser: "Update user",
  },

  userRow: {
    suspendConfirm:
      "Are you sure you want to suspend {{username}}?\nAfter you do this they will be logged out and unable to log back into this instance of TeamplGPT until unsuspended by an admin.",
    unsuspendConfirm:
      "Are you sure you want to unsuspend {{username}}?\nAfter you do this they will be able to log back into this instance of TeamplGPT.",
    suspendApplied: "User has been suspended.",
    unsuspendApplied: "User is no longer suspended.",
    deleteConfirm:
      "Are you sure you want to delete {{username}}?\nAfter you do this they will be logged out and unable to use this instance of TeamplGPT.\n\nThis action is irreversible.",
    deleteSuccess: "User deleted from system.",
    edit: "Edit",
    suspend: "Suspend",
    unsuspend: "Unsuspend",
    delete: "Delete",
  },

  userRole: {
    role: "Role",
    admin: "Admin",
    manager: "Manager",
    default: "Default",
  },

  addUserModal: {
    title: "Add user to instance",
    usernamePlaceholder: "User's username",
    passwordPlaceholder: "User's initial password",
    note: "After creating a user they will need to login with their initial login to get access.",
    addUser: "Add user",
  },

  adminWorkspaces: {
    title: "Instance Workspaces",
    description:
      "These are all the workspaces that exist on this instance. Removing a workspace will delete all of its associated chats and settings.",
    newWorkspace: "New Workspace",
    name: "Name",
    link: "Link",
    users: "Users",
    createdOn: "Created On",
  },

  workspaceCreation: {
    title: "Create new workspace",
    nameLabel: "Workspace Name",
    namePlaceholder: "My workspace",
    creationInfo:
      "After creating this workspace only admins will be able to see it. You can add users after it has been created.",
    cancel: "Cancel",
    create: "Create workspace",
    error: "Error: {{error}}",
  },

  workspaceAgentConfiguration: {
    configureAgentSkills: "Configure Agent Skills",
    customizeSkills:
      "Customize and enhance the default agent's capabilities by enabling or disabling specific skills. These settings will be applied across all workspaces.",
    updatingAgent: "Updating agent...",
    updateWorkspaceAgent: "Update workspace agent",
    workspaceUpdated: "Workspace updated!",
    updateError: "Error: {{message}}",
  },

  // Workspace Settings menu items
  "workspaces—settings": {
    general: "General Settings",
    chat: "Chat Settings",
    vector: "Vector Database",
    members: "Members",
    agent: "Agent Configuration",
  },

  // General Appearance
  general: {
    vector: {
      title: "Vector Count",
      description: "Total number of vectors in your vector database.",
    },
    names: {
      description: "This will only change the display name of your workspace.",
    },
    message: {
      title: "Suggested Chat Messages",
      description:
        "Customize the messages that will be suggested to your workspace users.",
      add: "Add new message",
      save: "Save Messages",
      heading: "Explain to me",
      body: "the benefits of TeamplGPT",
    },
    pfp: {
      title: "Assistant Profile Image",
      description:
        "Customize the profile image of the assistant for this workspace.",
      image: "Workspace Image",
      remove: "Remove Workspace Image",
    },
    delete: {
      title: "Delete Workspace",
      description:
        "Delete this workspace and all of its data. This will delete the workspace for all users.",
      delete: "Delete Workspace",
      deleting: "Deleting Workspace...",
      "confirm-start": "You are about to delete your entire",
      "confirm-end":
        "workspace. This will remove all vector embeddings in your vector database.\n\nThe original source files will remain untouched. This action is irreversible.",
    },
  },

  // Chat Settings
  chat: {
    llm: {
      title: "Workspace LLM Provider",
      description:
        "The specific LLM provider & model that will be used for this workspace. By default, it uses the system LLM provider and settings.",
      search: "Search all LLM providers",
    },
    model: {
      title: "Workspace Chat model",
      description:
        "The specific chat model that will be used for this workspace. If empty, will use the system LLM preference.",
      wait: "-- waiting for models --",
    },
    mode: {
      title: "Chat mode",
      chat: {
        title: "Chat",
        "desc-start": "will provide answers with the LLM's general knowledge",
        and: "and",
        "desc-end": "document context that is found.",
      },
      query: {
        title: "Query",
        "desc-start": "will provide answers",
        only: "only",
        "desc-end": "if document context is found.",
      },
    },
    history: {
      title: "Chat History",
      "desc-start":
        "The number of previous chats that will be included in the response's short-term memory.",
      recommend: "Recommend 20. ",
      "desc-end":
        "AAnything more than 45 is likely to lead to continuous chat failures depending on message size.",
    },
    prompt: {
      title: "Prompt",
      description:
        "The prompt that will be used on this workspace. Define the context and instructions for the AI to generate a response. You should to provide a carefully crafted prompt so the AI can generate a relevant and accurate response.",
    },
    refusal: {
      title: "Query mode refusal response",
      "desc-start": "When in",
      query: "query",
      "desc-end":
        "mode, you may want to return a custom refusal response when no context is found.",
    },
    temperature: {
      title: "LLM Temperature",
      "desc-start":
        'This setting controls how "creative" your LLM responses will be.',
      "desc-end":
        "The higher the number the more creative. For some models this can lead to incoherent responses when set too high.",
      hint: "Most LLMs have various acceptable ranges of valid values. Consult your LLM provider for that information.",
    },
  },

  // Vector Database
  "vector-workspace": {
    identifier: "Vector database identifier",
    snippets: {
      title: "Max Context Snippets",
      description:
        "This setting controls the maximum amount of context snippets the will be sent to the LLM for per chat or query.",
      recommend: "Recommended: 4",
    },
    doc: {
      title: "Document similarity threshold",
      description:
        "The minimum similarity score required for a source to be considered related to the chat. The higher the number, the more similar the source must be to the chat.",
      zero: "No restriction",
      low: "Low (similarity score ≥ .25)",
      medium: "Medium (similarity score ≥ .50)",
      high: "High (similarity score ≥ .75)",
    },
    reset: {
      reset: "Reset Vector Database",
      resetting: "Clearing vectors...",
      confirm:
        "You are about to reset this workspace's vector database. This will remove all vector embeddings currently embedded.\n\nThe original source files will remain untouched. This action is irreversible.",
      error: "Workspace vector database could not be reset!",
      success: "Workspace vector database was reset!",
    },
  },

  agent: {
    "performance-warning":
      "Performance of LLMs that do not explicitly support tool-calling is highly dependent on the model's capabilities and accuracy. Some abilities may be limited or non-functional.",
    provider: {
      title: "Workspace Agent LLM Provider",
      description:
        "The specific LLM provider & model that will be used for this workspace's @agent agent.",
    },
    mode: {
      chat: {
        title: "Workspace Agent Chat model",
        description:
          "The specific chat model that will be used for this workspace's @agent agent.",
      },
      title: "Workspace Agent model",
      description:
        "The specific LLM model that will be used for this workspace's @agent agent.",
      wait: "-- waiting for models --",
    },
    skill: {
      title: "Default agent skills",
      description:
        "Improve the natural abilities of the default agent with these pre-built skills. This set up applies to all workspaces.",
      rag: {
        title: "RAG & long-term memory",
        description:
          "Allow the agent to leverage your local documents to answer a query or ask the agent to 'remember' pieces of content for long-term memory retrieval.",
      },
      view: {
        title: "View & summarize documents",
        description:
          "Allow the agent to list and summarize the content of workspace files currently embedded.",
      },
      scrape: {
        title: "Scrape websites",
        description:
          "Allow the agent to visit and scrape the content of websites.",
      },
      generate: {
        title: "Generate charts",
        description:
          "Enable the default agent to generate various types of charts from data provided or given in chat.",
      },
      save: {
        title: "Generate & save files to browser",
        description:
          "Enable the default agent to generate and write to files that save and can be downloaded in your browser.",
      },
      web: {
        title: "Live web search and browsing",
        "desc-start":
          "Enable your agent to search the web to answer your questions by connecting to a web-search (SERP) provider.",
        "desc-end":
          "Web search during agent sessions will not work until this is set up.",
      },
    },
    "search-placeholder": "Search available LLM providers",
    workspaceUpdated: "Workspace updated!",
    updatingAgent: "Updating agent...",
    updateWorkspaceAgent: "Update workspace agent",
    pleaseMakeSelection: "Please make a selection",
    agentsNotWork: "Agents will not work until a valid selection is made.",
  },

  agentSetting: {
    skills: {
      ragMemory: {
        title: "RAG & long-term memory",
        description:
          "Allow the agent to leverage your local documents to answer a query or ask the agent to 'remember' pieces of content for long-term memory retrieval.",
      },
      viewSummarize: {
        title: "View & summarize documents",
        description:
          "Allow the agent to list and summarize the content of workspace files currently embedded.",
      },
      scrapeWebsites: {
        title: "Scrape websites",
        description:
          "Allow the agent to visit and scrape the content of websites.",
      },
      generateSaveFiles: {
        title: "Generate & save files to browser",
        description:
          "Enable the default agent to generate and write to files that can be saved to your computer.",
      },
      createChart: {
        title: "Generate charts",
        description:
          "Enable the default agent to generate various types of charts from data provided or given in chat.",
      },
      webBrowsing: {
        title: "Web Search",
      },
      sqlAgent: {
        title: "SQL Connector",
      },
    },
    misc: {
      performanceWarning:
        "Performance of LLMs that do not explicitly support tool-calling is highly dependent on the model's capabilities and accuracy. Some abilities may be limited or non-functional.",
      searchPlaceholder: "Search available LLM providers",
      workspaceUpdated: "Workspace updated!",
      updatingAgent: "Updating agent...",
      updateWorkspaceAgent: "Update workspace agent",
      pleaseMakeSelection: "Select an agent skill",
      agentsNotWork: "Agents will not work until a valid selection is made.",
    },
  },

  webSearch: {
    title: "Live web search and browsing",
    description:
      "Enable your agent to search the web to answer your questions by connecting to a web-search (SERP) provider. Web search during agent sessions will not work until this is set up.",
    pleaseMakeSelection: "Please make a selection",
    providers: {
      none: {
        name: "Please make a selection",
        description:
          "Web search will be disabled until a provider and keys are provided.",
      },
      googleSearch: {
        name: "Google Search Engine",
        description:
          "Web search powered by a custom Google Search Engine. Free for 100 queries per day.",
      },
      serperDotDev: {
        name: "Serper.dev",
        description:
          "Serper.dev web-search. Free account with 2,500 calls, but then paid.",
      },
      bingSearch: {
        name: "Bing Search",
        description:
          "Web search powered by the Bing Search API. Free for 1000 queries per month.",
      },
      serplyEngine: {
        name: "Serply.io",
        description:
          "Serply.io web-search. Free account with 100 calls/month forever.",
      },
      searxngEngine: {
        name: "SearXNG",
        description:
          "Free, open-source, internet meta-search engine with no tracking.",
      },
    },
    searchPlaceholder: "Search available web-search providers",
  },

  webSearchOptions: {
    googleSearch: {
      info: "You can get a free search engine & API key from Google here.",
      searchEngineId: "Search engine ID",
      apiKey: "Programmatic Access API Key",
      searchEnginePlaceholder: "Google Search Engine Id",
      apiKeyPlaceholder: "Google Search Engine API Key",
    },
    serperDotDev: {
      info: "You can get a free API key from Serper.dev.",
      apiKey: "API Key",
      apiKeyPlaceholder: "Serper.dev API Key",
    },
    bingSearch: {
      info: "You can get a Bing Web Search API subscription key from the Azure portal.",
      apiKey: "API Key",
      apiKeyPlaceholder: "Bing Web Search API Key",
      setupInstructions: "To set up a Bing Web Search API subscription:",
      setupSteps: [
        "Go to the Azure portal: https://portal.azure.com/",
        "Create a new Azure account or sign in with an existing one.",
        "Navigate to the 'Create a resource' section and search for 'Bing Search v7'.",
        "Select the 'Bing Search v7' resource and create a new subscription.",
        "Choose the pricing tier that suits your needs (free tier available).",
        "Obtain the API key for your Bing Web Search subscription.",
      ],
    },
    serplySearch: {
      info: "You can get a free API key from Serply.io.",
      apiKey: "API Key",
      apiKeyPlaceholder: "Serply API Key",
    },
    searXNG: {
      apiUrl: "SearXNG API base URL",
      apiUrlPlaceholder: "SearXNG API Key",
    },
  },

  sqlAgent: {
    title: "SQL Agent",
    description:
      "Enable your agent to be able to leverage SQL to answer your questions by connecting to various SQL database providers.",
    yourDatabaseConnections: "Your database connections",
    newSQLConnection: "New SQL connection",
  },

  newSQLConnection: {
    title: "New SQL Connection",
    description:
      "Add the connection information for your database below and it will be available for future SQL agent calls.",
    warning: {
      title: "WARNING:",
      message:
        "The SQL agent has been instructed to only perform non-modifying queries. This does not prevent a hallucination from still deleting data. Only connect with a user who has READ_ONLY permissions.",
    },
    selectEngine: "Select your SQL engine",
    connectionName: "Connection name",
    connectionNamePlaceholder: "a unique name to identify this SQL connection",
    databaseUser: "Database user",
    databaseUserPlaceholder: "root",
    databaseUserPassword: "Database user password",
    databaseUserPasswordPlaceholder: "password123",
    serverEndpoint: "Server endpoint",
    serverEndpointPlaceholder: "the hostname or endpoint for your database",
    port: "Port",
    portPlaceholder: "3306",
    database: "Database",
    databasePlaceholder: "the database the agent will interact with",
    connectionStringMessage: "Please fill out all the fields above.",
    cancelButton: "Cancel",
    saveButton: "Save connection",
  },

  // Workspace Chats
  recorded: {
    title: "Workspace Chats",
    description:
      "These are all the recorded chats and messages that have been sent by users ordered by their creation date.",
    export: "Export",
    clear: "Clear Chats",
    table: {
      id: "ID",
      by: "Sent By",
      workspace: "Workspace",
      prompt: "Prompt",
      response: "Response",
      at: "Sent At",
    },
    exportSuccess: "Chats exported successfully as {{name}}.",
    exportError: "Failed to export chats.",
    clearSuccess: "Cleared all chats.",
    clearConfirmation:
      "Are you sure you want to clear all chats? This action is irreversible.",
    previous: "Previous Page",
    next: "Next Page",
  },

  // Appearance
  appearance: {
    title: "Appearance",
    description: "Customize the appearance settings of your platform.",
    logo: {
      title: "Customize Logo",
      description: "Upload your custom logo to make your chatbot yours.",
      add: "Add a custom logo",
      recommended: "Recommended size: 800 x 200",
      remove: "Remove",
      replace: "Replace",
    },
    message: {
      title: "Customize Messages",
      description: "Customize the automatic messages displayed to your users.",
      new: "New",
      system: "system",
      user: "user",
      message: "message",
      assistant: "TeamplGPT Chat Assistant",
      "double-click": "Double click to edit...",
      save: "Save Messages",
    },
    icons: {
      title: "Custom Footer Icons",
      description:
        "Customize the footer icons displayed on the bottom of the sidebar.",
      icon: "Icon",
      link: "Link",
    },
  },

  // API Keys
  api: {
    title: "API Keys",
    description:
      "API keys allow the holder to programmatically access and manage this TeamplGPT instance.",
    link: "Read the API documentation",
    generate: "Generate New API Key",
    table: {
      key: "API Key",
      by: "Created By",
      created: "Created",
    },
  },

  llm: {
    title: "LLM Preference",
    description:
      "These are the credentials and settings for your preferred LLM chat & embedding provider. Its important these keys are current and correct or else TeamplGPT will not function properly.",
    provider: "LLM Provider",
    searchPlaceholder: "Search available LLM providers",
    noneSelected: "None selected",
    selectLLM: "You need to select an LLM",
    saving: "Saving...",
    saveChanges: "Save changes",
    saveSuccess: "LLM preferences saved successfully.",
    saveError: "Failed to save LLM settings: {{error}}",
    providers: {
      defaultName: "System default",
      defaultDescription: "Use the system LLM preference for this workspace.",
      apiKeyLabel: "{{provider}} API Key",
      apiKeyPlaceholder: "{{provider}} API Key",
      modelLabel: "Chat Model Selection",
      openai: "The standard option for most non-commercial use.",
      azure: "The enterprise option of OpenAI hosted on Azure services.",
      anthropic: "A friendly AI Assistant hosted by Anthropic.",
      gemini: "Google's largest and most capable AI model",
      huggingface:
        "Access 150,000+ open-source LLMs and the world's AI community",
      ollama: "Run LLMs locally on your own machine.",
      lmstudio:
        "Discover, download, and run thousands of cutting edge LLMs in a few clicks.",
      localai: "Run LLMs locally on your own machine.",
      togetherai: "Run open source models from Together AI.",
      mistral: "Run open source models from Mistral AI.",
      perplexity:
        "Run powerful and internet-connected models hosted by Perplexity AI.",
      openrouter: "A unified interface for LLMs.",
      groq: "The fastest LLM inferencing available for real-time AI applications.",
      koboldcpp: "Run local LLMs using koboldcpp.",
      textgenwebui: "Run local LLMs using Oobabooga's Text Generation Web UI.",
      cohere: "Run Cohere's powerful Command models.",
      litellm: "Run LiteLLM's OpenAI compatible proxy for various LLMs.",
      genericopenai:
        "Connect to any OpenAi-compatible service via a custom configuration",
      native:
        "Use a downloaded custom Llama model for chatting on this TeamplGPT instance.",
      safetyLabel: "Safety Setting",
      safety: {
        none: "None",
        blockFew: "Block few",
        blockSome: "Block some (default)",
        blockMost: "Block most",
      },
      baseUrl: "Base URL",
      tokenContextWindow: "Token context window",
      loadingModels: "-- loading available models --",
      waitingForUrl: "-- waiting for URL --",
      waitingForAPI: "-- waiting for API --",
      apiKey: "API Key",
      loadedModels: "Your loaded models",
    },
  },

  azure: {
    serviceEndpoint: "Azure Service Endpoint",
    serviceEndpointPlaceholder: "https://my-azure.openai.azure.com",
    chatDeploymentName: "Chat Deployment Name",
    chatDeploymentNamePlaceholder: "Azure OpenAI chat model deployment name",
    chatModelTokenLimit: "Chat Model Token Limit",
    embeddingDeploymentName: "Embedding Deployment Name",
    embeddingDeploymentNamePlaceholder:
      "Azure OpenAI embedding model deployment name",
    apiKeyLabel: "API Key",
    apiKeyPlaceholder: "Azure OpenAI API Key",
  },

  huggingface: {
    inferenceEndpoint: "HuggingFace Inference Endpoint",
    inferenceEndpointPlaceholder: "https://example.endpoints.huggingface.cloud",
    accessToken: "HuggingFace Access Token",
    accessTokenPlaceholder: "HuggingFace Access Token",
    tokenLimit: "Model Token Limit",
  },

  genericOpenAi: {
    baseUrl: "Base URL",
    baseUrlPlaceholder: "eg: https://proxy.openai.com",
    chatModelName: "Chat Model Name",
    chatModelNamePlaceholder: "Model id used for chat requests",
    tokenContextWindow: "Token context window",
    tokenContextWindowPlaceholder: "Content window limit (eg: 4096)",
    maxTokens: "Max Tokens",
    maxTokensPlaceholder: "Max tokens per request (eg: 1024)",
  },

  ollama: {
    maxTokens: "Max Tokens",
    maxTokensDescription: "Maximum number of tokens for context and response.",
    hideManualInput: "Hide Manual Endpoint Input",
    showManualInput: "Show Manual Endpoint Input",
    baseUrl: "Ollama Base URL",
    baseUrlDescription: "Enter the URL where Ollama is running.",
    autoDetect: "Auto-Detect",
    loadingModels: "--loading available models--",
    enterUrlFirst: "Enter Ollama URL first",
    model: "Ollama Model",
    modelDescription:
      "Select the Ollama model you want to use. Models will load after entering a valid Ollama URL.",
    loadedModels: "Your loaded models",
    maxChunkLength: "Max Embedding Chunk Length",
    maxChunkLengthDescription: "Maximum length of text chunks for embedding.",
  },

  lmstudio: {
    alertMessage:
      "LMStudio as your LLM requires you to set an embedding service to use.",
    manageEmbedding: "Manage embedding →",
    maxTokens: "Max Tokens",
    maxTokensDescription: "Maximum number of tokens for context and response.",
    hideManualInput: "Hide Manual Endpoint Input",
    showManualInput: "Show Manual Endpoint Input",
    baseUrl: "LM Studio Base URL",
    baseUrlDescription: "Enter the URL where LM Studio is running.",
    autoDetect: "Auto-Detect",
    loadingModels: "--loading available models--",
    enterUrlFirst: "Enter LM Studio URL first",
    model: "LM Studio Model",
    modelDescription:
      "Select the LM Studio model you want to use. Models will load after entering a valid LM Studio URL.",
    loadedModels: "Your loaded models",
    maxChunkLength: "Max Embedding Chunk Length",
    maxChunkLengthDescription: "Maximum length of text chunks for embedding.",
  },

  localai: {
    alertMessage:
      "LocalAI as your LLM requires you to set an embedding service to use.",
    manageEmbedding: "Manage embedding →",
    baseUrl: "Local AI Base URL",
    tokenContextWindow: "Token context window",
    apiKey: "Local AI API Key",
    modelSelection: "Chat Model Selection",
    loadingModels: "-- loading available models --",
    waitingForUrl: "-- waiting for URL --",
    loadedModels: "Your loaded models",
    optional: "optional",
  },

  textgenwebui: {
    baseUrl: "Base URL",
    tokenContextWindow: "Token context window",
    tokenContextWindowPlaceholder: "Content window limit (eg: 4096)",
    apiKeyOptional: "API Key (Optional)",
    apiKeyPlaceholder: "TextGen Web UI API Key",
  },

  nativellm: {
    experimentalWarning:
      "Using a locally hosted LLM is experimental. Use with caution.",
    modelSelection: "Model Selection",
    waitingForModels: "-- waiting for models --",
    loadedModels: "Your loaded models",
    tokenContextWindow: "Token context window",
  },

  newApiKeyModal: {
    title: "Create new API key",
    error: "Error: {{error}}",
    description:
      "Once created the API key can be used to programmatically access and configure this TeamplGPT instance.",
    readDocumentation: "Read the API documentation",
    cancel: "Cancel",
    createApiKey: "Create API key",
    copyApiKey: "Copy API key",
    copiedApiKey: "Copied API key",
  },

  supportEmail: {
    title: "Support Email",
    description:
      "Set the support email address that shows up in the user menu while logged into this instance.",
    updateFailed: "Failed to update support email: {{error}}",
    updateSuccess: "Successfully updated support email.",
    clear: "Clear",
    save: "Save",
  },

  languagePreference: {
    title: "Display Language",
    description:
      "Select the preferred language to render TeamplGPT's UI in, when applicable.",
  },

  customAppName: {
    title: "Custom App Name",
    description: "Set a custom app name that is displayed on the login page.",
    updateFailed: "Failed to update custom app name: {{error}}",
    updateSuccess: "Successfully updated custom app name.",
    clear: "Clear",
    save: "Save",
  },

  speechToText: {
    title: "Speech-to-text Preference",
    description:
      "Here you can specify what kind of text-to-speech and speech-to-text providers you would want to use in your TeamplGPT experience. By default, we use the browser's built in support for these services, but you may want to use others.",
    provider: "Provider",
    searchPlaceholder: "Search speech to text providers",
    saveChanges: "Save changes",
    saving: "Saving...",
    saveSuccess: "Speech-to-text preferences saved successfully.",
    saveError: "Failed to save preferences: {{error}}",
    providers: {
      native: {
        name: "System native",
        description: "Uses your browser's built in STT service if supported.",
        noConfiguration: "There is no configuration needed for this provider.",
      },
    },
  },

  textToSpeech: {
    title: "Text-to-speech Preference",
    description:
      "Here you can specify what kind of text-to-speech providers you would want to use in your TeamplGPT experience. By default, we use the browser's built in support for these services, but you may want to use others.",
    voiceModelLabel: "Voice Model",
    provider: "Provider",
    searchPlaceholder: "Search text to speech providers",
    saveChanges: "Save changes",
    saving: "Saving...",
    saveSuccess: "Text-to-speech preferences saved successfully.",
    saveError: "Failed to save preferences: {{error}}",
    providers: {
      native: {
        name: "System native",
        description: "Uses your browser's built in TTS service if supported.",
        noConfiguration: "There is no configuration needed for this provider.",
      },
      openai: {
        name: "OpenAI",
        description: "Use OpenAI's text to speech voices.",
        apiKeyLabel: "API Key",
        apiKeyPlaceholder: "OpenAI API Key",
        whisperModelLabel: "Whisper Model",
        whisperModel: "Whisper Large",
      },
      elevenlabs: {
        name: "ElevenLabs",
        description: "Use ElevenLabs's text to speech voices and technology.",
      },
    },
  },

  transcription: {
    title: "Transcription Model Preference",
    description:
      "These are the credentials and settings for your preferred transcription model provider. Its important these keys are current and correct or else media files and audio will not transcribe.",
    provider: "Transcription Provider",
    "warn-start":
      "Using the local whisper model on machines with limited RAM or CPU can stall TeamplGPT when processing media files.",
    "warn-recommend":
      "We recommend at least 2GB of RAM and upload files <10Mb.",
    "warn-end":
      "The built-in model will automatically download on the first use.",
    searchPlaceholder: "Search audio transcription providers",
    saveChanges: "Save changes",
    saving: "Saving...",
    saveSuccess: "Transcription preferences saved successfully.",
    saveError: "Failed to save preferences: {{error}}",
    providers: {
      openai: {
        name: "OpenAI",
        description:
          "Leverage the OpenAI Whisper-large model using your API key.",
      },
      local: {
        name: "TeamplGPT Built-In",
        description: "Run a built-in whisper model on this instance privately.",
      },
    },
  },

  embedding: {
    title: "Embedding Preference",
    "desc-start":
      "When using an LLM that does not natively support an embedding engine - you may need to additionally specify credentials to for embedding text.",
    "desc-end":
      "Embedding is the process of turning text into vectors. These credentials are required to turn your files and prompts into a format which TeamplGPT can use to process.",
    provider: {
      title: "Embedding Provider",
      description:
        "There is no set up required when using TeamplGPT's native embedding engine.",
    },
    searchPlaceholder: "Search all embedding providers",
    saveChanges: "Save changes",
    saving: "Saving...",
    saveSuccess: "Embedding preferences saved successfully.",
    saveError: "Failed to save preferences: {{error}}",
    changeWarning:
      "Switching the embedding model will break previously embedded documents from working during chat. They will need to un-embed from every workspace and fully removed and re-uploaded so they can be embed by the new embedding model.",
    providers: {
      native: {
        name: "TeamplGPT Embedder",
        description:
          "Use the built-in embedding provider for TeamplGPT. Zero setup!",
      },
      openai: {
        name: "OpenAI",
        description: "The standard option for most non-commercial use.",
        apiKeyLabel: "API Key",
        apiKeyPlaceholder: "OpenAI API Key",
        modelPrefLabel: "Model Preference",
        models: {
          available: "Available embedding models",
        },
      },
      azure: {
        name: "Azure OpenAI",
        description:
          "The enterprise option of OpenAI hosted on Azure services.",
      },
      localai: {
        name: "Local AI",
        description: "Run embedding models locally on your own machine.",
      },
      ollama: {
        name: "Ollama",
        description: "Run embedding models locally on your own machine.",
      },
      lmstudio: {
        name: "LM Studio",
        description:
          "Discover, download, and run thousands of cutting edge LLMs in a few clicks.",
      },
      cohere: {
        name: "Cohere",
        description: "Run powerful embedding models from Cohere.",
        apiKeyLabel: "API Key",
        apiKeyPlaceholder: "Cohere API Key",
        modelPrefLabel: "Model Preference",
        models: {
          available: "Available embedding models",
        },
      },
      voyageai: {
        name: "Voyage AI",
        description: "Run powerful embedding models from Voyage AI.",
        apiKeyLabel: "API Key",
        apiKeyPlaceholder: "Voyage AI API Key",
        modelPrefLabel: "Model Preference",
        models: {
          available: "Available embedding models",
        },
      },
      litellm: {
        name: "LiteLLM",
        description: "Run powerful embedding models from LiteLLM.",
        baseUrl: "Base URL",
        maxChunkLengthLabel: "Max embedding chunk length",
        apiKeyLabel: "API Key",
        optional: "optional",
        modelSelection: "Embedding Model Selection",
        loadingModels: "-- loading available models --",
        waitingForUrl: "-- waiting for URL --",
        loadedModels: "Your loaded models",
        tooltipText:
          "Be sure to select a valid embedding model. Chat models are not embedding models. See",
        tooltipLinkText: "this page",
        tooltipEndText: "for more information.",
      },
      genericOpenai: {
        name: "Generic OpenAI",
        description:
          "Run embedding models from any OpenAI compatible API service.",
        baseUrl: "Base URL",
        model: "Embedding Model",
        maxChunkLength: "Max embedding chunk length",
        apiKeyLabel: "API Key",
        optional: "optional",
      },
    },
  },

  text: {
    title: "Text splitting & Chunking Preferences",
    "desc-start":
      "Sometimes, you may want to change the default way that new documents are split and chunked before being inserted into your vector database.",
    "desc-end":
      "You should only modify this setting if you understand how text splitting works and it's side effects.",
    "warn-start": "Changes here will only apply to",
    "warn-center": "newly embedded documents",
    "warn-end": ", not existing documents.",
    size: {
      title: "Text Chunk Size",
      description:
        "This is the maximum length of characters that can be present in a single vector.",
      recommend: "Embed model maximum length is",
    },

    overlap: {
      title: "Text Chunk Overlap",
      description:
        "This is the maximum overlap of characters that occurs during chunking between two adjacent text chunks.",
    },
  },

  // Vector Database
  vector: {
    title: "Vector Database",
    description:
      "These are the credentials and settings for how your TeamplGPT instance will function. It's important these keys are current and correct.",
    saveSuccess: "Vector database settings saved successfully.",
    saveError: "Failed to save vector database settings: {{error}}",
    provider: {
      title: "Vector Database Provider",
      description: "There is no configuration needed for LanceDB.",
    },
    searchPlaceholder: "Search all vector database providers",
    saveChanges: "Save changes",
    changeWarning:
      "Switching the vector database will ignore previously embedded documents and future similarity search results. They will need to be re-added to each workspace.",
    providers: {
      lancedb: {
        description:
          "100% local vector DB that runs on the same instance as TeamplGPT.",
      },
      chroma: {
        description:
          "Open source vector database you can host yourself or on the cloud.",
        endpointLabel: "Chroma Endpoint",
        apiHeaderLabel: "API Header",
        apiKeyLabel: "API Key",
      },
      pinecone: {
        description:
          "100% cloud-based vector database for enterprise use cases.",
        apiKeyLabel: "Pinecone DB API Key",
        indexNameLabel: "Pinecone Index Name",
      },
      zilliz: {
        description:
          "Cloud hosted vector database built for enterprise with SOC 2 compliance.",
        endpointLabel: "Cluster Endpoint",
        apiTokenLabel: "API Token",
      },
      qdrant: {
        description: "Open source local and distributed cloud vector database.",
        endpointLabel: "QDrant API Endpoint",
        apiKeyLabel: "API Key",
      },
      weaviate: {
        description:
          "Open source local and cloud hosted multi-modal vector database.",
        endpointLabel: "Weaviate Endpoint",
        apiKeyLabel: "API Key",
      },
      milvus: {
        description: "Open-source, highly scalable, and blazing fast.",
        addressLabel: "Milvus DB Address",
        usernameLabel: "Milvus Username",
        passwordLabel: "Milvus Password",
      },
      astra: {
        description: "Vector Search for Real-world GenAI.",
        endpointLabel: "Astra DB Endpoint",
        endpointPlaceholder: "Astra DB API endpoint",
        tokenLabel: "Astra DB Application Token",
      },
    },
  },

  embedModal: {
    title: "Create new embed for workspace",
    maxChatsPerDay: "Max chats per day",
    maxChatsPerDayHint:
      "Limit the amount of chats this embedded chat can process in a 24 hour period. Zero is unlimited.",
    maxChatsPerSession: "Max chats per session",
    maxChatsPerSessionHint:
      "Limit the amount of chats a session user can send with this embed in a 24 hour period. Zero is unlimited.",
    allowModelOverride: "Enable dynamic model use",
    allowModelOverrideHint:
      "Allow setting of the preferred LLM model to override the workspace default.",
    allowTemperatureOverride: "Enable dynamic LLM temperature",
    allowTemperatureOverrideHint:
      "Allow setting of the LLM temperature to override the workspace default.",
    allowPromptOverride: "Enable Prompt Override",
    allowPromptOverrideHint:
      "Allow setting of the system prompt to override the workspace default.",
    workspace: "Workspace",
    workspaceHint:
      "This is the workspace your chat window will be based on. All defaults will be inherited from the workspace unless overridden by this config.",
    chatMode: "Allowed chat method",
    chatModeHint:
      "Set how your chatbot should operate. Query means it will only respond if a document helps answer the query.\nChat opens the chat to even general questions and can answer totally unrelated queries to your workspace.",
    chatModeChat: "Chat: Respond to all questions regardless of context",
    chatModeQuery:
      "Query: Only respond to chats related to documents in workspace",
    permittedDomains: "Restrict requests from domains",
    permittedDomainsHint:
      "This filter will block any requests that come from a domain other than the list below.\nLeaving this empty means anyone can use your embed on any site.",
    afterCreating:
      "After creating an embed you will be provided a link that you can publish on your website with a simple",
    tag: "tag.",
    error: "Error: {{error}}",
    createEmbed: "Create embed",
  },

  embedRow: {
    confirmSuspend:
      "Are you sure you want to disable this embed?\nOnce disabled the embed will no longer respond to any chat requests.",
    confirmDelete:
      "Are you sure you want to delete this embed?\nOnce deleted this embed will no longer respond to chats or be active.\n\nThis action is irreversible.",
    disabled: "Embed has been disabled.",
    enabled: "Embed is active.",
    deleted: "Embed deleted from system.",
    showCode: "Show Code",
    disable: "Disable",
    enable: "Enable",
    delete: "Delete",
  },

  // Embeddable Chat Widgets
  embeddable: {
    title: "Embeddable Chat Widgets",
    description:
      "Embeddable chat widgets are public facing chat interfaces that are tied to a single workspace. These allow you to build workspaces that then you can publish to the world.",
    create: "Create embed",
    table: {
      workspace: "Workspace",
      chats: "Sent Chats",
      Active: "Active Domains",
    },
  },

  "embed-chats": {
    title: "Embed Chats",
    description:
      "These are all the recorded chats and messages from any embed that you have published.",
    table: {
      embed: "Embed",
      sender: "Sender",
      message: "Message",
      response: "Response",
      at: "Sent At",
    },
  },

  multi: {
    title: "Multi-User Mode",
    description:
      "Set up your instance to support your team by activating Multi-User Mode.",
    enable: {
      "is-enable": "Multi-User Mode is Enabled",
      enable: "Enable Multi-User Mode",
      description:
        "By default, you will be the only admin. As an admin you will need to create accounts for all new users or admins. Do not lose your password as only an Admin user can reset passwords.",
      username: "Admin account username",
      password: "Admin account password",
    },
    password: {
      title: "Password Protection",
      description:
        "Protect your TeamplGPT instance with a password. If you forget this there is no recovery method so ensure you save this password.",
    },
    instance: {
      title: "Password Protect Instance",
      description:
        "By default, you will be the only admin. As an admin you will need to create accounts for all new users or admins. Do not lose your password as only an Admin user can reset passwords.",
      password: "Instance password",
    },
  },

  // Event Logs
  event: {
    title: "Event Logs",
    description:
      "View all actions and events happening on this instance for monitoring.",
    clear: "Clear Event Logs",
    confirmClear:
      "Are you sure you want to clear all event logs? This action is irreversible.",
    clearSuccess: "Event logs cleared successfully.",
    clearError: "Failed to clear logs",
    table: {
      type: "Event Type",
      user: "User",
      occurred: "Occurred At",
    },
  },

  // Privacy & Data-Handling
  privacy: {
    title: "Data Handling & Privacy",
    description:
      "We are committed to transparency and control when it comes to your personal data.",
    llm: "LLM Selection",
    embedding: "Embedding Preference",
    vector: "Vector Database",
    anonymous: "Anonymous Telemetry",
    telemetryDescription1:
      "All events do not record IP-address and contain no identifying content, settings, chats, or other non-usage based information. To see the list of event tags collected you can look on",
    telemetryDescription2:
      "As an open-source project we respect your right to privacy. We are dedicated to building the best solution for integrating AI and documents privately and securely. If you do decide to turn off telemetry all we ask is to consider sending us feedback and thoughts so that we can continue to improve AnythingLLM for you.",
    reconfigure:
      "These settings can be reconfigured at any time in the settings.",
    telemetryStatus: {
      enabled: "Anonymous Telemetry has been enabled.",
      disabled: "Anonymous Telemetry has been disabled.",
    },
  },
  llmProviders: {
    openai: {
      name: "OpenAI",
      description: [
        "Your chats will not be used for training",
        "Your prompts and document text used in response creation are visible to OpenAI",
      ],
    },
    azure: {
      name: "Azure OpenAI",
      description: [
        "Your chats will not be used for training",
        "Your text and embedding text are not visible to OpenAI or Microsoft",
      ],
    },
    anthropic: {
      name: "Anthropic",
      description: [
        "Your chats will not be used for training",
        "Your prompts and document text used in response creation are visible to Anthropic",
      ],
    },
    gemini: {
      name: "Google Gemini",
      description: [
        "Your chats are de-identified and used in training",
        "Your prompts and document text used in response creation are visible to Google",
      ],
    },
    lmstudio: {
      name: "LMStudio",
      description: [
        "Your model and chats are only accessible on the server running LMStudio",
      ],
    },
    localai: {
      name: "LocalAI",
      description: [
        "Your model and chats are only accessible on the server running LocalAI",
      ],
    },
    ollama: {
      name: "Ollama",
      description: [
        "Your model and chats are only accessible on the machine running Ollama models",
      ],
    },
    native: {
      name: "Custom Llama Model",
      description: [
        "Your model and chats are only accessible on this AnythingLLM instance",
      ],
    },
    togetherai: {
      name: "TogetherAI",
      description: [
        "Your chats will not be used for training",
        "Your prompts and document text used in response creation are visible to TogetherAI",
      ],
    },
    mistral: {
      name: "Mistral",
      description: [
        "Your prompts and document text used in response creation are visible to Mistral",
      ],
    },
    huggingface: {
      name: "HuggingFace",
      description: [
        "Your prompts and document text used in response are sent to your HuggingFace managed endpoint",
      ],
    },
    perplexity: {
      name: "Perplexity AI",
      description: [
        "Your chats will not be used for training",
        "Your prompts and document text used in response creation are visible to Perplexity AI",
      ],
    },
    openrouter: {
      name: "OpenRouter",
      description: [
        "Your chats will not be used for training",
        "Your prompts and document text used in response creation are visible to OpenRouter",
      ],
    },
    groq: {
      name: "Groq",
      description: [
        "Your chats will not be used for training",
        "Your prompts and document text used in response creation are visible to Groq",
      ],
    },
    koboldcpp: {
      name: "KoboldCPP",
      description: [
        "Your model and chats are only accessible on the server running KoboldCPP",
      ],
    },
    textgenwebui: {
      name: "Oobabooga Web UI",
      description: [
        "Your model and chats are only accessible on the server running the Oobabooga Text Generation Web UI",
      ],
    },
    "generic-openai": {
      name: "Generic OpenAI compatible service",
      description: [
        "Data is shared according to the terms of service applicable with your generic endpoint provider.",
      ],
    },
    cohere: {
      name: "Cohere",
      description: [
        "Data is shared according to the terms of service of cohere.com and your localities privacy laws.",
      ],
    },
    litellm: {
      name: "LiteLLM",
      description: [
        "Your model and chats are only accessible on the server running LiteLLM",
      ],
    },
  },
  embeddingEngines: {
    native: {
      name: "AnythingLLM Embedder",
      description: [
        "Your document text is embedded privately on this instance of AnythingLLM",
      ],
    },
    openai: {
      name: "OpenAI",
      description: [
        "Your document text is sent to OpenAI servers",
        "Your documents are not used for training",
      ],
    },
    azure: {
      name: "Azure OpenAI",
      description: [
        "Your document text is sent to your Microsoft Azure service",
        "Your documents are not used for training",
      ],
    },
    localai: {
      name: "LocalAI",
      description: [
        "Your document text is embedded privately on the server running LocalAI",
      ],
    },
    ollama: {
      name: "Ollama",
      description: [
        "Your document text is embedded privately on the server running Ollama",
      ],
    },
    lmstudio: {
      name: "LMStudio",
      description: [
        "Your document text is embedded privately on the server running LMStudio",
      ],
    },
    cohere: {
      name: "Cohere",
      description: [
        "Data is shared according to the terms of service of cohere.com and your localities privacy laws.",
      ],
    },
    voyageai: {
      name: "Voyage AI",
      description: [
        "Data sent to Voyage AI's servers is shared according to the terms of service of voyageai.com.",
      ],
    },
    litellm: {
      name: "LiteLLM",
      description: [
        "Your document text is only accessible on the server running LiteLLM and to the providers you configured in LiteLLM.",
      ],
    },
    "generic-openai": {
      name: "Generic OpenAI compatible service",
      description: [
        "Data is shared according to the terms of service applicable with your generic endpoint provider.",
      ],
    },
  },
  vectorDbs: {
    chroma: {
      name: "Chroma",
      description: [
        "Your vectors and document text are stored on your Chroma instance",
        "Access to your instance is managed by you",
      ],
    },
    pinecone: {
      name: "Pinecone",
      description: [
        "Your vectors and document text are stored on Pinecone's servers",
        "Access to your data is managed by Pinecone",
      ],
    },
    qdrant: {
      name: "QDrant",
      description: [
        "Your vectors and document text are stored on your Qdrant instance (cloud or self-hosted)",
      ],
    },
    weaviate: {
      name: "Weaviate",
      description: [
        "Your vectors and document text are stored on your Weaviate instance (cloud or self-hosted)",
      ],
    },
    milvus: {
      name: "Milvus",
      description: [
        "Your vectors and document text are stored on your Milvus instance (cloud or self-hosted)",
      ],
    },
    zilliz: {
      name: "Zilliz Cloud",
      description: [
        "Your vectors and document text are stored on your Zilliz cloud cluster.",
      ],
    },
    astra: {
      name: "AstraDB",
      description: [
        "Your vectors and document text are stored on your cloud AstraDB database.",
      ],
    },
    lancedb: {
      name: "LanceDB",
      description: [
        "Your vectors and document text are stored privately on this instance of AnythingLLM",
      ],
    },
  },

  experimentalFeatures: {
    title: "Experimental Features",
    selectFeature: "Select an experimental feature",
    on: "On",
    off: "Off",
    accepted: "Experimental Feature set enabled. Reloading the page.",
    tosTitle: "Terms of use for experimental features",
    tosIntro:
      "Experimental features of TeamplGPT are features that we are piloting and are opt-in. We proactively will condition or warn you on any potential concerns should any exist prior to approval of any feature.",
    tosRisksIntro:
      "Use of any feature on this page can result in, but not limited to, the following possibilities.",
    tosRisk1: "Loss of data.",
    tosRisk2: "Change in quality of results.",
    tosRisk3: "Increased storage.",
    tosRisk4: "Increased resource consumption.",
    tosRisk5:
      "Increased cost or use of any connected LLM or embedding provider.",
    tosRisk6: "Potential bugs or issues using TeamplGPT.",
    tosConditionsIntro:
      "Use of an experimental feature also comes with the following list of non-exhaustive conditions.",
    tosCondition1: "Feature may not exist in future updates.",
    tosCondition2: "The feature being used is not currently stable.",
    tosCondition3:
      "The feature may not be available in future versions, configurations, or subscriptions of TeamplGPT.",
    tosCondition4:
      "Your privacy settings will be honored with use of any beta feature.",
    tosCondition5: "These conditions may change in future updates.",
    tosConclusion1:
      "Access to any features requires approval of this modal. If you would like to read more you can refer to",
    tosConclusion2: "or email",
    reject: "Reject & Close",
    accept: "I understand",
  },
  features: {
    experimental_live_file_sync: {
      title: "Experimental Live File Sync",
    },
    another_feature: {
      title: "Another Feature",
    },
  },
};

export default TRANSLATIONS;
