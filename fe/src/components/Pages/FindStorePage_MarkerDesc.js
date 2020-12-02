import React, { useEffect } from 'react';
import styled from "styled-components";
import {GoLocation} from "react-icons/go";
import {AiOutlinePhone,AiOutlineCloseCircle} from "react-icons/ai";

const Wrapper = styled.div`
    width : 296px;
    height : 205px;
    position : absolute;
    top : ${props=>props.y-390}px;
    left : ${props=>props.x-148}px;
    z-index : 150;

    header {
        background-color : #8c8279;
        width : 100%;
        padding : 10px;
        color : white;
        font-size :14px;
        font-weight : bold;
        display : flex;
        justify-content : space-between;
    }
    .desc_wrapper {
        border : 1px solid #aaa;
        border-top : 0px;
        background-color : white;
        width : 100%;
        padding : 30px 20px;
        .desc {
            width : 100%;
            .address {
                p {
                    word-wrap : break-word;
                    word-break : break-all;
                }
            }
            .phone {
                width : 100%;
            }
            .address, .phone {
                display : inline-flex;
                p {
                    margin-left : 10px;
                }
            }
        }
        .more {
            position : relative;
            left : 50%;
            margin-left : -45px;
            margin-top : 10px;
            width : 90px;
            height : 30px;
            background-color : #222;
            color : white;
            border-radius : 5px;
            text-align : center;
            font-size : 16px;
            font-weight : bold;
        }
    }

`;

const FindStorePage_MarkerDesc= ({position,PosFn,dragged,DragFn}) => {
    const onCloseClick = ()=>{
        PosFn(null);
    }
    
    if(dragged){
        DragFn(false);
        PosFn(null);
    }

    return (
        <Wrapper x={position[0]} y={position[1]}>
            <header>
                <span>{"dksjfkldsjfklsd"}</span>
                <AiOutlineCloseCircle onClick={onCloseClick}/>
            </header>
            <div className="desc_wrapper">
                <div className="desc">
                    <div className="address"><GoLocation size="20"/><p>dfkjdskfjddsfjkldsjfkldsjfkljsdklskfjsdkjfkdsjfkds</p></div>
                    <div className="phone"><AiOutlinePhone size="20"/><p>1522-3232</p></div>
                </div>
                <div className="more">more</div>
            </div>
        </Wrapper>
    );
};

export default FindStorePage_MarkerDesc;