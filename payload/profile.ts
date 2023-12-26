import { faBlog, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
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
    {
      link: 'https://reignkk1.github.io/',
      icon: faBlog,
    },
  ],
  notice: {
    title: '문자나 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
