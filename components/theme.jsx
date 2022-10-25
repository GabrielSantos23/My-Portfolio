import BgBlack from '../src/assets/HelloBlack.png';
import BgLight from '../src/assets/HelloWhite.png';
import AboutBgBlack from '../src/assets/AboutMeBlack.png';
import AboutBgLight from '../src/assets/AboutMeLight.png';
import ProjectBgBlack from '../src/assets/ProjectsBlack.png';
import ProjectBgLight from '../src/assets/ProjectsWhite.png';
import ContactBlack from '../src/assets/ContactBlack.png';
import ContactWhite from '../src/assets/ContactWhite.png';
import ResumeBlack from '../src/assets/ResumeBlack.png';
import ResumeWhite from '../src/assets/ResumeLight.png';
import ButtonChange from '../src/assets/ButtonChange.png';
import ButtonChangeWhite from '../src/assets/ButtonChangeWhite.png';

export const lightTheme = {
  body: '#fdf5ec',
  text: '#1f1e1e',
  toggleBorder: '#343A40',
  backgroundImage: `url(${BgLight})`,
  backgroundImageAbout: `url(${AboutBgLight})`,
  backgroundImageProject: `url(${ProjectBgLight})`,
  backgroundContact: `url(${ContactWhite})`,
  backgroundResume: `url(${ResumeWhite})`,
  DarkMode: `url(${ButtonChangeWhite})`,
  ButtonHover: '#34C759',
  textDescription: '#4e4e4e',
  Selection: '#afafaf',
  buttonText: '#fff',
  button: '#000',
  span: '#ebe0d5',
};

export const darkTheme = {
  body: '#020A13',
  text: '#E1E1E1',
  toggleBorder: '#343A40',
  backgroundImage: `url(${BgBlack})`,
  backgroundImageAbout: `url(${AboutBgBlack})`,
  backgroundContact: `url(${ContactBlack})`,
  backgroundImageProject: `url(${ProjectBgBlack})`,
  backgroundResume: `url(${ResumeBlack})`,
  DarkMode: `url(${ButtonChange})`,
  ButtonHover: '#365f9a',

  zIndex: '999',
  span: '#0f1c2c',
  textDescription: '#b4b1b1',
  Selection: '#4d4d4d',
  buttonText: '#000',
  button: '#E1E1E1',
};
