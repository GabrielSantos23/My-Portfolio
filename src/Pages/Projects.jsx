import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectsContext } from '../Utils/context';
import { Stab, STabList, STabPanel, Stabs } from '../../components/TabsStyle';
import styled from 'styled-components';
import Modal from 'react-modal';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
Modal.setAppElement('#root');

const ProjectsDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 1268px) {
    width: 100vw;
  } ;
`;
const DIV = styled.div`
  position: absolute;

  width: 100%;
`;

const ProjectImages = styled.div`
  display: flex;
  min-height: 200px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  p {
    display: none;
    position: absolute;
    bottom: 38px;
    left: 16px;
  }
  h3 {
    display: none;
    position: absolute;
    bottom: 98px;
    margin-bottom: 15px;
    left: 16px;
  }
  span {
    display: none;
    bottom: -70px;

    background-color: ${({ theme }) => theme.textDescription};
    font-size: 12px;
  }

  :hover p {
    display: block;
    color: white;
  }
  :hover h3 {
    display: block;
    color: white;
  }
  :hover img {
    opacity: 0.5;
    transition: all 0.3s;
  }
  :hover span {
    display: flex;
    border-radius: 30px;
    justify-content: center;
    align-items: center;

    color: white;
  }
`;
const ContentImage = styled.div`
  display: flex;
`;
const All = styled.div`
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin-top: 70px;
    width: 100%;
    font-size: 50px;
  }
`;
const Background = styled(motion.div)`
  background-image: ${({ theme }) => theme.backgroundImageProject};
  position: absolute;
  bottom: -100px;
  background-size: 70vw;

  width: 100%;
  height: 81%;
  background-repeat: no-repeat;
  display: flex;
  position: fixed;
  justify-content: center;
  background-position: right bottom;
  background-attachment: fixed;
`;
const Content = styled.div`
  column-count: 2;
  width: 100vw;
  align-items: center;
  display: flex;
  justify-content: center;
  display: inline-block;
  justify-content: center;
  img {
    width: 500px;
    border-radius: 15px;
    margin-bottom: 20px;
  }
  @media (max-width: 1268px) {
    column-count: 1;
    display: flex;
    flex-direction: column;

    img {
      width: 500px;
      border-radius: 15px;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 668px) {
    img {
      width: 300px;
      border-radius: 15px;
      margin-bottom: 20px;
    }
  }
`;
export default function Projects() {
  const projectData = useContext(ProjectsContext);
  const [show, setShow] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(!false);
  }
  function closeModal() {
    setIsOpen(!true);
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40px',
      }}
    >
      <Helmet>
        <meta charSet='utf-8' />
        <title>Projects | Gabriel Santos</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <Background
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <All>
        <h1>Projects.</h1>

        <ProjectsDiv
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Stabs>
            <STabList>
              <Stab style={{ zIndex: '2' }} selectedClassName='is-selected'>
                All
              </Stab>
              <Stab style={{ zIndex: '2' }} selectedClassName='is-selected'>
                Projects
              </Stab>
              <Stab style={{ zIndex: '2' }} selectedClassName='is-selected'>
                Designs
              </Stab>
            </STabList>
            <STabPanel style={{ marginTop: '100px' }}>
              <Content>
                {projectData.map(
                  (item, index) =>
                    item.type.includes('others') && (
                      <>
                        <ProjectImages
                          key={index}
                          className='ProjectImages'
                          role='gridcell'
                          id='cardHover'
                          aria-label={`${item.title} ${item.description}`}
                          onClick={() => setShow(true)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') return setShow(true);
                          }}
                          tabIndex='0'
                        >
                          <a
                            href={item.link}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <img src={item.imageUrl} alt='' />
                          </a>
                          <ContentImage>
                            <h3
                              style={{
                                position: 'absolute',
                                maxWidth: '400px',
                              }}
                            >
                              {item.title}
                            </h3>
                            <p
                              style={{
                                position: 'absolute',
                                maxWidth: '400px',
                              }}
                            >
                              {item.description}
                            </p>
                          </ContentImage>
                        </ProjectImages>
                      </>
                    )
                )}
              </Content>
            </STabPanel>
            <STabPanel>
              <Content>
                {projectData.map(
                  (item, index) =>
                    item.type.includes('project') && (
                      <>
                        <ProjectImages
                          key={index}
                          className='ProjectImages'
                          role='gridcell'
                          id='cardHover'
                          aria-label={`${item.title} ${item.description}`}
                          onClick={() => setShow(true)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') return setShow(true);
                          }}
                          tabIndex='0'
                        >
                          <a
                            href={item.link}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <img src={item.imageUrl} alt='' />
                          </a>
                          <ContentImage>
                            <h3
                              style={{
                                position: 'absolute',
                                maxWidth: '400px',
                              }}
                            >
                              {item.title}
                            </h3>
                            <p
                              style={{
                                position: 'absolute',
                                maxWidth: '400px',
                              }}
                            >
                              {item.description}
                            </p>
                          </ContentImage>
                        </ProjectImages>
                      </>
                    )
                )}
              </Content>
            </STabPanel>
            <STabPanel>
              <Content>
                {projectData.map(
                  (item, index) =>
                    item.type.includes('design') && (
                      <>
                        <ProjectImages
                          key={index}
                          className='ProjectImages'
                          role='gridcell'
                          id='cardHover'
                          aria-label={`${item.title} ${item.description}`}
                          onClick={() => setShow(true)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') return setShow(true);
                          }}
                          tabIndex='0'
                        >
                          <a
                            href={item.link}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <img src={item.imageUrl} alt='' />
                          </a>

                          <ContentImage>
                            <h3
                              style={{
                                position: 'absolute',
                                maxWidth: '400px',
                              }}
                            >
                              {item.title}
                            </h3>
                            <p
                              style={{
                                position: 'absolute',
                                maxWidth: '400px',
                              }}
                            >
                              {item.description}
                            </p>
                          </ContentImage>
                        </ProjectImages>
                      </>
                    )
                )}
              </Content>
            </STabPanel>
          </Stabs>
        </ProjectsDiv>
        <Footer />
      </All>
    </div>
  );
}
