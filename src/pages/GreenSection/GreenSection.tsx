/* eslint-disable jsx-quotes */
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  Container,
  Content,
  ListContainer,
  List,
  ListItemProgress1,
  ListItemProgress2,
  ListItemProgress3,
  ListItemProgress4,
  ProgressImg1,
  ProgressImg2,
  MenuItem,
  TitleSpan,
  //
  TextContainer,
  TextUl,
  Text,
  TextSpan,
  TitleSpanYear,
  TextHeading,
  TextSubHeading,
  TextSpanButtom,
} from './styles';

const GreenSection = () => {
  return (
    // eslint-disable-next-line jsx-quotes
    <Container id="solar_energy">
      <Content>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <ListContainer>
            <List>
              <MenuItem>
                <TitleSpan>$120 billion</TitleSpan>
                <ListItemProgress1>
                  <TitleSpanYear>2008</TitleSpanYear>
                </ListItemProgress1>
              </MenuItem>
              <MenuItem>
                <TitleSpan>$270.2 billion</TitleSpan>
                <ListItemProgress2>
                  <TitleSpanYear>2014</TitleSpanYear>
                </ListItemProgress2>
              </MenuItem>

              <MenuItem>
                <TitleSpan>$288.9 billion</TitleSpan>
                <ListItemProgress3>
                  <TitleSpanYear>2018</TitleSpanYear>
                </ListItemProgress3>
              </MenuItem>
              <ListItemProgress4>
                <ProgressImg1>
                  <TitleSpan>$226 billion</TitleSpan>
                </ProgressImg1>
                <ProgressImg2>
                  <TitleSpanYear>H1</TitleSpanYear>
                  <TitleSpanYear>2022 </TitleSpanYear>
                </ProgressImg2>
              </ListItemProgress4>
            </List>
            <p>
              Global investment in renewable energy reached a record half-year
              figure of US$226 billion in H1 2022, driven by soaring demand for
              clean energy technologies amid the ongoing energy and climate
              crisis, according to a BloombergNEF (BNEF) report.
            </p>
          </ListContainer>
        </AnimationOnScroll>
        <TextContainer>
          <div>
            <TextHeading>Worth investing in green energy</TextHeading>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
              <TextSubHeading>
                These are the reasons why you need to invest in solar energy:
              </TextSubHeading>
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            <TextUl>
              <Text>
                <TextSpan>
                  Stable yield from 15% per quarter from real world
                </TextSpan>
              </Text>
              <Text>
                <TextSpan>
                  Stable profit independent of the state of the crypto market
                </TextSpan>
              </Text>
              <Text>
                <TextSpan> Protect the environment</TextSpan>
                <TextSpanButtom>
                  A typical residential solar project will eliminate 3 to 4 tons
                  of carbon emissions each year—the equivalent of planting over
                  100 trees annually.
                </TextSpanButtom>
              </Text>
            </TextUl>
          </AnimationOnScroll>
        </TextContainer>
      </Content>
    </Container>
  );
};

export default GreenSection;
