import React, { useState } from "react";
import styled from "styled-components";

import { Tabs } from 'antd';
import EnjoyPage_press from "./EnjoyPage_press";

const { TabPane } = Tabs;

const StyledContents = styled.div`

border : 1px solid red;
  max-width : 1100px;
  margin : 0 auto;
  height: 100vh;
  padding-top: 120px;

  h2 {
    font-size : 28px;
    font-weight : bold;
    padding : 30px 0;
  }

  .ant-tabs-nav-list {
    display : inline-flex;
    width : 100%;
    .ant-tabs-tab {
      width : 25%;
      height : 50px;
      background-color : white;
      .ant-tabs-tab-btn {
        width : 100%;
        text-align :center;
        font-size : 14px;
      }
      &:hover {
        text-decoration : underline;
        color : black;
      }
      &.ant-tabs-tab-active {
        color : white;
        background-color : #006633;
        & .ant-tabs-tab-btn {
          font-weight : bold;
          color : white;
        }
      }
    }
    
  }
  
  @media (max-width : 1100px) {
    margin : 0 2%;
    width : 96%;
  }
  @media (max-width: 950px) {
    padding-top: 70px;
  }
 
  }
`;

const EnjoyPage = () => {
 

  const onTabsChange = (key)=>{
    console.log(key);
  }
  return (
    <StyledContents>  
      <h2>최상의 커피를 즐기는 법</h2>    
      <Tabs defaultActiveKey="1" type="card" tabBarGutter={0} onTabClick={onTabsChange} >
        <TabPane tab="커피 프레스" key="1">
          <EnjoyPage_press/>
        </TabPane>
        <TabPane tab="푸어 오버" key="2">
          Content of card tab 2
        </TabPane>
        <TabPane tab="아이스 푸어 오버" key="3">
          Content of card tab 3
        </TabPane>
        <TabPane tab="커피 메이커" key="4">
          Content of card tab 4
        </TabPane>
        <TabPane tab="리저브를 매장에서 다양하게 즐기는 법" key="5">
          Content of card tab 5
        </TabPane>
      </Tabs>
    </StyledContents>
  );
};

export default EnjoyPage;
