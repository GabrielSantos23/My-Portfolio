import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

import Footer from '../../components/Footer';

const Background = styled(motion.div)`
  background-image: ${({ theme }) => theme.backgroundImage};
  position: absolute;
  bottom: 0;
  background-position: left;
  background-size: contain;
  height: 81.5vh;
  width: 100vw;
  background-repeat: no-repeat;
  display: flex;
  z-index: -1;
  justify-content: center;
  background-position: left bottom;
`;
const HomeContent = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1268px) {
    display: flex;
    margin-top: 100px;
  }
  @media (max-width: 575px) {
    width: 95%;
  }

  h1 {
    font-size: 3.5rem;
  }
  p {
    color: ${({ theme }) => theme.textDescription};
  }
  span {
    padding: 7px;
    background-color: ${({ theme }) => theme.span};
    border-radius: 10px;
    line-height: 30px;
    transition: ease-in-out 0.2s;
    color: ${({ theme }) => theme.text};
    font-size: 15px;

    @media (max-width: 575px) {
      line-height: 40px;
    }
    :hover {
      padding: 10px;
      background-color: ${({ theme }) => theme.ButtonHover};
    }
  }
  .intro__text {
    mark {
      background-color: transparent;
      color: ${({ theme }) => theme.text};
    }
    color: ${({ theme }) => theme.text};
    font-weight: 900;
    margin: 2rem 0rem 1.5rem;
    position: relative;
    letter-spacing: -1.1px;
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &::before {
      left: 2px;
      text-shadow: -1px 0 blue;
      animation: noise-anim-2 15s infinite linear alternate-reverse;
    }
    &::after {
      left: -2px;
      text-shadow: 3px 0 red;
      animation: noise-anim 2s infinite linear alternate-reverse;
    }
    @keyframes noise-anim {
      0% {
        clip-path: inset(29% 0 25% 0);
      }
      5% {
        clip-path: inset(9% 0 38% 0);
      }
      10% {
        clip-path: inset(96% 0 1% 0);
      }
      15% {
        clip-path: inset(75% 0 23% 0);
      }
      20% {
        clip-path: inset(46% 0 50% 0);
      }
      25% {
        clip-path: inset(3% 0 46% 0);
      }
      30% {
        clip-path: inset(82% 0 2% 0);
      }
      35% {
        clip-path: inset(88% 0 1% 0);
      }
      40% {
        clip-path: inset(91% 0 8% 0);
      }
      45% {
        clip-path: inset(96% 0 2% 0);
      }
      50% {
        clip-path: inset(59% 0 38% 0);
      }
      55% {
        clip-path: inset(41% 0 53% 0);
      }
      60% {
        clip-path: inset(21% 0 47% 0);
      }
      65% {
        clip-path: inset(89% 0 4% 0);
      }
      70% {
        clip-path: inset(1% 0 95% 0);
      }
      75% {
        clip-path: inset(86% 0 4% 0);
      }
      80% {
        clip-path: inset(95% 0 5% 0);
      }
      85% {
        clip-path: inset(54% 0 36% 0);
      }
      90% {
        clip-path: inset(70% 0 27% 0);
      }
      95% {
        clip-path: inset(6% 0 16% 0);
      }
      100% {
        clip-path: inset(95% 0 2% 0);
      }
    }
    @keyframes noise-anim-2 {
      0% {
        clip-path: inset(76% 0 21% 0);
      }
      5% {
        clip-path: inset(54% 0 7% 0);
      }
      10% {
        clip-path: inset(55% 0 29% 0);
      }
      15% {
        clip-path: inset(89% 0 3% 0);
      }
      20% {
        clip-path: inset(33% 0 40% 0);
      }
      25% {
        clip-path: inset(17% 0 56% 0);
      }
      30% {
        clip-path: inset(37% 0 51% 0);
      }
      35% {
        clip-path: inset(38% 0 19% 0);
      }
      40% {
        clip-path: inset(93% 0 4% 0);
      }
      45% {
        clip-path: inset(44% 0 14% 0);
      }
      50% {
        clip-path: inset(53% 0 26% 0);
      }
      55% {
        clip-path: inset(67% 0 11% 0);
      }
      60% {
        clip-path: inset(85% 0 13% 0);
      }
      65% {
        clip-path: inset(27% 0 37% 0);
      }
      70% {
        clip-path: inset(87% 0 4% 0);
      }
      75% {
        clip-path: inset(10% 0 8% 0);
      }
      80% {
        clip-path: inset(51% 0 27% 0);
      }
      85% {
        clip-path: inset(10% 0 60% 0);
      }
      90% {
        clip-path: inset(83% 0 3% 0);
      }
      95% {
        clip-path: inset(23% 0 55% 0);
      }
      100% {
        clip-path: inset(1% 0 81% 0);
      }
    }
  }
`;
const LinkNav = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;
const FontAwesomeIcona = styled.div`
  width: 100px;
  font-size: 20px;

  -webkit-animation: breathing 3s ease-out infinite normal;
  animation: breathing 3s ease-out infinite normal;
  -webkit-font-smoothing: antialiased;

  @-webkit-keyframes breathing {
    0% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }

    25% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    60% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }

    100% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }

  @keyframes breathing {
    0% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }

    25% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }

    60% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }

    100% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
`;
const Social = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  @media (max-width: 1268px) {
    display: none;
  }
`;
const SocialMobile = styled.div`
  display: none;
  @media (max-width: 1268px) {
    position: fixed;

    width: 100%;
    height: 100%;
    display: flex;
    bottom: 0;
  }
  div {
    background-color: ${({ theme }) => theme.span};

    bottom: 0;
    width: 100%;
    display: flex;

    justify-content: space-between;
    position: absolute;
    padding: 20px;
    svg {
      font-size: 30px;
    }
  }
`;

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Home | Gabriel Santos</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <Background
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HomeContent>
          <h1 data-text="I'm Gabriel Santos" className='intro__text'>
            <mark className='mark'>I&apos;m Gabriel Santos</mark>
          </h1>
          <div>
            <p>
              FrontEnd Developer & Web Designer who loves everything 'bout the
              web, practicing React, and everything bout the internet in search
              of flow.
            </p>
            <p>
              Working with my hands to make magic happen on the internet. View
              my&nbsp;
              <LinkNav to={'projects'}>
                <span>Projects</span>
              </LinkNav>
              ,{' '}
              <LinkNav to={'about'}>
                <span>About</span>
              </LinkNav>
              ,
              <LinkNav to={'resume'}>
                {' '}
                <span>Resume</span>
              </LinkNav>
              ,{' '}
              <LinkNav to={'contact'}>
                <span>Contact Me</span>
              </LinkNav>
              , or send me an email at
              <span>gabriel.gs605@gmail.com.</span>
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <LinkNav to={'about'}>
              <p>See More About Me</p>
            </LinkNav>

            <FontAwesomeIcona>
              <FontAwesomeIcon icon={faArrowRight} />
            </FontAwesomeIcona>
          </div>
          <Footer />
        </HomeContent>
      </Background>
    </div>
  );
}
