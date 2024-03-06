import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'react-url-paginate',
      descriptions: [
        {
          content: '프론트 개발에 자주 사용되는 페이지 네이션 기능을 라이브러리로 구현',
        },
        {
          content: 'React.js & TypeScript 기반 컴포넌트',
        },
        {
          content: 'Github',
          href: 'https://github.com/reignkk1/react-url-paginate',
        },
        {
          content: 'NPM',
          href: 'https://www.npmjs.com/package/react-url-paginate',
        },
      ],
    },
    {
      title: 'parser-localStorage',
      descriptions: [
        {
          content: '기존 브라우저 저장소인 LocalStorage의 단점을 보안하여 만든 라이브러리',
        },
        {
          content: '객체 타입의 데이터를 저장할 때 JSON 형태로 자동 파싱하여 저장',
        },
        {
          content: '데이터를 가져올 때 항상 String 형태로 바뀌는 문제점을 개선',
        },
        {
          content: 'Github',
          href: 'https://github.com/reignkk1/parser-localstorage',
        },
        {
          content: 'NPM',
          href: 'https://www.npmjs.com/package/parser-localstorage',
        },
      ],
    },
  ],
};

export default openSource;
