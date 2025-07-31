const translations = {
  en: {
    title: "QwertyVM",
    welcomeText: "Welcome to QwertyVM!"
  },
  ru: {
    title: "КвертиВМ",
    welcomeText: "Добро пожаловать в QwertyVM!"
  },
  uk: {
    title: "КвертіВМ",
    welcomeText: "Ласкаво просимо до QwertyVM!"
  },
  pt: {
    title: "QwertyVM",
    welcomeText: "Bem-vindo ao QwertyVM!"
  },
  de: {
    title: "QwertyVM",
    welcomeText: "Willkommen bei QwertyVM!"
  },
  fr: {
    title: "QwertyVM",
    welcomeText: "Bienvenue sur QwertyVM!"
  },
  labubu: {
    title: "ЛабубуВМ",
    welcomeText: "Ла-бу-бу ла-бу-бу КвертиВМ! 😜"
  },
  dnc: {
    title: "𓂀𓃰𓆣",
    welcomeText: "𓇳𓈖𓋴𓏏𓉐𓈗𓄿𓋴𓀀𓈖𓏏𓏛"
  }
};

function setLanguage(lang) {
  const t = translations[lang] || translations['en'];
  document.getElementById('title').textContent = t.title;
  document.getElementById('welcomeText').textContent = t.welcomeText;
  document.getElementById('languageSwitcher').value = lang;
  document.getElementById('modalLanguageSwitcher').value = lang;
  localStorage.setItem('qwertyvm_lang', lang);
  closeLangModal();
}

function detectBrowserLanguage() {
  const supportedLangs = Object.keys(translations);
  const userLang = navigator.language.slice(0, 2).toLowerCase();
  if (supportedLangs.includes(userLang)) {
    return userLang;
  }
  return 'en';
}

function openLangModal() {
  document.getElementById('langModal').classList.add('active');
}

function closeLangModal() {
  document.getElementById('langModal').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('qwertyvm_lang');
  if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
  } else {
    openLangModal();
  }

  document.getElementById('languageSwitcher').addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });

  document.getElementById('confirmLang').addEventListener('click', () => {
    const lang = document.getElementById('modalLanguageSwitcher').value;
    setLanguage(lang);
  });
});
    
