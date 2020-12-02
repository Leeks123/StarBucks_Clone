import React from 'react';
import styled from "styled-components";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Wrapper = styled.div`
position : absolute;
left : 20px;
top : 150px;
 border : 1px solid red;
 width : 300px;
 height : 425px;

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
 
`;

const FindStorePage_SearchBox = () => {

    const callback = ()=>{}

    return (
        <Wrapper>
            <Tabs onChange={callback} size="large" >
                <TabPane tab="매장 찾기" key="1">
                </TabPane>
                <TabPane tab="길 찾기" key="2">
                
                </TabPane>
            </Tabs>
        </Wrapper>
    );
};

export default FindStorePage_SearchBox;