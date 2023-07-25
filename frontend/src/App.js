console.log("app is running!");

// 어플리케이션의 가장 큰 컨테이너 컴포넌트
class App {
  // 돔을 가리키는 의미로 '$'을 표기
  $target = null;
  // 리액트, 뷰에서 관리하는 state로 생각할 수 있다.
  data = [];

  // 초기화
  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        api.fetchCats(keyword).then(({ data }) => this.setState(data));
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (image) => {
        this.imageInfo.setState({
          visible: true,
          image,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    // props 드릴링 같은 방법이 아니라 직접 원시적으로 전해주고 있다.
    this.searchResult.setState(nextData);
  }
}
