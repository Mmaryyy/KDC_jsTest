// 어플리케이션의 가장 큰 컨테이너 컴포넌트
class App {
  // 돔을 가리키는 의미로 '$'을 표기
  $target = null;
  // 리액트, 뷰에서 관리하는 state로 생각할 수 있다.
  data = [];

  // 초기화
  constructor($target) {
    this.$target = $target;

    this.loading = new Loading({
      $target,
      // onSearch: (keyword) => {
      //   api.fetchCats(keyword).then(({ data }) => this.setState(data));
      // },
    });

    this.darkModeToggle = new DarkModeToggle({
      $target,
    });

    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        this.loading.show();
        api.fetchCats(keyword).then(({ data }) => {
          this.setState(data);
          this.loading.hide();
        });
      },
      onRandomSearch: () => {
        this.loading.show();
        api.fetchRandomCats().then(({ data }) => {
          this.setState(data);
          this.loading.hide();
        });
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
    this.data = nextData;
    // props 드릴링 같은 방법이 아니라 직접 원시적으로 전해주고 있다.
    this.searchResult.setState(nextData);
  }
}
