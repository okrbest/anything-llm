const TRANSLATIONS = {
  common: {
    "workspaces-name": "워크스페이스 이름",
    error: "오류",
    success: "성공",
    user: "사용자",
    selection: "모델 선택",
    saving: "저장 중...",
    save: "변경 사항 저장",
    previous: "이전 페이지",
    next: "다음 페이지",
    close: "닫기",
    download: "다운로드",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "인스턴스 설정",
    system: "시스템 환경 설정",
    invites: "초대",
    users: "사용자",
    workspaces: "워크스페이스",
    "workspace-chats": "워크스페이스 채팅",
    appearance: "외관 설정",
    "api-keys": "API 키",
    llm: "LLM 환경 설정",
    transcription: "음성 텍스트 변환 모델",
    embedder: "임베딩 설정",
    "text-splitting": "텍스트 분할 및 청킹",
    "vector-database": "벡터 데이터베이스",
    embeds: "채팅 임베드 위젯",
    "embed-chats": "임베드 채팅 기록",
    security: "보안",
    "event-logs": "이벤트 로그",
    privacy: "개인 정보 및 데이터",
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
        "이 워크스페이스에서 사용할 특정 LLM 제공자 및 모델입니다. 기본값으로 시스템 LLM 제공자와 설정을 사용합니다.",
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
        "채팅과 관련된 것으로 간주되기 위해 소스가 가져야 하는 최소 유사도 점수입니다. 값이 높을수록 소스가 채팅과 더 유사해야 합니다.",
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
      "도구 호출을 명시적으로 지원하지 않는 LLM의 성능은 모델의 기능과 정확성에 크게 의존합니다. 일부 기능은 제한되거나 작동하지 않을 수 있습니다.",
    provider: {
      title: "워크스페이스 에이전트 LLM 제공자",
      description:
        "이 워크스페이스의 에이전트 에이전트에 사용할 특정 LLM 제공자 및 모델입니다.",
    },
    mode: {
      chat: {
        title: "워크스페이스 에이전트 채팅 모델",
        description:
          "이 워크스페이스의 에이전트 에이전트에 사용할 특정 채팅 모델입니다.",
      },
      title: "워크스페이스 에이전트 모델",
      description:
        "이 워크스페이스의 에이전트 에이전트에 사용할 특정 LLM 모델입니다.",
      wait: "-- 모델 대기 중 --",
    },

    skill: {
      title: "기본 에이전트 기술",
      description:
        "이 사전 구축된 기술로 기본 에이전트의 자연 능력을 향상시킵니다. 이 설정은 모든 워크스페이스에 적용됩니다.",
      rag: {
        title: "RAG 및 장기 메모리",
        description:
          '에이전트가 로컬 문서를 활용하여 쿼리에 답변하거나 "기억"하도록 요청하여 장기 메모리 검색에 사용할 수 있도록 합니다.',
      },
      view: {
        title: "문서 보기 및 요약",
        description:
          "에이전트가 현재 임베딩된 워크스페이스 파일의 내용을 나열하고 요약할 수 있도록 합니다.",
      },
      scrape: {
        title: "웹사이트 스크래핑",
        description:
          "에이전트가 웹사이트의 내용을 방문하고 스크래핑할 수 있도록 합니다.",
      },
      generate: {
        title: "차트 생성",
        description:
          "기본 에이전트가 제공된 데이터 또는 채팅에서 다양한 유형의 차트를 생성할 수 있도록 합니다.",
      },
      save: {
        title: "파일 생성 및 브라우저에 저장",
        description:
          "기본 에이전트가 생성된 파일을 저장하고 브라우저에서 다운로드할 수 있도록 합니다.",
      },
      web: {
        title: "실시간 웹 검색 및 브라우징",
        "desc-start":
          "에이전트가 웹 검색(SERP) 제공자에 연결하여 질문에 답변할 수 있도록 합니다.",
        "desc-end": "에이전트 세션 중 웹 검색은 설정 후에만 작동합니다.",
      },
    },
  },

  // Workspace Chats
  recorded: {
    title: "워크스페이스 채팅 기록",
    description:
      "사용자가 생성한 모든 채팅 및 메시지가 생성 날짜별로 정렬되어 있습니다.",
    export: "내보내기",
    table: {
      id: "아이디",
      by: "보낸 사람",
      workspace: "워크스페이스",
      prompt: "프롬프트",
      response: "응답",
      at: "보낸 시간",
    },
  },

  // Appearance
  appearance: {
    title: "외관 설정",
    description: "플랫폼의 외관 설정을 맞춤 설정합니다.",
    logo: {
      title: "로고 맞춤 설정",
      description: "사용자 정의 로고를 업로드하여 챗봇을 개인화하세요.",
      add: "사용자 정의 로고 추가",
      recommended: "권장 크기: 800 x 200",
      remove: "제거",
      replace: "교체",
    },
    message: {
      title: "메시지 맞춤 설정",
      description: "사용자에게 표시되는 자동 메시지를 맞춤 설정합니다.",
      new: "새 메시지",
      system: "시스템",
      user: "사용자",
      message: "메시지",
      assistant: "TeamplGPT 채팅 어시스턴트",
      "double-click": "더블 클릭하여 편집...",
      save: "메시지 저장",
    },
    icons: {
      title: "커스텀 푸터 아이콘",
      description: "사이드바 하단에 표시되는 푸터 아이콘을 맞춤 설정합니다.",
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
      "이것들은 선호하는 LLM 채팅 및 임베딩 제공자에 대한 자격 증명 및 설정입니다. 이 키가 올바르지 않으면 TeamplGPT가 제대로 작동하지 않습니다.",
    provider: "LLM 제공자",
  },

  transcription: {
    title: "음성 텍스트 변환 모델 환경 설정",
    description:
      "이것들은 선호하는 음성 텍스트 변환 모델 제공자에 대한 자격 증명 및 설정입니다. 이 키가 올바르지 않으면 미디어 파일 및 오디오가 음성 텍스트 변환되지 않습니다.",
    provider: "음성 텍스트 변환 제공자",
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
      title: "임베딩 제공자",
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
      "이것들은 TeamplGPT 인스턴스의 작동 방식에 대한 자격 증명 및 설정입니다. 이 키가 올바르지 않으면 제대로 작동하지 않습니다.",
    provider: {
      title: "벡터 데이터베이스 제공자",
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
      "이 인스턴스에서 발생하는 모든 작업 및 이벤트를 모니터링하기 위해 확인하세요.",
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
      "연결된 타사 제공자와 TeamplGPT가 데이터를 처리하는 방법을 구성합니다.",
    llm: "LLM 선택",
    embedding: "임베딩 환경 설정",
    vector: "벡터 데이터베이스",
    anonymous: "익명 텔레메트리 활성화",
  },
};

export default TRANSLATIONS;
