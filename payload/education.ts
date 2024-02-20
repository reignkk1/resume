import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '한국방송통신대학교',
      subTitle: '컴퓨터과학과 3학년 재학중',
      startedAt: '2024-03',
    },
    {
      title: '서영대학교',
      subTitle: '자동차기계과 전문학사 졸업',
      startedAt: '2017-03',
      endedAt: '2019-02',
    },
  ],
};

export default education;
