import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Comfort Music',
      startedAt: '2024-07',
      where: '뮤직 플레이어 개발',
      descriptions: [
        {
          content: '바닐라 자바스크립트로 CSR(Client-Side-Rendering) 구현',
        },
        {
          content: '바닐라 자바스크립트로 상태관리 모듈 구현',
        },
        {
          content: '뮤직 플레이어 재생/일시정지, 음소거, 음량조절, 랜덤재생, 히스토리 모듈 개발',
        },
        {
          content: 'customElements API 활용한 HTML 컴포넌트 단위 개발',
        },
        {
          content: 'Webpack을 활용한 모듈 번들링',
          descriptions: [
            { content: 'Style-loader와 CSS-loader를 활용하여 CSS 파일들을 번들링함' },
            {
              content:
                'Babel 플러그인을 사용하여 ES6 최신 문법을 ES5로 변환하여 모든 브라우저 호환성을 높임',
            },
            {
              content:
                '여러개의 JS파일들을 하나의 JS파일로 번들링하여 서버에 파일 요청 횟수 최소화',
            },
          ],
        },
        {
          content: '바닐라 자바스크립트로 나만의 상태관리 모듈 만들어보기',
          href: 'https://reignkk1.github.io/blog/state-store/',
        },
        {
          content: '파이썬을 활용한 유튜브 음원 추출 프로그램',
          href: 'https://github.com/reignkk1/mp3Tube',
        },
        {
          content: '깃허브',
          href: 'https://github.com/reignkk1/comfort',
        },
        {
          content: '배포링크',
          href: 'https://reignkk1.github.io/comfort/',
        },
        {
          skills: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'Babel', 'Style-loader', 'CSS-loader'],
        },
      ],
    },
    {
      title: 'Recruitment-App',
      startedAt: '2023-10',
      where: '개발자 채용공고 모아서 보는 웹 사이트 개발',
      descriptions: [
        {
          content: ' 여러 채용 사이트를 번거롭게 이동하며 채용 공고를 봐야하는 문제점을 개선',
        },
        {
          content: 'Next.js의 렌더링 방식을 적절히 섞어서 개발',
          descriptions: [
            {
              content:
                'SSG 방식으로 서버에서 미리 만들어진 HTML을 받아와 SEO 및 첫 페이지 로딩속도 최적화',
            },
            { content: '첫 페이지 이후의 사용자 인터렉션은 CSR 방식으로 UX 증가' },
          ],
        },
        {
          content: ' Cheerio 라이브러리 활용한 웹 크롤링 서버 구현',
        },
        {
          content: '웹 브라우저 저장소 localStorage를 활용한 사용자가 본 게시물은 블러처리 구현',
        },
        {
          content: '데이터 중심의 UI 설계',
          href: 'https://reignkk1.github.io/blog/data-driven-ui/',
        },
        {
          content: '깃허브',
          href: 'https://github.com/reignkk1/recruitment-app',
        },
        {
          content: '배포링크',
          href: 'https://recruitment-dev.vercel.app/',
        },
        {
          skills: ['Next.js', 'TypeScript', 'Context API', 'Emotion', 'Cheerio', 'Axios'],
        },
      ],
    },
  ],
};

export default project;
