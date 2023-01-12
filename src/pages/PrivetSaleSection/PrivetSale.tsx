/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { Container, Heading, Title } from './styled';

const PrivetSale = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Container>
        <Heading
          style={{ fontFamily: 'AeonikProTRIALRegular', fontWeight: 400 }}
        >
          Join the <br />
          private sale
        </Heading>
        <Title>15 October - 15 November</Title>
        <Button
          text="Get the best offer"
          fontSize={'18px'}
          BgColor={'#fff'}
          hoverColorTitle={'#fff'}
          color={'#000'}
          hoverColor={'#000'}
          clickHandler={() => setIsOpen(true)}
        />
      </Container>
      <Modal isOpen={isOpen} handleClose={handleClose} isPrivate={true} />
    </>
  );
};

export default PrivetSale;
