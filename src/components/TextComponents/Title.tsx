import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { Container, TitleHeading, SubTitleHeading, Div } from './styles';
import Modal from '../../components/Modal/Modal';
import {
  TitleHeadingAnimation,
  SubTitleHeadingAnimation,
  ButtonHeadingAnimation,
} from '../animation/home.styles';

const Title = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Div>
      <Container>
        <TitleHeadingAnimation>
          <TitleHeading>Make the planet greener and earn</TitleHeading>
        </TitleHeadingAnimation>
        <SubTitleHeadingAnimation>
          <SubTitleHeading>
            Invest in solar plants construction without 3rd parties and earn
            from 15% QPR
          </SubTitleHeading>
        </SubTitleHeadingAnimation>
        <ButtonHeadingAnimation>
          <Button
            text={'Join the waitlist'}
            fontSize={'20px'}
            fontFamily={'AeonikProTRIALRegular'}
            clickHandler={() => setIsOpen(true)}
            hoverColor={'#FFCB11'}
            hoverColorTitle={'#000'}
          />
        </ButtonHeadingAnimation>
      </Container>
      <Modal isOpen={isOpen} handleClose={handleClose} isWaitlist={true} />
    </Div>
  );
};

export default Title;
