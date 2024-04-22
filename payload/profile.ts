import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/1.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김민겸',
    small: '(Kim Min Gyeom)',
  },
  contact: [
    {
      title: 'ruaals456@naver.com',
      link: 'mailto:ruaals456@naver.com',
      icon: faEnvelope,
    },
    {
      title: '010-7714-3764',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/reignkk1',
      icon: faGithub,
    },
  ],
};

export default profile;
