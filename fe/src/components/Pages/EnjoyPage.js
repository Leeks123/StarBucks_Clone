import React from "react";
import styled from "styled-components";

import { Tabs } from 'antd';
import Method from "./EnjoyPage_method";
import Reserve from "./EnjoyPage_reserve";

import Data from "../../data/EnjoyPageData";

const { TabPane } = Tabs;

const StyledContents = styled.div`
  max-width : 1100px;
  margin : 0 auto;
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
    .ant-tabs-tab:nth-child(5) {
      &.ant-tabs-tab-active {
        background-color : #B06546;
      }
    }
    
  }
  
  @media (max-width : 1100px) {
    margin : 0 2%;
    width : 96%;
  }
  @media (max-width: 950px) {
    padding-top: 70px;
    margin : 0 4%;
    width : 92%;
  }
 
`;

const EnjoyPage = () => { 

  const onTabsChange = (key)=>{
    console.log(key);
  }
  return (
    <StyledContents>  
      <h2>최상의 커피를 즐기는 법</h2>    
      <Tabs defaultActiveKey="0" type="card" tabBarGutter={0} onTabClick={onTabsChange} >
        {Data.map((method,i)=>(
          <TabPane tab={method.top.title} key={i}>
            <Method top={method.top} video={method.video} bottom={method.bottom}/>
          </TabPane>
        ))}
        <TabPane id="reserve" tab="리저브를 매장에서 다양하게 즐기는 법" key="5">
          <Reserve/>
        </TabPane>
      </Tabs>
    </StyledContents>
  );
};

export default EnjoyPage;
