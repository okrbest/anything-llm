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
      apiKey: "API Key",
      loadedModels: "Your loaded models",
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
    provider: {
      title: "Vector Database Provider",
      description: "There is no configuration needed for LanceDB.",
    },
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
    table: {
      type: "Event Type",
      user: "User",
      occurred: "Occurred At",
    },
  },

  // Privacy & Data-Handling
  privacy: {
    title: "Privacy & Data-Handling",
    description:
      "This is your configuration for how connected third party providers and TeamplGPT handle your data.",
    llm: "LLM Selection",
    embedding: "Embedding Preference",
    vector: "Vector Database",
    anonymous: "Anonymous Telemetry Enabled",
  },
};

export default TRANSLATIONS;
