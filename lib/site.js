export const instagramUrl = "https://www.instagram.com/codeframe_io/";

export const telegramUrl = null;

export const phoneUrl = null;

export const whatsappNumber = "37496022234";

export const whatsappMessage =
  "Hello! I am interested in website development. I would like to discuss my project.";

export function whatsappLink(message = whatsappMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = whatsappLink();

export const storageKey = "codeframe.locale";

export const navItems = [
  { id: "services", key: "services" },
  { id: "work", key: "work" },
  { id: "pricing", key: "pricing" },
  { id: "process", key: "process" },
];

export const serviceIcons = ["browser", "layers", "cube", "lifebuoy"];

export const works = [
  {
    id: "aroma",
    mockup: "coffee",
    url: "https://aroma-cafe.base44.app/",
  },
  {
    id: "bean",
    mockup: "shop",
    url: "https://cafeweb-tau.vercel.app/en/shop",
  },
  {
    id: "steam",
    mockup: "product",
    url: null,
  },
];

export const mockupCopy = {
  en: {
    coffee: {
      brand: "AROMA",
      brandNote: "Café · Yerevan",
      nav: [
        "Menu",
        "About",
        "Gallery",
        "Visit"
      ],
      eyebrow: "SLOW BAR · KENTRON, YEREVAN",
      title: "Aroma",
      titleAccent: "Café",
      text: "Single-origin beans roasted behind the bar, Armenian herbs steeped in glass, and pastries pulled from the oven each morning — in a quiet corner of Kentron.",
      primary: "Reserve a table",
      primaryShort: "Reserve",
      secondary: "See the menu",
      hours: "Open daily · 08:00 – 22:00",
      cupLabel: "In the cup",
      cupList: "Ethiopia · Colombia · Brazil · Armenia",
      gallery: [
        {
          src: "cafe-gata",
          alt: "Armenian gata cut into wedges on a dark plate",
          caption: "Baked every morning"
        },
        {
          src: "cafe-barista",
          alt: "Barista working the espresso machine",
          caption: "Behind the bar"
        }
      ],
      badge: "Project",
      name: "Aroma Café",
      heroAlt: "Espresso being poured into a dark ceramic cup"
    },
    shop: {
      brand: "Bean & Steam",
      brandNote: "Coffee equipment",
      nav: [
        "Home",
        "Catalog",
        "Delivery"
      ],
      eyebrow: "SINCE 2019 · 12 MASHTOTS AVENUE",
      title: "Catalog",
      text: "Beans, grinders and bar tools with live stock.",
      groups: [
        "Coffee beans",
        "Equipment",
        "Accessories"
      ],
      activeGroup: "Accessories",
      products: [
        {
          src: "shop-coffee-espresso",
          name: "House Espresso Blend 1 kg",
          price: "AMD 6 500",
          stock: "In stock · 40 pcs"
        },
        {
          src: "shop-filters-v60",
          name: "Paper Filters 100 pcs",
          price: "AMD 3 500",
          stock: "In stock · 60 pcs"
        },
        {
          src: "shop-tamper-58",
          name: "Calibrated Tamper 58.5 mm",
          price: "AMD 18 500",
          stock: "In stock · 15 pcs"
        }
      ],
      cta: "Add to cart",
      footer: "12 Mashtots Avenue · Mon–Sat 09:00–20:00",
      more: "Show all 8 products",
      badge: "Project",
      name: "Bean & Steam",
      cart: "Cart · 2"
    },
    product: {
      brand: "Bean & Steam",
      eyebrow: "COFFEE BEANS",
      name: "House Espresso Blend",
      weight: "1 kg · medium roast",
      desc: "Brazil and India: chocolate, nuts, dense crema. Built for portafilter machines and milk drinks.",
      price: "AMD 6 500",
      stock: "In stock · 40 pcs",
      cta: "Add to cart",
      secondary: "Order by phone",
      notes: [
        "Chocolate",
        "Nuts",
        "Dense crema"
      ],
      rating: "4.9 · 32 reviews",
      related: [
        {
          src: "shop-filters-v60",
          label: "Paper filters 02",
          price: "AMD 3 500"
        },
        {
          src: "shop-grinder-64",
          label: "Single dose grinder",
          price: "AMD 145 000"
        }
      ],
      url: "beansteam.am / catalog / house-espresso-blend",
      relatedTitle: "Frequently bought together",
      heroAlt: "Roasted coffee beans in a dark bag"
    }
  },
  ru: {
    coffee: {
      brand: "AROMA",
      brandNote: "Кафе · Ереван",
      nav: [
        "Меню",
        "О нас",
        "Галерея",
        "Адрес"
      ],
      eyebrow: "SLOW BAR · КЕНТРОН, ЕРЕВАН",
      title: "Aroma",
      titleAccent: "Кафе",
      text: "Зёрна одного происхождения, обжаренные прямо за барной стойкой, армянские травы, заваренные в стекле, и свежая выпечка каждое утро — в тихом углу Кентрона.",
      primary: "Забронировать стол",
      primaryShort: "Бронь",
      secondary: "Смотреть меню",
      hours: "Открыто ежедневно · 08:00 – 22:00",
      cupLabel: "В чашке",
      cupList: "Эфиопия · Колумбия · Бразилия · Армения",
      gallery: [
        {
          src: "cafe-gata",
          alt: "Армянская гата, нарезанная дольками на тёмной тарелке",
          caption: "Выпекаем каждое утро"
        },
        {
          src: "cafe-barista",
          alt: "Бариста за эспрессо-машиной",
          caption: "За барной стойкой"
        }
      ],
      badge: "Проект",
      name: "Aroma Кафе",
      heroAlt: "Эспрессо наливают в тёмную керамическую чашку"
    },
    shop: {
      brand: "Bean & Steam",
      brandNote: "Кофейное оборудование",
      nav: [
        "Главная",
        "Каталог",
        "Доставка"
      ],
      eyebrow: "С 2019 · ПРОСПЕКТ МАРШТУЦА, 12",
      title: "Каталог",
      text: "Зёрна, кофемолки и барный инвентарь — остатки в реальном времени.",
      groups: [
        "Кофе в зёрнах",
        "Оборудование",
        "Аксессуары"
      ],
      activeGroup: "Аксессуары",
      products: [
        {
          src: "shop-coffee-espresso",
          name: "Домашний эспрессо-бленд 1 кг",
          price: "AMD 6 500",
          stock: "В наличии · 40 шт"
        },
        {
          src: "shop-filters-v60",
          name: "Бумажные фильтры 100 шт",
          price: "AMD 3 500",
          stock: "В наличии · 60 шт"
        },
        {
          src: "shop-tamper-58",
          name: "Калиброванный тампер 58,5 мм",
          price: "AMD 18 500",
          stock: "В наличии · 15 шт"
        }
      ],
      cta: "В корзину",
      footer: "Проспект Маштоца, 12 · Пн–Сб 09:00–20:00",
      more: "Показать все 8 товаров",
      badge: "Проект",
      name: "Bean & Steam",
      cart: "Корзина · 2"
    },
    product: {
      brand: "Bean & Steam",
      eyebrow: "КОФЕЙНЫЕ ЗЁРНА",
      name: "Домашний эспрессо-бленд",
      weight: "1 кг · средняя обжарка",
      desc: "Бразилия и Индия: шоколад, орехи, плотная крема. Для рожковых кофеварок и молочных напитков.",
      price: "AMD 6 500",
      stock: "В наличии · 40 шт",
      cta: "В корзину",
      secondary: "Заказать по телефону",
      notes: [
        "Шоколад",
        "Орехи",
        "Плотная крема"
      ],
      rating: "4,9 · 32 отзыва",
      related: [
        {
          src: "shop-filters-v60",
          label: "Бумажные фильтры 02",
          price: "AMD 3 500"
        },
        {
          src: "shop-grinder-64",
          label: "Кофемолка для одной дозы",
          price: "AMD 145 000"
        }
      ],
      url: "beansteam.am / catalog / house-espresso-blend",
      relatedTitle: "С этим часто покупают",
      heroAlt: "Обжаренные кофейные зёрна в тёмном пакете"
    }
  },
  am: {
    coffee: {
      brand: "AROMA",
      brandNote: "Սրճարան · Երևան",
      nav: [
        "Մենյու",
        "Մեր մասին",
        "Պատկերասրահ",
        "Հասցե"
      ],
      eyebrow: "SLOW BAR · ԿԵՆՏՐՈՆ, ԵՐԵՎԱՆ",
      title: "Aroma",
      titleAccent: "Սրճարան",
      text: "Ընտրված սորտի սուրճի հատիկներ, բարի հետևում թարմ սոխարկված, հայկական դեղաբույսերի թեյեր՝ ապակե բաժակով, և ամեն առավոտ թարմ թխվածքներ՝ Կենտրոնի հանգիստ անկյունում։",
      primary: "Ամրագրել սեղան",
      primaryShort: "Ամրագրել",
      secondary: "Դիտել մենյուն",
      hours: "Բաց է ամեն օր · 08:00 – 22:00",
      cupLabel: "Բաժակի մեջ",
      cupList: "Եթովպիա · Կոլումբիա · Բրազիլիա · Հայաստան",
      gallery: [
        {
          src: "cafe-gata",
          alt: "Թարմ հայկական գաթա՝ կտրատված բեկորներով, մուգ ափսեի վրա",
          caption: "Թխում ենք ամեն առավոտ"
        },
        {
          src: "cafe-barista",
          alt: "Բարիստան էսպրեսո-մեքենայի մոտ",
          caption: "Բարի հետևում"
        }
      ],
      badge: "Նախագիծ",
      name: "Aroma Սրճարան",
      heroAlt: "Էսպրեսո է լցվում մուգ կերամիկական բաժակի մեջ"
    },
    shop: {
      brand: "Bean & Steam",
      brandNote: "Սրճի սարքավորումներ",
      nav: [
        "Գլխավոր",
        "Կատալոգ",
        "Առաքում"
      ],
      eyebrow: "2019 ԹՎԱԿԱՆԻՑ · ՄԱՇՏՈՑԻ ՊՐՈՍՊԵԿՏ 12",
      title: "Կատալոգ",
      text: "Սուրճի հատիկներ, սրճաղացներ և բարի գործիքներ՝ իրական ժամանակի մնացորդներով։",
      groups: [
        "Սուրճի հատիկներ",
        "Սարքավորումներ",
        "Աքսեսուարներ"
      ],
      activeGroup: "Աքսեսուարներ",
      products: [
        {
          src: "shop-coffee-espresso",
          name: "Տնային էսպրեսո-խառնուրդ, 1 կգ",
          price: "AMD 6 500",
          stock: "Առկա է · 40 հատ"
        },
        {
          src: "shop-filters-v60",
          name: "Թղթե ֆիլտրեր, 100 հատ",
          price: "AMD 3 500",
          stock: "Առկա է · 60 հատ"
        },
        {
          src: "shop-tamper-58",
          name: "Կալիբրացված տամպեր, 58.5 մմ",
          price: "AMD 18 500",
          stock: "Առկա է · 15 հատ"
        }
      ],
      cta: "Ավելացնել զամբյուղ",
      footer: "Մաշտոցի պրոսպեկտ 12 · Երկուշաբթի–Շաբաթ 09:00–20:00",
      more: "Ցույց տալ բոլոր 8 ապրանքները",
      badge: "Նախագիծ",
      name: "Bean & Steam",
      cart: "Զամբյուղ · 2"
    },
    product: {
      brand: "Bean & Steam",
      eyebrow: "ՍՈՒՐՃԻ ՀԱՏԻԿՆԵՐ",
      name: "Տնային էսպրեսո-խառնուրդ",
      weight: "1 կգ · միջին սոխարկում",
      desc: "Բրազիլիա և Հնդկաստան՝ շոկոլադ, ընկույզ, խիտ կրեմա։ Նախատեսված է պորտաֆիլտրային սրճարանների և կաթային ըմպելիքների համար։",
      price: "AMD 6 500",
      stock: "Առկա է · 40 հատ",
      cta: "Ավելացնել զամբյուղ",
      secondary: "Պատվիրել հեռախոսով",
      notes: [
        "Շոկոլադ",
        "Ընկույզ",
        "Խիտ կրեմա"
      ],
      rating: "4,9 · 32 կարծիք",
      related: [
        {
          src: "shop-filters-v60",
          label: "Թղթե ֆիլտրեր 02",
          price: "AMD 3 500"
        },
        {
          src: "shop-grinder-64",
          label: "Սրճաղաց՝ մեկ չափաբաժնի համար",
          price: "AMD 145 000"
        }
      ],
      url: "beansteam.am / catalog / house-espresso-blend",
      relatedTitle: "Հաճախ գնում են նաև",
      heroAlt: "Սոխարկված սուրճի հատիկներ՝ մուգ փաթեթի մեջ"
    }
  },
};
