const TRANSLATIONS = {
  common: {
    "workspaces-name": "Имя рабочих пространств",
    error: "ошибка",
    success: "успех",
    user: "Пользователь",
    selection: "Выбор модели",
    saving: "Сохранение...",
    save: "Сохранить изменения",
    previous: "Предыдущая страница",
    next: "Следующая страница",
  },
  settings: {
    title: "Настройки экземпляра",
    system: "Системные настройки",
    invites: "Приглашение",
    users: "Пользователи",
    workspaces: "Рабочие пространства",
    "workspace-chats": "Чат рабочего пространства",
    appearance: "Внешний вид",
    "api-keys": "API ключи",
    llm: "Предпочтение LLM",
    transcription: "Модель транскрипции",
    embedder: "Настройки встраивания",
    "text-splitting": "Разделение и сегментация текста",
    "vector-database": "Векторная база данных",
    embeds: "Виджеты встраивания чата",
    "embed-chats": "История встраивания чатов",
    security: "Безопасность",
    "event-logs": "Журналы событий",
    privacy: "Конфиденциальность и данные",
  },
  login: {
    "multi-user": {
      welcome: "Добро пожаловать в",
      "placeholder-username": "Имя пользователя",
      "placeholder-password": "Пароль",
      login: "Войти",
      validating: "Проверка...",
      "forgot-pass": "Забыли пароль",
      reset: "Сбросить",
    },
    "sign-in": {
      start: "Войти в ваш",
      end: "аккаунт.",
    },
  },
  "workspaces—settings": {
    general: "Общие настройки",
    chat: "Настройки чата",
    vector: "Векторная база данных",
    members: "Участники",
    agent: "Конфигурация агента",
  },
  general: {
    vector: {
      title: "Количество векторов",
      description: "Общее количество векторов в вашей векторной базе данных.",
    },
    names: {
      description:
        "Это изменит только отображаемое имя вашего рабочего пространства.",
    },
    message: {
      title: "Предлагаемые сообщения чата",
      description:
        "Настройте сообщения, которые будут предложены пользователям вашего рабочего пространства.",
      add: "Добавить новое сообщение",
      save: "Сохранить сообщения",
      heading: "Объясните мне",
      body: "преимущества TeamplGPT",
    },
    pfp: {
      title: "Изображение профиля помощника",
      description:
        "Настройте изображение профиля помощника для этого рабочего пространства.",
      image: "Изображение рабочего пространства",
      remove: "Удалить изображение рабочего пространства",
    },
    delete: {
      title: "Удалить Рабочее Пространство",
      description:
        "Удалите это рабочее пространство и все его данные. Это удалит рабочее пространство для всех пользователей.",
      delete: "Удалить рабочее пространство",
      deleting: "Удаление рабочего пространства...",
      "confirm-start": "Вы собираетесь удалить весь ваш",
      "confirm-end":
        "рабочее пространство. Это удалит все векторные встраивания в вашей векторной базе данных.\n\nОригинальные исходные файлы останутся нетронутыми. Это действие необратимо.",
    },
  },
  chat: {
    llm: {
      title: "Поставщик LLM рабочего пространства",
      description:
        "Конкретный поставщик и модель LLM, которые будут использоваться для этого рабочего пространства. По умолчанию используется системный поставщик и настройки LLM.",
      search: "Искать всех поставщиков LLM",
    },
    model: {
      title: "Модель чата рабочего пространства",
      description:
        "Конкретная модель чата, которая будет использоваться для этого рабочего пространства. Если пусто, будет использоваться системное предпочтение LLM.",
      wait: "-- ожидание моделей --",
    },
    mode: {
      title: "Режим чата",
      chat: {
        title: "Чат",
        "desc-start": "будет предоставлять ответы с общей информацией LLM",
        and: "и",
        "desc-end": "найденный контекст документов.",
      },
      query: {
        title: "Запрос",
        "desc-start": "будет предоставлять ответы",
        only: "только",
        "desc-end": "если найден контекст документов.",
      },
    },
    history: {
      title: "История чата",
      "desc-start":
        "Количество предыдущих чатов, которые будут включены в краткосрочную память ответа.",
      recommend: "Рекомендуем 20.",
      "desc-end":
        "Любое количество более 45 может привести к непрерывным сбоям чата в зависимости от размера сообщений.",
    },
    prompt: {
      title: "Подсказка",
      description:
        "Подсказка, которая будет использоваться в этом рабочем пространстве. Определите контекст и инструкции для AI для создания ответа. Вы должны предоставить тщательно разработанную подсказку, чтобы AI мог генерировать релевантный и точный ответ.",
    },
    refusal: {
      title: "Ответ об отказе в режиме запроса",
      "desc-start": "В режиме",
      query: "запроса",
      "desc-end":
        "вы можете вернуть пользовательский ответ об отказе, если контекст не найден.",
    },
    temperature: {
      title: "Температура LLM",
      "desc-start":
        "Этот параметр контролирует, насколько 'креативными' будут ответы вашего LLM.",
      "desc-end":
        "Чем выше число, тем более креативные ответы. Для некоторых моделей это может привести к несвязным ответам при слишком высоких настройках.",
      hint: "Большинство LLM имеют различные допустимые диапазоны значений. Проконсультируйтесь с вашим поставщиком LLM для получения этой информации.",
    },
  },
  "vector-workspace": {
    identifier: "Идентификатор векторной базы данных",
    snippets: {
      title: "Максимальное количество контекстных фрагментов",
      description:
        "Этот параметр контролирует максимальное количество контекстных фрагментов, которые будут отправлены LLM для каждого чата или запроса.",
      recommend: "Рекомендуемое количество: 4",
    },
    doc: {
      title: "Порог сходства документов",
      description:
        "Минимальная оценка сходства, необходимая для того, чтобы источник считался связанным с чатом. Чем выше число, тем более схожим должен быть источник с чатом.",
      zero: "Без ограничений",
      low: "Низкий (оценка сходства ≥ .25)",
      medium: "Средний (оценка сходства ≥ .50)",
      high: "Высокий (оценка сходства ≥ .75)",
    },
    reset: {
      reset: "Сброс векторной базы данных",
      resetting: "Очистка векторов...",
      confirm:
        "Вы собираетесь сбросить векторную базу данных этого рабочего пространства. Это удалит все текущие векторные встраивания.\n\nОригинальные исходные файлы останутся нетронутыми. Это действие необратимо.",
      error: "Не удалось сбросить векторную базу данных рабочего пространства!",
      success: "Векторная база данных рабочего пространства была сброшена!",
    },
  },
  agent: {
    "performance-warning":
      "Производительность LLM, не поддерживающих вызовы инструментов, сильно зависит от возможностей и точности модели. Некоторые способности могут быть ограничены или не функционировать.",
    provider: {
      title: "Поставщик LLM агента рабочего пространства",
      description:
        "Конкретный поставщик и модель LLM, которые будут использоваться для агента @agent этого рабочего пространства.",
    },
    mode: {
      chat: {
        title: "Модель чата агента рабочего пространства",
        description:
          "Конкретная модель чата, которая будет использоваться для агента @agent этого рабочего пространства.",
      },
      title: "Модель агента рабочего пространства",
      description:
        "Конкретная модель LLM, которая будет использоваться для агента @agent этого рабочего пространства.",
      wait: "-- ожидание моделей --",
    },
    skill: {
      title: "Навыки агента по умолчанию",
      description:
        "Улучшите естественные способности агента по умолчанию с помощью этих предустановленных навыков. Эта настройка применяется ко всем рабочим пространствам.",
      rag: {
        title: "RAG и долговременная память",
        description:
          "Позвольте агенту использовать ваши локальные документы для ответа на запрос или попросите агента 'запомнить' части контента для долгосрочного извлечения из памяти.",
      },
      view: {
        title: "Просмотр и резюмирование документов",
        description:
          "Позвольте агенту перечислять и резюмировать содержание файлов рабочего пространства, которые в данный момент встроены.",
      },
      scrape: {
        title: "Сбор данных с веб-сайтов",
        description:
          "Позвольте агенту посещать и собирать содержимое веб-сайтов.",
      },
      generate: {
        title: "Создание диаграмм",
        description:
          "Включите возможность создания различных типов диаграмм из предоставленных данных или данных, указанных в чате.",
      },
      save: {
        title: "Создание и сохранение файлов в браузер",
        description:
          "Включите возможность создания и записи файлов, которые можно сохранить и загрузить в вашем браузере.",
      },
      web: {
        title: "Поиск в Интернете и просмотр в реальном времени",
        "desc-start":
          "Позвольте вашему агенту искать в Интернете для ответа на ваши вопросы, подключаясь к поставщику поиска (SERP).",
        "desc-end":
          "Поиск в Интернете во время сессий агента не будет работать, пока это не настроено.",
      },
    },
  },
  recorded: {
    title: "Чаты рабочего пространства",
    description:
      "Это все записанные чаты и сообщения, отправленные пользователями, упорядоченные по дате создания.",
    export: "Экспорт",
    table: {
      id: "Идентификатор",
      by: "Отправлено",
      workspace: "Рабочее пространство",
      prompt: "Подсказка",
      response: "Ответ",
      at: "Отправлено в",
    },
  },
  appearance: {
    title: "Внешний вид",
    description: "Настройте параметры внешнего вида вашей платформы.",
    logo: {
      title: "Настроить логотип",
      description:
        "Загрузите свой логотип, чтобы персонализировать ваш чат-бот.",
      add: "Добавить пользовательский логотип",
      recommended: "Рекомендуемый размер: 800 x 200",
      remove: "Удалить",
      replace: "Заменить",
    },
    message: {
      title: "Настроить сообщения",
      description:
        "Настройте автоматические сообщения, отображаемые вашим пользователям.",
      new: "Новое",
      system: "система",
      user: "пользователь",
      message: "сообщение",
      assistant: "Чат-ассистент TeamplGPT",
      "double-click": "Дважды щелкните, чтобы редактировать...",
      save: "Сохранить сообщения",
    },
    icons: {
      title: "Пользовательские иконки в подвале",
      description:
        "Настройте иконки в подвале, отображаемые внизу боковой панели.",
      icon: "Иконка",
      link: "Ссылка",
    },
  },
  api: {
    title: "API ключи",
    description:
      "API ключи позволяют владельцу программно получать доступ к этому экземпляру TeamplGPT и управлять им.",
    link: "Прочитать документацию по API",
    generate: "Создать новый API ключ",
    table: {
      key: "API ключ",
      by: "Создано",
      created: "Создано",
    },
  },
  llm: {
    title: "Предпочтение LLM",
    description:
      "Это учетные данные и настройки для вашего предпочтительного поставщика чата и встраивания LLM. Важно, чтобы эти ключи были актуальными и правильными, иначе TeamplGPT не будет работать должным образом.",
    provider: "Поставщик LLM",
  },
  transcription: {
    title: "Предпочтение модели транскрипции",
    description:
      "Это учетные данные и настройки для вашего предпочтительного поставщика моделей транскрипции. Важно, чтобы эти ключи были актуальными и правильными, иначе медиафайлы и аудио не будут транскрибироваться.",
    provider: "Поставщик транскрипции",
    "warn-start":
      "Использование локальной модели whisper на машинах с ограниченной оперативной памятью или процессором может привести к зависанию TeamplGPT при обработке медиафайлов.",
    "warn-recommend":
      "Мы рекомендуем минимум 2ГБ оперативной памяти и загружать файлы <10МБ.",
    "warn-end":
      "Встроенная модель будет автоматически загружена при первом использовании.",
  },
  embedding: {
    title: "Настройки встраивания",
    "desc-start":
      "При использовании LLM, который не поддерживает встроенный механизм встраивания - возможно, потребуется дополнительно указать учетные данные для встраивания текста.",
    "desc-end":
      "Встраивание - это процесс превращения текста в векторы. Эти учетные данные необходимы для превращения ваших файлов и подсказок в формат, который TeamplGPT может использовать для обработки.",
    provider: {
      title: "Поставщик встраивания",
      description:
        "Нет необходимости в настройке при использовании встроенного механизма встраивания TeamplGPT.",
    },
  },
  text: {
    title: "Настройки разделения и сегментации текста",
    "desc-start":
      "Иногда может понадобиться изменить стандартный способ разделения и сегментации новых документов перед их вставкой в векторную базу данных.",
    "desc-end":
      "Следует изменять этот параметр только при полном понимании работы разделения текста и его побочных эффектов.",
    "warn-start": "Изменения здесь будут применяться только к",
    "warn-center": "новым встроенным документам",
    "warn-end": ", а не к существующим документам.",
    size: {
      title: "Размер сегмента текста",
      description:
        "Это максимальная длина символов, которые могут присутствовать в одном векторе.",
      recommend: "Максимальная длина модели встраивания составляет",
    },
    overlap: {
      title: "Перекрытие сегментов текста",
      description:
        "Это максимальное перекрытие символов, которое происходит при сегментации между двумя смежными сегментами текста.",
    },
  },
  vector: {
    title: "Векторная база данных",
    description:
      "Это учетные данные и настройки для того, как будет функционировать ваш экземпляр TeamplGPT. Важно, чтобы эти ключи были актуальными и правильными.",
    provider: {
      title: "Поставщик векторной базы данных",
      description: "Настройка для LanceDB не требуется.",
    },
  },
  embeddable: {
    title: "Встраиваемые виджеты чата",
    description:
      "Встраиваемые виджеты чата - это интерфейсы чата, ориентированные на публичное использование и привязанные к одному рабочему пространству. Они позволяют создавать рабочие пространства, которые затем можно публиковать в Интернете.",
    create: "Создать встраивание",
    table: {
      workspace: "Рабочее пространство",
      chats: "Отправленные чаты",
      Active: "Активные домены",
    },
  },
  "embed-chats": {
    title: "Встраивание чатов",
    description:
      "Это все записанные чаты и сообщения от любого встраивания, которое вы опубликовали.",
    table: {
      embed: "Встраивание",
      sender: "Отправитель",
      message: "Сообщение",
      response: "Ответ",
      at: "Отправлено в",
    },
  },
  multi: {
    title: "Многопользовательский режим",
    description:
      "Настройте ваш экземпляр для поддержки вашей команды, активировав многопользовательский режим.",
    enable: {
      "is-enable": "Многопользовательский режим включен",
      enable: "Включить многопользовательский режим",
      description:
        "По умолчанию, вы будете единственным администратором. Как администратор, вы должны будете создавать учетные записи для всех новых пользователей или администраторов. Не теряйте ваш пароль, так как только администратор может сбросить пароли.",
      username: "Имя пользователя учетной записи администратора",
      password: "Пароль учетной записи администратора",
    },
    password: {
      title: "Защита паролем",
      description:
        "Защитите ваш экземпляр TeamplGPT паролем. Если вы забудете его, метода восстановления не существует, поэтому убедитесь, что вы сохранили этот пароль.",
    },
    instance: {
      title: "Защитить экземпляр паролем",
      description:
        "По умолчанию, вы будете единственным администратором. Как администратор, вы должны будете создавать учетные записи для всех новых пользователей или администраторов. Не теряйте ваш пароль, так как только администратор может сбросить пароли.",
      password: "Пароль экземпляра",
    },
  },
  event: {
    title: "Журналы событий",
    description:
      "Просматривайте все действия и события, происходящие в этом экземпляре для мониторинга.",
    clear: "Очистить журналы событий",
    table: {
      type: "Тип события",
      user: "Пользователь",
      occurred: "Произошло в",
    },
  },
  privacy: {
    title: "Конфиденциальность и обработка данных",
    description:
      "Это ваша конфигурация для того, как подключенные сторонние поставщики и TeamplGPT обрабатывают ваши данные.",
    llm: "Выбор LLM",
    embedding: "Предпочтение встраивания",
    vector: "Векторная база данных",
    anonymous: "Анонимная телеметрия включена",
  },
};

export default TRANSLATIONS;
