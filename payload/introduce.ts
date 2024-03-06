import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    `안녕하세요, 김민겸입니다.
    `,
    `저는 프로그래머스 LV1 정도의 알고리즘 실력을 보유 중이며, React.js, TypeScript 등의 기술들을 사용하여 프론트엔드 개발을 중점적으로 즐겨하고 있습니다.
    개발자로서의 역량을 향상시키기 위해 공학적 지식들을 정리하고자 개인 블로그를 작성 중에 있으며 꾸준히 학습하는 것에 도움이 많이 되고 있습니다.`,
    `새로운 기술을 습득하는 데 즐거움을 느끼고 있고 문제해결 능력과 창의적 사고를 통해 프로젝트를 성공적으로 이끌어내는 것이 목표입니다. 이 외에도 좋은 코드를 쓰기 위해서 최근에는 오픈소스 분석에 관심을 갖고 있으며,
    페이지 네이션 기능과 localStorage의 단점을 보완하여 만든 라이브러리를 NPM에 배포중이며 실제 프로젝트에 적용해본 경험이 있습니다.
    `,
    '고객의 요구사항을 정확히 파악하고 신속하게 대응하며 개인적인 발전뿐만 아니라 팀의 성과에 기여하여 조직의 발전에 도움이 되는 개발자가 되고자 합니다',
  ],
  sign: '',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
