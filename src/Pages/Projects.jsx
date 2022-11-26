import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectsContext } from '../Utils/context';
import { Stab, STabList, STabPanel, Stabs } from '../../components/TabsStyle';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import Designs from './Designs';
import { client, urlFor } from '../client';
import { Query } from '../Utils/data';
import MansoryLayout from '../Utils/MansoryLayout';

const ProjectsDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 1268px) {
    width: 100vw;
  } ;
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
    font-weight: bolder;
    font-size: 40px;
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

export default function Projects() {
  const projectData = useContext(ProjectsContext);
  const [show, setShow] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setloading] = useState(true);
  const [pins, setPins] = useState();

  useEffect(() => {
    client.fetch(Query).then((data) => {
      setPins(data);
      setloading(false);
    });
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40px',
        overflowX: 'hidden',
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
              <Stab
                style={{ zIndex: '2', fontWeight: 'bold' }}
                selectedClassName='is-selected'
              >
                Projects
              </Stab>
              <Stab style={{ zIndex: '2' }} selectedClassName='is-selected'>
                Designs
              </Stab>
            </STabList>
            <STabPanel style={{ marginTop: '100px' }}>
              <MansoryLayout
                pins={pins}
                setloading={setloading}
                loading={loading}
              />
            </STabPanel>
            <STabPanel>
              <Designs />
            </STabPanel>
          </Stabs>
        </ProjectsDiv>
        <Footer />
      </All>
    </div>
  );
}
