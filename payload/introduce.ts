import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    `안녕하세요, 김민겸입니다.
    `,
    `저는 프로그래머스 LV1 정도의 알고리즘 실력을 보유 중이며, React.js, TypeScript 등의 기술들을 사용하여 프론트엔드 개발을 한 경험이 있습니다.
    개발자로서 기본기를 쌓기 위해 공학적 지식들을 정리하고자 개인 블로그를 운영 중에 있으며 꾸준히 복습하는 것에 도움이 많이 되고 있습니다.`,
    `이 외에도 여러 개발자들과 소통하는 능력을 쌓기 위해 팀 프로젝트에 참가한 경험이 있습니다. 이 경험을 토대로 개발자들과 꾸준히 소통하는 것이 웹 개발에
    긍정적인 영향을 미친다는 것을 알게 되었고 의사소통 능력이 개발자로서 중요한 역량이라는 것을 깨닫게 되었습니다.`,
    `저는 공식 문서와 인터넷 강의 등의 자료들을 활용하여 독학으로 프로그래밍 공부를 하고 있습니다.
    혼자서 공부를 하다 보니 에러 이슈가 발생했을 때 타인의 도움에 의존하기보다는 능동적으로 문제를
    해결하고자 하는 태도가 생겼고 이것이 저의 강점이라고 생각합니다.
    `,
  ],
  sign: 'Min Gyeom',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
