import React from 'react';
import styled from "styled-components";


import tip from "../../images/enjoy/icon_coffee_info_tip.png";

const Wrapper = styled.div`
    // padding : 37px;
`;
const Top = styled.div`
    margin : 67px 37px;
    padding : 0px 50px;
    background : url(${props=>props.icon}) no-repeat;
    h3 {
        font-size : 18px;
        font-weight : bold;
    }
    p {
        font-size : 14px;
    }
`;

const Bottom = styled.div`
    background-color : #f4f4f2;
    padding : 20px 0px 80px 0px;
    ul {
        margin : 0px;
        padding : 0;
        li {
            margin : 20px 20px;
            display : flex;
            justify-content : space-between;

            .imgWrap {
                width : 480px;
                overflow : hidden;
                img {
                    width : 100%;
                    height : 100%;
                    object-fit : fill;
                }
                &:hover {
                    img {
                        transform: scale(1.2);
                        transition: all .5s;
                    }
                }
            }
            .descBox {
                width : 550px;
                padding-left : 50px;
                h4 {
                    font-size : 16px;
                    color : #006633;
                    font-weight : bold
                }
                p {
                    font-size : 14px;
                    color : #444;
                    padding-right : 150px;
                    margin-bottom : 30px;
                }
                .descTip {
                    padding-right : 150px;

                    span {
                    }
                }
            }
        }
    }
    @media (max-width :1100px) {
        ul {
            li {
                margin : 20px 30px;
                
                .imgWrap {
                    width : 43.5%;
                    img {
                        width : 100%;
                        
                    }
                }
                .descBox {
                    width : 43.59%;
                    p ,.descTip {
                        padding-right : 10px;
                    }
                }
            }
        }   
    }
    @media (max-width :960px) {
        ul {
            li {
                .imgWrap {
                    width : 42%;
                    img {
                        width : 100%;
                        
                    }
                }
                .descBox {
                    width : 42%;
                }
            }
        }   
    }
    @media (max-width : 640px){
        ul {
            margin : 30px 25px;
            li {
                margin : 20px 0;
                display : block;
                .imgWrap {
                    width : 100%;
                    img {
                        width : 100%;
                        
                    }
                }
                .descBox {
                    width : 100%;
                    margin : 30px 10px;
                    p {
                        padding-right : 0px;
                    }
                    .descTip {
                        padding-right : 0px;

                    }
                }
            }
        }
    }
`;

const EnjoyPage_method = ({top,video,bottom}) => {
    return (
        <Wrapper>
            <Top icon={top.icon}>
                <h3>{top.title}</h3>
                <p>{top.desc}</p>
            </Top>
            <div className="video"></div>
            <Bottom>
                <ul className="list">
                    {bottom.map((section,i)=>(
                        <li key={i}>
                            <div className="imgWrap">
                            <img src={section.img} alt="sectioImages"/>
                            </div>
                            <div className="descBox" style={{background:`url(${section.num_img}) no-repeat`}}>
                                <h4>{section.title}</h4>
                                <p>{section.desc}</p>
                                {section.tip && (
                                    <div className="descTip">
                                    <img src={tip} alt="tipIcon"/>
                                    <br/>
                                    <span >{section.tip}</span>
                                </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </Bottom>
        </Wrapper>
    );
};

export default EnjoyPage_method;