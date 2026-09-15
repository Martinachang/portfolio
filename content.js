// content.js — every word on the site lives here. Edit this file to change text.
//
// Each string has both languages side by side: { en: "...", zh: "..." }.
// A plain string (a name, a tool, an email) is the same in both languages.
// script.js reads this file and puts the words into index.html.

const content = {
  site: {
    name: { en: "Chang Chu-Pei", zh: "張主佩" },
    nameOther: { en: "張主佩", zh: "Chang Chu-Pei" },
    role: { en: "UI/UX designer and researcher", zh: "UI/UX 設計師與研究員" },
    location: { en: "Taipei, Taiwan", zh: "台灣台北" },
    email: "c21m22h29@gmail.com",
    skip: { en: "Skip to the work", zh: "跳到作品" },
    nav: {
      work: { en: "Work", zh: "作品" },
      about: { en: "About", zh: "關於" },
      skills: { en: "Skills", zh: "技能" },
      contact: { en: "Contact", zh: "聯絡" },
    },
    footer: { en: "Designed and built by Chang Chu-Pei.", zh: "由張主佩設計與製作。" },
  },

  // The home page is a desk. Each object on it leads to one section.
  desk: {
    headline: {
      en: "Even a single user's insight can make a profound impact on design.",
      zh: "即使只是一位使用者的洞察，也能深深改變一個設計。",
    },
    intro: {
      en: "UI/UX designer and researcher in Taipei. Four years of interviews, prototypes and usability tests, and one exchange semester in Kyoto.",
      zh: "台北的 UI/UX 設計師與研究員。四年的訪談、原型與易用性測試，以及在京都交換的一個學期。",
    },
    hint: { en: "Drag an object, or click it to jump to a section.", zh: "拖曳桌上的物件，或點一下前往該區塊。" },
    folder: {
      tab: { en: "Selected work", zh: "精選作品" },
      caption: { en: "A parent-child shoe-selection app", zh: "親子個人化選鞋 App" },
    },
    badge: {
      tab: { en: "About me", zh: "關於我" },
    },
    note: {
      tab: { en: "Skills & tools", zh: "技能與工具" },
      lines: [
        { en: "interviews and personas", zh: "訪談與人物誌" },
        { en: "usability tests", zh: "易用性測試" },
        { en: "Figma prototypes", zh: "Figma 原型" },
        { en: "illustration and motion", zh: "插畫與動態圖像" },
      ],
    },
    postcard: {
      tab: { en: "Contact", zh: "聯絡我" },
      title: { en: "Greetings from Kyoto", zh: "來自京都的問候" },
      body: { en: "Let's work together.", zh: "一起合作吧。" },
    },
  },

  // One project. To add another, copy this block and give it its own images.
  project: {
    name: "FeetMine",
    nameZh: "合步合腳",
    tagline: { en: "Follow your feet to choose your fit", zh: "跟著腳步，選一雙真正合腳的鞋" },
    tags: [
      { en: "UX research", zh: "使用者研究" },
      "UI/UX",
      { en: "Graduation project", zh: "畢業製作" },
    ],
    facts: [
      {
        label: { en: "Role", zh: "職責" },
        value: { en: "UX design, usability testing, character and illustration design", zh: "UX 設計、易用性測試、角色與插畫設計" },
      },
      { label: { en: "Team", zh: "團隊" }, value: { en: "3 undergraduate students, 1 advisor", zh: "3 位大學部學生、1 位指導老師" } },
      { label: { en: "Time", zh: "時間" }, value: { en: "1 year", zh: "1 年" } },
      { label: { en: "Goal", zh: "目標" }, value: { en: "A personalized parent-child shoe-selection app", zh: "打造個人化的親子選鞋 App" } },
    ],
    coverAlt: {
      en: "FeetMine home screen and measurement results, with the foot mascot",
      zh: "合步合腳的首頁與量測結果畫面，以及腳腳吉祥物",
    },

    // The quote demo: what one person said, and what we changed because of it.
    insights: {
      title: { en: "One parent said this. We changed that.", zh: "一位家長這麼說，我們因此改了設計。" },
      lead: {
        en: "Pick a quote from our interviews and usability tests to see the design decision it caused.",
        zh: "點選一句訪談或測試中的原話，看看它促成了哪個設計決定。",
      },
      decisionLabel: { en: "So we changed", zh: "所以我們改了" },
      items: [
        {
          quote: { en: "My kid only cares about how shoes look, not how they fit.", zh: "我的小孩只在意鞋子好不好看，不在乎合不合腳。" },
          who: { en: "Father, 28. In-depth interview.", zh: "28 歲的爸爸，深度訪談" },
          title: { en: "Measure the foot, not the opinion", zh: "量的是腳，不是感受" },
          decision: {
            en: "AR measurement builds a foot profile from five metrics: type, arch, instep, width and length. Fit advice no longer depends on what the child says.",
            zh: "AR 量測用五個指標建立足型檔案：型態、足弓、腳背、寬度與長度。合腳建議不再取決於孩子怎麼說。",
          },
        },
        {
          quote: {
            en: "There's lots of advice online, but none fits my child, so I don't really do research.",
            zh: "網路上建議很多，但沒有一個適合我的小孩，所以我也不太查了。",
          },
          who: { en: "Mother, 34. In-depth interview.", zh: "34 歲的媽媽，深度訪談" },
          title: { en: "Recommendations from the child's own data", zh: "用孩子自己的資料來推薦" },
          decision: {
            en: "Shoe recommendations match the child's foot profile, and reviews come from peers with the same foot type. Generic advice becomes personal advice.",
            zh: "鞋款推薦依孩子的足型檔案配對，評價則來自同足型的其他使用者。籠統的建議變成專屬的建議。",
          },
        },
        {
          quote: { en: "Stickers waste time. Scanning takes too long.", zh: "貼貼紙很浪費時間，掃描也太久了。" },
          who: { en: "Parent, usability test.", zh: "家長，易用性測試" },
          title: { en: "One coin instead of six stickers", zh: "一枚硬幣取代六張貼紙" },
          decision: {
            en: "We dropped point-to-point sticker tracking. Slide an NT$10 coin under the arch and scan. An expert validated the calibration as simpler and faster.",
            zh: "我們捨棄逐點貼貼紙的追蹤方式。把一枚十元硬幣滑到足弓下方再掃描即可。專家驗證這種校正更簡單也更快。",
          },
        },
        {
          quote: { en: "What does GFNO mean?", zh: "GFNO 是什麼意思？" },
          who: { en: "Parent, usability test.", zh: "家長，易用性測試" },
          title: { en: "Keep the code, teach the code", zh: "保留代碼，並教會家長" },
          decision: {
            en: "Two of three parents were confused by the foot-type code. We kept it and added an explanation screen, so parents learn about foot health instead of buying by length alone.",
            zh: "三位家長中有兩位看不懂足型代碼。我們保留了它，並加上說明頁，讓家長理解足部健康，而不只是看長度買鞋。",
          },
        },
      ],
    },

    // The case study, one tab per phase.
    phasesLabel: { en: "Design phases", zh: "設計階段" },
    phases: [
      {
        name: { en: "Overview", zh: "概述" },
        headline: {
          en: "A shoe-fitting guide that connects online sizing to personalized picks",
          zh: "把線上量測與個人化選鞋連在一起的合腳指南",
        },
        points: [
          {
            en: "Parents buy their children's shoes, yet many fail to choose the right pair. Guessing through size charts is slow and often wrong.",
            zh: "童鞋多半由家長挑選，卻常常買錯。對著尺寸表猜測，既慢又容易出錯。",
          },
          {
            en: "FeetMine measures a child's feet at home with AR, builds a foot profile, recommends shoes that fit, and tracks growth over time.",
            zh: "合步合腳用 AR 在家量測孩子的腳，建立足型檔案，推薦合腳的鞋，並持續記錄成長。",
          },
          {
            en: "I led UX design and usability testing, and drew the characters and illustrations. Three students and one advisor, over one year.",
            zh: "我負責 UX 設計與易用性測試，並繪製角色與插畫。三位學生與一位指導老師，歷時一年。",
          },
        ],
        figures: [
          { src: "img/service-flow.jpg", alt: { en: "Service flow: user, foot, shoes and shoe store, across pre-purchase, in-purchase and post-purchase stages", zh: "服務流程：使用者、腳、鞋子與鞋店，涵蓋購買前、購買中與購買後" } },
        ],
      },
      {
        name: { en: "Research", zh: "研究" },
        headline: { en: "Small foot flaws, big body problems", zh: "小小的足部問題，大大的身體負擔" },
        points: [
          {
            en: "Desk research: up to 80% of adults suffer from foot-related issues, and over 90% walk with an abnormal gait. Only 1.4% think foot health is not important.",
            zh: "桌面研究：高達 80% 的成人有足部相關問題，超過 90% 的人步態異常。只有 1.4% 的人認為足部健康不重要。",
          },
          {
            en: "A physical therapist interview showed that foot development is continuous, and that ages 0 to 14 set the foundation. Parents choose the shoes, but they often choose wrong.",
            zh: "訪談物理治療師後發現，足部發展是連續的過程，0 到 14 歲奠定了基礎。鞋子由家長挑選，卻常常選錯。",
          },
          {
            en: "Five common misconceptions, such as buying one size up or choosing softer shoes for comfort, cause poor foot development.",
            zh: "五個常見迷思，例如買大一號、或為了舒適選太軟的鞋，都會造成足部發育不良。",
          },
          {
            en: "Modern parents research on their phones first. 48% of brand discovery happens online, and 62% still check the product in store.",
            zh: "現代家長先用手機做功課。48% 的品牌認識來自線上，但仍有 62% 會到店裡確認商品。",
          },
        ],
        figures: [
          {
            src: "img/research-stats.jpg",
            alt: { en: "Three charts: top foot issues in workers, when people start caring about foot health, and gait types", zh: "三張圖表：上班族常見足部問題、人們開始關心足部健康的年齡、步態類型" },
          },
          {
            src: "img/foot-development.jpg",
            alt: { en: "Foot development stages from birth to seniors, with ages 0 to 14 highlighted", zh: "從出生到老年的足部發展階段，強調 0 到 14 歲" },
          },
        ],
      },
      {
        name: { en: "Insights", zh: "洞察" },
        headline: { en: "What problems do parents face when buying children's shoes?", zh: "家長買童鞋時，究竟遇到什麼困難？" },
        points: [
          {
            en: "In-depth interviews with 7 parents of children aged 6 to 12, in person and in cafés.",
            zh: "與 7 位 6 到 12 歲孩子的家長進行深度訪談，在家中或咖啡廳面對面進行。",
          },
          {
            en: "Pain point: children struggle to express comfort. Need: accurate sizing and fit guidance that does not rely on the child's opinion.",
            zh: "痛點：孩子說不清楚鞋子舒不舒服。需求：不依賴孩子感受的精準尺寸與合腳建議。",
          },
          {
            en: "Pain point: no personalized foot data. Need: fast, personalized guidance online, in an app.",
            zh: "痛點：沒有孩子專屬的足部資料。需求：在 App 裡就能取得快速、個人化的建議。",
          },
          {
            en: "Competitors cover one or two steps of the journey. FeetMine covers all five: goal, measure, select, purchase, evaluate.",
            zh: "競品只涵蓋購鞋旅程的一兩個步驟。合步合腳涵蓋全部五步：目標、量測、挑選、購買、評估。",
          },
          {
            en: "How might we educate parents and give them reliable tools to pick the right shoe size and structure?",
            zh: "我們該如何教育家長，並提供可靠的工具，讓他們輕鬆選對鞋子的尺寸與結構？",
          },
        ],
        figures: [
          {
            src: "img/competitive.jpg",
            alt: { en: "Competitive analysis: FeetMine covers all five steps, three competitors cover one or two", zh: "競品分析：合步合腳涵蓋全部五個步驟，三個競品只涵蓋一到兩個" },
          },
        ],
      },
      {
        name: { en: "Design", zh: "設計" },
        headline: { en: "Healthy childhood steps for lifelong comfort", zh: "健康的童年步伐，一輩子的舒適" },
        points: [
          {
            en: "Three design goals: simplify foot measurement, guide a personalized fit, and track continuous growth.",
            zh: "三個設計目標：簡化足部量測、引導個人化的合腳選擇、持續追蹤成長。",
          },
          {
            en: "Five flows: profile and home, AR measurement, foot ID and mascot, smart selection, growth evaluation.",
            zh: "五個流程：個人檔案與首頁、AR 量測、足型 ID 與吉祥物、智慧選鞋、成長評估。",
          },
          {
            en: "Each child gets a foot mascot generated from their foot profile. Kids can recolor it, which builds ownership and makes recommendations easy to recognize.",
            zh: "每個孩子都會得到一隻依足型生成的腳腳吉祥物。孩子可以自己換顏色，建立擁有感，也讓推薦一眼就能辨認。",
          },
        ],
        figures: [
          {
            src: "img/prototype-flows.jpg",
            alt: { en: "Five prototype screens: home, AR measurement, foot ID, smart selection, growth evaluation", zh: "五個原型畫面：首頁、AR 量測、足型 ID、智慧選鞋、成長評估" },
          },
          { src: "img/ar-measure.jpg", alt: { en: "A parent scanning a child's foot with the phone", zh: "家長用手機掃描孩子的腳" } },
          { src: "img/mascots.jpg", alt: { en: "Eight foot mascots in different colors", zh: "八隻不同顏色的腳腳吉祥物" } },
        ],
      },
      {
        name: { en: "Testing", zh: "測試" },
        headline: { en: "Can parents measure feet on their own?", zh: "家長能自己完成量測嗎？" },
        points: [
          {
            en: "Moderated usability tests with 3 parents of children aged 6 to 12, on a mobile prototype.",
            zh: "以手機原型對 3 位 6 到 12 歲孩子的家長進行引導式易用性測試。",
          },
          {
            en: "Sticker-based point-to-point tracking was slow. We replaced it with a coin calibration: slide an NT$10 coin under the arch and scan. An expert validated it as simpler and faster.",
            zh: "貼貼紙逐點追蹤太慢。我們改成硬幣校正：把一枚十元硬幣滑到足弓下方再掃描。專家驗證後，確認更簡單也更快。",
          },
          {
            en: "Two of three parents did not understand the foot-type code at first. We kept it and added an explanation, so parents learn foot health instead of buying by length alone.",
            zh: "三位家長中有兩位一開始看不懂足型代碼。我們保留了它，並加上說明，讓家長不再只看長度買鞋，而是理解足部健康。",
          },
        ],
        figures: [
          {
            src: "img/usability.jpg",
            alt: { en: "Usability test results: coin calibration replaces sticker tracking, and the foot type code gets an explanation", zh: "易用性測試結果：硬幣校正取代貼紙追蹤，足型代碼加上說明" },
          },
        ],
      },
      {
        name: { en: "Outcome", zh: "成果" },
        headline: { en: "Exhibited at YODEX and nominated for the Vision Get Wild award", zh: "於新一代設計展展出，並入圍金點新秀設計獎" },
        points: [
          {
            en: "At the Young Designers' Exhibition (YODEX), parents and visitors tested FeetMine live. They praised the precise fitting and asked about measurement accuracy and technical feasibility.",
            zh: "在新一代設計展上，家長與觀眾現場試用合步合腳。他們稱讚精準的合腳建議，也詢問量測準確度與技術可行性。",
          },
          {
            en: "Nominated in the Vision Get Wild cross-disciplinary category. We pitched B2B and B2C models to industry judges and brands.",
            zh: "入圍金點新秀設計獎跨領域類。我們向業界評審與品牌提案 B2B 與 B2C 商業模式。",
          },
          {
            en: "Business model: a Foot ID card matches partner footwear to foot types for families, and gives brands feedback across foot profiles.",
            zh: "商業模式：足型 ID 卡為家庭配對合作品牌的鞋款，也讓品牌獲得跨足型的回饋資料。",
          },
          {
            en: "Design highlights: AR foot profiling, feature-based shoe recommendations, and foot shape records that follow a child's growth.",
            zh: "設計亮點：AR 足型建檔、依足部特徵推薦鞋款、以及陪伴孩子成長的足型紀錄。",
          },
        ],
        figures: [
          { src: "img/results-1.jpg", alt: { en: "The FeetMine booth at YODEX", zh: "合步合腳在新一代設計展的攤位" } },
          { src: "img/results-2.jpg", alt: { en: "Presenting FeetMine to visitors at the booth", zh: "在攤位向觀眾介紹合步合腳" } },
          { src: "img/results-3.jpg", alt: { en: "The team at the booth", zh: "團隊在攤位合影" } },
          { src: "img/foot-id-card.jpg", alt: { en: "The Foot ID card with partner stores", zh: "足型 ID 卡與合作店家" } },
        ],
      },
    ],
  },

  about: {
    greeting: { en: "Hello! I'm Chang Chu-Pei.", zh: "你好，我是張主佩。" },
    photoAlt: { en: "Chang Chu-Pei standing in front of hydrangeas", zh: "張主佩站在繡球花前" },
    bio: [
      {
        en: "With four years in UI/UX across diverse domains, I've honed sharp observation skills and a flexible, user-centered mindset.",
        zh: "四年來在不同領域的 UI/UX 經驗，磨練出敏銳的觀察力，以及彈性的使用者中心思維。",
      },
      {
        en: "My six-month exchange in Kyoto deepened my cross-cultural perspective and my appreciation for detail-oriented Japanese design.",
        zh: "在京都交換的半年，拓展了我的跨文化視野，也讓我更欣賞日本設計對細節的講究。",
      },
    ],
    experienceTitle: { en: "Experience", zh: "經歷" },
    experience: [
      { when: { en: "Sep 2025 – Mar 2026", zh: "2025.09 – 2026.03" }, what: { en: "Exchange student, Kyoto Institute of Technology", zh: "京都工藝纖維大學 交換學生" } },
      { when: { en: "Dec 2024", zh: "2024.12" }, what: { en: "Taipei Illustration Fair", zh: "台北插畫藝術節" } },
      { when: { en: "Oct 2024", zh: "2024.10" }, what: { en: "The 8th Asia Color Association Conference", zh: "第八屆亞洲色彩學會研討會" } },
      { when: { en: "Jul – Oct 2024", zh: "2024.07 – 2024.10" }, what: { en: "Local Design Innovation Action, Chunghwa Telecom Foundation", zh: "中華電信基金會 在地設計創新行動" } },
      { when: "2024", what: { en: "Finalist, Vision Get Wild award, cross-domain category", zh: "金點新秀設計獎 跨領域類 入圍" } },
      { when: "2023", what: { en: "Finalist, Special Enterprise Award, Taiwan International Student Design Competition", zh: "台灣國際學生創意設計大賽 企業特別獎 入圍" } },
      { when: "2023", what: { en: "Key visual and mascot illustrator, Department of Digital Media Design, Tatung University", zh: "大同大學媒體設計學系 主視覺與吉祥物插畫" } },
      { when: "2023", what: { en: "Recipient, NSTC Undergraduate Student Research Grant", zh: "國科會大專學生研究計畫 獲補助" } },
    ],
    educationTitle: { en: "Education", zh: "學歷" },
    education: [
      {
        when: { en: "Sep 2024 – present", zh: "2024.09 – 至今" },
        what: { en: "Master of Digital Media Design, Tatung University", zh: "大同大學 媒體設計學系碩士班" },
        detail: { en: "UI/UX, color research, avatar design", zh: "UI/UX、色彩研究、虛擬角色設計" },
      },
      {
        when: { en: "Sep 2020 – Jun 2024", zh: "2020.09 – 2024.06" },
        what: { en: "Interactive Media Design, Department of Media Design, Tatung University", zh: "大同大學 媒體設計學系 互動媒體設計組" },
        detail: { en: "UI/UX, graphic design, motion graphics", zh: "UI/UX、平面設計、動態圖像" },
      },
    ],
    workTitle: { en: "Worked", zh: "工作經驗" },
    work: [
      { when: { en: "May 2024 – Mar 2025", zh: "2024.05 – 2025.03" }, what: { en: "Graphic designer, JusYoung Integrated Marketing Co., Ltd.", zh: "平面設計師，JusYoung Integrated Marketing Co., Ltd." } },
      { when: { en: "Apr 2022 – Jun 2023", zh: "2022.04 – 2023.06" }, what: { en: "Graphic designer, DIF Design Co., Ltd.", zh: "平面設計師，DIF Design Co., Ltd." } },
    ],
    languagesTitle: { en: "Languages", zh: "語言" },
    languages: ["TOEIC 760", "Linguaskill B2", "JLPT N3"],
  },

  skills: {
    title: { en: "Skills & tools", zh: "技能與工具" },
    groups: [
      {
        name: "UI/UX",
        items: [
          { en: "Wireframing", zh: "線框圖" },
          { en: "Prototyping", zh: "原型製作" },
          { en: "Design system", zh: "設計系統" },
          { en: "Mockup", zh: "視覺稿" },
          "Figma",
          "Adobe XD",
        ],
      },
      {
        name: { en: "User research", zh: "使用者研究" },
        items: [
          { en: "Design thinking", zh: "設計思考" },
          { en: "Interview", zh: "訪談" },
          { en: "User story", zh: "使用者故事" },
          { en: "Journey map", zh: "旅程地圖" },
          { en: "Persona", zh: "人物誌" },
          { en: "User flow", zh: "使用者流程" },
          { en: "Usability test", zh: "易用性測試" },
          "Notion",
          "Miro",
          "SPSS",
          "EndNote",
        ],
      },
      {
        name: { en: "Design", zh: "設計" },
        items: [
          { en: "Visual design", zh: "視覺設計" },
          { en: "Graphic design", zh: "平面設計" },
          { en: "Motion graphics", zh: "動態圖像" },
          "Photoshop",
          "Illustrator",
          "After Effects",
          "Canva",
        ],
      },
      {
        name: { en: "AI tools", zh: "AI 工具" },
        items: ["ChatGPT", "Gemini", "Monica", "Claude", "Copilot"],
      },
    ],
  },

  contact: {
    title: { en: "Let's work together.", zh: "一起合作吧。" },
    body: {
      en: "I'm open to UI/UX and research roles, internships, and collaborations. Email is the fastest way to reach me.",
      zh: "歡迎 UI/UX 與研究相關的職缺、實習與合作邀約。寄信給我是最快的方式。",
    },
    button: { en: "Write to me", zh: "寄信給我" },
  },
};
