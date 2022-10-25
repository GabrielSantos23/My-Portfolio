import React from 'react';
import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';
import { DiGithubBadge } from 'react-icons/di';
import { AiOutlineBehance } from 'react-icons/ai';
import { AiOutlineCalendar } from 'react-icons/ai';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
const Content = styled(motion.div)`
  position: absolute;
  bottom: 0;
  height: 81%;

  display: flex;
  z-index: -1;
  justify-content: center;
`;
const Background = styled(motion.div)`
  background-image: ${({ theme }) => theme.backgroundImageAbout};
  position: absolute;
  bottom: 0;
  background-size: 70vw;

  width: 100%;
  z-index: ${({ theme }) => theme.zIndex};
  height: 81%;
  margin-top: 2000px;
  background-repeat: no-repeat;
  display: flex;
  z-index: -1;
  position: fixed;
  justify-content: center;
  background-position: left bottom;
  background-attachment: fixed;
`;
const AboutContent = styled.div`
  max-width: 49%;

  justify-content: center;
  @media (max-width: 1268px) {
    max-width: 80%;
  }

  h1 {
    width: 100%;
    font-size: 50px;
  }

  ul {
    margin: 0;
    padding: 0;
    margin-top: 4 0px;

    a {
      color: ${({ theme }) => theme.text};
      :hover {
        color: ${({ theme }) => theme.textDescription};
      }
    }

    h2 {
      font-size: 20px;
      display: flex;
      align-items: flex-start;
      margin-top: 0px;
    }
    p {
      margin-top: 0;
    }
  }
  ul::before {
    content: ' ';
    background: ${({ theme }) => theme.span};
    display: inline-block;
    position: absolute;
    margin-left: -30px;
    width: 1px;

    height: 40%;
    z-index: 400;
    @media (max-width: 1000px) {
      height: 70%;
    }
    @media (max-width: 468px) {
      margin-left: -20px;
      height: 100%;
    }
  }
  li::before {
    content: ' ';
    background: ${({ theme }) => theme.body};
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.text};
    margin-left: -37px;

    width: 15px;
    height: 15px;
    margin-top: 3px;
    z-index: 400;
    @media (max-width: 468px) {
      margin-left: -26px;
    }
  }
  li {
    margin-top: 30px;
  }
`;
const P = styled.p`
  color: ${({ theme }) => theme.textDescription};
`;
const Vh = styled.p`
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.textDescription};
  }
`;

export default function About() {
  return (
    <Content
      initial={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <meta charSet='utf-8' />
        <title>About | Gabriel Santos</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <Background
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <AboutContent>
        <h1>About Me.</h1>
        <ul className='timeline'>
          <li>
            <div
              style={{
                display: 'flex',
                alignContent: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <h2 style={{ display: 'flex', alignItems: 'center' }}>
                Programmer&nbsp;
                <DiGithubBadge fontSize={18} />
              </h2>
              <Vh>
                <a href=''>View Github</a>
              </Vh>
            </div>
            <P style={{ lineHeight: '25px' }}>
              When it comes to business, first impressions matter, and good
              website design is the key to capitalizing on them. An excellent
              site is not judged solely on its looks, but on its functionality
              and usability as well. My experience as a programmer allows me to
              come up with intelligent solutions to technical challenges, while
              at the same time designing sleek and visually appealing websites.
              Aside from having extensive knowledge of recognized technical
              standards, I am conversant with modern building practices.
            </P>
          </li>
          <li>
            <div
              style={{
                display: 'flex',
                alignContent: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <h2 style={{ display: 'flex', alignItems: 'center' }}>
                Designer&nbsp;
                <AiOutlineBehance fontSize={18} />
              </h2>
              <Vh>
                <a href=''>View Behance </a>
              </Vh>
            </div>
            <P style={{ lineHeight: '25px' }}>
              Although I am not the typical designer, I do possess excellent
              visual abilities, and this makes me an excellent presenter,
              allowing me to successfully communicate design ideas to
              stakeholders and design teams. With my strong conceptualization
              ability, I am able to visualize and create beautiful works.
              Lastly, you can find me mostly tweaking stylesheets and creating
              fluid user experiences.
            </P>
          </li>
        </ul>
        <div>
          <h3 style={{ marginTop: '100px' }}>My Reads.</h3>
          <ul className='timeline2' style={{ marginTop: '-10px' }}>
            <li>
              <div
                style={{
                  display: 'flex',
                  alignContent: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <h2 style={{ alignItems: 'flex-end', display: 'flex' }}>
                  Graphic Desinger.&nbsp;
                  <span style={{ fontSize: '13px', fontWeight: 'lighter' }}>
                    Anhanguera
                  </span>
                </h2>
                <Vh style={{ display: 'flex', alignItems: 'center' }}>
                  <AiOutlineCalendar />
                  &nbsp;2021
                </Vh>
              </div>
              <P style={{ lineHeight: '25px' }}>
                I started working and studying with graphic design in 2021 and I
                continue to this day, I am graduating in the area and I intend
                to learn more over time.
              </P>
            </li>
            <li>
              <div
                style={{
                  display: 'flex',
                  alignContent: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <h2 style={{ display: 'flex', alignItems: 'center' }}>
                  Software Engineer. &nbsp;{' '}
                  <span style={{ fontSize: '13px', fontWeight: 'lighter' }}>
                    {' '}
                    Cruzeiro Do Sul
                  </span>
                </h2>
                <Vh>
                  <AiOutlineCalendar />
                  <a href=''>&nbsp;2022 </a>
                </Vh>
              </div>
              <P style={{ lineHeight: '25px' }}>
                I just started studying software engineering this year because I
                preferred to get experience before entering the field, making
                landing pages and complete website.
              </P>
            </li>
            <li>
              <div
                style={{
                  display: 'flex',
                  alignContent: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <h2 style={{ display: 'flex', alignItems: 'center' }}>
                  React Native: Desenvolva APPs Nativas para Android e iOS&nbsp;
                </h2>
                <Vh>
                  <AiOutlineCalendar />
                  &nbsp;2022-2022
                </Vh>
              </div>
              <P style={{ lineHeight: '25px' }}>
                I also started in the mobile area this year, making from simple
                apps to more complex apps.
              </P>
            </li>
            <li>
              <div
                style={{
                  display: 'flex',
                  alignContent: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <h2 style={{ display: 'flex', alignItems: 'center' }}>
                  Learning Something Great 😉&nbsp;
                </h2>
                <Vh>
                  {' '}
                  <AiOutlineCalendar />
                  &nbsp;Currently
                </Vh>
              </div>
              <P style={{ lineHeight: '25px', paddingBottom: '50px' }}>
                {' '}
                We continue learning everyday.
              </P>
            </li>
            <Footer />
          </ul>
        </div>
      </AboutContent>
    </Content>
  );
}
