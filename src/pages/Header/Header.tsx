/* eslint-disable jsx-quotes */
import React, { useEffect, useState } from 'react';
// import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import SocialLink from '../../components/SocialLink/SocialLink';
import {
  LogoIcon,
  Container,
  LinksList,
  LinksItem,
  GiperLink,
  IconWrapper,
  FixedContainer,
} from '../Header/styles';
import {
  HamburgerContainer,
  Hamburger,
  MobileContent,
  MobileMenu,
  BurgerHeader,
  ContentBurger,
  GiperLinkBurger,
  LinksBurger,
} from '../../components/BurgerMenu/styled';
import { EmailTtitle, SocialContainer } from '../Footer/styled';
import { HeaderAnimation } from '../../components/animation/home.styles';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const [color, setColor] = useState({
    color: 'transparent',
    PositionTop: '10',
    isBorder: false,
  });

  const menuHandler = () => {
    setIsOpenedMenu(!isOpenedMenu);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setColor({ color: '#FFCB11', PositionTop: '0', isBorder: true });
      } else {
        setColor({ color: 'transparent', PositionTop: '10', isBorder: false });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FixedContainer
      colorHeader={color.color}
      PositionTop={color.PositionTop}
      isBorder={color.isBorder}
    >
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
            <ContentBurger>
              <GiperLinkBurger onClick={() => navigate('/sales')}>
                Join the public sale
              </GiperLinkBurger>
            </ContentBurger>
            <LinksBurger>
              <SocialContainer>
                <p>Write us:</p>
                <EmailTtitle>mail@qenergyglobal.com</EmailTtitle>
                <SocialLink isColorIcon={true} title="Or find us online" />
              </SocialContainer>
            </LinksBurger>
          </MobileContent>
        </HamburgerContainer>

        <HeaderAnimation>
          <IconWrapper href="#" color={'#000000'}>
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

          <LinksList>
            <LinksItem>
              <a href="#about">About</a>
            </LinksItem>
            <LinksItem>
              <a href="#solar_energy">Why solar energy</a>
            </LinksItem>
            <LinksItem>
              <a href="#how_it_works">How it works</a>
            </LinksItem>
            <LinksItem>
              <a href="#why_us">Why us</a>
            </LinksItem>
            <LinksItem>
              <a href="#team">Team</a>
            </LinksItem>
            <GiperLink onClick={() => navigate('/sales')}>
              Join the public sale
            </GiperLink>
          </LinksList>
        </HeaderAnimation>

        <Modal isOpen={isOpen} handleClose={handleClose} isWaitlist={true} />
      </Container>
    </FixedContainer>
  );
};

export default Header;
