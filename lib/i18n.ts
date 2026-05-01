export type Lang = 'uz' | 'ru';

export const dictionaries = {
  uz: {
    nav: {
      book: "Uchrashuv belgilash",
    },
    hero: {
      title: "Marketingingizni yangi bosqichga olib chiqamiz",
      subtitle: "Biznesingiz uchun premium darajadagi raqamli marketing xizmatlari. Zamonaviy strategiyalar va aniq natijalar.",
      ctaPrimary: "Bepul konsultatsiya",
      ctaSecondary: "Xizmatlarni ko'rish",
    },
    quickActions: {
      telegram: "Telegram orqali yozish",
      instagram: "Instagram sahifamiz",
      portfolio: "Portfolio (Telegram)",
      email: "Email orqali yozish",
      book: "Konsultatsiya belgilash",
    },
    services: {
      title: "Xizmatlarimiz",
      items: [
        {
          title: "SMM Ta'minot",
          description: "Ijtimoiy tarmoqlarda brendingizni to'g'ri va samarali yuritish. Premium darajadagi dizayn va kontent.",
        },
        {
          title: "Targeting",
          description: "Aniq maqsadli auditoriyaga yo'naltirilgan va ROI ga qaratilgan reklama kampaniyalari.",
        },
        {
          title: "Brending",
          description: "Esda qolarli va ishonchli brend yaratish."
        },
        {
          title: "Veb-saytlar ishlab chiqish",
          description: "Apple darajasidagi yuqori sifatli va tezkor veb-saytlar."
        }
      ]
    },
    caseStudies: {
      title: "Natijalarimiz",
      items: [
        {
          metric: "+300%",
          label: "Sotuvlar o'sishi",
          client: "Premium Retail",
        },
        {
          metric: "4x",
          label: "Mijozlar sadoqati",
          client: "Tech Startup",
        },
        {
          metric: "-45%",
          label: "Harajatlar qisqarishi",
          client: "B2B Kompaniya",
        }
      ]
    },
    trust: {
      title: "Bizga ishonishadi",
      text: "O'zbekistonning va xalqaro bozorning yetakchi brendlari o'z marketingini bizga topshirgan."
    },
    form: {
      title: "Biz bilan bog'lanish",
      subtitle: "Ma'lumotlaringizni qoldiring va mutaxassisimiz siz bilan tez orada bog'lanadi.",
      name: "Ismingiz",
      phone: "Telefon raqamingiz",
      company: "Kompaniya nomi (ixtiyoriy)",
      submit: "Yuborish",
      success: "Arizangiz qabul qilindi!",
      error: "Xatolik yuz berdi. Qaytadan urinib ko'ring."
    },
    faq: {
      title: "Ko'p beriladigan savollar",
      items: [
        {
          q: "Qanday sohalar bilan ishlaysiz?",
          a: "Biz asosan premium segmentdagi B2B va B2C korxonalar bilan ishlaymiz."
        },
        {
          q: "Xizmatlar narxi qancha?",
          a: "Har bir loyiha individual baholanadi. Aniq narxni bepul konsultatsiyada bilib olishingiz mumkin."
        },
        {
          q: "Natijani qachon ko'raman?",
          a: "Birinchi oylik natijalar odatda ish boshlanganidan keyin 3-4 hafta ichida namoyon bo'ladi."
        }
      ]
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan."
    }
  },
  ru: {
    nav: {
      book: "Забронировать",
    },
    hero: {
      title: "Выводим ваш маркетинг на новый уровень",
      subtitle: "Премиальные услуги цифрового маркетинга для вашего бизнеса. Современные стратегии и точные результаты.",
      ctaPrimary: "Бесплатная консультация",
      ctaSecondary: "Смотреть услуги",
    },
    quickActions: {
      telegram: "Написать в Telegram",
      instagram: "Наш Instagram",
      portfolio: "Портфолио (Telegram)",
      email: "Написать на Email",
      book: "Забронировать консультацию",
    },
    services: {
      title: "Наши услуги",
      items: [
        {
          title: "SMM Продвижение",
          description: "Правильное и эффективное ведение вашего бренда в социальных сетях. Премиальный дизайн и контент.",
        },
        {
          title: "Таргетированная реклама",
          description: "Рекламные кампании, нацеленные на точную аудиторию и сфокусированные на ROI.",
        },
        {
          title: "Брендинг",
          description: "Создание запоминающегося и надежного бренда."
        },
        {
          title: "Разработка сайтов",
          description: "Качественные и быстрые веб-сайты уровня Apple."
        }
      ]
    },
    caseStudies: {
      title: "Наши результаты",
      items: [
        {
          metric: "+300%",
          label: "Рост продаж",
          client: "Premium Retail",
        },
        {
          metric: "4x",
          label: "Лояльность клиентов",
          client: "Tech Startup",
        },
        {
          metric: "-45%",
          label: "Снижение затрат (CPL)",
          client: "B2B Компания",
        }
      ]
    },
    trust: {
      title: "Нам доверяют",
      text: "Ведущие бренды Узбекистана и международного рынка доверяют нам свой маркетинг."
    },
    form: {
      title: "Свяжитесь с нами",
      subtitle: "Оставьте свои данные, и наш специалист свяжется с вами в ближайшее время.",
      name: "Ваше имя",
      phone: "Номер телефона",
      company: "Название компании (необязательно)",
      submit: "Отправить",
      success: "Ваша заявка принята!",
      error: "Произошла ошибка. Пожалуйста, попробуйте еще раз."
    },
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "С какими нишами вы работаете?",
          a: "Мы работаем в основном с предприятиями B2B и B2C в премиальном сегменте."
        },
        {
          q: "Какова стоимость услуг?",
          a: "Каждый проект оценивается индивидуально. Точную цену вы можете узнать на бесплатной консультации."
        },
        {
          q: "Когда я увижу результаты?",
          a: "Первые результаты обычно появляются через 3-4 недели после начала работы."
        }
      ]
    },
    footer: {
      rights: "Все права защищены."
    }
  }
};
