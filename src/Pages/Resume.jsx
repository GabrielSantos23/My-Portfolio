import React from 'react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import Curriculo from '../../public/Curriculo.pdf';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer';

const All = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 100px;
`;

const Pages = styled(Page)`
  border-radius: 50% !important;
`;
const Content = styled.div`
  z-index: 1;

  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin-top: 70px;
    width: 100%;
    font-size: 50px;
  }
  p {
    span {
      color: ${({ theme }) => theme.text};
      font-weight: 900;
      :hover {
        border-bottom: 1px solid ${({ theme }) => theme.ButtonHover};
        color: ${({ theme }) => theme.ButtonHover};

        cursor: pointer;
      }
    }
    a {
      color: ${({ theme }) => theme.text};
      font-weight: 900;
      text-decoration: none;
      :hover {
        border-bottom: 1px solid ${({ theme }) => theme.ButtonHover};
        color: ${({ theme }) => theme.ButtonHover};
      }
    }
  }
  @media (max-width: 1268px) {
    max-width: 80%;
  }
  @media (max-width: 668px) {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }
`;
const LinkA = styled(Link)`
  margin-top: 40px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.text};
  }
`;
const Background = styled(motion.div)`
  background-image: ${({ theme }) => theme.backgroundResume};
  position: absolute;
  background-size: contain;

  width: 20%;
  height: 101%;
  background-repeat: no-repeat;
  display: flex;
  position: fixed;
  justify-content: center;
  bottom: 0;
  left: 0;
  background-attachment: fixed;
  @media (max-width: 1268px) {
    width: 50%;
  }
`;

export default function Resume() {
  return (
    <All>
      <Background
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <Helmet>
        <meta charSet='utf-8' />
        <title>Resume | Gabriel Santos</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <Content>
        <div>
          <h1>Resume.</h1>
          <p style={{ marginBottom: '40px' }}>
            Reach out to me via my <a href={'/contact'}>contact page</a> .{' '}
            <span>
              <a
                href='https://drive.google.com/file/d/1yKkPW4TUfzT_F2W1lRoFxSnaJmNyS7cJ/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                view
              </a>
            </span>{' '}
            or{' '}
            <span>
              <a href={Curriculo} download>
                download
              </a>
            </span>{' '}
            the resume
          </p>
        </div>
        <Document file={Curriculo}>
          <Pages pageNumber={1} height={800} />
        </Document>
        <LinkA to={'/contact'}>Are you convinced to contact me now ?</LinkA>
        <Footer />
      </Content>
    </All>
  );
}
