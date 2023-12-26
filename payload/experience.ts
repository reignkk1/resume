import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: true,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Recruitment-App',
      position: '',
      startedAt: '1996-02',
      descriptions: [
        '여러 채용 사이트를 번거롭게 이동하며 채용 공고를 봐야하는 문제점을 개선',
        'Cheerio 라이브러리 활용한 웹 크롤링 구현',
        '웹 브라우저 저장소 localStorage를 활용한 사용자가 본 게시물은 블러처리 구현',
        'Collaborating with global developers to coordinate code contributions',
        'https://github.com/reignkk1/recruitment-app',
      ],
      skillKeywords: ['C', 'Linux', 'Kernel', 'Security', ' Automation'],
    },
    {
      title: 'Open Source Community',
      position: 'System Advocate and Developer',
      startedAt: '2010-06',
      endedAt: '2018-01',
      descriptions: [
        'Promoted the use and development of Linux globally.',
        'Developed automated scripts to streamline system configuration.',
        'Facilitated live patching systems, reducing downtime.',
      ],
      skillKeywords: ['Open Source', 'Linux', 'AWS', 'RDBMS'],
    },
  ],
};

export default experience;
