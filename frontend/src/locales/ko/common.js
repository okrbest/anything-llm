const TRANSLATIONS = {
  common: {
    "workspaces-name": "워크스페이스 이름",
    error: "오류",
    success: "성공",
    user: "사용자",
    selection: "모델 선택",
    saving: "저장 중...",
    save: "변경사항 저장",
    previous: "이전 페이지",
    next: "다음 페이지",
    cancel: "취소",
    create: "생성",
    close: "닫기",
    download: "다운로드",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "인스턴스 설정",
    system: "시스템 환경설정",
    invites: "초대",
    users: "사용자",
    workspaces: "워크스페이스",
    "workspace-chats": "워크스페이스 채팅",
    agents: "에이전트 기능",
    appearance: "외관 설정",
    "api-keys": "API 키",
    llm: "LLM 환경설정",
    voice: "음성과 말하기 지원",
    transcription: "음성 인식 모델",
    embedder: "임베딩 환경설정",
    "text-splitting": "텍스트 분할과 분절",
    "vector-database": "벡터 데이터베이스",
    embeds: "채팅 임베드 위젯",
    "embed-chats": "채팅 임베드 기록",
    security: "보안",
    "event-logs": "이벤트 로그",
    privacy: "개인정보 보호와 데이터",
    experimental: "실험적 기능",
  },

  // Page Definitions
  login: {
    "multi-user": {
      welcome: " ",
      welcome2: "방문을 환영합니다",
      "placeholder-username": "사용자 이름",
      "placeholder-password": "비밀번호",
      login: "로그인",
      validating: "검증 중...",
      "forgot-pass": "비밀번호를 잊으셨나요",
      reset: "재설정",
    },
    "sign-in": {
      start: "로그인하여",
      end: "계정에 접속하세요.",
    },
  },

  recoveryCodes: {
    title: "복구 코드",
    description:
      "미래에 비밀번호를 재설정하려면 이 복구 코드가 필요합니다. 복구 코드를 다운로드하거나 복사하여 저장하십시오.",
    warning: "이 복구 코드는 한 번만 표시됩니다!",
    successMessage: "복구 코드가 클립보드에 복사되었습니다",
  },

  welcomeMessage: {
    part1:
      "TeamplGPT에 오신 것을 환영합니다! TeamplGPT는 OKR Best에서 만든 오픈 소스 AI 도구로, 다양한 정보를 학습시켜 질의응답과 대화를 할 수 있는 채팅 봇을 만들 수 있습니다. TeamplGPT는 BYOK(Bring-Your-Own-Keys) 소프트웨어로, 원하는 서비스를 사용하기 위한 비용 외에는 추가 요금이나 구독료가 없습니다.",
    part2:
      "TeamplGPT는 OpenAI, GPT-4, LangChain, PineconeDB, ChromaDB와 같은 강력한 AI 도구를 하나의 패키지로 간편하게 통합하여 생산성을 크게 향상시킬 수 있는 최적의 솔루션입니다.",
    part3:
      "TeamplGPT는 여러분의 컴퓨터에서 최소한의 자원을 사용하여 로컬 환경에서 완벽하게 실행될 수 있습니다. GPU가 필요하지 않으며, 클라우드와 온프레미스 설치도 지원합니다. AI 도구 생태계는 날마다 더 강력해지고 있습니다. TeamplGPT는 이러한 도구들을 쉽게 활용할 수 있게 해줍니다.",
    githubIssue: "Github에서 이슈 생성",
    user1: "어떻게 시작하나요?!",
    part4:
      "간단합니다. 모든 데이터는 '워크스페이스'라는 버킷으로 구성됩니다. 워크스페이스에는 문서, 이미지, PDF 등 다양한 파일을 올릴 수 있으며, 이러한 파일들은 대화에서 사용할 수 있도록 LLM이 이해할 수 있는 형태로 변환됩니다.\n\n언제든지 파일을 추가하거나 제거할 수 있습니다.",
    createWorkspace: "첫 번째 워크스페이스 생성",
    user2: "이건 AI 드롭박스 같은 건가요? 채팅은 어떤가요? 채팅 봇 아닌가요?",
    part5:
      "TeamplGPT는 단순한 드롭박스 이상의 기능을 제공합니다.\n\nTeamplGPT는 데이터를 활용해 대화하는 두 가지 방법을 제공합니다:\n\n **질의 모드**: 이 모드에서는 워크스페이스에 저장된 문서에서 데이터를 찾아 답변합니다. 워크스페이스에 더 많은 문서를 추가할수록 더 유용한 정보를 얻을 수 있습니다.\n\n**대화 모드**: 이 모드에서는 문서와 진행 중인 채팅 기록, 사전 훈련된 LLM의 지식 모두를 반영하여 답변합니다. 실시간으로 정보를 추가하거나 수정할 때 유용합니다.\n\n채팅 중간에도 이 두 모드 사이를 자유롭게 전환할 수 있습니다.",
    user3: "와, 이거 정말 놀라운데요. 빨리 사용해보고 싶어요!",
    part6: "즐거운 시간 되세요!",
    starOnGithub: "GitHub 스타 누르기",
    contact: "OKR Best에 문의",
  },

  sidebar: {
    home: "홈",
    newWorkspace: "새 워크스페이스",
    showSidebar: "사이드바 열기",
  },

  newWorkspaceModal: {
    title: "새 워크스페이스",
    workspaceName: "워크스페이스 이름",
    myWorkspace: "내 워크스페이스",
  },

  userButton: {
    account: "계정",
    support: "지원",
    signOut: "로그아웃",
  },

  accountModal: {
    title: "계정 수정",
    uploadError: "프로필 사진 업로드 실패: {{error}}",
    uploadSuccess: "프로필 사진이 업로드되었습니다.",
    removeError: "프로필 사진 제거 실패: {{error}}",
    updateSuccess: "프로필이 업데이트되었습니다.",
    updateError: "사용자 업데이트 실패: {{error}}",
    profilePictureAlt: "사용자 프로필 사진",
    profilePicture: "프로필 사진",
    removeProfilePicture: "프로필 사진 제거",
    username: "사용자 이름",
    usernamePlaceholder: "사용자 이름",
    newPassword: "새 비밀번호",
    newPasswordPlaceholder: "{{username}}의 새 비밀번호",
    preferredLanguage: "선호하는 언어",
    updateAccount: "계정 업데이트",
  },

  adminSystem: {
    title: "시스템 환경설정",
    description: "이 설정들은 인스턴스 전체의 설정과 구성입니다.",
    toastSuccess: "시스템 환경설정이 성공적으로 업데이트되었습니다.",
    limitMessagesTitle: "사용자당 일일 메시지 제한",
    limitMessagesDescription:
      "일반 사용자가 24시간 동안 쿼리 또는 채팅을 할 수 있는 횟수를 제한합니다. 이 기능을 활성화하면 사용자가 OpenAI 비용을 증가시키는 것을 방지합니다.",
    messageLimit: "일일 메시지 제한 수",
  },

  adminInvites: {
    title: "초대",
    description:
      "조직 내 사람들을 초대하고 가입할 수 있는 초대 링크를 생성하세요. 초대는 한 사용자가 한 번만 사용할 수 있습니다.",
    createInvite: "초대 링크 생성",
    status: "상태",
    acceptedBy: "수락자",
    createdBy: "생성자",
    created: "생성일",
  },

  newInviteModal: {
    title: "새 초대 생성",
    error: "오류: {{error}}",
    description:
      "새 초대 생성 후 초대 링크를 복사하여 새 사용자가 계정을 만들면 <strong>기본</strong> 역할로 생성됩니다. 그리고 선택한 워크스페이스에 자동으로 추가될 수 있습니다. ",
    autoAdd: "워크스페이스에 초대자 자동 추가",
    autoAddDescription:
      "사용자를 아래의 워크스페이스에 자동으로 추가하려면 선택하세요. 기본적으로 사용자는 아무 워크스페이스에도 접근할 수 없습니다. 초대 수락 후에 접근 가능한 워크스페이스를 할당할 수 있습니다.",
    createInvite: "초대 링크 생성",
    copyInvite: "초대 링크 복사",
    copied: "링크 복사됨",
  },

  newUserModal: {
    title: "새 계정 생성",
    username: "사용자 이름",
    usernamePlaceholder: "사용자 이름",
    password: "비밀번호",
    passwordPlaceholder: "비밀번호",
    error: "오류: {{error}}",
    info: "계정을 생성한 후, 이 자격 증명으로 로그인하여 워크스페이스를 사용할 수 있습니다.",
    acceptInvite: "초대 수락",
  },

  adminUsers: {
    title: "사용자",
    description:
      "이 인스턴스에 등록된 모든 사용자입니다. 계정을 삭제하는 즉시 이 인스턴스에 대한 접근 권한이 없어집니다.",
    addUser: "사용자 추가",
    username: "사용자 이름",
    role: "역할",
    dateAdded: "추가된 날짜",
  },

  roleHint: {
    permissions: "권한",
    default: [
      "관리자 또는 매니저가 추가한 워크스페이스에서만 채팅 할 수 있습니다.",
      "어떤 설정도 수정할 수 없습니다.",
    ],
    manager: [
      "모든 워크스페이스를 조회, 생성 및 삭제할 수 있으며, 워크스페이스 관련 설정을 수정할 수 있습니다.",
      "새 사용자를 초대하고 생성과 업데이트할 수 있습니다.",
      "LLM, vectorDB, 임베딩 또는 기타 연결 설정을 수정할 수 없습니다.",
    ],
    admin: [
      "최고 사용자 수준 권한입니다.",
      "시스템 설정 전체에 대한 모든 권한이 있습니다.",
    ],
  },

  editUser: {
    title: "{{username}} 수정",
    username: "사용자 이름",
    usernamePlaceholder: "사용자의 사용자 이름",
    password: "새 비밀번호",
    passwordPlaceholder: "{{username}}의 새 비밀번호",
    role: "역할",
    defaultRole: "일반 사용자",
    managerRole: "운영자",
    adminRole: "관리자",
    error: "오류: {{error}}",
    cancel: "취소",
    updateUser: "사용자 업데이트",
  },

  userRow: {
    suspendConfirm:
      "{{username}}를 정지하시겠습니까?\n정지하면 이 사용자는 로그아웃되고 관리자에 의해 정지가 해제될 때까지 TeamplGPT에 다시 로그인할 수 없습니다.",
    unsuspendConfirm:
      "{{username}}의 정지를 해제하시겠습니까?\n정지 해제 후 이 사용자는 TeamplGPT에 다시 로그인할 수 있습니다.",
    suspendApplied: "사용자가 정지되었습니다.",
    unsuspendApplied: "사용자의 정지가 해제되었습니다.",
    deleteConfirm:
      "{{username}}를 삭제하시겠습니까?\n삭제하면 이 사용자는 로그아웃되고 TeamplGPT를 사용할 수 없습니다.\n\n이 작업은 되돌릴 수 없습니다.",
    deleteSuccess: "사용자가 시스템에서 삭제되었습니다.",
    edit: "편집",
    suspend: "정지",
    unsuspend: "정지 해제",
    delete: "삭제",
  },

  userRole: {
    role: "역할",
    admin: "관리자",
    manager: "운영자",
    default: "일반 사용자",
  },

  addUserModal: {
    title: "사용자 추가",
    usernamePlaceholder: "사용자 이름",
    passwordPlaceholder: "초기 비밀번호",
    note: "사용자를 생성한 후 초기 화면에서 로그인할 수 있습니다.",
    addUser: "사용자 추가",
  },

  adminWorkspaces: {
    title: "시스템 워크스페이스",
    description:
      "시스템에 존재하는 모든 워크스페이스가 나열됩니다. 워크스페이스를 삭제하면 관련된 모든 채팅과 설정이 삭제됩니다.",
    newWorkspace: "새 워크스페이스",
    name: "이름",
    link: "링크",
    users: "사용자",
    createdOn: "생성 일자",
  },

  workspaceCreation: {
    title: "새 워크스페이스 만들기",
    nameLabel: "워크스페이스 이름",
    namePlaceholder: "내 워크스페이스",
    creationInfo:
      "이 워크스페이스를 만든 후에는 관리자만 볼 수 있습니다. 생성 후 사용자를 추가할 수 있습니다.",
    cancel: "취소",
    create: "워크스페이스 만들기",
    error: "오류: {{error}}",
  },

  workspaceAgentConfiguration: {
    configureAgentSkills: "에이전트 기술 구성",
    customizeSkills:
      "기본 에이전트의 기능을 맞춤 설정하고 특정 기술을 활성화하거나 비활성화하여 향상시킬 수 있습니다. 이러한 설정은 모든 워크스페이스에 적용됩니다.",
    updatingAgent: "에이전트 업데이트 중...",
    updateWorkspaceAgent: "워크스페이스 에이전트 업데이트",
    workspaceUpdated: "워크스페이스가 업데이트되었습니다!",
    updateError: "오류: {{message}}",
  },

  // Workspace Settings menu items
  "workspaces—settings": {
    general: "일반 설정",
    chat: "채팅 설정",
    vector: "벡터 데이터베이스",
    members: "멤버",
    agent: "에이전트 설정",
  },

  // General Appearance
  general: {
    vector: {
      title: "벡터 수",
      description: "벡터 데이터베이스에 있는 전체 벡터 수.",
    },
    names: {
      description: "워크스페이스의 표시 이름만 변경됩니다.",
    },
    message: {
      title: "추천 채팅 메시지",
      description: "워크스페이스 사용자에게 추천할 메시지를 맞춤 설정합니다.",
      add: "새 메시지 추가",
      save: "메시지 저장",
      heading: "나에게 설명해줘",
      body: "TeamplGPT의 장점",
    },
    pfp: {
      title: "어시스턴트 프로필 이미지",
      description:
        "이 워크스페이스의 어시스턴트 프로필 이미지를 맞춤 설정합니다.",
      image: "워크스페이스 이미지",
      remove: "워크스페이스 이미지 제거",
    },
    delete: {
      title: "워크스페이스 삭제",
      description:
        "이 워크스페이스와 모든 데이터를 삭제합니다. 이 작업은 모든 사용자에게 영향을 미칩니다.",
      delete: "워크스페이스 삭제",
      deleting: "워크스페이스 삭제 중...",
      "confirm-start": "전체",
      "confirm-end":
        "워크스페이스를 삭제하려고 합니다. 벡터 데이터베이스의 모든 벡터 임베딩이 제거됩니다.\n\n원본 소스 파일은 그대로 유지됩니다. 이 작업은 되돌릴 수 없습니다.",
    },
  },

  // Chat Settings
  chat: {
    llm: {
      title: "워크스페이스 LLM 공급자",
      description:
        "이 워크스페이스에서 사용할 LLM 공급자와 모델을 지정합니다. 기본값으로 시스템 LLM 공급자와 설정을 사용합니다.",
      search: "모든 LLM 공급자 검색",
    },
    model: {
      title: "워크스페이스 채팅 모델",
      description:
        "이 워크스페이스에서 사용할 특정 채팅 모델입니다. 비어 있으면 시스템 LLM 환경 설정을 사용합니다.",
      wait: "-- 모델 대기 중 --",
    },
    mode: {
      title: "채팅 모드",
      chat: {
        title: "채팅",
        "desc-start": "LLM의 일반 지식",
        and: "과",
        "desc-end": "문서 컨텍스트를 기반으로 답변을 제공합니다.",
      },
      query: {
        title: "쿼리",
        "desc-start": "문서 컨텍스트가 발견된 경우에만",
        only: "쿼리",
        "desc-end": "모드에서 답변을 제공합니다.",
      },
    },
    history: {
      title: "채팅 기록",
      "desc-start": "응답의 단기 기억에 포함될 이전 채팅 수입니다.",
      recommend: "추천: 20",
      "desc-end":
        "45개 이상은 메시지 크기에 따라 연속적인 채팅 오류를 초래할 수 있습니다.",
    },
    prompt: {
      title: "프롬프트",
      description:
        "이 워크스페이스에서 사용할 프롬프트입니다. AI가 적절하고 정확한 응답을 생성할 수 있도록 컨텍스트와 지침을 정의하세요.",
    },
    refusal: {
      title: "쿼리 모드 거부 응답",
      "desc-start": "쿼리",
      query: "모드",
      "desc-end":
        "에서 컨텍스트가 발견되지 않을 때 반환할 사용자 정의 거부 응답을 설정할 수 있습니다.",
    },
    temperature: {
      title: "LLM 창의성",
      "desc-start": "이 설정은 LLM 응답의 '창의성' 수준을 제어합니다.",
      "desc-end":
        "값이 높을수록 더 창의적인 응답을 제공합니다. 일부 모델에서는 너무 높게 설정하면 일관성 없는 응답이 생성될 수 있습니다.",
      hint: "대부분의 LLM은 유효한 값 범위가 있습니다. LLM 공급자에게 문의하세요.",
    },
  },

  // Vector Database
  "vector-workspace": {
    identifier: "벡터 데이터베이스 식별자",
    snippets: {
      title: "최대 컨텍스트 스니펫",
      description:
        "이 설정은 채팅 또는 쿼리당 LLM에 전송될 최대 컨텍스트 스니펫 수를 제어합니다.",
      recommend: "추천: 4",
    },
    doc: {
      title: "문서 유사도 임계값",
      description:
        "채팅과 관련된 것으로 간주되기 위해 소스가 가져야 하는 최소 유사도 점수입니다. 값이 높을수록 유사도가 높은 소스가 채팅 답변에 사용됩니다.",
      zero: "제한 없음",
      low: "낮음 (유사도 점수 ≥ .25)",
      medium: "중간 (유사도 점수 ≥ .50)",
      high: "높음 (유사도 점수 ≥ .75)",
    },
    reset: {
      reset: "벡터 데이터베이스 초기화",
      resetting: "벡터 지우는 중...",
      confirm:
        "이 워크스페이스의 벡터 데이터베이스를 초기화하려고 합니다. 현재 임베딩된 모든 벡터가 제거됩니다.\n\n원본 소스 파일은 그대로 유지됩니다. 이 작업은 되돌릴 수 없습니다.",
      error: "워크스페이스 벡터 데이터베이스를 초기화할 수 없습니다!",
      success: "워크스페이스 벡터 데이터베이스가 초기화되었습니다!",
    },
  },

  // Agent Configuration
  agent: {
    "performance-warning":
      "도구 호출을 명시적으로 지원하지 않는 LLM의 성능은 모델의 기능과 정확성에 크게 좌우됩니다. 일부 기능은 제한되거나 작동하지 않을 수 있습니다.",
    provider: {
      title: "워크스페이스 에이전트 LLM 공급자",
      description:
        "이 워크스페이스의 @agent 에이전트에 사용할 LLM 공급자와 모델을 지정합니다.",
    },
    mode: {
      chat: {
        title: "워크스페이스 에이전트 채팅 모델",
        description:
          "이 워크스페이스의 @agent 에이전트에 사용할 채팅 모델을 지정합니다.",
      },
      title: "워크스페이스 에이전트 모델",
      description:
        "이 워크스페이스의 @agent 에이전트에 사용할 LLM 모델을 지정합니다.",
      wait: "-- 모델을 기다리는 중 --",
    },
    skill: {
      title: "에이전트 기본 기술",
      description:
        "에이전트의 능력을 자연스럽게 향상시키기 위해 사전 구축된 기술을 사용하십시오. 이 설정은 모든 워크스페이스에 적용됩니다.",
      rag: {
        title: "RAG 및 장기 기억",
        description:
          "에이전트가 로컬 문서를 활용하여 질문에 답변하거나 장기 기억 검색을 위해 콘텐츠를 '기억'하도록 허용합니다.",
      },
      view: {
        title: "문서 보기 및 요약",
        description:
          "에이전트가 현재 임베드된 워크스페이스 파일의 콘텐츠를 나열하고 요약할 수 있도록 합니다.",
      },
      scrape: {
        title: "웹사이트 스크랩",
        description:
          "에이전트가 웹사이트를 방문하고 콘텐츠를 스크랩할 수 있도록 합니다.",
      },
      generate: {
        title: "차트 생성",
        description:
          "에이전트가 제공된 데이터나 채팅에서 다양한 유형의 차트를 생성할 수 있도록 합니다.",
      },
      save: {
        title: "브라우저에 파일 생성 및 저장",
        description:
          "에이전트가 파일을 생성하고 브라우저에서 다운로드할 수 있도록 저장할 수 있습니다.",
      },
      web: {
        title: "실시간 웹 검색 및 브라우징",
        "desc-start":
          "웹 검색(SERP) 공급자에 연결하여 에이전트가 웹을 검색하여 질문에 답할 수 있도록 합니다.",
        "desc-end":
          "에이전트 세션 중 웹 검색은 이 설정이 완료될 때까지 작동하지 않습니다.",
      },
    },
    "search-placeholder": "사용 가능한 LLM 공급자 검색",
    workspaceUpdated: "워크스페이스가 업데이트되었습니다!",
    updatingAgent: "에이전트 업데이트 중...",
    updateWorkspaceAgent: "워크스페이스 에이전트 업데이트",
    pleaseMakeSelection: "선택해 주세요",
    agentsNotWork:
      "유효한 선택이 이루어질 때까지 에이전트는 작동하지 않습니다.",
  },

  // Workspace Chats
  recorded: {
    title: "워크스페이스 채팅",
    description:
      "여기에는 사용자가 보낸 모든 채팅과 메시지가 생성일 순서대로 기록되어 있습니다.",
    export: "내보내기",
    clear: "채팅 삭제",
    table: {
      id: "ID",
      by: "보낸 사람",
      workspace: "워크스페이스",
      prompt: "프롬프트",
      response: "응답",
      at: "보낸 시간",
    },
    exportSuccess: "{{name}} 형식으로 채팅이 성공적으로 내보내졌습니다.",
    exportError: "채팅을 내보내지 못했습니다.",
    clearSuccess: "모든 채팅이 삭제되었습니다.",
    clearConfirmation:
      "정말로 모든 채팅을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.",
    previous: "이전 페이지",
    next: "다음 페이지",
  },

  // Appearance
  appearance: {
    title: "외관 설정",
    description: "플랫폼의 외관 설정을 맞춤 설정합니다.",
    logo: {
      title: "로고 맞춤 설정",
      description: "로고를 변경하여 챗봇을 맞춤형으로 변경할 수 있습니다.",
      add: "내 로고 추가",
      recommended: "권장 크기: 800 x 200",
      remove: "제거",
      replace: "교체",
    },
    message: {
      title: "메시지 맞춤 설정",
      description: "사용자에게 보여주는 자동 메시지를 설정합니다.",
      new: "새",
      system: "시스템",
      user: "사용자",
      message: "메시지",
      assistant: "TeamplGPT 채팅 어시스턴트",
      "double-click": "더블 클릭하여 편집...",
      save: "메시지 저장",
    },
    icons: {
      title: "푸터 아이콘 설정",
      description: "사이드바 하단에 표시되는 푸터 아이콘을 설정합니다.",
      icon: "아이콘",
      link: "링크",
    },
  },

  // API Keys
  api: {
    title: "API 키",
    description:
      "API 키를 사용하면 TeamplGPT 인스턴스에 프로그래밍 방식으로 액세스하고 관리할 수 있습니다.",
    link: "API 문서 읽기",
    generate: "새 API 키 생성",
    table: {
      key: "API 키",
      by: "생성자",
      created: "생성된 날짜",
    },
  },

  llm: {
    title: "LLM 환경 설정",
    description:
      "선호하는 LLM 채팅과 임베딩 공급자에 대한 자격 증명 설정입니다. 이 키가 올바르지 않으면 TeamplGPT가 제대로 작동하지 않습니다.",
    provider: "LLM 공급자",
    searchPlaceholder: "사용 가능한 LLM 공급자 검색",
    noneSelected: "선택되지 않음",
    selectLLM: "LLM을 선택해야 합니다",
    saving: "저장 중...",
    saveChanges: "변경 사항 저장",
    saveSuccess: "LLM 선호도가 성공적으로 저장되었습니다.",
    saveError: "LLM 설정을 저장하지 못했습니다: {{error}}",
    providers: {
      defaultName: "시스템 기본값",
      defaultDescription: "이 작업 공간에 시스템 기본 설정 LLM을 사용합니다.",
      apiKeyLabel: "{{provider}} API 키",
      apiKeyPlaceholder: "{{provider}} API 키",
      modelLabel: "채팅 모델 선택",
      openai: "대부분의 비상업적 사용을 위한 표준 옵션입니다.",
      azure: "Azure 서비스에서 호스팅되는 OpenAI의 엔터프라이즈 옵션입니다.",
      anthropic: "Anthropic에서 호스팅하는 친근한 AI 어시스턴트입니다.",
      gemini: "Google의 가장 크고 능력 있는 AI 모델입니다.",
      huggingface:
        "150,000개 이상의 오픈 소스 LLM과 전세계 AI 커뮤니티에 접근하십시오.",
      ollama: "자신의 머신에서 LLM을 로컬로 실행합니다.",
      lmstudio:
        "몇 번의 클릭만으로 수천 개의 최첨단 LLM을 발견, 다운로드 및 실행합니다.",
      localai: "자신의 머신에서 LLM을 로컬로 실행합니다.",
      togetherai: "Together AI의 오픈 소스 모델을 실행합니다.",
      mistral: "Mistral AI의 오픈 소스 모델을 실행합니다.",
      perplexity:
        "Perplexity AI에서 호스팅하는 강력하고 인터넷에 연결된 모델을 실행합니다.",
      openrouter: "LLM을 위한 통합 인터페이스입니다.",
      groq: "실시간 AI 응용 프로그램을 위한 가장 빠른 LLM 추론을 제공합니다.",
      koboldcpp: "koboldcpp를 사용하여 로컬 LLM을 실행합니다.",
      textgenwebui:
        "Oobabooga의 텍스트 생성 웹 UI를 사용하여 로컬 LLM을 실행합니다.",
      cohere: "Cohere의 강력한 Command 모델을 실행합니다.",
      litellm: "여러 LLM을 위한 LiteLLM의 OpenAI 호환 프록시를 실행합니다.",
      genericopenai: "맞춤 구성을 통해 OpenAi 호환 서비스를 연결합니다.",
      native:
        "TeamplGPT 인스턴스에서 채팅하기 위해 다운로드한 맞춤형 Llama 모델을 사용합니다.",
      safetyLabel: "안전 설정",
      safety: {
        none: "없음",
        blockFew: "조금 차단",
        blockSome: "약간 차단 (기본값)",
        blockMost: "대부분 차단",
      },
      baseUrl: "기본 URL",
      tokenContextWindow: "토큰 컨텍스트 창",
      loadingModels: "-- 사용 가능한 모델 로드 중 --",
      waitingForUrl: "-- URL 대기 중 --",
      waitingForAPI: "-- API 대기 중 --",
      apiKey: "API 키",
      loadedModels: "사용자 모델",
    },
  },

  azure: {
    serviceEndpoint: "Azure 서비스 엔드포인트",
    serviceEndpointPlaceholder: "https://my-azure.openai.azure.com",
    chatDeploymentName: "채팅 배포 이름",
    chatDeploymentNamePlaceholder: "Azure OpenAI 채팅 모델 배포 이름",
    chatModelTokenLimit: "채팅 모델 토큰 제한",
    embeddingDeploymentName: "임베딩 배포 이름",
    embeddingDeploymentNamePlaceholder: "Azure OpenAI 임베딩 모델 배포 이름",
  },

  huggingface: {
    inferenceEndpoint: "HuggingFace 추론 엔드포인트",
    inferenceEndpointPlaceholder: "https://example.endpoints.huggingface.cloud",
    accessToken: "HuggingFace 액세스 토큰",
    accessTokenPlaceholder: "HuggingFace 액세스 토큰",
    tokenLimit: "모델 토큰 제한",
  },

  genericOpenAi: {
    baseUrl: "기본 URL",
    baseUrlPlaceholder: "예: https://proxy.openai.com",
    chatModelName: "채팅 모델 이름",
    chatModelNamePlaceholder: "채팅 요청에 사용되는 모델 ID",
    tokenContextWindow: "토큰 컨텍스트 윈도우",
    tokenContextWindowPlaceholder: "컨텍스트 윈도우 한도 (예: 4096)",
    maxTokens: "최대 토큰 수",
    maxTokensPlaceholder: "요청당 최대 토큰 수 (예: 1024)",
  },

  ollama: {
    maxTokens: "최대 토큰 수",
    maxTokensDescription: "컨텍스트와 응답에 대한 최대 토큰 수입니다.",
    hideManualInput: "수동 엔드포인트 입력 숨기기",
    showManualInput: "수동 엔드포인트 입력 표시",
    baseUrl: "Ollama 기본 URL",
    baseUrlDescription: "Ollama가 실행 중인 URL을 입력하십시오.",
    autoDetect: "자동 감지",
    loadingModels: "--사용 가능한 모델 로딩 중--",
    enterUrlFirst: "먼저 Ollama URL을 입력하십시오",
    model: "Ollama 모델",
    modelDescription:
      "사용할 Ollama 모델을 선택하십시오. 유효한 Ollama URL을 입력한 후 모델이 로드됩니다.",
    loadedModels: "로드된 모델",
  },

  lmstudio: {
    alertMessage:
      "LMStudio를 LLM으로 사용하려면 사용할 임베딩 서비스를 설정해야 합니다.",
    manageEmbedding: "임베딩 관리 →",
    maxTokens: "최대 토큰 수",
    maxTokensDescription: "컨텍스트와 응답에 대한 최대 토큰 수입니다.",
    hideManualInput: "수동 엔드포인트 입력 숨기기",
    showManualInput: "수동 엔드포인트 입력 표시",
    baseUrl: "LM Studio 기본 URL",
    baseUrlDescription: "LM Studio가 실행 중인 URL을 입력하십시오.",
    autoDetect: "자동 감지",
    loadingModels: "--사용 가능한 모델 로딩 중--",
    enterUrlFirst: "먼저 LM Studio URL을 입력하십시오",
    model: "LM Studio 모델",
    modelDescription:
      "사용할 LM Studio 모델을 선택하십시오. 유효한 LM Studio URL을 입력한 후 모델이 로드됩니다.",
    loadedModels: "로드된 모델",
  },

  localai: {
    alertMessage:
      "LocalAI를 LLM으로 사용하려면 사용할 임베딩 서비스를 설정해야 합니다.",
    manageEmbedding: "임베딩 관리 →",
    baseUrl: "Local AI 기본 URL",
    tokenContextWindow: "토큰 컨텍스트 윈도우",
    apiKey: "Local AI API 키",
    modelSelection: "채팅 모델 선택",
    loadingModels: "-- 사용 가능한 모델 로딩 중 --",
    waitingForUrl: "-- URL 대기 중 --",
    loadedModels: "로드된 모델",
    optional: "선택 사항",
  },

  textgenwebui: {
    baseUrl: "기본 URL",
    tokenContextWindow: "토큰 컨텍스트 윈도우",
    tokenContextWindowPlaceholder: "컨텐츠 윈도우 한도 (예: 4096)",
    apiKeyOptional: "API 키 (선택 사항)",
    apiKeyPlaceholder: "TextGen Web UI API 키",
  },

  nativellm: {
    experimentalWarning:
      "로컬에서 호스팅된 LLM을 사용하는 것은 실험적입니다. 주의해서 사용하십시오.",
    modelSelection: "모델 선택",
    waitingForModels: "-- 모델을 기다리는 중 --",
    loadedModels: "로드된 모델",
    tokenContextWindow: "토큰 컨텍스트 윈도우",
  },

  newApiKeyModal: {
    title: "새 API 키 생성",
    error: "오류: {{error}}",
    description:
      "API 키를 생성하면 이 TeamplGPT 인스턴스에 프로그래밍 방식으로 액세스하고 조작하는 데 사용할 수 있습니다.",
    readDocumentation: "API 문서 읽기",
    cancel: "취소",
    createApiKey: "API 키 생성",
    copyApiKey: "API 키 복사",
    copiedApiKey: "API 키가 복사되었습니다",
  },

  supportEmail: {
    title: "지원 이메일",
    description:
      "이 인스턴스에 로그인한 동안 사용자 메뉴에 표시될 지원 이메일 주소를 설정하세요.",
    updateFailed: "지원 이메일을 업데이트하지 못했습니다: {{error}}",
    updateSuccess: "지원 이메일이 성공적으로 업데이트되었습니다.",
    clear: "지우기",
    save: "저장",
  },

  languagePreference: {
    title: "표시 언어",
    description: "TeamplGPT의 UI를 렌더링할 때 사용할 언어를 선택하세요.",
  },

  customAppName: {
    title: "앱 이름 수정",
    description: "로그인 페이지에 표시되는 앱 이름을 수정할 수 있습니다.",
    updateFailed: "앱 이름을 업데이트하지 못했습니다: {{error}}",
    updateSuccess: "앱 이름이 성공적으로 업데이트되었습니다.",
    clear: "지우기",
    save: "저장",
  },

  transcription: {
    title: "음성 텍스트 변환 모델 환경 설정",
    description:
      "선호하는 음성 텍스트 변환 모델 공급자에 대한 자격 증명 설정입니다. 이 키가 올바르지 않으면 미디어 파일 및 오디오가 음성 텍스트 변환되지 않습니다.",
    provider: "음성 텍스트 변환 공급자",
    "warn-start":
      "RAM 또는 CPU가 제한된 기기에서 로컬 위스퍼 모델을 사용할 경우 미디어 파일 처리 시 TeamplGPT가 멈출 수 있습니다.",
    "warn-recommend": "최소 2GB RAM과 10Mb 미만의 파일 업로드를 권장합니다.",
    "warn-end": "내장된 모델은 처음 사용할 때 자동으로 다운로드됩니다.",
  },

  embedding: {
    title: "임베딩 환경 설정",
    "desc-start":
      "임베딩 엔진을 네이티브로 지원하지 않는 LLM을 사용할 때는 추가적으로 임베딩 텍스트에 대한 자격 증명을 지정해야 할 수 있습니다.",
    "desc-end":
      "임베딩은 텍스트를 벡터로 변환하는 과정입니다. 이러한 자격 증명은 파일과 프롬프트를 TeamplGPT가 처리할 수 있는 형식으로 변환하는 데 필요합니다.",
    provider: {
      title: "임베딩 공급자",
      description:
        "TeamplGPT의 네이티브 임베딩 엔진을 사용할 때는 설정이 필요하지 않습니다.",
    },
  },

  text: {
    title: "텍스트 분할 및 청킹 환경 설정",
    "desc-start":
      "때로는 벡터 데이터베이스에 삽입되기 전에 새 문서를 분할하고 청킹하는 기본 방법을 변경하고 싶을 수 있습니다.",
    "desc-end":
      "텍스트 분할이 어떻게 작동하는지와 그 부작용을 이해하는 경우에만 이 설정을 수정하세요.",
    "warn-start": "여기서의 변경 사항은",
    "warn-center": "새로 임베딩된 문서에만",
    "warn-end": "적용됩니다. 기존 문서에는 적용되지 않습니다.",
    size: {
      title: "텍스트 청크 크기",
      description: "단일 벡터에 존재할 수 있는 최대 문자 길이입니다.",
      recommend: "임베드 모델 최대 길이",
    },

    overlap: {
      title: "텍스트 청크 오버랩",
      description: "인접한 두 텍스트 청크 사이의 최대 오버랩 문자 수입니다.",
    },
  },

  // Vector Database
  vector: {
    title: "벡터 데이터베이스",
    description:
      "TeamplGPT 인스턴스의 벡터 데이터베이스 연결에 대한 자격 증명 설정입니다. 이 키가 올바르지 않으면 제대로 작동하지 않습니다.",
    provider: {
      title: "벡터 데이터베이스 공급자",
      description: "LanceDB에 대한 구성은 필요하지 않습니다.",
    },
  },

  // Embeddable Chat Widgets
  embeddable: {
    title: "임베드 채팅 위젯",
    description:
      "임베드 채팅 위젯은 단일 워크스페이스에 연결된 공개 채팅 인터페이스입니다. 이러한 워크스페이스를 만들어 세계에 공개할 수 있습니다.",
    create: "임베드 생성",
    table: {
      workspace: "워크스페이스",
      chats: "보낸 채팅",
      Active: "활성 도메인",
    },
  },

  "embed-chats": {
    title: "임베드 채팅",
    description: "게시한 임베드에서 기록된 모든 채팅 및 메시지입니다.",
    table: {
      embed: "임베드",
      sender: "보낸 사람",
      message: "메시지",
      response: "응답",
      at: "보낸 시간",
    },
  },

  multi: {
    title: "다중 사용자 모드",
    description:
      "다중 사용자 모드를 활성화하여 팀을 지원하도록 인스턴스를 설정합니다.",
    enable: {
      "is-enable": "다중 사용자 모드가 활성화되었습니다",
      enable: "다중 사용자 모드 활성화",
      description:
        "기본적으로 관리자만 됩니다. 관리자로서 모든 신규 사용자 또는 관리자의 계정을 생성해야 합니다. 비밀번호를 잃어버리지 마세요. 관리자 사용자만 비밀번호를 재설정할 수 있습니다.",
      username: "관리자 계정 사용자 이름",
      password: "관리자 계정 비밀번호",
    },
    password: {
      title: "비밀번호 보호",
      description:
        "TeamplGPT 인스턴스를 비밀번호로 보호하세요. 이를 잊어버리면 복구 방법이 없으므로 반드시 비밀번호를 저장하세요.",
    },
    instance: {
      title: "인스턴스 비밀번호 보호",
      description:
        "기본적으로 관리자만 됩니다. 관리자로서 모든 신규 사용자 또는 관리자의 계정을 생성해야 합니다. 비밀번호를 잃어버리지 마세요. 관리자 사용자만 비밀번호를 재설정할 수 있습니다.",
      password: "인스턴스 비밀번호",
    },
  },

  // Event Logs
  event: {
    title: "이벤트 로그",
    description:
      "이 인스턴스에서 발생하는 모든 작업과 이벤트를 모니터링하기 위해 확인하세요.",
    clear: "이벤트 로그 지우기",
    table: {
      type: "이벤트 유형",
      user: "사용자",
      occurred: "발생 시간",
    },
  },

  // Privacy & Data-Handling
  privacy: {
    title: "개인 정보 및 데이터 처리",
    description:
      "연결된 타사 공급자와 TeamplGPT가 데이터를 처리하는 방법을 구성합니다.",
    llm: "LLM 선택",
    embedding: "임베딩 환경 설정",
    vector: "벡터 데이터베이스",
    anonymous: "익명 텔레메트리 활성화",
  },
};

export default TRANSLATIONS;
