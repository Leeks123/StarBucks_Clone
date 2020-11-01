import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import award_01 from "../../images/footer_award_01.jpg";
import award_02 from "../../images/footer_award_02.jpg";
import award_03 from "../../images/footer_award_03.jpg";
import award_04 from "../../images/footer_award_04.jpg";
import award_05 from "../../images/footer_award_05.jpg";
import award_06 from "../../images/footer_award_06.jpg";
import award_07 from "../../images/footer_award_07.jpg";
import award_08 from "../../images/footer_award_08.jpg";
import award_09 from "../../images/footer_award_09.jpg";
import award_10 from "../../images/footer_award_10.jpg";
import award_11 from "../../images/footer_award_11.jpg";
import award_12 from "../../images/footer_award_12.jpg";
import styled from "styled-components";

const Img = styled.img`
  width: 150px;

  @media (max-width: 660px) {
    width: 33%;
  }
`;
const Wrapper = styled.div`
  .carosel {
    height: 64px;
  }
  .carousel__slider-tray-wrapper,
  carousel__inner-slide {
    height: 32px;
  }
  & > li {
    height: 32px;
    padding: 0;
    slideInner___2mfX9 carousel__inner-slide {
      height: 32px;
    }
  }
  @media (max-width: 660px) {
    .carousel__slider-tray-wrapper,
    carousel__inner-slide {
      width: 100%;
    }
  }
`;
const Awards = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Wrapper>
      {width > 660 ? (
        <CarouselProvider
          naturalSlideWidth={600}
          naturalSlideHeight={32}
          totalSlides={3}
          isPlaying={true}
        >
          <Slider>
            <Slide index={0}>
              <Img src={award_01} alt="award" />
              <Img src={award_02} alt="award" />
              <Img src={award_03} alt="award" />
              <Img src={award_04} alt="award" />
            </Slide>
            <Slide index={1}>
              <Img src={award_05} alt="award" />
              <Img src={award_06} alt="award" />
              <Img src={award_07} alt="award" />
              <Img src={award_08} alt="award" />
            </Slide>
            <Slide index={2}>
              <Img src={award_09} alt="award" />
              <Img src={award_10} alt="award" />
              <Img src={award_11} alt="award" />
              <Img src={award_12} alt="award" />
            </Slide>
          </Slider>
        </CarouselProvider>
      ) : (
        <CarouselProvider
          naturalSlideWidth={300}
          naturalSlideHeight={32}
          totalSlides={4}
          isPlaying={true}
        >
          <Slider>
            <Slide index={0}>
              <Img src={award_01} alt="award" />
              <Img src={award_02} alt="award" />
              <Img src={award_03} alt="award" />
            </Slide>
            <Slide index={1}>
              <Img src={award_04} alt="award" />
              <Img src={award_05} alt="award" />
              <Img src={award_06} alt="award" />
            </Slide>
            <Slide index={2}>
              <Img src={award_07} alt="award" />
              <Img src={award_08} alt="award" />
              <Img src={award_09} alt="award" />
            </Slide>
            <Slide index={3}>
              <Img src={award_10} alt="award" />
              <Img src={award_11} alt="award" />
              <Img src={award_12} alt="award" />
            </Slide>
          </Slider>
        </CarouselProvider>
      )}
    </Wrapper>
  );
};

export default Awards;
