function setLanguage(lang) {
  localStorage.setItem("preferredLanguage", lang);
  applyLanguage(lang);
}

// 언어 적용 함수
function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("preferredLanguage") || "ko"; // 기본값은 한국어
  applyLanguage(lang);
  document.getElementById("languageSelect").value = lang;
});

// 언어 변경 이벤트 리스너
document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    setLanguage(this.value);
  });
