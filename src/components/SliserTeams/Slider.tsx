/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-quotes */
/* eslint-disable max-lines-per-function */
import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { SLIDES } from '../../components/helpers/TeamsOptin';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ReactComponent as Linkedin } from '../../assets/icons/social/linkedin.svg';
import {
  Embla,
  EmblaViewport,
  EmblaContainer,
  EmblaSlide,
  EmblaBtnPrev,
  EmblaBtnNext,
  EmblaTitleDiv,
  EmblaTitleName,
  EmblaTitlePlace,
  EmblaTitleSpan,
  IconContainer,
  SlideCounter,
  SlideBtn,
  SlideHeader,
} from './styled';

interface ITem {
  image: string;
  id: number;
  name: string;
  place: string;
  link: string;
  src: string;
}

const Slider = () => {
  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [slideCount, setSlideCount] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  const [numberSlide] = useState<number>(SLIDES.length);

  const getScreenWidth = () => {
    let slides = 1.5;
    const screenWidth = window.screen.width;

    if (screenWidth > 1340) {
      slides = 1.5;
    }

    if (screenWidth < 1340) {
      slides = 1;
    }
    return slides;
  };
  const [viewportRef, embla] = useEmblaCarousel({
    loop: false,
    slidesToScroll: getScreenWidth(),
    // slidesToScroll: 1, // 1.5
    skipSnaps: false,
  });
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const prev = () => {
    scrollPrev();
    if (slideCount === 1) return;
    setSlideCount((slideCount) => slideCount - 1);
  };

  const next = () => {
    const screenWidth = window.screen.width;
    if (screenWidth > 1340) {
      if (slideCount === 5) return;
    }
    if (screenWidth < 1340) {
      if (slideCount === 15) return;
    }

    scrollNext();
    setSlideCount((slideCount) => slideCount + 1);
  };

  const onSelect = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    // setPrevBtnEnabled(embla.canScrollPrev());
    // setNextBtnEnabled(embla.canScrollNext());
    onSelect();
  }, [embla, onSelect, windowWidth]);

  return (
    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
      <Embla id="team">
        <SlideHeader>
          <span>Our team</span>
          <SlideBtn>
            <EmblaBtnPrev onClick={prev} />
            <SlideCounter>
              {slideCount} / {''}
              {window.screen.width > 1340
                ? (numberSlide / 3).toFixed(0)
                : numberSlide?.toFixed(0)}
            </SlideCounter>
            <EmblaBtnNext onClick={next} />
          </SlideBtn>
        </SlideHeader>

        <EmblaViewport ref={viewportRef}>
          <EmblaContainer>
            {SLIDES.map(({ name, image, place, link, src, id }: ITem) => (
              <EmblaSlide key={id}>
                <img src={image} alt="Team" />
                <EmblaTitleDiv>
                  <EmblaTitleSpan>
                    <EmblaTitleName>{name}</EmblaTitleName>
                    <EmblaTitlePlace>{place}</EmblaTitlePlace>
                  </EmblaTitleSpan>
                  <IconContainer>
                    {link === '' ? (
                      <Linkedin />
                    ) : (
                      <img
                        src={src}
                        alt={'Oops'}
                        onClick={() => window.open(link, '_blank')}
                      />
                    )}
                  </IconContainer>
                </EmblaTitleDiv>
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaViewport>
      </Embla>
    </AnimationOnScroll>
  );
};

export default Slider;
