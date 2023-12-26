import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Recruitment-App',
      startedAt: '2023-10',
      where: '개발자 채용공고 모아서 보는 웹 사이트 개발',
      descriptions: [
        {
          content: 'Next.js의 렌더링 방식을 적절히 섞어서 개발',
          descriptions: [
            { content: '첫 페이지는 SSG 방식으로 SEO 및 로딩속도 최적화' },
            { content: '첫 페이지 이후의 사용자 인터렉션은 CSR 방식으로 UX 증가' },
          ],
        },
        {
          content: ' 여러 채용 사이트를 번거롭게 이동하며 채용 공고를 봐야하는 문제점을 개선',
        },
        {
          content: ' Cheerio 라이브러리 활용한 웹 크롤링 구현',
        },
        {
          content: '웹 브라우저 저장소 localStorage를 활용한 사용자가 본 게시물은 블러처리 구현',
        },
        {
          content: 'https://github.com/reignkk1/recruitment-app',
          href: 'https://github.com/reignkk1/recruitment-app',
        },
      ],
      skills: ['Next.js', 'TypeScript', 'Emotion', 'Cheerio'],
    },
    {
      title: '코딩 바다',
      startedAt: '2023-05',
      endedAt: '2023-07',
      where: ' 코딩 과외 플랫폼 프론트엔드 개발 ( FE2, BE2 )',
      descriptions: [
        {
          content: '게시물 CRUD, 쪽지 보내기, 검색, 필터링 기능 개발 담당',
        },
        {
          content: '반복되는 UI 공통 컴포넌트 제작으로 재사용성 및 유지보수성 높임',
          descriptions: [
            { content: '이벤트 버블링을 막아(stopPropagation) 모달창 컴포넌트 구현' },
            { content: 'Controlled Component 활용한 실시간 사용자의 입력을 판단하고 검증함' },
          ],
        },
        {
          content: '무한 스크롤 구현하여 UX 개선 및 모바일 환경 개선',
          descriptions: [
            {
              content:
                '페이지 번호를 클릭해서 이동하는 것은 모바일 환경에서는 불편한 사용자 경험을 주는 문제 발생',
            },
            {
              content:
                'DOM API를 활용한 사용자의 스크롤 위치를 추적하여 스크롤이 맨 밑으로 왔다면 데이터를 Fetch',
            },
          ],
        },
        {
          content: ' Redux를 활용한 Flux 패턴 도입하여 데이터의 흐름을 단방향으로 개선',
          descriptions: [
            {
              content:
                '컴포넌트 간 데이터 양방향 흐름으로 데이터를 파악하기 어려워져 상태 관리의 중요성을 깨닫게 됨',
            },
          ],
        },
        {
          content: 'https://github.com/reignkk1/coding-tutoring-client',
          href: 'https://github.com/reignkk1/coding-tutoring-client',
        },
      ],
      skills: ['React.js', 'TypeScript', 'Styled-Components', 'Redux-Toolkit', 'Redux-Thunk'],
    },
    {
      title: 'Developer Community',
      startedAt: '2023-03',
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
          content: 'Express.js를 사용하여 간단한 웹 서버 구축 및 REST API 구현',
        },
        {
          content: '34개의 테스트 코드 작성으로 시스템 안정화',
        },
        {
          content: 'https://github.com/reignkk1/developer-community',
          href: 'https://github.com/reignkk1/developer-community',
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
