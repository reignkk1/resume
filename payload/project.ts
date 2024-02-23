import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Guess Words',
      startedAt: '2023-12',
      endedAt: '2024-01',
      where: '6번의 시도로 영단어를 맞추는 게임',
      descriptions: [
        {
          content: '라이브러리나 프레임워크 도움없이 순수 자바스크립트로 개발',
        },
        {
          content: '자바스크립트의 for 반복문과 if 조건문을 활용하여 개발',
        },
        {
          content: 'Github',
          href: 'https://github.com/reignkk1/wordle',
        },
        {
          content: '배포링크',
          href: 'https://reignkk1.github.io/wordle/',
        },
      ],
      skills: ['JavaScript'],
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
          content: ' Cheerio 라이브러리 활용한 웹 크롤링 구현',
        },
        {
          content: '웹 브라우저 저장소 localStorage를 활용한 사용자가 본 게시물은 블러처리 구현',
        },
        {
          content: 'Github',
          href: 'https://github.com/reignkk1/recruitment-app',
        },
        {
          content: '배포링크',
          href: 'https://nextjs-app-reignkk1.vercel.app/',
        },
      ],
      skills: ['Next.js', 'TypeScript', 'Emotion', 'Cheerio'],
    },
    {
      title: 'Developer Community',
      startedAt: '2023-06',
      where: '개발자 지식공유 커뮤니티',
      descriptions: [
        {
          content: 'React.js를 사용하여 싱글 페이지 어플리케이션(SPA) 구현',
        },
        {
          content: 'AJAX를 이용한 비동기 통신으로 게시판/대댓글 CRUD 개발',
        },
        {
          content: '쿠키와 세션을 활용한 사용자 인증과 인가 구현',
          descriptions: [
            { content: '세션을 사용하여 사용자 정보를 서버에서 관리함으로서 보안성 증가' },
            { content: '서버에 요청할 때마다 세션ID를 전송해야 하므로 HTTP 쿠키를 사용' },
          ],
        },
        {
          content: '서버 데이터를 캐싱하여 불필요한 API 요청 최소화',
          descriptions: [
            {
              content: '회원정보는 사용자가 변경하지 않으면 바뀌지 않으므로 데이터를 캐싱하여 관리',
            },
            {
              content: '사용자가 회원정보를 변경 하였다면 API를 호출하여 최신 데이터를 가져옴',
            },
          ],
        },
        {
          content: 'Recoil를 활용한 Flux 패턴 도입하여 데이터의 흐름을 단방향으로 개선',
          descriptions: [
            {
              content:
                '컴포넌트 간 데이터 양방향 흐름으로 데이터를 파악하기 어려워져 상태 관리의 중요성을 깨닫게 됨',
            },
          ],
        },
        {
          content: 'Express.js를 사용하여 간단한 웹 서버 구축 및 REST API 구현',
        },
        {
          content: '34개의 테스트 코드 작성으로 시스템 안정화',
        },
        {
          content: 'Github',
          href: 'https://github.com/reignkk1/developer-community',
        },
        {
          content: '배포링크',
          href: 'https://web-board-web-6g2llexw0nts.sel3.cloudtype.app/',
        },
      ],
      skills: [
        'React.js',
        'TypeScript',
        'Emotion',
        'Recoil',
        'React-Query',
        'Node.js',
        'Express.js',
        'MySQL',
      ],
    },
  ],
};
// 문제해결 설명 자세히 쓰기!@
// 자소서 다듬기!
export default project;
