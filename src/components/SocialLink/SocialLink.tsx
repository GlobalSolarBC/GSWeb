// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Telegram } from '../../assets/icons/social/telegram.svg';
import { ReactComponent as TelegramChat } from '../../assets/icons/social/TG.svg';
import { ReactComponent as TelegramWhite } from '../../assets/icons/social/telwhite.svg';
import { ReactComponent as Twitter } from '../../assets/icons/social/twitter.svg';
import { ReactComponent as Reddit } from '../../assets/icons/social/reddit.svg';
import { ReactComponent as Medium } from '../../assets/icons/social/medium.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/social/LinkedInGold.svg';
import { ReactComponent as LinkedInWhite } from '../../assets/icons/social/LinkedInWhite.svg';

interface IProps {
  isColorIcon?: boolean;
  title?: string;
  id?: number;
  hoverColor?: string;
}

const SocialLink = ({ isColorIcon, title, hoverColor }: IProps) => {
  const MEDIA_LINKS = [
    {
      src: <Telegram />,
      link: 'https://t.me/QenergyChannel',
      title: 'telegram',
      id: 1,
    },
    {
      src: isColorIcon ? <TelegramWhite /> : <TelegramChat />,
      link: ' https://t.me/QenergyCommunity',
      title: 'telegramChat',
      id: 2,
    },
    {
      src: <Twitter />,
      link: 'https://twitter.com/QEnergyCrypto',
      title: 'icon',
      id: 3,
    },
    {
      src: <Reddit />,
      link: 'https://medium.com/@QEnergy',
      title: 'icon',
      id: 4,
    },
    {
      src: <Medium />,
      link: 'https://www.reddit.com/r/qenergy/ ',
      title: 'icon',
      id: 5,
    },
    {
      src: isColorIcon ? <LinkedInWhite /> : <Linkedin />,
      link: 'https://www.linkedin.com/company/89225815/admin/',
      title: 'icon',
      id: 6,
    },
  ];
  return (
    <SocialContent>
      <TitleSocial>{title}</TitleSocial>
      <DivSocial>
        {MEDIA_LINKS.map((item) => (
          <IconWrapper
            id={item.id}
            isColorIcon={isColorIcon}
            key={item.id}
            hoverColor={hoverColor}
          >
            <span onClick={() => window.open(item.link, '_blank')}>
              <>{item.src}</>
            </span>
          </IconWrapper>
        ))}
      </DivSocial>
    </SocialContent>
  );
};

export default SocialLink;

const SocialContent = styled.div`
  max-width: 360px;
  height: 70px;
`;

const DivSocial = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.div<IProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    fill: ${(props) => (props.isColorIcon ? '#FFF' : '#000')};
    width: ${(props) => (props.id === 2 ? '60px' : '42px')};
    height: ${(props) => (props.id === 2 ? '37px' : '42px')};
    &:hover {
      fill: ${(props) => props.hoverColor};
      stroke: ${(props) => (props.hoverColor === '#fff' ? '#fff' : '#fff')};
      /* stroke: 'white'; */
      #stroke_svg {
        fill: ${(props) => props.hoverColor};
        stroke-width: 0.5;
      }
    }
  }
  #basic_stroke_svg {
    &:hover {
      stroke-width: ${(props) => (props.hoverColor === '#fff' ? '0px' : '6px')};
    }
  }
`;
const TitleSocial = styled.p`
  margin: 0 0 10px 0;
  font-size: 18px;
`;
