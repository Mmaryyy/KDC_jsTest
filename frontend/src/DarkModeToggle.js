class DarkModeToggle {
  isDarkMode = null;

  constructor({ $target }) {
    const $wrapper = document.createElement("section");
    const $darkModeToggle = document.createElement("input");
    this.$darkModeToggle = $darkModeToggle;
    this.$darkModeToggle.type = "checkbox";

    $wrapper.className = "darkModeToggle_wrapper";
    $darkModeToggle.className = "darkModeToggle";
    $target.appendChild($wrapper);
    $wrapper.appendChild($darkModeToggle);
    $darkModeToggle.addEventListener("change", (e) => {
      this.setColorMode(e.target.checked);
    });
    this.initColorMode();
  }

  initColorMode() {
    // pc의 컬러모드 상태를 받아온다
    // 초기화
    // isDarkMode state, checkbox 상태, html attr
    // 리팩토링 한다면 setState로 관리하는 방법이 좋긴 하다
    this.isDarkMode = window.matchMedia("(prefer-color-scheme: dark)".matches);
    this.$darkModeToggle.checked = this.isDarkMode;
    this.setColorMode(this.isDarkMode);
  }

  setColorMode(isDarkMode) {
    document.documentElement.setAttribute(
      "color-mode",
      isDarkMode ? "dark" : "light"
    );
  }
}
