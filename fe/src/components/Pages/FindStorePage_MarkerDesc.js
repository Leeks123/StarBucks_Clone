import React from 'react';
import styled from "styled-components";
import {GoLocation} from "react-icons/go";
import {AiOutlinePhone,AiOutlineCloseCircle} from "react-icons/ai";

const Wrapper = styled.div`
    width : 296px;
    // height : 205px;

    header {
        background-color : #8c8279;
        width : 100%;
        padding : 10px;
        color : white;
        font-size :14px;
        font-weight : bold;
    }
    .desc_wrapper {
        width : 100%;
        padding : 30px 20px;
        .desc {
            width : 100%;
            .address {
                word-wrap : break-word;
            }
            .phone {
                width : 100%;
            }
        }
        .more {
            position : relative;
            left : 50%;
            margin-left : -45px;
            width : 90px;
            height : 30px;
            background-color : #222;
            color : white;
            border-radius : 5px;
            text-align : center;
            font-size : 14px;
            font-weight : bold;
        }
    }

`;

const FindStorePage_SearchBox = () => {
    return (
        <Wrapper>
            <header>{"dfdksfjkldsjfklds"}
                <AiOutlineCloseCircle/>
            </header>
            <div className="desc_wrapper">
                <div className="desc">
                    <p className="address"><GoLocation/>sdkfjdsklfjdklsfjkldsjfkldsjfkldjsfkldjsfkldsjfkldjsk</p>
                    <p className="phone"><AiOutlinePhone/>1522-3232</p>
                </div>
                <div className="more">more</div>
            </div>
        </Wrapper>
    );
};

export default FindStorePage_SearchBox;