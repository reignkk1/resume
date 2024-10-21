import { faEnvelope, faPhone, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/avartar.png';

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
      title: '010 - 7714 - 3764',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://reignkk1.github.io/',
      icon: faBlog,
    },
    {
      link: 'https://github.com/reignkk1',
      icon: faGithub,
    },
    // {
    //   link: 'https://www.facebook.com/groups/ubuntu.ko',
    //   icon: faFacebook,
    // },
  ],
  // notice: {
  //   title:
  //     "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
  //   icon: faBell,
  // },
};

export default profile;
