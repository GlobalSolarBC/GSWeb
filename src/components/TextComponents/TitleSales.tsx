import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { Container, TitleHeading, SubTitleHeading, Div } from './styles';
import Modal from '../../components/Modal/Modal';

const Title = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Div>
      <Container>
        <TitleHeading>Join the public sale</TitleHeading>
        <SubTitleHeading>
          Invest in solar plants construction without 3rd parties and earn from
          15% QPR
        </SubTitleHeading>
        <Button
          text={'Join the WaitList'}
          fontSize={'20px'}
          fontFamily={'AeonikProTRIALRegular'}
          clickHandler={() => setIsOpen(true)}
        />
      </Container>
      <Modal isOpen={isOpen} handleClose={handleClose} isWaitlist={true} />
    </Div>
  );
};

export default Title;
