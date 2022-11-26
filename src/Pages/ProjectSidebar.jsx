import React from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

const Div = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 101;
  width: 100vw;
  height: 100vh;
  background-color: red;
`;

const ProjectSidebar = ({ pins }) => {
  const params = useParams();

  console.log(params);
  return (
    <>
      {pins?.map((pin) => (
        <>{pin === params ? console.log('true') : console.log('false')}</>
      ))}
    </>
  );
};

export default ProjectSidebar;
