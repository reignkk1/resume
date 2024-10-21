import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    `안녕하세요, 김민겸입니다.
    `,
    `저는 JavaScript와 React.js를 활용한 프론트엔드 개발을 주로 즐기고 있습니다.
    일상에서 마주하는 불편함을 해결하기 위해 다양한 서비스를 개발하고 있으며, 개인적으로는 저만의 모듈을 만드는 데 큰 재미를 느끼고 있습니다.
    또한 간단한 라이브러리를 NPM에 배포한 경험도 가지고 있습니다.`,
    `주어진 요구사항을 효과적으로 해결하는 능력 있는 개발자로 성장하고 싶습니다. 고객의 요구를 정확히 이해하고 신속하게 대응하며,
    개인의 발전뿐만 아니라 팀의 성과에도 기여하여 조직의 발전에 도움이 되는 개발자가 되고 싶습니다.
    `,
  ],
  sign: 'mingyeom',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
