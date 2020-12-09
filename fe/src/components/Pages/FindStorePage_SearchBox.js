import React, { useEffect, useState } from 'react';
import styled, {css} from "styled-components";
import {IoIosArrowBack} from "react-icons/io";
import { Tabs,Collapse,Input,Card } from 'antd';

import { listData,Seoul,Gwangju } from "../../data/FindStoreData";
import { setState } from "../../modules/mapMarker"
import  { useDispatch } from "react-redux";

import pinDT from "../../images/findStore/pin_general_DT.png";
import pinGE from "../../images/findStore/pin_general.png";
import pinRE from "../../images/findStore/pin_reserve.png";

const {Search} = Input;
const { Panel } = Collapse;
const { TabPane } = Tabs;



const Wrapper = styled.div`
position : absolute;
left : 20px;
top : 150px;
width : 300px;
background-color : white;

.ant-tabs-nav {
    margin : 0;
    .ant-tabs-nav-list {
        width : 100%;
        .ant-tabs-tab {
           width : 50%;
           margin : 0;
           background-color : #f4f4f2;
           .ant-tabs-tab-btn {
               width : 100%;
               text-align : center;
               background-color : #f4f4f2;
               font-weight : bold;
           }
           &.ant-tabs-tab-active {
               background-color : #006633;
               .ant-tabs-tab-btn {
                   background-color : #006633;
                   color : white;
                   font-weight : bold;
               }
           
           }
        }
    }
}
.ant-collapse-content-box {
    padding : 0;
}
.LocalSearch {
    .header {
        height : 60px;
        background-color : #006633;
        color : white;
        font-size : 14px;
        font-weight : bold;
        text-align : center;
        padding-top : 20px;
    }
    .city {
        display : flex;
        background-color : #f4f4f2;
        width : 100%;
        height : 54px;
        padding-top : 15px;
        padding-left : 20px;
        font-size : 14px;
        font-weight :bold;

        span {
            margin-left : 10px;
        }
    }
    ul {
        display : grid;
        grid-template-columns : 1fr 1fr;
        grid-template-rows: repeat(auto-fill, minmax(50px, auto));
        ${props=>props.step===3 && css`
            display : block;
        `}
        
        
        margin : 0;
        padding : 5px 15px 10px 15px;

        height : 260px;
        overflow : scroll;
        li {
            list-style : none;
            margin : 0;
            padding : 10px 10px 10px 20px;
            border-bottom : 0.5px solid #aaa;
            &:hover {
                text-decoration : underline;
                color : #006633;
            }
        }
        .store {
            display : flex;
            justify-content : space-between;
            
            padding : 0;
            padding-bottom : 5px;
            margin-bottom : 15px;
            h4 {
                margin : 0;
                font-weight : bold;
            }
            p {
                margin : 0;
            }
        }
    }
}
`;

const FindStorePage_SearchBox = ({reduxUpdate}) => {
    const [step,setStep] = useState(1);
    const [city,setCity] = useState("");
    const [district,setDistrict] = useState("");
    const [filteredData,setFilteredData] = useState([]);

    const reset = ()=>{
        setStep(1);
        // setCity("")
        // setDistrict("")
        console.log("reset")
    }
    const clickStep1 = (e)=>{
        setCity(e.target.innerText);
        setStep(2);
    }
    const backToStep1 = ()=>{
        setStep(1);
    }
    const dataFilter = (city,district)=>{
        if(city==="서울"){
            if(district==="전체"){
                return Seoul;
            }else{
                return Seoul.filter((store)=>store.address.split(" ")[1]===district)
            }
        }else if(city==="광주"){
            if(district==="전체"){
                return Gwangju;
            }else{
                return Gwangju.filter((store)=>store.address.split(" ")[1]===district)
            }
        }else {
            return [];
        }
    }
    const dispatch = useDispatch();

    const clickStep2 = (e)=>{
        setDistrict(e.target.innerText);
        setStep(3);
    }

    useEffect(()=>{
        if(district!==""){
            setFilteredData(dataFilter(city,district));
            // 리덕스로 넘기기
            console.log('redux로 넘기기');
            dispatch(setState(city,district,dataFilter(city,district)));
            reduxUpdate(district);
        }
    },[district])

    return (
        <Wrapper step={step}>
            <Tabs size="large" >
                <TabPane tab="매장 찾기" key="1">
                    <Collapse expandIconPosition={"right"}>
                        <Panel header="옵션 선택" key="1">
                            <Tabs size="middle" onTabClick={reset}>
                                <TabPane tab="퀵 검색" key="1">
                                    <Search
                                        placeholder="input search text"
                                        allowClear
                                        style={{ width: '100%', padding: '10px',backgroundColor:'#006633' }}
                                    />
                                    <Card title="검색 결과" bordered={true} style={{ width: '100%',backgroundColor:'#f4f4f2' }}>
                                    <p>not developed</p>
                                    </Card>
                                </TabPane>
                                <TabPane tab="지역 검색" key="2" className="LocalSearch">
                                    {step===3?<div className="city">{city} {district} (검색 결과 {filteredData.length}개)</div> :
                                        <div>
                                            <div className="header">{listData[step].header}</div>
                                            {step===2 && <div className="city"><IoIosArrowBack onClick={backToStep1} size="24"/><span>{city}</span></div>}
                                        </div>    
                                    }
                                    <ul>
                                        {step===1 ? listData[step].region.map((i)=>(<li onClick={clickStep1}>{i}</li>)):
                                            step===2 && listData[step].region[city] ? listData[step].region[city].map((i)=>(<li onClick={clickStep2}>{i}</li>)):
                                                step===3 ? filteredData.map((data)=>(
                                                    <li className="store">
                                                        <div className="desc">
                                                            <h4>{data.store_name}</h4>
                                                            <p>{data.address}</p>
                                                            <p>1522-3232</p>
                                                        </div>
                                                        <img src={data.type==="reserve"?pinRE:data.type==="dt"?pinDT:pinGE} alt="pin"/>
                                                    </li>
                                                )) : (<div>no Data</div>)
                                        }
                                    </ul>
                                </TabPane>
                                <TabPane tab="My 매장" key="3"></TabPane>
                            </Tabs>
                        </Panel>
                    </Collapse>
                </TabPane>
                <TabPane tab="길 찾기" key="2">
                    <p>not developed</p>
                </TabPane>
            </Tabs>
        </Wrapper>
    );
};

export default FindStorePage_SearchBox;