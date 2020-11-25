import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import logo from "../../images/enjoy/reserve/sb_reserve_logo.png";
import clover from "../../images/enjoy/reserve/p_coffee_reserve_icon1.png";
import blackEagle from "../../images/enjoy/reserve/p_coffee_reserve_icon2.png";
import poc from "../../images/enjoy/reserve/p_coffee_reserve_icon3.png";
import siphon from "../../images/enjoy/reserve/p_coffee_reserve_icon4.png";
import chemex from "../../images/enjoy/reserve/p_coffee_reserve_icon5.png";
import coldbrew from "../../images/enjoy/reserve/p_coffee_reserve_icon6.png";

import dim_clover from "../../images/enjoy/reserve/waytoEnjoy1.jpg";
import dim_blackeagle from "../../images/enjoy/reserve/waytoEnjoy2.jpg";
import dim_poc from "../../images/enjoy/reserve/waytoEnjoy3.jpg";
import dim_siphon from "../../images/enjoy/reserve/waytoEnjoy4.jpg";
import dim_chemex from "../../images/enjoy/reserve/waytoEnjoy5.jpg";
import dim_coldbrew from "../../images/enjoy/reserve/waytoEnjoy6.jpg";


const Wrapper = styled.div`
    padding-top : 30px;
    .logo {
        display : block;
        width : 300px;
        margin : 0 auto;
    }
    h5 {
        text-align : center; 
        color : #222;
        font-size : 40px;
        font-weight : bold;
        margin-top : 30px;
    }
    p {
        text-align : center;
        margin-top : 30px;
        color : #444;
        font-size : 14px;
    }
    small {
        display: block;
        margin: 40px 0 0 0;
        text-align: center;
        font-size: 14px;
        color: #222222;
        font-weight: bold;
    }
    .cards {
        ul {
            display : grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap : 60px 40px;

            width : 915px;
            padding : 100px 0;
            margin : 0 auto;

            position : relative;
            li {
                position : relative;
                padding : 0;
                margin : 0;
                list-style : none;
                img {
                    &:hover {
                        transform: scale(1.1);
                        transition: all .5s;
                    }
                }
                &:nth-child(2), &:nth-child(5) {
                    top : -25px;
                }
            }
        }
    }
`;
const Dim = styled.div`
    width : 642px;
    border : 1px solid red;

    .dimBox {
        .dimTitle {
            width : 100%;
            height : 73px;
            background-color : #B06545;
            color : white;
            font-size : 25px;
            font-weight : bold;
            text-align : center;
            padding-top : 18px;
        }
        .dimContents {
            width : 100%;
            padding : 40px 62px 80px 62px;
            .slider {
                .content {
                    h4 {
                        strong {
                            font-size : 25px;
                        }
                        font-size : 24px;
                    }
                    img {
                        width : 100%;
                        object-fit : contain;
                        margin-top : 30px;
                    }
                    p {
                        margin-top : 24px;
                        font-size : 14px;
                        color #444;
                        
                    }
                }
            }
            .slick-arrow {
                color : black;
                .slick-next, .slick-prev {
                    color : black;
                }
            }
        }
    }
`;

const EnjoyPage_reserve = () => {
    const sliderSetting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Wrapper>
            <img className="logo" src={logo} alt="logo"/>
            <h5>리저브를 이렇게 즐겨보세요</h5>
            <p>추출방식에 따라 같은 원두더라도 커피의 맛과 향기가 달라집니다.<br/>
            이제, 스타벅스 리저브™ 매장에서는 클로버®, 블랙 이글, POC, 사이폰, 케멕스, 리저브 콜드 브루등의 다양한 추출장비로<br/>
            추출한 리저브를 즐길 수 있게 되었습니다. 장비별로 다채로운 커피의 맛을 즐겨보세요.</p>
            <small>※ 클릭 시 상세 설명을 볼 수 있습니다.</small>
            <div className="cards">
                <ul>
                    <li><img src={clover} alt="clover"/></li>
                    <li><img src={blackEagle} alt="blackEagle"/></li>
                    <li><img src={poc} alt="poc"/></li>
                    <li><img src={siphon} alt="siphon"/></li>
                    <li><img src={chemex} alt="chemex"/></li>
                    <li><img src={coldbrew} alt="coldbrew"/></li>
                </ul>
            </div>
            <Dim>
                <div className="dimBox">
                    <div className="dimTitle">리저브를 즐기는 다양한 추출 방식</div>
                    <div className="dimContents">
                        <Slider {...sliderSetting} className="slider">
                            <div className="content">
                                <h4><strong>CLOVER</strong><br/>클로버</h4>
                                <img src={dim_clover} alt="dimImg"/>
                                <p className="desc">마이크로 필터와 진공 압착 추출방식을 사용하는 클로버®는 오직 스타벅스에서만 만나볼 수 있는 특별한 커피 추출 기구입니다. 진하면서도 깔끔한 맛, 풍부한 아로마가 느껴지는 완벽한 한 잔의 커피를 만들어 냅니다.</p>
                            </div>
                            <div className="content">
                                <h4><strong>BLACK EAGLE</strong><br/>블랙 이글</h4>
                                <img src={dim_blackeagle} alt="dimImg"/>
                                <p className="desc">110년 전통의 ‘빅토리아 아르두이노(Victoria Arduino)’사의 최상급 에스프레소 머신 블랙 이글. 최고의 커피, 최고의 추출 기구, 최고의 바리스타가 만들어내는 개성 있고 다채로운 리저브 커피의 풍미를 다양한 음료로 즐겨보세요.</p>
                            </div>
                            <div className="content">
                                <h4><strong>POC</strong><br/>푸어 오버 핸드 드립</h4>
                                <img src={dim_poc} alt="dimImg"/>
                                <p className="desc">푸어 오버(Pour Over) 핸드 드립은 부드럽고 깨끗한 풍미, 은은한 매력을 느낄 수 있는 가장 전통적인 커피 추출 방법의 하나입니다. 때때로 조금 더 부드러운 커피를 즐기고 싶은 날, 커피 본연의 향과 풍미를 최대한 이끌어 내기 위한 전문가의 섬세한 정성이 가득한 푸어 오버 커피를 만나보세요.</p>
                            </div>
                            <div className="content">
                                <h4><strong>SIPHON</strong><br/>사이폰</h4>
                                <img src={dim_siphon} alt="dimImg"/>
                                <p className="desc">아름다운 할로겐 불빛으로부터 시작하는 사이폰의 추출 과정은 마치 사뭇 진지하고 신비로운 과학 실험처럼 느껴집니다. 증기압과 진공력을 이용하는 사이폰의 매혹적인 추출 과정은 색다른 경험뿐만 아니라 풍부하면서도 섬세한 아로마가 매력적인 커피를 선사합니다.</p>
                            </div>
                            <div className="content">
                                <h4><strong>CHEMEX</strong><br/>케맥스</h4>
                                <img src={dim_chemex} alt="dimImg"/>
                                <p className="desc">60년 간 변함없이 이어진 눈길을 사로잡는 우아하면서도 기능적인 외관을 가진 케멕스. 일체화 된 디켄터를 통해 극대화되는 리저브 커피의 깨끗하고 밝은 풍미를 즐겨 보세요.</p>
                            </div>
                            <div className="content">
                                <h4><strong>COLD BREW</strong><br/>콜드 브루</h4>
                                <img src={dim_coldbrew} alt="dimImg"/>
                                <p className="desc">콜드 브루의 달콤함, 깊고 부드러운 풀 바디감에 Reserve 단일 원산지 커피 특유의 풍미가 더해진 리저브 콜드 브루. 커피 매스터의 14시간 정성으로 추출한 리저브의 또 다른 깊고 부드러운 풍미를 경험해 보세요.</p>
                            </div>
                            
                        </Slider>
                    </div>
                </div>
            </Dim>
        </Wrapper>
    );
};

export default EnjoyPage_reserve;