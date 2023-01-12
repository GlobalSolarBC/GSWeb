import React, { useState } from 'react';
import { DATA } from './FaqData';
import { ReactComponent as CrossOpen } from '../../assets/icons/plusOpen.svg';
import { ReactComponent as Cross } from '../../assets/icons/plus.svg';
import {
  Container,
  Heading,
  Title,
  MenuList,
  MenuItem,
  IconWrapper,
  Span,
  SubTilteList,
  SubTilteItem,
} from './styled';

interface IProps {
  id: number;
  title: string;
  subTitle: string[];
  isActive: boolean;
}

const GetSrting = (str: string) => {
  const srt1 = 'Q1 2023 - 750k';
  const str2 = 'Q2 2023 - 1,200k';

  const CustomStyle = {
    listStyle: 'disc',
    marginLeft: '20px',
  };

  if (srt1.includes(str)) {
    return <li style={CustomStyle}>{str}</li>;
  }
  if (str2.includes(str)) {
    return <li style={CustomStyle}>{str}</li>;
  }
  return str;
};

const Faq = () => {
  const [updateData, setUpdateData] = useState(DATA);

  const isOpenMore = (id: number) => {
    const newData = updateData.map((el: IProps) => {
      if (el.id === id) {
        if (el.isActive === true) {
          return {
            ...el,
            isActive: false,
          };
        }
        return {
          ...el,
          isActive: true,
        };
      }
      return {
        ...el,
        isActive: false,
      };
    });

    setUpdateData(newData);
  };

  return (
    <Container>
      <Heading>FAQ</Heading>

      <MenuList>
        {updateData?.map(({ id, title, subTitle, isActive }: IProps) => (
          <MenuItem key={id}>
            <Span onClick={() => isOpenMore(id)} isOpen={isActive}>
              <Title>{title}</Title>
              <IconWrapper isOpen={isActive}>
                {isActive ? <CrossOpen /> : <Cross />}
                {/* <Cross /> */}
              </IconWrapper>
            </Span>

            {isActive && (
              <SubTilteList>
                {subTitle.map((el: string, idx) => (
                  <SubTilteItem key={idx}>{GetSrting(el)}</SubTilteItem>
                ))}
              </SubTilteList>
            )}
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  );
};

export default Faq;
