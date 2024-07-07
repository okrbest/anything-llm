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
    back: "뒤로",
    on: "켜짐",
    off: "꺼짐",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "인스턴스 설정",
    system: "시스템 환경설정",
    invites: "초대",
    users: "사용자",
    workspaces: "워크스페이스",
    "workspace-chats": "워크스페이스 채팅",
    agents: "에이전트 기술",
    appearance: "외관 설정",
    "api-keys": "API 키",
    llm: "LLM 환경설정",
    voice: "음성과 말하기 지원",
    transcription: "음성 인식 모델",
    embedder: "임베딩 환경설정",
    "text-splitting": "텍스트 분할과 청크 처리",
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
      "TeamplGPT는 단순한 드롭박스 이상의 기능을 제공합니다.\n\nTeamplGPT는 데이터를 활용해 대화하는 두 가지 방법을 제공합니다:\n\n **쿼리 모드**: 이 모드에서는 워크스페이스에 저장된 문서에서 데이터를 찾아 답변합니다. 워크스페이스에 더 많은 문서를 추가할수록 더 유용한 정보를 얻을 수 있습니다.\n\n**대화 모드**: 이 모드에서는 문서와 진행 중인 채팅 기록, 사전 훈련된 LLM의 지식 모두를 반영하여 답변합니다. 실시간으로 정보를 추가하거나 수정할 때 유용합니다.\n\n채팅 중간에도 이 두 모드 사이를 자유롭게 전환할 수 있습니다.",
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

  threadContainer: {
    loadingThreads: "대화방을 로드 중...",
    startingThread: "대화방 시작 중...",
    newThread: "새 대화방",
    deleteSelected: "선택 삭제",
  },
  threadItem: {
    default: "기본",
    deletedThread: "삭제된 대화방",
    renameThread: "이름 변경",
    deleteThread: "대화방 삭제",
    confirmDelete:
      "이 대화방을 삭제하시겠습니까? 모든 채팅이 삭제됩니다. 이 작업은 되돌릴 수 없습니다.",
    threadRenamePrompt: "대화방의 새 이름을 입력하세요.",
    threadUpdateError: "대화방을 업데이트할 수 없습니다! {{message}}",
    threadDeleteError: "대화방을 삭제할 수 없습니다!",
    threadDeleteSuccess: "대화방이 성공적으로 삭제되었습니다!",
  },

  chatHistory: {
    welcome: "새 워크스페이스에 오신 것을 환영합니다.",
    startChat: "시작하려면",
    uploadDocument: "문서를 업로드하거나",
    orSendChat: "채팅을 보내세요.",
    justSendChat: "시작하려면 채팅을 보내세요.",
    statusResponse: "상태 응답",
    scrollToBottom: "맨 아래로 스크롤",
    startingThread: "스레드 시작 중...",
    newThread: "새 스레드",
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
    info: "계정을 생성한 후, 이 인증 정보로 로그인하여 워크스페이스를 사용할 수 있습니다.",
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
      "기본 에이전트의 기술을 맞춤 설정하고 특정 기술을 활성화하거나 비활성화하여 향상시킬 수 있습니다. 여기에서 설정한 기술은 모든 워크스페이스에 적용됩니다.",
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
      title: "워크스페이스 LLM 제공자",
      description:
        "이 워크스페이스에서 사용할 LLM 제공자와 모델을 지정합니다. 기본값으로 시스템 LLM 제공자와 설정을 사용합니다.",
      search: "모든 LLM 제공자 검색",
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
        title: "대화",
        "desc-start": " : LLM의 사전 학습 지식과",
        and: " ",
        "desc-end": "제공한 문서를 기반으로 답변합니다.",
      },
      query: {
        title: "쿼리",
        "desc-start": " : 제공한 문서에 질문 관련 정보가 있는 경우에만",
        only: " ",
        "desc-end": "답변합니다.",
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
      hint: "대부분의 LLM은 유효한 값 범위가 있습니다. LLM 제공자에게 문의하세요.",
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
      "LLM의 성능은 도구 호출을 명시적으로 지원하지 않는 경우 모델의 기능과 정확성에 크게 의존합니다. 일부 기능은 제한되거나 작동하지 않을 수 있습니다.",
    provider: {
      title: "워크스페이스 에이전트 LLM 제공자",
      description:
        "이 워크스페이스의 @agent 에이전트에 사용될 특정 LLM 제공자 및 모델입니다.",
    },
    mode: {
      chat: {
        title: "워크스페이스 에이전트 채팅 모델",
        description:
          "이 워크스페이스의 @agent 에이전트에 사용될 특정 채팅 모델입니다.",
      },
      title: "워크스페이스 에이전트 모델",
      description:
        "이 워크스페이스의 @agent 에이전트에 사용될 특정 LLM 모델입니다.",
      wait: "-- 모델 대기 중 --",
    },
    skill: {
      title: "기본 에이전트 기술",
      description:
        "기본 에이전트의 능력을 사전 구축된 기술을 사용하여 더 향상시킵니다. 여기에서 설정한 기술은 모든 워크스페이스에 적용됩니다.",
      rag: {
        title: "RAG & 장기 기억",
        description:
          "에이전트가 저장된 문서를 활용하여 질의에 응답하거나 장기 기억 검색을 위해 대화를 '기억'하도록 합니다.",
      },
      view: {
        title: "문서 보기 및 요약",
        description:
          "현재 포함된 워크스페이스 파일의 내용을 나열하고 요약하도록 에이전트에게 허용합니다.",
      },
      scrape: {
        title: "웹사이트 스크랩",
        description:
          "에이전트가 웹사이트를 방문하고 내용을 스크랩하도록 허용합니다.",
      },
      generate: {
        title: "차트 생성",
        description:
          "에이전트가 제공된 데이터를 사용하여 다양한 유형의 차트를 생성하도록 합니다.",
      },
      save: {
        title: "파일 생성과 브라우저에 저장",
        description:
          "기본 에이전트가 파일을 생성하고 브라우저에서 저장할 수 있도록 합니다.",
      },
      web: {
        title: "실시간 웹 검색과 브라우징",
        "desc-start":
          "에이전트 세션 중 웹 검색이 작동하려면 웹 검색 (SERP) 제공자에 연결해야 합니다.",
        "desc-end":
          "에이전트 세션 중 웹 검색이 작동하려면 웹 검색 (SERP) 제공자에 연결해야 합니다.",
      },
    },
    "search-placeholder": "사용 가능한 LLM 제공자 검색",
    workspaceUpdated: "워크스페이스가 업데이트되었습니다!",
    updatingAgent: "에이전트 업데이트 중...",
    updateWorkspaceAgent: "워크스페이스 에이전트 업데이트",
    pleaseMakeSelection: "선택을 해주세요",
    agentsNotWork:
      "유효한 선택이 이루어질 때까지 에이전트가 작동하지 않습니다.",
  },

  agentSetting: {
    skills: {
      ragMemory: {
        title: "RAG & 장기 기억",
        description:
          "에이전트가 저장된 문서를 활용하여 질문에 응답하거나 장기 기억 검색을 위해 대화를 '기억'하도록 합니다.",
      },
      viewSummarize: {
        title: "문서 보기 및 요약",
        description:
          "현재 포함된 워크스페이스 파일의 내용을 나열하고 요약하도록 에이전트에게 허용합니다.",
      },
      scrapeWebsites: {
        title: "웹사이트 스크랩",
        description:
          "에이전트가 웹사이트를 방문하고 내용을 스크랩하도록 허용합니다.",
      },
      generateSaveFiles: {
        title: "파일 생성 및 브라우저에 저장",
        description:
          "에이전트가 파일을 생성하고 브라우저에서 저장할 수 있도록 합니다.",
      },
      createChart: {
        title: "차트 생성",
        description:
          "에이전트가 제공된 데이터를 사용하여 다양한 유형의 차트를 생성하도록 합니다.",
      },
      webBrowsing: {
        title: "웹 검색",
      },
      sqlAgent: {
        title: "SQL 커넥터",
      },
    },
    misc: {
      performanceWarning:
        "LLM의 성능은 도구 호출을 명시적으로 지원하지 않는 경우 모델의 기능과 정확성에 크게 의존합니다. 일부 기능은 제한되거나 작동하지 않을 수 있습니다.",
      searchPlaceholder: "사용 가능한 LLM 제공자 검색",
      workspaceUpdated: "워크스페이스가 업데이트되었습니다!",
      updatingAgent: "에이전트 업데이트 중...",
      updateWorkspaceAgent: "워크스페이스 에이전트 업데이트",
      pleaseMakeSelection: "에이전트 기술을 선택해주세요",
      agentsNotWork:
        "유효한 선택이 이루어질 때까지 에이전트가 작동하지 않습니다.",
    },
  },

  webSearch: {
    title: "실시간 웹 검색 및 브라우징",
    description:
      "에이전트가 웹 검색 (SERP) 제공자에 연결하여 질문에 답할 수 있도록 합니다. 설정이 완료될 때까지 에이전트 세션 중 웹 검색이 작동하지 않습니다.",
    pleaseMakeSelection: "선택을 해주세요",
    providers: {
      none: {
        name: "선택을 해주세요",
        description: "제공자 정보를 입력할 때까지 웹 검색이 비활성화됩니다.",
      },
      googleSearch: {
        name: "구글 검색 엔진",
        description:
          "사용자정의 구글 검색 엔진을 통한 웹 검색. 하루에 100개의 쿼리가 무료입니다.",
      },
      serperDotDev: {
        name: "Serper.dev",
        description:
          "Serper.dev 웹 검색. 무료 계정으로 2,500개의 호출이 가능하며, 그 이후에는 유료입니다.",
      },
      bingSearch: {
        name: "빙 검색",
        description:
          "빙 검색 API를 통한 웹 검색. 한 달에 1000개의 쿼리가 무료입니다.",
      },
      serplyEngine: {
        name: "Serply.io",
        description:
          "Serply.io 웹 검색. 한 달에 100개의 호출이 영원히 무료입니다.",
      },
      searxngEngine: {
        name: "SearXNG",
        description: "추적 없는 무료 오픈 소스 인터넷 메타 검색 엔진입니다.",
      },
    },
    searchPlaceholder: "사용 가능한 웹 검색 제공자 검색",
  },

  webSearchOptions: {
    googleSearch: {
      info: "여기에서 구글 무료 검색 엔진 ID와 API 키를 받을 수 있습니다.",
      searchEngineId: "검색 엔진 ID",
      apiKey: "프로그래매틱 액세스 API 키",
      searchEnginePlaceholder: "구글 검색 엔진 ID",
      apiKeyPlaceholder: "구글 검색 엔진 API 키",
    },
    serperDotDev: {
      info: "여기에서 Serper.dev 무료 API 키를 받을 수 있습니다.",
      apiKey: "API 키",
      apiKeyPlaceholder: "Serper.dev API 키",
    },
    bingSearch: {
      info: "여기 Azure 포털에서 Bing 웹 검색 API 구독 키를 받을 수 있습니다.",
      apiKey: "API 키",
      apiKeyPlaceholder: "Bing 웹 검색 API 키",
      setupInstructions: "Bing 웹 검색 API 구독을 설정하려면:",
      setupSteps: [
        "Azure 포털로 이동: https://portal.azure.com/",
        "새 Azure 계정을 만들거나 기존 계정으로 로그인합니다.",
        "'리소스 만들기' 섹션으로 이동하여 'Bing Search v7'을 검색합니다.",
        "'Bing Search v7' 리소스를 선택하고 새 구독을 만듭니다.",
        "필요에 맞는 가격 책정 등급을 선택합니다 (무료 등급 제공).",
        "Bing 웹 검색 구독에 대한 API 키를 얻습니다.",
      ],
    },
    serplySearch: {
      info: "여기에서 Serply.io 무료 API 키를 받을 수 있습니다.",
      apiKey: "API 키",
      apiKeyPlaceholder: "Serply API 키",
    },
    searXNG: {
      apiUrl: "SearXNG API 기본 URL",
      apiUrlPlaceholder: "SearXNG API 키",
    },
  },

  sqlAgent: {
    title: "SQL 에이전트",
    description:
      "에이전트가 다양한 SQL 데이터베이스 제공자에 연결하여 질문에 답할 수 있도록 SQL을 활용할 수 있게 합니다.",
    yourDatabaseConnections: "데이터베이스 연결",
    newSQLConnection: "새로운 SQL 연결",
  },

  newSQLConnection: {
    title: "새 SQL 연결",
    description:
      "아래에 데이터베이스에 대한 연결 정보를 추가하면 향후 SQL 에이전트 호출에 사용할 수 있습니다.",
    warning: {
      title: "경고:",
      message:
        "SQL 에이전트는 조회하는 쿼리만 수행하도록 지시되었습니다. 하지만 여전히 데이터를 삭제하는 환각을 완전히 방지하지 못합니다. READ_ONLY 권한이 있는 사용자로만 연결하세요.",
    },
    selectEngine: "SQL 엔진 선택",
    connectionName: "연결 이름",
    connectionNamePlaceholder: "이 SQL 연결을 식별하는 고유 이름",
    databaseUser: "데이터베이스 사용자",
    databaseUserPlaceholder: "root",
    databaseUserPassword: "데이터베이스 사용자 비밀번호",
    databaseUserPasswordPlaceholder: "password123",
    serverEndpoint: "서버 엔드포인트",
    serverEndpointPlaceholder: "데이터베이스의 호스트 이름 또는 엔드포인트",
    port: "포트",
    portPlaceholder: "3306",
    database: "데이터베이스",
    databasePlaceholder: "에이전트가 상호 작용할 데이터베이스",
    connectionStringMessage: "위의 모든 필드를 채워주세요.",
    cancelButton: "취소",
    saveButton: "연결 저장",
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
      "API 키를 사용하면 TeamplGPT 인스턴스에 프로그래밍 방식으로 접속하고 관리할 수 있습니다.",
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
      "선호하는 LLM 채팅과 임베딩 제공자에 대한 인증 키 설정입니다. 이 키가 올바르지 않으면 TeamplGPT가 제대로 작동하지 않습니다.",
    provider: "LLM 제공자",
    searchPlaceholder: "사용 가능한 LLM 제공자 검색",
    noneSelected: "선택되지 않음",
    selectLLM: "LLM을 선택해야 합니다",
    saving: "저장 중...",
    saveChanges: "변경 사항 저장",
    saveSuccess: "LLM 선호도가 성공적으로 저장되었습니다.",
    saveError: "LLM 설정을 저장하지 못했습니다: {{error}}",
    providers: {
      defaultName: "시스템 기본값",
      defaultDescription: "이 워크스페이스에 시스템 기본 설정 LLM을 사용합니다.",
      apiKeyLabel: "{{provider}} API 키",
      apiKeyPlaceholder: "{{provider}} API 키",
      modelLabel: "채팅 모델 선택",
      openai: "가장 인기있는 LLM 표준 옵션입니다.",
      azure: "Azure 서비스에서 호스팅되는 OpenAI의 엔터프라이즈 옵션입니다.",
      anthropic: "Anthropic에서 호스팅하는 친숙한 AI 어시스턴트입니다.",
      gemini: "Google의 가장 크고 능력 있는 AI 모델입니다.",
      huggingface:
        "150,000개 이상의 오픈 소스 LLM과 전세계 AI 커뮤니티에 접근하십시오.",
      ollama: "자신의 머신에서 LLM을 로컬로 실행합니다.",
      lmstudio:
        "몇 번의 클릭만으로 수천 개의 최첨단 LLM을 발견, 다운로드하고 실행합니다.",
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
    apiKeyLabel: "API 키",
    apiKeyPlaceholder: "Azure OpenAI API 키",
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
    maxChunkLength: "최대 임베딩 청크 길이",
    maxChunkLengthDescription: "임베딩을 위한 텍스트 청크의 최대 길이입니다.",
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
    maxChunkLength: "최대 임베딩 청크 길이",
    maxChunkLengthDescription: "임베딩을 위한 텍스트 청크의 최대 길이입니다.",
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
      "API 키를 생성하면 TeamplGPT 인스턴스에 프로그래밍 방식으로 접속하고 관리할 수 있습니다.",
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

  speechToText: {
    title: "음성 인식 설정",
    description:
      "여기에서 TeamplGPT 환경에서 사용하려는 음성 인식 및 텍스트 음성 변환 제공자를 지정할 수 있습니다. 기본적으로 우리는 이러한 서비스에 대한 브라우저의 기본 지원을 사용하지만, 다른 서비스를 사용하고 싶을 수도 있습니다.",
    provider: "제공자",
    searchPlaceholder: "음성 인식 제공자 검색",
    saveChanges: "변경 사항 저장",
    saving: "저장 중...",
    saveSuccess: "음성 인식 설정이 성공적으로 저장되었습니다.",
    saveError: "설정 저장 실패: {{error}}",
    providers: {
      native: {
        name: "시스템 기본",
        description: "지원되는 경우 브라우저의 내장 STT 서비스를 사용합니다.",
        noConfiguration: "이 제공자일 때는 구성할 내용이 없습니다.",
      },
    },
  },

  textToSpeech: {
    title: "텍스트 음성 변환 설정",
    description:
      "여기에서 TeamplGPT 환경에서 사용하려는 텍스트 음성 변환 제공자를 지정할 수 있습니다. 기본적으로 우리는 이러한 서비스에 대한 브라우저의 기본 지원을 사용하지만, 다른 서비스를 사용하고 싶을 수도 있습니다.",
    voiceModelLabel: "음성 모델 선택",
    provider: "제공자",
    searchPlaceholder: "텍스트 음성 변환 제공자 검색",
    saveChanges: "변경 사항 저장",
    saving: "저장 중...",
    saveSuccess: "텍스트 음성 변환 설정이 성공적으로 저장되었습니다.",
    saveError: "설정 저장 실패: {{error}}",
    providers: {
      native: {
        name: "시스템 기본",
        description: "지원되는 경우 브라우저의 내장 TTS 서비스를 사용합니다.",
        noConfiguration: "이 제공자에는 구성 필요가 없습니다.",
      },
      openai: {
        name: "OpenAI",
        description: "OpenAI의 텍스트 말하기 음성 변환 기술을 사용합니다.",
        apiKeyLabel: "API 키",
        apiKeyPlaceholder: "OpenAI API 키",
        whisperModelLabel: "위스퍼 모델",
        whisperModel: "위스퍼 라지",
      },
      elevenlabs: {
        name: "ElevenLabs",
        description: "ElevenLabs의 텍스트 말하기 음성 변환 기술을 사용합니다.",
      },
    },
  },

  transcription: {
    title: "음성 텍스트 변환 모델 환경 설정",
    description:
      "선호하는 음성 텍스트 변환 모델 제공자에 대한 인증 키 설정입니다. 이 키가 올바르지 않으면 미디어 파일 및 오디오가 텍스트로 변환되지 않습니다.",
    provider: "음성 텍스트 변환 제공자",
    "warn-start":
      "RAM 또는 CPU가 제한된 기기에서 로컬 위스퍼 모델을 사용할 경우 미디어 파일 처리 시 TeamplGPT가 멈출 수 있습니다.",
    "warn-recommend": "최소 2GB RAM과 10Mb 미만의 파일 업로드를 권장합니다.",
    "warn-end": "내장된 모델은 처음 사용할 때 자동으로 다운로드됩니다.",
    searchPlaceholder: "오디오 텍스트 변환 제공자 검색",
    saveChanges: "변경 사항 저장",
    saving: "저장 중...",
    saveSuccess: "음성 텍스트 변환 설정이 성공적으로 저장되었습니다.",
    saveError: "설정을 저장하지 못했습니다: {{error}}",
    providers: {
      openai: {
        name: "OpenAI",
        description:
          "API 키를 사용하여 OpenAI Whisper-large 모델을 활용합니다.",
      },
      local: {
        name: "TeamplGPT 내장",
        description: "이 인스턴스에 내장된 위스퍼 모델을 활용합니다.",
      },
    },
  },

  embedding: {
    title: "임베딩 환경 설정",
    "desc-start":
      "임베딩 엔진을 내장형으로 지원하지 않는 LLM을 사용할 때는 추가적으로 임베딩 텍스트에 대한 인증 정보를 지정해야 할 수 있습니다.",
    "desc-end":
      "임베딩은 텍스트를 벡터로 변환하는 과정입니다. 인증 정보는 파일과 프롬프트를 TeamplGPT가 처리할 수 있는 형식으로 변환하는 데 필요합니다.",
    provider: {
      title: "임베딩 제공자",
      description:
        "TeamplGPT의 내장형 임베딩 엔진을 사용할 때는 설정이 필요하지 않습니다.",
    },
    searchPlaceholder: "모든 임베딩 제공자 검색",
    saveChanges: "변경 사항 저장",
    saving: "저장 중...",
    saveSuccess: "임베딩 설정이 성공적으로 저장되었습니다.",
    saveError: "설정을 저장하는 데 실패했습니다: {{error}}",
    changeWarning:
      "임베딩 모델을 변경하면 채팅 중에 이전에 임베딩된 문서가 작동하지 않게 됩니다. 각 작업공간에서 모든 문서를 분리하고 완전히 제거한 후 다시 업로드하여 새 임베딩 모델로 임베딩해야 합니다.",
    providers: {
      native: {
        name: "TeamplGPT 임베더",
        description:
          "TeamplGPT에 내장된 임베딩 제공자를 사용합니다. 설정이 필요 없습니다!",
      },
      openai: {
        name: "OpenAI",
        description: "전세계에서 가장 인기있는 표준 임베딩 모델입니다.",
        apiKeyLabel: "API 키",
        apiKeyPlaceholder: "OpenAI API 키",
        modelPrefLabel: "선호하는 모델",
        models: {
          available: "사용 가능한 임베딩 모델",
        },
      },
      azure: {
        name: "Azure OpenAI",
        description: "Azure에서 서비스하는 OpenAI의 엔터프라이즈 옵션입니다.",
      },
      localai: {
        name: "Local AI",
        description: "자신의 머신에서 로컬로 임베딩 모델을 실행합니다.",
      },
      ollama: {
        name: "Ollama",
        description: "자신의 머신에서 로컬로 임베딩 모델을 실행합니다.",
      },
      lmstudio: {
        name: "LM Studio",
        description:
          "몇 번의 클릭만으로 수천 개의 최첨단 LLM을 검색, 다운로드 및 실행합니다.",
      },
      cohere: {
        name: "Cohere",
        description: "Cohere의 강력한 임베딩 모델을 실행합니다.",
        apiKeyLabel: "API 키",
        apiKeyPlaceholder: "Cohere API 키",
        modelPrefLabel: "선호하는 모델",
        models: {
          available: "사용 가능한 임베딩 모델",
        },
      },
      voyageai: {
        name: "Voyage AI",
        description: "Voyage AI의 강력한 임베딩 모델을 실행합니다.",
        apiKeyLabel: "API 키",
        apiKeyPlaceholder: "Voyage AI API 키",
        modelPrefLabel: "선호하는 모델",
        models: {
          available: "사용 가능한 임베딩 모델",
        },
      },
      litellm: {
        name: "LiteLLM",
        description: "LiteLLM의 강력한 임베딩 모델을 실행하세요.",
        baseUrl: "기본 URL",
        maxChunkLengthLabel: "최대 임베딩 청크 길이",
        apiKeyLabel: "API 키",
        optional: "선택 사항",
        modelSelection: "임베딩 모델 선택",
        loadingModels: "-- 사용 가능한 모델 로드 중 --",
        waitingForUrl: "-- URL 대기 중 --",
        loadedModels: "로드된 모델",
        tooltipText:
          "유효한 임베딩 모델을 선택해야 합니다. 채팅 모델은 임베딩 모델이 아닙니다. 자세한 내용은",
        tooltipLinkText: "이 페이지",
        tooltipEndText: "를 참조하세요.",
      },
      genericOpenai: {
        name: "Generic OpenAI",
        description:
          "OpenAI 호환 API 서비스를 사용하여 임베딩 모델을 실행하세요.",
        baseUrl: "기본 URL",
        model: "임베딩 모델 선택",
        maxChunkLength: "임베딩 청크 최대 길이",
        apiKeyLabel: "API 키",
        optional: "선택 사항",
      },
    },
  },

  text: {
    title: "텍스트 분할과 청킹 환경 설정",
    "desc-start":
      "때로는 벡터 데이터베이스에 삽입되기 전에 새 문서를 분할하고 청킹하는 기본 방법을 변경하고 싶을 수 있습니다.",
    "desc-end":
      "텍스트 분할이 어떻게 작동하는지와 그 부작용을 이해하는 경우에만 이 설정을 수정하세요.",
    "warn-start": "여기서의 변경 사항은",
    "warn-center": "새로 임베딩된 문서에만",
    "warn-end": "적용됩니다. 기존 문서에는 적용되지 않습니다.",
    size: {
      title: "텍스트 청크 크기",
      description: "단일 벡터에 포함될 수 있는 최대 글자 수입니다.",
      recommend: "임베드 모델 최대 길이",
    },

    overlap: {
      title: "텍스트 청크 오버랩",
      description:
        "인접한 두 텍스트 청크를 겹치게하는 최대 중복 문자 수입니다.",
    },
  },

  // Vector Database
  vector: {
    title: "벡터 데이터베이스",
    description:
      "TeamplGPT 인스턴스의 벡터 데이터베이스 연결에 대한 인증 정보 설정입니다. 이 키가 올바르지 않으면 제대로 작동하지 않습니다.",
    saveSuccess: "벡터 데이터베이스 설정이 성공적으로 저장되었습니다.",
    saveError: "벡터 데이터베이스 설정을 저장하지 못했습니다: {{error}}",
    provider: {
      title: "벡터 데이터베이스 제공자",
      description: "LanceDB에 대한 구성은 필요하지 않습니다.",
    },
    searchPlaceholder: "모든 벡터 데이터베이스 제공자 검색",
    saveChanges: "변경 사항 저장",
    changeWarning:
      "벡터 데이터베이스를 변경하면 이전에 삽입된 문서와 향후 유사성 검색 결과가 무시됩니다. 각 워크스페이스에 다시 추가해야 합니다.",
    providers: {
      lancedb: {
        description:
          "TeamplGPT와 동일한 인스턴스에서 실행되는 100% 로컬 벡터 DB입니다.",
      },
      chroma: {
        description:
          "직접 호스팅하거나 클라우드에서 호스팅할 수 있는 오픈 소스 벡터 데이터베이스입니다.",
        endpointLabel: "Chroma 엔드포인트",
        apiHeaderLabel: "API 헤더",
        apiKeyLabel: "API 키",
      },
      pinecone: {
        description:
          "엔터프라이즈 사용 사례를 위한 100% 클라우드 기반 벡터 데이터베이스입니다.",
        apiKeyLabel: "Pinecone DB API 키",
        indexNameLabel: "Pinecone 인덱스 이름",
      },
      zilliz: {
        description:
          "SOC 2 규정을 준수하는 엔터프라이즈용 클라우드 호스팅 벡터 데이터베이스입니다.",
        endpointLabel: "클러스터 엔드포인트",
        apiTokenLabel: "API 토큰",
      },
      qdrant: {
        description:
          "로컬 및 분산 클라우드 벡터 데이터베이스를 오픈 소스로 제공합니다.",
        endpointLabel: "QDrant API 엔드포인트",
        apiKeyLabel: "API 키",
      },
      weaviate: {
        description:
          "로컬 및 클라우드 호스팅 멀티모달 벡터 데이터베이스를 오픈 소스로 제공합니다.",
        endpointLabel: "Weaviate 엔드포인트",
        apiKeyLabel: "API 키",
      },
      milvus: {
        description: "오픈 소스, 고도로 확장 가능하고 매우 빠릅니다.",
        addressLabel: "Milvus DB 주소",
        usernameLabel: "Milvus 사용자 이름",
        passwordLabel: "Milvus 비밀번호",
      },
      astra: {
        description: "실제 세계의 GenAI를 위한 벡터 검색을 제공합니다.",
        endpointLabel: "Astra DB 엔드포인트",
        endpointPlaceholder: "Astra DB API 엔드포인트",
        tokenLabel: "Astra DB 애플리케이션 토큰",
      },
    },
  },

  embedModal: {
    title: "워크스페이스에 대한 새 임베드 만들기",
    maxChatsPerDay: "하루 최대 채팅 수",
    maxChatsPerDayHint:
      "이 임베드된 채팅이 24시간 동안 처리할 수 있는 채팅 수를 제한합니다. 0은 무제한입니다.",
    maxChatsPerSession: "세션당 최대 채팅 수",
    maxChatsPerSessionHint:
      "이 임베드된 채팅에서 세션 사용자가 24시간 동안 보낼 수 있는 채팅 수를 제한합니다. 0은 무제한입니다.",
    allowModelOverride: "동적 모델 사용 허용",
    allowModelOverrideHint:
      "워크스페이스 기본값을 재정의하기 위해 선호하는 LLM 모델을 설정할 수 있습니다.",
    allowTemperatureOverride: "동적 LLM 온도 허용",
    allowTemperatureOverrideHint:
      "워크스페이스 기본값을 재정의하기 위해 LLM 온도를 설정할 수 있습니다.",
    allowPromptOverride: "프롬프트 재정의 허용",
    allowPromptOverrideHint:
      "워크스페이스 기본값을 재정의하기 위해 시스템 프롬프트를 설정할 수 있습니다.",
    workspace: "워크스페이스",
    workspaceHint:
      "이것은 채팅 창이 기반으로 하는 워크스페이스입니다. 모든 기본값은 이 구성에 의해 재정의되지 않는 한 워크스페이스에서 상속됩니다.",
    chatMode: "허용된 채팅 방법",
    chatModeHint:
      "챗봇이 어떻게 작동해야 하는지 설정합니다. 쿼리는 문서가 쿼리 답변에 도움이 될 때만 응답합니다.\n챗 모드는 일반 질문에도 응답할 수 있으며 워크스페이스와 전혀 관련 없는 질문에도 답변할 수 있습니다.",
    chatModeChat: "채팅: 문맥에 상관없이 모든 질문에 응답",
    chatModeQuery: "쿼리: 워크스페이스의 문서와 관련된 채팅에만 응답",
    permittedDomains: "도메인에서의 요청 제한",
    permittedDomainsHint:
      "이 필터는 아래 목록에 없는 도메인에서 오는 모든 요청을 차단합니다.\n이것을 비워두면 누구든지 어떤 사이트에서도 임베드를 사용할 수 있습니다.",
    afterCreating: "임베드를 만든 후에는 다음과 같은 간단한",
    tag: "태그와 함께 웹사이트에 게시할 수 있는 링크를 제공받게 됩니다.",
    error: "오류: {{error}}",
    createEmbed: "임베드 만들기",
  },

  embedRow: {
    confirmSuspend:
      "이 임베드를 비활성화하시겠습니까?\n비활성화되면 임베드는 더 이상 채팅 요청에 응답하지 않습니다.",
    confirmDelete:
      "이 임베드를 삭제하시겠습니까?\n삭제되면 이 임베드는 더 이상 채팅에 응답하지 않으며 활성화되지 않습니다.\n\n이 작업은 되돌릴 수 없습니다.",
    disabled: "임베드가 비활성화되었습니다.",
    enabled: "임베드가 활성화되었습니다.",
    deleted: "임베드가 시스템에서 삭제되었습니다.",
    showCode: "코드 보기",
    disable: "비활성화",
    enable: "활성화",
    delete: "삭제",
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
    confirmClear:
      "모든 이벤트 로그를 지우시겠습니까? 이 작업은 되돌릴 수 없습니다.",
    clearSuccess: "이벤트 로그가 성공적으로 지워졌습니다.",
    clearError: "로그 지우기에 실패했습니다",
    table: {
      type: "이벤트 유형",
      user: "사용자",
      occurred: "발생 시간",
    },
  },

  // Privacy & Data-Handling
  privacy: {
    title: "개인 정보 및 데이터 처리",
    description: "개인 정보에 대한 투명성과 제어에 전념하고 있습니다.",
    llm: "LLM 선택",
    embedding: "임베딩 환경 설정",
    vector: "벡터 데이터베이스",
    anonymous: "익명 텔레메트리",
    telemetryDescription1:
      "모든 이벤트는 IP 주소를 기록하지 않으며 식별 가능한 콘텐츠, 설정, 채팅 또는 기타 비사용 기반 정보를 포함하지 않습니다. 수집된 이벤트 태그 목록은",
    telemetryDescription2:
      "오픈 소스 프로젝트로서 우리는 귀하의 개인 정보를 보호할 권리를 존중합니다. 우리는 AI와 문서를 비공개 및 안전하게 통합하기 위한 최상의 솔루션을 구축하는 데 전념하고 있습니다. 텔레메트리를 비활성화하기로 결정한 경우, TeamplGPT를 계속 개선할 수 있도록 피드백과 의견을 보내주시기 바랍니다.",
    reconfigure: "이 설정은 설정에서 언제든지 재구성할 수 있습니다.",
    telemetryStatus: {
      enabled: "익명 텔레메트리가 활성화되었습니다.",
      disabled: "익명 텔레메트리가 비활성화되었습니다.",
    },
  },
  llmProviders: {
    openai: {
      name: "OpenAI",
      description: [
        "채팅 내용은 학습에 사용되지 않습니다.",
        "응답 생성에 사용된 프롬프트 및 문서 텍스트는 OpenAI에서 볼 수 있습니다.",
      ],
    },
    azure: {
      name: "Azure OpenAI",
      description: [
        "채팅 내용은 학습에 사용되지 않습니다.",
        "텍스트 및 임베딩 텍스트는 OpenAI 또는 Microsoft에서 볼 수 없습니다.",
      ],
    },
    anthropic: {
      name: "Anthropic",
      description: [
        "채팅 내용은 학습에 사용되지 않습니다.",
        "응답 생성에 사용된 프롬프트 및 문서 텍스트는 Anthropic에서 볼 수 있습니다.",
      ],
    },
    gemini: {
      name: "Google Gemini",
      description: [
        "채팅 내용은 식별되지 않으며 학습에 사용됩니다.",
        "응답 생성에 사용된 프롬프트 및 문서 텍스트는 Google에서 볼 수 있습니다.",
      ],
    },
    lmstudio: {
      name: "LMStudio",
      description: [
        "모델 및 채팅은 LMStudio를 실행하는 서버에서만 액세스할 수 있습니다.",
      ],
    },
    localai: {
      name: "LocalAI",
      description: [
        "모델 및 채팅은 LocalAI를 실행하는 서버에서만 액세스할 수 있습니다.",
      ],
    },
    ollama: {
      name: "Ollama",
      description: [
        "모델 및 채팅은 Ollama 모델을 실행하는 기기에서만 액세스할 수 있습니다.",
      ],
    },
    native: {
      name: "맞춤형 Llama 모델",
      description: [
        "모델 및 채팅은 이 TeamplGPT 인스턴스에서만 액세스할 수 있습니다.",
      ],
    },
    togetherai: {
      name: "TogetherAI",
      description: [
        "채팅 내용은 학습에 사용되지 않습니다.",
        "응답 생성에 사용된 프롬프트 및 문서 텍스트는 TogetherAI에서 볼 수 있습니다.",
      ],
    },
    mistral: {
      name: "Mistral",
      description: [
        "응답 생성에 사용된 프롬프트 및 문서 텍스트는 Mistral에서 볼 수 있습니다.",
      ],
    },
    huggingface: {
      name: "HuggingFace",
      description: [
        "응답에 사용된 프롬프트 및 문서 텍스트는 HuggingFace 관리 엔드포인트로 전송됩니다.",
      ],
    },
    perplexity: {
      name: "Perplexity AI",
      description: [
        "채팅 내용은 학습에 사용되지 않습니다.",
        "응답 생성에 사용된 프롬프트 및 문서 텍스트는 Perplexity AI에서 볼 수 있습니다.",
      ],
    },
    openrouter: {
      name: "OpenRouter",
      description: [
        "채팅 내용은 학습에 사용되지 않습니다.",
        "응답 생성에 사용된 프롬프트 및 문서 텍스트는 OpenRouter에서 볼 수 있습니다.",
      ],
    },
    groq: {
      name: "Groq",
      description: [
        "채팅 내용은 학습에 사용되지 않습니다.",
        "응답 생성에 사용된 프롬프트 및 문서 텍스트는 Groq에서 볼 수 있습니다.",
      ],
    },
    koboldcpp: {
      name: "KoboldCPP",
      description: [
        "모델 및 채팅은 KoboldCPP를 실행하는 서버에서만 액세스할 수 있습니다.",
      ],
    },
    textgenwebui: {
      name: "Oobabooga Web UI",
      description: [
        "모델 및 채팅은 Oobabooga 텍스트 생성 웹 UI를 실행하는 서버에서만 액세스할 수 있습니다.",
      ],
    },
    "generic-openai": {
      name: "Generic OpenAI 호환 서비스",
      description: [
        "데이터는 귀하의 일반 엔드포인트 제공자에게 적용되는 서비스 약관에 따라 공유됩니다.",
      ],
    },
    cohere: {
      name: "Cohere",
      description: [
        "데이터는 cohere.com의 서비스 약관 및 귀하의 지역 개인정보 보호법에 따라 공유됩니다.",
      ],
    },
    litellm: {
      name: "LiteLLM",
      description: [
        "모델 및 채팅은 LiteLLM을 실행하는 서버에서만 액세스할 수 있습니다.",
      ],
    },
  },
  embeddingEngines: {
    native: {
      name: "TeamplGPT 임베더",
      description: [
        "문서 텍스트는 이 TeamplGPT 인스턴스에서 비공개로 임베딩됩니다.",
      ],
    },
    openai: {
      name: "OpenAI",
      description: [
        "문서 텍스트는 OpenAI 서버로 전송됩니다.",
        "문서는 학습에 사용되지 않습니다.",
      ],
    },
    azure: {
      name: "Azure OpenAI",
      description: [
        "문서 텍스트는 Microsoft Azure 서비스로 전송됩니다.",
        "문서는 학습에 사용되지 않습니다.",
      ],
    },
    localai: {
      name: "LocalAI",
      description: [
        "문서 텍스트는 LocalAI를 실행하는 서버에서 비공개로 임베딩됩니다.",
      ],
    },
    ollama: {
      name: "Ollama",
      description: [
        "문서 텍스트는 Ollama를 실행하는 서버에서 비공개로 임베딩됩니다.",
      ],
    },
    lmstudio: {
      name: "LMStudio",
      description: [
        "문서 텍스트는 LMStudio를 실행하는 서버에서 비공개로 임베딩됩니다.",
      ],
    },
    cohere: {
      name: "Cohere",
      description: [
        "데이터는 cohere.com의 서비스 약관 및 귀하의 지역 개인정보 보호법에 따라 공유됩니다.",
      ],
    },
    voyageai: {
      name: "Voyage AI",
      description: [
        "데이터는 voyageai.com의 서비스 약관에 따라 Voyage AI의 서버로 전송됩니다.",
      ],
    },
    litellm: {
      name: "LiteLLM",
      description: [
        "문서 텍스트는 LiteLLM을 실행하는 서버에서만 액세스할 수 있으며, LiteLLM에서 구성한 제공자에게만 액세스할 수 있습니다.",
      ],
    },
    "generic-openai": {
      name: "Generic OpenAI 호환 서비스",
      description: [
        "데이터는 귀하의 일반 엔드포인트 제공자에게 적용되는 서비스 약관에 따라 공유됩니다.",
      ],
    },
  },
  vectorDbs: {
    chroma: {
      name: "Chroma",
      description: [
        "벡터와 문서 텍스트는 귀하의 Chroma 인스턴스에 저장됩니다.",
        "인스턴스에 대한 액세스는 귀하가 관리합니다.",
      ],
    },
    pinecone: {
      name: "Pinecone",
      description: [
        "벡터와 문서 텍스트는 Pinecone의 서버에 저장됩니다.",
        "데이터에 대한 액세스는 Pinecone에서 관리합니다.",
      ],
    },
    qdrant: {
      name: "QDrant",
      description: [
        "벡터와 문서 텍스트는 귀하의 Qdrant 인스턴스(클라우드 또는 자체 호스팅)에 저장됩니다.",
      ],
    },
    weaviate: {
      name: "Weaviate",
      description: [
        "벡터와 문서 텍스트는 귀하의 Weaviate 인스턴스(클라우드 또는 자체 호스팅)에 저장됩니다.",
      ],
    },
    milvus: {
      name: "Milvus",
      description: [
        "벡터와 문서 텍스트는 귀하의 Milvus 인스턴스(클라우드 또는 자체 호스팅)에 저장됩니다.",
      ],
    },
    zilliz: {
      name: "Zilliz Cloud",
      description: [
        "벡터와 문서 텍스트는 귀하의 Zilliz 클라우드 클러스터에 저장됩니다.",
      ],
    },
    astra: {
      name: "AstraDB",
      description: [
        "벡터와 문서 텍스트는 귀하의 AstraDB 클라우드 데이터베이스에 저장됩니다.",
      ],
    },
    lancedb: {
      name: "LanceDB",
      description: [
        "벡터와 문서 텍스트는 이 TeamplGPT 인스턴스에 비공개로 저장됩니다.",
      ],
    },
  },

  experimentalFeatures: {
    title: "실험적 기능",
    selectFeature: "실험적 기능을 선택하세요",
    on: "켜짐",
    off: "꺼짐",
    accepted: "실험적 기능 세트가 활성화되었습니다. 페이지를 다시 로드합니다.",
    tosTitle: "실험적 기능 사용 약관",
    tosIntro:
      "TeamplGPT의 실험적 기능은 우리가 파일럿 테스트 중인 기능으로, 선택적으로 사용할 수 있습니다. 기능 승인 전에 잠재적인 우려 사항이 있으면 사전에 조건을 제시하거나 경고할 것입니다.",
    tosRisksIntro:
      "이 페이지의 기능을 사용할 때 다음과 같은 가능성이 있습니다.",
    tosRisk1: "데이터 손실.",
    tosRisk2: "결과 품질의 변화.",
    tosRisk3: "저장 공간 증가.",
    tosRisk4: "자원 소비 증가.",
    tosRisk5: "연결된 LLM 또는 임베딩 제공자의 비용 또는 사용 증가.",
    tosRisk6: "TeamplGPT 사용 중 잠재적인 버그 또는 문제.",
    tosConditionsIntro:
      "실험적 기능을 사용할 때 다음과 같은 비포괄적인 조건 목록이 따릅니다.",
    tosCondition1: "기능이 향후 업데이트에서 존재하지 않을 수 있습니다.",
    tosCondition2: "현재 사용 중인 기능은 안정적이지 않습니다.",
    tosCondition3:
      "해당 기능은 향후 버전, 구성 또는 구독에서 사용할 수 없을 수 있습니다.",
    tosCondition4: "베타 기능 사용 시 개인정보 보호 설정이 준수됩니다.",
    tosCondition5: "이 조건은 향후 업데이트에서 변경될 수 있습니다.",
    tosConclusion1:
      "기능에 접근하려면 이 모달의 승인이 필요합니다. 자세한 내용을 읽으려면",
    tosConclusion2: "또는 이메일로 문의하세요",
    reject: "거부 및 닫기",
    accept: "이해했습니다",
  },
  features: {
    experimental_live_file_sync: {
      title: "실험적 라이브 파일 동기화",
    },
    another_feature: {
      title: "또 다른 기능",
    },
  },

  liveSyncToggle: {
    updateFailed: "기능 상태 업데이트에 실패했습니다.",
    status: {
      enabled: "라이브 문서 콘텐츠 동기화가 활성화되었습니다.",
      disabled: "라이브 문서 콘텐츠 동기화가 비활성화되었습니다.",
    },
    title: "자동 문서 콘텐츠 동기화",
    description1:
      "문서를 '감시'하도록 지정할 수 있는 기능을 활성화합니다. 감시된 문서의 내용은 TeamplGPT에서 정기적으로 가져와 업데이트됩니다.",
    description2:
      "감시된 문서는 업데이트와 동시에 참조된 모든 워크스페이스에서 자동으로 업데이트됩니다.",
    description3:
      "이 기능은 웹 기반 콘텐츠(예: 웹사이트, Confluence, YouTube, GitHub 파일)에만 적용됩니다.",
    docsLink: "기능 설명 및 주의 사항",
    manageLink: "감시 중인 문서 관리 →",
  },

  liveDocumentSyncManager: {
    title: "감시 중인 문서",
    description:
      "현재 인스턴스에서 감시 중인 모든 문서입니다. 이 문서들의 내용은 주기적으로 동기화됩니다.",
    documentName: "문서 이름",
    lastSynced: "마지막 동기화",
    timeUntilNextRefresh: "다음 갱신까지 남은 시간",
    createdOn: "생성 날짜",
  },

  uploadFile: {
    scrapingLink: "링크 스크래핑 중...",
    errorUploadingLink: "링크 업로드 오류: {{error}}",
    linkUploaded: "링크가 성공적으로 업로드되었습니다",
    processorUnavailable: "문서 프로세서 사용 불가",
    tryAgainLater:
      "문서 프로세서가 오프라인 상태이므로 현재 파일을 업로드할 수 없습니다. 나중에 다시 시도해 주세요.",
    clickOrDrag: "클릭하여 업로드하거나 드래그 앤 드롭",
    supportedFormats:
      "텍스트 파일, CSV, 스프레드시트, 오디오 파일 등을 지원합니다!",
    orSubmitLink: "또는 링크 제출",
    fetching: "가져오는 중...",
    fetchWebsite: "웹사이트<br />가져오기",
    uploadInfo:
      "이 파일들은 이 TeamplGPT 인스턴스에서 실행 중인 문서 프로세서로 업로드됩니다. <br />이 파일들은 제3자에게 전송되거나 공유되지 않습니다.",
  },

  documentSettings: {
    updatingWorkspace: "워크스페이스 업데이트 중...",
    loadingMessage: "큰 문서의 경우 시간이 걸릴 수 있습니다",
    error: "오류: {{message}}",
    updateSuccess: "워크스페이스가 성공적으로 업데이트되었습니다.",
    updateFailed: "워크스페이스 업데이트 실패: {{error}}",
  },
  workspaceDirectory: {
    name: "이름",
    noDocuments: "문서 없음",
    estimatedCost: "예상 비용: {{cost}}",
    oneTimeCost: "*임베딩에 대한 일회성 비용",
    saveAndEmbed: "저장 및 임베드",
    pinAlert: {
      title: "문서 고정이란 무엇입니까?",
      message1:
        "TeamplGPT에서 문서를 고정하면 문서의 전체 내용을 LLM이 완전히 이해할 수 있도록 프롬프트 창에 주입합니다.",
      message2:
        "이는 큰 컨텍스트 모델이나 지식 기반에 중요한 작은 파일에 가장 적합합니다.",
      message3:
        "기본적으로 TeamplGPT에서 원하는 답변을 얻지 못하는 경우 고정은 클릭 한 번으로 더 높은 품질의 답변을 얻을 수 있는 좋은 방법입니다.",
      button: "알겠습니다",
    },
    watchAlert: {
      title: "문서를 보는 것은 무엇을 의미합니까?",
      message1:
        "TeamplGPT에서 문서를 보면 정기적으로 원본 소스에서 문서 내용을 자동으로 동기화합니다. 이렇게 하면 이 파일이 관리되는 모든 워크스페이스의 내용이 자동으로 업데이트됩니다.",
      message2:
        "이 기능은 현재 온라인 기반 콘텐츠를 지원하며 수동으로 업로드된 문서에는 사용할 수 없습니다.",
      message3: {
        part1: "파일 관리자의",
        link: "파일 관리자",
        part2: "관리자 보기에서 어떤 문서를 보는지 관리할 수 있습니다.",
      },
      button: "알겠습니다",
    },
  },
  directory: {
    deleteConfirmation:
      "이 파일과 폴더를 삭제하시겠습니까?\n이렇게 하면 파일이 시스템에서 제거되고 기존 워크스페이스에서 자동으로 제거됩니다.\n이 작업은 되돌릴 수 없습니다.",
    removingFiles:
      "{{numDocuments}}개의 문서와 {{numFolders}}개의 폴더를 제거 중입니다. 잠시만 기다려 주십시오.",
    errorMovingFiles: "파일 이동 오류: {{message}}",
    successfullyMoved: "{{numDocuments}}개의 문서를 성공적으로 이동했습니다.",
    movingDocuments:
      "{{numDocuments}}개의 문서를 이동 중입니다. 잠시만 기다려 주십시오.",
    myDocuments: "내 문서",
    searchPlaceholder: "문서 검색",
    newFolder: "새 폴더",
    name: "이름",
    noDocuments: "문서 없음",
    moveToWorkspace: "워크스페이스로 이동",
  },

  newFolderModal: {
    createNewFolder: "새 폴더 만들기",
    folderName: "폴더 이름",
    folderNamePlaceholder: "폴더 이름을 입력하세요",
    createFolderError: "폴더 생성 실패",
    cancel: "취소",
    createFolder: "폴더 만들기",
    error: "오류: {{error}}",
  },

  manageWorkspace: {
    editing: "편집 중",
    editingNotAvailable:
      "이 설정은 데스크탑 장치에서만 편집할 수 있습니다. 계속하려면 데스크탑에서 이 페이지에 액세스하세요.",
    dismiss: "닫기",
    documents: "문서",
    dataConnectors: "데이터 커넥터",
  },

  dataConnectors: {
    searchPlaceholder: "데이터 커넥터 검색",
    noConnectorsFound: "데이터 커넥터를 찾을 수 없습니다.",
    github: {
      name: "GitHub 저장소",
      description:
        "전체 공개 또는 비공개 Github 저장소를 한 번의 클릭으로 가져옵니다.",
    },
    youtubeTranscript: {
      name: "YouTube 대본",
      description: "링크를 통해 전체 YouTube 비디오의 대본을 가져옵니다.",
    },
    websiteDepth: {
      name: "웹사이트 수집기",
      description: "웹사이트와 해당 하위 링크를 특정 깊이까지 스크랩핑합니다.",
    },
    confluence: {
      name: "Confluence",
      description: "전체 Confluence 페이지를 한 번의 클릭으로 가져옵니다.",
    },
  },

  githubOptions: {
    fetchingFiles:
      "저장소의 모든 파일을 가져오는 중입니다 - 시간이 걸릴 수 있습니다.",
    filesCollected:
      "{{files}}개의 {{fileText}}이(가) {{author}}/{{repo}}:{{branch}}에서 수집되었습니다. 출력 폴더는 {{destination}}입니다.",
    repoUrlLabel: "GitHub 저장소 URL",
    repoUrlDescription: "수집하려는 GitHub 저장소의 URL입니다.",
    accessTokenLabel: "GitHub 액세스 토큰",
    optional: "선택 사항",
    accessTokenDescription: "접근 요청을 수락하기 위한 액세스 토큰.",
    fileIgnoresLabel: "파일 무시",
    fileIgnoresDescription:
      "수집 중 특정 파일을 무시하려면 .gitignore 형식으로 나열합니다. 저장하려는 각 항목 뒤에 Enter 키를 누르세요.",
    fileIgnoresPlaceholder: "!*.js, images/*, .DS_Store, bin/*",
    collectingFiles: "파일을 수집하는 중...",
    submit: "제출",
    loadingMessage:
      "완료되면 모든 파일이 문서 선택기에 있는 워크스페이스에 포함될 수 있습니다.",
    branchLabel: "브랜치",
    branchDescription: "파일을 수집하려는 브랜치입니다.",
    loadingBranches: "-- 사용 가능한 브랜치를 로드하는 중 --",
    patAlertMessage:
      "GitHub 액세스 토큰을 입력하지 않으면, 이 데이터 커넥터는 GitHub 저장소의 공용 파일만 수집할 수 있습니다.",
    patLinkText:
      "여기에서 GitHub 계정으로 무료 개인 액세스 토큰을 받아 사용하세요.",
    patTooltipMessage: "액세스 토큰 없이 ",
    patDocLinkText: "개인 액세스 토큰",
    patTooltipMessageContinued:
      "을(를) 사용하지 않으면 GitHub API는 비율 제한 때문에 수집할 수 있는 파일 수를 제한할 수 있습니다. 이 문제를 피하려면 ",
    patCreateLinkText: "임시 액세스 토큰을 생성하세요",
  },

  youtubeOptions: {
    title: "YouTube 비디오 URL",
    description: "자막을 작성할 YouTube 비디오의 URL입니다.",
    placeholder: "https://youtube.com/watch?v=abc123",
    submitButton: "자막 수집",
    loadingButton: "자막 수집 중...",
    loadingMessage: "YouTube 비디오의 자막을 가져오는 중입니다.",
    successMessage:
      "{{author}}의 {{title}} 자막이 완료되었습니다. 출력 폴더는 {{destination}}입니다.",
    errorMessage: "오류: {{message}}",
    transcriptionComplete:
      "완료되면 문서 선택기에 있는 워크스페이스에 포함할 자막이 제공됩니다.",
  },

  websiteScraper: {
    scraping_website:
      "웹사이트를 스크랩 중입니다 - 시간이 좀 걸릴 수 있습니다.",
    scraping_success: "성공적으로 {{count}}개의 {{page}} 스크랩 완료!",
    scraping_website_submit: "제출",
    scraping_website_in_progress: "웹사이트 스크랩 중...",
    scraping_website_complete:
      "완료되면, 모든 스크랩된 페이지는 문서 선택기에서 워크스페이스에 포함될 수 있습니다.",
    websiteUrl: {
      label: "웹사이트 URL",
      description: "스크랩하려는 웹사이트의 URL을 입력하세요.",
    },
    depth: {
      label: "깊이",
      description: "원본 URL에서 작업자가 따라가야 할 하위 링크의 수입니다.",
    },
    maxLinks: {
      label: "최대 링크 수",
      description: "스크랩할 최대 링크 수입니다.",
    },
  },

  confluence: {
    scraping:
      "Confluence 공간의 모든 페이지를 가져오는 중입니다. 시간이 걸릴 수 있습니다.",
    success:
      "Confluence 공간 {{spaceKey}}에서 페이지를 수집했습니다. 출력 폴더는 {{destination}}입니다.",
    pageUrl: {
      label: "Confluence 페이지 URL",
      description: "Confluence 공간의 페이지 URL입니다.",
    },
    username: {
      label: "Confluence 사용자 이름",
      description: "Confluence 사용자 이름입니다.",
    },
    accessToken: {
      label: "Confluence 액세스 토큰",
      description: "인증을 위한 액세스 토큰.",
      tooltip: {
        text: "인증을 위해 액세스 토큰을 제공해야 합니다. 액세스 토큰은",
        linkText: "여기서 생성할 수 있습니다",
      },
    },
    submit: {
      loading: "페이지 수집 중...",
      default: "제출",
      description:
        "완료되면 모든 페이지가 워크스페이스에 임베드할 수 있도록 준비됩니다.",
    },
  },
};

export default TRANSLATIONS;
