export const defaultLocale = "en";

export const localeOptions = [
  { code: "en", label: "EN", htmlLang: "en" },
  { code: "am", label: "HY", htmlLang: "hy" },
  { code: "ru", label: "RU", htmlLang: "ru" },
];

const en = {
  meta: {
    title: "CodeFrame — Web Design & Development Studio",
    description:
      "We build modern, conversion-focused websites and web applications that help businesses attract customers and grow.",
  },
  nav: {
    services: "Services",
    work: "Work",
    process: "Process",
  },
  header: {
    direct: "Discuss a project",
  },
  hero: {
    eyebrow: "WEB DESIGN & DEVELOPMENT",
    titleLead: "Your business deserves",
    titleAccent: "a great website.",
    text: "We design and build fast, responsive websites and web applications — for cafés, local businesses and startups that want to turn visitors into customers.",
    cta: "Discuss Your Project",
    ctaSecondary: "View Our Work",
    note: "Design and development in one team.",
  },
  services: {
    eyebrow: "EXPERTISE",
    title: "What we create",
    text: "From the first idea and early prototypes to launch and ongoing growth.",
    items: [
      {
        title: "Business websites",
        text: "Landing pages, business sites, café & restaurant websites and online stores.",
      },
      {
        title: "Web applications",
        text: "Custom frontend and backend built on a reliable stack.",
      },
      {
        title: "UI/UX design",
        text: "Clear interfaces and a comfortable user experience.",
      },
      {
        title: "Support",
        text: "Technical support, updates and continuous development.",
      },
    ],
  },
  work: {
    eyebrow: "SELECTED WORK",
    title: "Examples of our work",
    text: "Demonstration projects built by our team — concepts that show how we approach real business websites. They are demo projects, not client orders.",
    tag: "DEMO PROJECT",
    cta: "View live demo",
    projects: [
      { name: "Aroma Café", type: "A website concept for a specialty café" },
      { name: "Bean & Steam", type: "Online store: catalog, stock and cart" },
      { name: "Bean & Steam · Order", type: "Product page and checkout flow" },
    ],
  },
  why: {
    eyebrow: "WHY CODEFRAME",
    title: "What makes us different",
    text: "Design and development in one team, so the result looks intentional and works reliably.",
    points: [
      {
        title: "Design and development, one team",
        text: "No handoff losses — the people who design the interface also build it.",
      },
      {
        title: "Built for real business",
        text: "Every decision serves a goal: get inquiries, explain the service, load fast.",
      },
      {
        title: "Performance and accessibility",
        text: "Clean, semantic code that is fast on mobile and usable by everyone.",
      },
      {
        title: "Honest presentation",
        text: "We show demo projects as demos — no invented results or fake reviews.",
      },
    ],
  },
  process: {
    eyebrow: "PROCESS",
    title: "How we work",
    steps: [
      {
        title: "We discuss the task",
        text: "We listen to your business and define clear goals for the project.",
      },
      {
        title: "We develop the design",
        text: "We build a clear structure and a strong visual identity.",
      },
      {
        title: "We create the website",
        text: "We turn the design into a fast, responsive product.",
      },
      {
        title: "We launch the project",
        text: "We test, launch and keep helping you grow.",
      },
    ],
  },
  tech: {
    eyebrow: "TECHNOLOGIES",
    title: "What we build with",
    text: "A modern, well-supported stack for websites and web applications.",
    groups: [
      {
        label: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        label: "Backend",
        items: ["Node.js", "REST APIs", "Databases"],
      },
      {
        label: "Quality",
        items: [
          "Responsive design",
          "Performance",
          "Accessibility",
          "SEO-friendly markup",
        ],
      },
    ],
  },
  cta: {
    eyebrow: "LET'S START",
    title: "Have an idea for a project?",
    text: "Let's turn it into a working digital product. Message us on Instagram and we'll discuss your website.",
    button: "Message us on Instagram",
    channelsLabel: "Prefer another channel?",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    phone: "Phone",
    note: "We usually reply within one business day.",
  },
  footer: {
    tagline: "WEB DESIGN & DEVELOPMENT",
    rights: "© 2026 CodeFrame.",
  },
};

const am = {
  meta: {
    title: "CodeFrame — Վեբ դիզայն և մշակման ստուդիա",
    description:
      "Ստեղծում ենք ժամանակակից, հաճախորդներ ներգրավող կայքեր և վեբ հավելվածներ, որոնք օգնում են բիզնեսին աճել։",
  },
  nav: {
    services: "Ծառայություններ",
    work: "Աշխատանքներ",
    process: "Գործընթաց",
  },
  header: {
    direct: "Քննարկել նախագիծ",
  },
  hero: {
    eyebrow: "ՎԵԲ ԴԻԶԱՅՆ ԵՎ ՄՇԱԿՈՒՄ",
    titleLead: "Ձեր բիզնեսն արժանի է",
    titleAccent: "հիանալի կայքի։",
    text: "Նախագծում և մշակում ենք արագ, ադապտիվ կայքեր ու վեբ հավելվածներ՝ սրճարանների, տեղական բիզնեսի և ստարտափների համար, որոնք ցանկանում են այցելուներին վերածել հաճախորդների։",
    cta: "Քննարկել նախագիծը",
    ctaSecondary: "Տեսնել աշխատանքները",
    note: "Դիզայնն ու մշակումը՝ միասին, մեկ թիմում։",
  },
  services: {
    eyebrow: "ՄԵՐ ՄԱՍՆԱԳԻՏՈՒԹՅՈՒՆԸ",
    title: "Ինչ ենք ստեղծում",
    text: "Առաջին գաղափարից և նախնական նախատիպերից մինչև գործարկումն ու հետագա զարգացումը։",
    items: [
      {
        title: "Բիզնես կայքեր",
        text: "Ներգրավման էջեր, բիզնես-կայքեր, սրճարանների և ռեստորանների կայքեր, առցանց խանութներ։",
      },
      {
        title: "Վեբ հավելվածներ",
        text: "Հատուկ ֆրոնտենդ և բեքենդ՝ հուսալի տեխնոլոգիական բազայով։",
      },
      {
        title: "UI/UX դիզայն",
        text: "Հստակ ինտերֆեյս և օգտատիրոջ հարմարավետ փորձառություն։",
      },
      {
        title: "Աջակցություն",
        text: "Տեխնիկական սպասարկում, թարմացումներ և նախագծի զարգացում։",
      },
    ],
  },
  work: {
    eyebrow: "ԸՆՏՐՎԱԾ ԱՇԽԱՏԱՆՔՆԵՐ",
    title: "Մեր աշխատանքների օրինակներ",
    text: "Մեր թիմի մշակած ցուցադրական նախագծեր՝ կոնցեպտներ, որոնք ցույց են տալիս մեր մոտեցումը իրական բիզնես-կայքերին։ Սրանք դեմո նախագծեր են, ոչ թե հաճախորդների պատվերներ։",
    tag: "ԴԵՄՈ ՆԱԽԱԳԻԾ",
    cta: "Դիտել դեմոն",
    projects: [
      {
        name: "Aroma Café",
        type: "Սրճարանի կայքի կոնցեպտ",
      },
      {
        name: "Bean & Steam",
        type: "Առցանց խանութ՝ կատալոգ, մնացորդներ և զամբյուղ",
      },
      {
        name: "Bean & Steam · Պատվեր",
        type: "Ապրանքի էջ և պատվերի ձևակերպում",
      },
    ],
  },
  why: {
    eyebrow: "ԻՆՉՈՒ ՄԵՆՔ",
    title: "Ինչո՞վ ենք աչքի ընկնում",
    text: "Դիզայնն ու մշակումը մեկ թիմում, ուստի արդյունքը ամբողջական է և հուսալի։",
    points: [
      {
        title: "Դիզայն և մշակում՝ միասին",
        text: "Չկա տեղեկատվության կորստի փուլ. ինտերֆեյսը նախագծողները նույնն են, ովքեր մշակում են այն։",
      },
      {
        title: "Իրական բիզնեսի համար",
        text: "Յուրաքանչյուր որոշում ծառայում է նպատակին. ստանալ հայտեր, բացատրել ծառայությունը, արագ բեռնվել։",
      },
      {
        title: "Արագություն և հասանելիություն",
        text: "Մաքուր, իմաստային կոդ. արագ է աշխատում մոբայլում և հարմար է բոլորի համար։",
      },
      {
        title: "Ազնիվ ներկայացում",
        text: "Ցուցադրում ենք դեմոն որպես դեմո. առանց կեղծ արդյունքների և կեղծ կարծիքների։",
      },
    ],
  },
  process: {
    eyebrow: "ԳՈՐԾԸՆԹԱՑ",
    title: "Ինչպես ենք աշխատում",
    steps: [
      {
        title: "Քննարկում ենք խնդիրը",
        text: "Ուշադիր լսում ենք ձեր բիզնեսը և սահմանում նախագծի հստակ նպատակները։",
      },
      {
        title: "Մշակում ենք դիզայնը",
        text: "Ստեղծում ենք հստակ կառուցվածք և արտահայտիչ տեսողական ոճ։",
      },
      {
        title: "Ստեղծում ենք կայքը",
        text: "Դիզայնը վերածում ենք արագ, տարբեր սարքերին հարմարվող արդյունքի։",
      },
      {
        title: "Գործարկում ենք նախագիծը",
        text: "Թեստավորում ենք, գործարկում և շարունակում օգնել ձեզ աճել։",
      },
    ],
  },
  tech: {
    eyebrow: "ՏԵԽՆՈԳԻԱՆԵՐ",
    title: "Ո՞ր գործիքներով ենք ստեղծում",
    text: "Ժամանակակից, աջակցվող սթեք կայքերի և վեբ հավելվածների համար։",
    groups: [
      {
        label: "Ֆրոնտենդ",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        label: "Բեքենդ",
        items: ["Node.js", "REST API", "Տվյալների շտեմարաններ"],
      },
      {
        label: "Որակ",
        items: [
          "Ադապտիվ դիզայն",
          "Արագագործություն",
          "Հասանելիություն",
          "SEO-համատեղելի նշագրում",
        ],
      },
    ],
  },
  cta: {
    eyebrow: "ՍԿՍԵՆՔ",
    title: "Ունե՞ք նախագծի գաղափար։",
    text: "Եկեք միասին այն վերածենք աշխատող թվային արդյունքի։ Գրեք մեզ Instagram-ում, և մենք կքննարկենք ձեր կայքը։",
    button: "Գրեք մեզ Instagram-ում",
    channelsLabel: "Նախընտրո՞ւմ եք կապի այլ ուղի։",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    phone: "Հեռախոս",
    note: "Սովորաբար պատասխանում ենք մեկ աշխատանքային օրվա ընթացքում։",
  },
  footer: {
    tagline: "ՎԵԲ ԴԻԶԱՅՆ ԵՎ ՄՇԱԿՈՒՄ",
    rights: "© 2026 CodeFrame.",
  },
};

const ru = {
  meta: {
    title: "CodeFrame — студия веб-дизайна и разработки",
    description:
      "Создаём современные сайты и веб-приложения, которые привлекают клиентов и помогают бизнесу расти.",
  },
  nav: {
    services: "Услуги",
    work: "Работы",
    process: "Процесс",
  },
  header: {
    direct: "Обсудить проект",
  },
  hero: {
    eyebrow: "ВЕБ-ДИЗАЙН И РАЗРАБОТКА",
    titleLead: "Ваш бизнес заслуживает",
    titleAccent: "отличного сайта.",
    text: "Проектируем и разрабатываем быстрые, адаптивные сайты и веб-приложения — для кафе, локального бизнеса и стартапов, которые хотят превращать посетителей в клиентов.",
    cta: "Обсудить ваш проект",
    ctaSecondary: "Смотреть работы",
    note: "Дизайн и разработка — в одной команде.",
  },
  services: {
    eyebrow: "КОМПЕТЕНЦИИ",
    title: "Что мы создаём",
    text: "От первой идеи и ранних прототипов до запуска и дальнейшего развития.",
    items: [
      {
        title: "Бизнес-сайты",
        text: "Лендинги, бизнес-сайты, сайты кафе и ресторанов и интернет-магазины.",
      },
      {
        title: "Веб-приложения",
        text: "Пользовательский фронтенд и бэкенд на надёжном стеке.",
      },
      {
        title: "UI/UX дизайн",
        text: "Понятный интерфейс и удобный пользовательский опыт.",
      },
      {
        title: "Поддержка",
        text: "Техническая поддержка, обновления и развитие проекта.",
      },
    ],
  },
  work: {
    eyebrow: "ИЗБРАННЫЕ РАБОТЫ",
    title: "Примеры наших работ",
    text: "Демонстрационные проекты, которые мы разработали сами, — концепты, показывающие наш подход к реальным бизнес-сайтам. Это демо-проекты, а не заказы клиентов.",
    tag: "ДЕМО-ПРОЕКТ",
    cta: "Смотреть демо",
    projects: [
      { name: "Aroma Café", type: "Концепт сайта для спешелти-кофейни" },
      { name: "Bean & Steam", type: "Интернет-магазин: каталог, остатки, корзина" },
      { name: "Bean & Steam · Заказ", type: "Страница товара и оформление заказа" },
    ],
  },
  why: {
    eyebrow: "ПОЧЕМУ CODEFRAME",
    title: "Что нас отличает",
    text: "Дизайн и разработка в одной команде — результат выглядит целостно и работает надёжно.",
    points: [
      {
        title: "Дизайн и разработка вместе",
        text: "Без потерь при передаче: интерфейс проектируют те, кто его реализует.",
      },
      {
        title: "Для реального бизнеса",
        text: "Каждое решение служит цели: получать заявки, объяснять услугу, быстро загружаться.",
      },
      {
        title: "Производительность и доступность",
        text: "Чистый семантичный код: быстро на мобильных и удобно для всех.",
      },
      {
        title: "Честная подача",
        text: "Показываем демо как демо — без выдуманных результатов и фейковых отзывов.",
      },
    ],
  },
  process: {
    eyebrow: "ПРОЦЕСС",
    title: "Как мы работаем",
    steps: [
      {
        title: "Обсуждаем задачу",
        text: "Внимательно слушаем ваш бизнес и определяем чёткие цели проекта.",
      },
      {
        title: "Разрабатываем дизайн",
        text: "Создаём понятную структуру и сильный визуальный образ.",
      },
      {
        title: "Создаём сайт",
        text: "Превращаем дизайн в быстрый и адаптивный продукт.",
      },
      {
        title: "Запускаем проект",
        text: "Тестируем, запускаем и продолжаем помогать вам расти.",
      },
    ],
  },
  tech: {
    eyebrow: "ТЕХНОЛОГИИ",
    title: "На чём мы строим",
    text: "Современный поддерживаемый стек для сайтов и веб-приложений.",
    groups: [
      {
        label: "Фронтенд",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        label: "Бэкенд",
        items: ["Node.js", "REST API", "Базы данных"],
      },
      {
        label: "Качество",
        items: [
          "Адаптивная вёрстка",
          "Производительность",
          "Доступность",
          "SEO-разметка",
        ],
      },
    ],
  },
  cta: {
    eyebrow: "НАЧНЁМ",
    title: "Есть идея проекта?",
    text: "Давайте превратим её в работающий цифровой продукт. Напишите нам в Instagram — обсудим ваш сайт.",
    button: "Написать в Instagram",
    channelsLabel: "Удобнее другим способом?",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    phone: "Телефон",
    note: "Обычно отвечаем в течение одного рабочего дня.",
  },
  footer: {
    tagline: "ВЕБ-ДИЗАЙН И РАЗРАБОТКА",
    rights: "© 2026 CodeFrame.",
  },
};

export const dictionary = { en, am, ru };
