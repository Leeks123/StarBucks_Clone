import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Checkbox, Collapse, Button } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";

const { Panel } = Collapse;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  background: white;

  & > .ant-collapse.ant-collapse-icon-position-right {
    background: white;
    .ant-collapse-item {
      .ant-collapse-header {
        padding: 30px;
        font-weight: bold;
        font-size: 16px;
        span {
          padding-top: 5px;
          padding-right: 10px;
          svg {
            width: 42px;
            height: 42px;
          }
        }
      }
      .ant-collapse-content.ant-collapse-content-active {
        button {
          font-size: 14px;
          font-weight: bold;
          padding: 0 50px;
          vertical-align: center;
          margin-right: 20px;
          border-radius: 5px;
          background-color: #f4f4f1;
        }
      }
    }
  }
`;

const CoffeePage_CategoryCheck = ({
  category,
  type,
  onCategoryChange,
  onTypeChange,
  match,
}) => {
  const [checkedList, setCheckedList] = useState();
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [buttons, setButtons] = useState([true, false, false]);

  const buttonsPannel = useRef(null);

  const history = useHistory();

  // prop으로 받아오는 초기세팅
  useEffect(() => {
    if (category === "beans") {
      setButtons([true, false, false]);
    } else if (category === "via") {
      setButtons([false, true, false]);
    } else if (category === "origami") {
      setButtons([false, false, true]);
    }
    onCheckBoxChange(type);
  }, [category]);

  useEffect(() => {
    onBoxColoring(buttons);
  }, [buttons]);

  const onBoxColoring = (btnsState) => {
    const dom = buttonsPannel.current;
    const btnsDom = dom.getElementsByTagName("button");
    btnsState.forEach((state, i) => {
      if (state === true) {
        btnsDom[i].style.backgroundColor = "#006633";
        btnsDom[i].style.color = "white";
      } else {
        btnsDom[i].style.backgroundColor = "white";
        btnsDom[i].style.color = "#006633";
      }
    });
  };
  const onButtonClicked = (e) => {
    let newBtnstate = buttons;
    for (let i in buttons) {
      if (i === e.target.id) {
        newBtnstate[i] = true;
      } else {
        newBtnstate[i] = false;
      }
    }
    let path = "";
    if (newBtnstate[0] === true) {
      path = "/coffee/beans";
    } else if (newBtnstate[1] === true) {
      path = "/coffee/via";
    } else {
      path = "/coffee/origami";
    }
    onCategoryChange(newBtnstate);
    history.push(path);
  };

  const options = [
    { label: "블론드 로스트", value: "blond" },
    { label: "미디엄 로스트", value: "medium" },
    { label: "다크 로스트", value: "dark" },
    { label: "플레이버", value: "flavor" },
  ];

  const onCheckBoxChange = (checkedList) => {
    setCheckedList(checkedList);
    setIndeterminate(
      !!checkedList.length && checkedList.length < options.length
    );
    setCheckAll(checkedList.length === options.length);
    onTypeChange(checkedList);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(
      e.target.checked ? ["blond", "medium", "dark", "flavor"] : []
    );
    onTypeChange(e.target.checked ? ["blond", "medium", "dark", "flavor"] : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  console.log("category checks", buttons);
  return (
    <Wrapper ref={buttonsPannel}>
      <Collapse
        bordered={true}
        expandIcon={({ isActive }) => (
          <DownCircleOutlined rotate={isActive ? 180 : 0} />
        )}
        expandIconPosition={"right"}
        defaultActiveKey={["1"]}
      >
        <Panel header="분류 보기" key="1">
          <Button size={"large"} id={0} onClick={onButtonClicked}>
            스타벅스 원두
          </Button>

          <Button size={"large"} id={1} onClick={onButtonClicked}>
            스타벅스 비아
          </Button>
          <Button size={"large"} id={2} onClick={onButtonClicked}>
            스타벅스 오리가미
          </Button>
          <br />
          <br />
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Check all
          </Checkbox>
          <Checkbox.Group
            options={options}
            value={checkedList}
            onChange={onCheckBoxChange}
          />
        </Panel>
      </Collapse>
    </Wrapper>
  );
};
export default CoffeePage_CategoryCheck;
