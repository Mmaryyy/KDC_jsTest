const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onRandomSearch }) {
    const $wrapper = document.createElement("section");
    $wrapper.className = "SearchInput_wrapper";
    $target.appendChild($wrapper);

    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    $searchInput.className = "SearchInput";
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    $wrapper.appendChild($searchInput);

    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    const $randomButton = document.createElement("button");
    this.$randomButton = $randomButton;
    this.$randomButton.className = "RandomButton";
    this.$randomButton.textContent = "랜덤고양이";

    $wrapper.appendChild($randomButton);

    $randomButton.addEventListener("click", (e) => {
      onRandomSearch();
    });
  }
  render() {}
}
