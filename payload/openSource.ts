import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'parser-storages',
      descriptions: [
        {
          content: '기존 브라우저 저장소인 LocalStorage의 단점을 보안하여 만든 라이브러리',
        },
        {
          content: '객체 타입의 데이터를 저장할 때 JSON 형태로 자동 파싱하여 저장',
        },
        {
          content: 'LocalStorage에서 데이터를 가져올 때 항상 String 형태로 바뀌는 문제점을 개선',
        },
        {
          content: 'parser-storages 구현기',
          href: 'https://reignkk1.github.io/blog/parser-storages/',
        },
        {
          content: 'https://github.com/reignkk1/parser-storages',
          href: 'https://github.com/reignkk1/parser-storages',
        },
      ],
    },
  ],
};

export default openSource;
