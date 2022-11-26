import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Pin from './Pin';
import { BiArrowBack, BiWorld, BiLinkExternal } from 'react-icons/bi';

const MainContent = styled.div`
  @media (max-width: 1268px) {
    justify-content: center;
  }
`;
const Project = styled.div`
  -webkit-animation: linear;
  -webkit-animation-name: run;
  -webkit-animation-duration: 1s;

  @-webkit-keyframes run {
    0% {
      right: 0;
    }
    100% {
      right: 100%;
    }
  }
`;
const Div = styled.div`
  background: #000;
  color: #fff;
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 700px) {
    width: 400px;
    height: 300px;
    background-position: center;
  }
  @media only screen and (max-width: 500px) {
    width: 300px;
    height: 200px;
    background-position: center;
  }
  :hover {
    p {
      opacity: 1;
    }
    span {
      opacity: 1;
      transform: translateY(0);
    }
    .bg-layer {
      display: flex;
      width: 500px;
      height: 300px;
      background: linear-gradient(
        360deg,
        #000000 0%,
        rgba(0, 0, 0, 0.76) 23.46%,
        rgba(0, 0, 0, 0) 49.93%
      );

      opacity: 0.7;
      position: absolute;
      border-radius: 10px;
    }
  }

  .bg-layer {
    transition: 0.5s;
    opacity: 0;
  }
  .p {
    z-index: 10;
  }
  p {
    opacity: 0;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 24px;
    margin-left: 15px;
    transition: transform 0.5s, opacity 0.5s;
  }
  .tec {
    margin-top: 10px;
    display: flex;
    p {
      font-weight: 300;
      font-size: 14px;
      background-color: #ffffff76;
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 2px;
      border-radius: 10px;
    }
  }
  span {
    margin-left: 15px;
    max-width: 450px;
    font-size: 15px;
    text-align: center;
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }
`;
const DiV = styled.div`
  right: 0;
  background-color: ${({ theme }) => theme.body};
  width: 30vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 100;
  hr {
    height: 1px;
    border: none;
    background-color: ${({ theme }) => theme.span};
  }
  @media only screen and (max-width: 1200px) {
    width: 100vw;
  }
`;
const ModalDiv = styled.div`
  display: flex;
`;
const BlurDiv = styled.div`
  background-color: black;
  width: 70vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: 100;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;
const Header = styled.div`
  margin-top: 10px;

  button {
    margin-top: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    font-family: 20px;
    border-radius: 100%;
    align-items: center;
    padding-top: 5px;
    justify-content: center;
    font-size: 20px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
    z-index: 101;
    cursor: pointer;
  }
  p {
    z-index: 101;
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
const BodyModal = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  position: absolute;
  height: 100%;
  top: 5px;
  left: 0;
  padding: 20px;
  h1 {
    font-size: 30px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
  }
  p {
    display: flex;
    align-items: flex-start;
    left: 0;
    width: 100%;
    margin-top: -5px;
    color: ${({ theme }) => theme.textDescription};
  }
  img {
    width: 100%;
    height: 35%;
    border-radius: 10px;
    margin-top: 20px;
  }
  @media only screen and (max-width: 1200px) {
    img {
      height: 400px;
    }
  }
  @media only screen and (max-width: 700px) {
    img {
      height: 300px;
    }
  }
`;
const About = styled.div`
  width: 100%;
  h2 {
  }
  p {
    color: ${({ theme }) => theme.textDescription};
  }
`;
const Technologies = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  div {
    display: flex;
    gap: 10px;

    p {
      background-color: ${({ theme }) => theme.span};
      max-width: 80px;
      display: flex;
      align-items: center;
      padding: 5px;
      justify-content: center;
      border-radius: 5px;
    }
  }
`;
const Website = styled.div`
  width: 100%;
  h2 {
    gap: 5px;
    display: flex;
    align-items: center;
  }
  a {
    font-size: 14px;
    color: ${({ theme }) => theme.textDescription};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;
const Github = styled.div`
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 70px;

  background-color: ${({ theme }) => theme.span};
  a {
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: ${({ theme }) => theme.textDescription};
  }
`;
const MansoryLayout = ({ pins, setloading, loading }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeObject, setActiveObject] = useState(null);
  const [teste, setTeste] = useState();
  console.log(activeObject);
  function getClass(index) {
    return index === activeObject?.pin_id ? 'active' : 'inactive';
  }

  if (showModal) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
  const Modal = ({
    object: {
      id,
      img,
      title,
      about,
      github,
      imageUrl,
      description,
      technologies,
      technologies2,
      technologies3,
      technologies4,
      link,
    },
  }) => (
    <ModalDiv>
      <BlurDiv onClick={() => setShowModal(false)}></BlurDiv>
      <DiV id='productModal' className='active'>
        <Header
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
        >
          <button onClick={() => setShowModal(false)}>
            <p>
              <BiArrowBack />
            </p>
          </button>
          <p onClick={() => setShowModal(false)}>Back To Projects.</p>
        </Header>
        <hr width='95%' />
        <BodyModal>
          <h1 className='description'>{title}</h1>
          <p className='description'>{description}</p>
          <img src={img} />
          <About>
            <h2>About</h2>
            <p>{about}</p>
          </About>
          <Technologies>
            <h2>Technologies</h2>
            <div>
              <p>{technologies}</p>
              <p>{technologies2}</p>
              {technologies3 ? <p>{technologies3}</p> : null}
              {technologies4 ? <p>{technologies4}</p> : null}
            </div>
          </Technologies>
          <Website>
            <h2>
              Website <BiWorld />
            </h2>
            <a target='_blank' rel='noopener' href={link}>
              {link}
            </a>
          </Website>
          <Github>
            <a target='_blank' rel='noopener' href={github}>
              Open Project <BiLinkExternal />
            </a>
          </Github>
        </BodyModal>
      </DiV>
    </ModalDiv>
  );

  return (
    <>
      <Project
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {loading === true ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            loading
          </div>
        ) : (
          <MainContent
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              width: '80vw',
            }}
          >
            {pins.map(
              ({
                id,
                link,
                title,
                about,
                github,
                imageUrl,
                description,
                technologies,
                technologies2,
                technologies3,
                technologies4,
              }) => {
                const img = imageUrl?.asset?.url;
                return (
                  <Div
                    key={id}
                    style={{ backgroundImage: `url(${imageUrl.asset.url})` }}
                    onClick={() => {
                      setActiveObject({
                        id,
                        img,
                        link,
                        title,
                        about,
                        github,
                        description,
                        technologies,
                        technologies,
                        technologies2,
                        technologies3,
                        technologies4,
                      });
                      setShowModal(true);
                    }}
                    className={getClass(id)}
                  >
                    <div className='p'>
                      <p>{title}</p>
                      <span>{description}</span>
                      <div className='tec'>
                        <p>{technologies}</p>
                        <p>{technologies2}</p>
                        {technologies3 ? <p>{technologies3}</p> : null}
                        {technologies4 ? <p>{technologies4}</p> : null}
                      </div>
                    </div>
                    <div className='bg-layer'></div>
                  </Div>
                );
              }
            )}
          </MainContent>
        )}
        {showModal ? (
          <Modal object={activeObject} showModal={showModal} />
        ) : null}
      </Project>
    </>
  );
};

export default MansoryLayout;
