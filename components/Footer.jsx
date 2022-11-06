import React from 'react';
import styled from 'styled-components';
import { RiLinkedinLine } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { RiBehanceLine } from 'react-icons/ri';

const FooterDiv = styled.div`
  bottom: 0;
  display: flex;
  gap: 40px;
  align-items: center;
  padding-bottom: 50px;
  width: 100%;
  z-index: 100;
  margin-top: 10px;
  @media (max-width: 1268px) {
    padding-bottom: 0;
    z-index: 1000;
    font-size: 20px;
    bottom: 0;
    position: fixed;
    display: flex;
    width: 100%;
    justify-content: space-around;
    height: 80px;
    left: 0;
    backdrop-filter: blur(20px) saturate(110%) contrast(100%);
  }
  a {
    color: ${({ theme }) => theme.text};
  }
`;

export default function Footer() {
  return (
    <FooterDiv>
      <a
        href='https://www.linkedin.com/in/gabriel-santos-ss/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <RiLinkedinLine />
      </a>
      <a
        href='https://www.instagram.com/gabriel.santos.ss/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <AiOutlineInstagram />
      </a>
      <a
        href='https://github.com/GabrielSantos23'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FiGithub />
      </a>
      <a
        href='https://www.behance.net/gabrielsilva398'
        target='_blank'
        rel='noopener noreferrer'
      >
        <RiBehanceLine />
      </a>
    </FooterDiv>
  );
}
