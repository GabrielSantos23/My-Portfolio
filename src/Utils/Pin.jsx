import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  justify-content: space-between;

  background-color: red;
  img {
    max-width: 400px;
    border-radius: 10px;
  }
`;

const Pin = ({ pin }) => {
  return (
    <Div>
      <img src={pin.imageUrl.asset.url} alt='' />
    </Div>
  );
};

export default Pin;
