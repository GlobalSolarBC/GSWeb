/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { ReactComponent as Cross } from '../../assets/icons/closeModal.svg';
import { isValidEmail } from '../helpers/ValidEmail';
import { BtnContainer, IconWrapper, Span } from './styled';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { SxStyles } from '../helpers/TextFieldStyle';

import {
  ModalBackdrop,
  Container,
  IconClose,
  ModalHeading,
  ModalContainer,
  ModalTitle,
  SuccessContainer,
  SuccessHeading,
  SuccessTitle,
} from './styled';

interface ModalProps {
  title?: string;
  heading?: string;
  isOpen?: boolean;
  isWaitlist?: boolean;
  isPrivate?: boolean;
  handleClose: () => void;
  setEmail?: (value: string) => void;
}

const Modal = ({ isOpen, isWaitlist, isPrivate, handleClose }: ModalProps) => {
  const [value, setValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [token, setToken] = useState();

  const obj = {
    grant_type: 'client_credentials',
    client_id: 'bc9deb39828c446d1d8b7c7f325ec350',
    client_secret: 'c2e385d03989c7ba2915672ae52b3a6e',
  };

  useEffect(() => {
    axios
      .post('https://api.sendpulse.com/oauth/access_token', obj)
      .then((res) => setToken(res.data.access_token));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    if (!isValidEmail(email)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }

    setValue(email);
  };

  const handleEmail = () => {
    setIsLoading(true);
    // setIsDisabled(true);
    let bookId = isPrivate ? 492796 : 492794;

    axios
      .post(
        // eslint-disable-next-line quotes
        // `https://api.sendpulse.com/addressbooks/485552/emails`,
        `https://api.sendpulse.com/addressbooks/${bookId}/emails`,
        {
          emails: [value],
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((res) => {
        setIsLoading(false);
        setIsSuccess(true);
      });
  };

  const resetState = () => {
    setIsSuccess(false);
    handleClose();
  };

  useEffect(() => {
    // OFF scrolling
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    // ON scrolling
    if (!isOpen) {
      document.body.style.overflow = '';
      setValue('');
    }
    if (!isOpen) {
      setValue('');
    }
  }, [isOpen, value]);

  return (
    <ModalBackdrop isOpen={isOpen} id={'newModal'}>
      <Container>
        <IconClose>
          <IconWrapper onClick={handleClose}>
            <Cross />
          </IconWrapper>
        </IconClose>
        <ModalContainer>
          {isWaitlist ? (
            <>
              {isSuccess ? (
                <>
                  <SuccessContainer>
                    <SuccessHeading>Successfully subscribed</SuccessHeading>
                    <SuccessTitle>
                      We will send you the latest news to <b>{value}</b>
                    </SuccessTitle>
                    <Button
                      text={'Back to homepage'}
                      widthBtn={'213px'}
                      clickHandler={() => {
                        resetState();
                        handleClose();
                      }}
                    />
                  </SuccessContainer>
                </>
              ) : (
                <>
                  <ModalHeading>Join the waitlist</ModalHeading>
                  <ModalTitle>
                    Subscribe for the latest news and reports
                  </ModalTitle>
                  <TextField
                    label="Email"
                    value={value}
                    variant="standard"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(e)
                    }
                    InputLabelProps={{
                      style: {
                        color: '#3a3a3a',
                      },
                    }}
                    sx={SxStyles('#000')}
                  />
                  <BtnContainer>
                    <Button
                      text={'Join'}
                      widthBtn={'90px'}
                      isDisabled={isDisabled}
                      clickHandler={() => handleEmail()}
                      loading={isLoading}
                      textLoading={'Joining... '}
                      widthBtnLoad={'160px'}
                    />
                  </BtnContainer>
                  <Span>
                    No spam, only important news and updates. Unsubscribe at any
                    time.
                  </Span>
                </>
              )}
            </>
          ) : null}
          {/* PRIVET MODAL */}
          {isPrivate ? (
            <>
              {isSuccess ? (
                <>
                  <SuccessContainer>
                    <SuccessHeading>Successfully added</SuccessHeading>
                    <SuccessTitle>
                      We will contact you with the best offer
                    </SuccessTitle>
                    <Button
                      text={'Back to homepage'}
                      widthBtn={'213px'}
                      clickHandler={() => {
                        resetState();
                        handleClose();
                      }}
                    />
                  </SuccessContainer>
                </>
              ) : (
                <>
                  <ModalHeading>Join the Private Sale</ModalHeading>
                  <ModalTitle>
                    Leave your email and get the best offer
                  </ModalTitle>
                  <TextField
                    label="Email"
                    value={value}
                    variant="standard"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(e)
                    }
                    InputLabelProps={{
                      style: {
                        color: '#3a3a3a',
                      },
                    }}
                    sx={SxStyles('#000')}
                  />
                  <BtnContainer>
                    <Button
                      text={'Join'}
                      widthBtn={'90px'}
                      isDisabled={isDisabled}
                      clickHandler={() => handleEmail()}
                      loading={isLoading}
                      textLoading={'Joining... '}
                      widthBtnLoad={'160px'}
                    />
                  </BtnContainer>
                </>
              )}
            </>
          ) : null}
        </ModalContainer>
      </Container>
    </ModalBackdrop>
  );
};

export default Modal;
