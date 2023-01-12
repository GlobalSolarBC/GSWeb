import React, { useState } from 'react';
// import Button from '../../../components/Button/Button';
// import Modal from '../../../components/Modal/Modal';
import Burger from './Burger/Burger';
import { useNavigate } from 'react-router-dom';
import {
  LogoIcon,
  Container,
  LinksList,
  LinksItem,
  GiperLink,
  IconWrapper,
} from '../Header/styles';
import {
  HamburgerContainer,
  Hamburger,
  MobileContent,
  MobileMenu,
  BurgerHeader,
} from '../../../components/BurgerMenu/styled';
import { HeaderAnimation } from '../../../components/animation/home.styles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const navigate = useNavigate();

  const menuHandler = () => {
    setIsOpenedMenu(!isOpenedMenu);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <HamburgerContainer isOpen={isOpenedMenu}>
        <MobileContent>
          <BurgerHeader>
            <IconWrapper color={'#ffffff'}>
              <LogoIcon />
            </IconWrapper>

            <Hamburger isOpen={isOpenedMenu} onClick={menuHandler}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Hamburger>
          </BurgerHeader>
          <Burger />
        </MobileContent>
      </HamburgerContainer>

      <HeaderAnimation>
        <IconWrapper color={'#000000'} onClick={() => navigate('/')}>
          <LogoIcon />
        </IconWrapper>
        <MobileMenu>
          <Hamburger isOpen={isOpenedMenu} onClick={menuHandler}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </MobileMenu>
      </HeaderAnimation>
    </Container>
  );
};

export default Header;
