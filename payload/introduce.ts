import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    `안녕하세요, 김민겸입니다.
    `,
    `저는 프로그래머스 LV1 정도의 알고리즘 실력을 보유 중이며, React.js, TypeScript 등의 기술들을 사용하여 프론트엔드 개발을 중점적으로 즐겨하고 있습니다.
    일상생활에서 필요한 서비스 또는 불편한 문제들을 해결하기 위해 개발하는 것을 좋아합니다.`,
    `새로운 기술을 습득하는 데 즐거움을 느끼고 있고 문제해결 능력과 창의적 사고를 통해 프로젝트를 성공적으로 이끌어내는 것이 목표입니다. 이 외에도 좋은 코드를 쓰기 위해서 오픈소스 코드에 관심을 갖고 있으며,
    나만의 모듈을 만들어 오픈소스 라이브러리를 NPM에 배포중이며 실제 프로젝트에 적용해본 경험이 있습니다.
    `,
    '고객의 요구사항을 정확히 파악하고 신속하게 대응하며 개인적인 발전뿐만 아니라 팀의 성과에 기여하여 조직의 발전에 도움이 되는 개발자가 되고자 합니다',
  ],
  sign: 'mingyeom',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
