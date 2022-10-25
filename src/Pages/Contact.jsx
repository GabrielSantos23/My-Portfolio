import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
const MOMO = styled(motion.div)`
  display: flex;
  overflow-x: hidden;

  flex-direction: column;
  align-items: center;
  gap: 100px;
  h1 {
    z-index: 1;
    margin-top: 100px;
    margin-bottom: -50px;
    width: 50%;
    font-size: 50px;
    color: ${({ theme }) => theme.text};
  }
  p {
    z-index: 1;
    margin-top: -20px;
    margin-bottom: -50px;
    width: 50%;
    color: ${({ theme }) => theme.text};

    span {
      font-weight: 800;
    }
  }
`;

const FormDiv = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;

    input {
      background-color: transparent;
      border: solid 1px ${({ theme }) => theme.span};
      color: ${({ theme }) => theme.text};
      max-width: 600px;
      border-radius: 8px;
      margin-bottom: 50px;
      padding: 20px;
      z-index: 1;
      :focus {
        outline: none;
      }
    }
    textarea {
      max-width: 600px;
      z-index: 1;
      background-color: transparent;
      padding-left: 20px;
      padding-top: 10px;
      border-radius: 8px;
      resize: none;
      border: solid 1px ${({ theme }) => theme.span};
      color: ${({ theme }) => theme.text};
      :focus {
        outline: none;
      }
    }
    button {
      border-radius: 4px;
      height: 50px;
      margin-top: 50px;
      max-width: 160px;
      border: none;
      cursor: pointer;
      font-size: 17px;
      background-color: ${({ theme }) => theme.button};
      color: ${({ theme }) => theme.buttonText};
      z-index: 1;
    }
  }
`;
const GetBack = styled(Link)`
  z-index: 1;
  background-color: transparent;
  margin-top: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
  text-decoration: none;
  max-width: 220px;
  color: ${({ theme }) => theme.text};
`;
const Icon = styled.div`
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
const Background = styled(motion.div)`
  background-image: ${({ theme }) => theme.backgroundContact};
  position: absolute;
  bottom: 0;
  background-size: 70%;

  width: 100%;
  z-index: ${({ theme }) => theme.zIndex};
  height: 81%;
  margin-top: 2000px;
  background-repeat: no-repeat;
  display: flex;
  z-index: 0;
  position: fixed;
  justify-content: center;
  background-position: left bottom;
  background-attachment: fixed;
`;

export default function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_36rofgr',
        'template_6nm5t2v',
        form.current,
        'sDrWJuIYYZirBcR_F'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          e.target.reset();
          setDone(true);
          toast.success('👍 Email Sussfull Send!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        },
        (error) => {
          console.log(error.text);
          setDone(false);
          toast.error('❌ A error ocorred!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
      );
  };
  return (
    <MOMO
      initial={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <meta charSet='utf-8' />
        <title>Contact | Gabriel Santos</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <Background
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <h1>Contact.</h1>
      <p>
        Lets talk or shoot me an email directly on{' '}
        <span>gabriel.gs605@gmail.com</span>
      </p>
      <FormDiv>
        <form
          action=''
          ref={form}
          style={{}}
          onSubmit={sendEmail}
          autoComplete='true'
        >
          <input type='text' placeholder='Name' name='user_name' required />
          <input type='email' placeholder='Email' name='user_email' required />
          <textarea
            required
            name='message'
            placeholder='Message'
            id=''
            cols='30'
            rows='10'
          ></textarea>
          <button type='submit' value='Send'>
            Send Message
          </button>
        </form>
        <GetBack to={'/'}>
          <div>Go back to home screen </div>
          <Icon>
            <FontAwesomeIcon icon={faArrowRight} />
          </Icon>
        </GetBack>
        <Footer />
      </FormDiv>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </MOMO>
  );
}
