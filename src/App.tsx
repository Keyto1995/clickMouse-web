import React from "react";
import { Button, Collapse } from "antd-mobile";

const menuItems = [{
  action: "a",
  title: "与武器商人交谈"
}, {
  action: "b",
  title: "与盔甲商人交谈"
}, {
  action: "c",
  title: "与马匹商人交谈"
}, {
  action: "d",
  title: "与杂货商人交谈"
}];

const handleClick = async (action: string, times: number) => {
  const res = await fetch(`/api/${action}?times=${times}`);
  if (res.ok) {
    const data = await res.json();
    console.log(data);
  } else {
    throw new Error("请求失败");
  }
}

const App: React.FC = () => {

  return (<>
    <h1>骑马与砍杀：战团</h1>

    <Collapse accordion>
      {menuItems.map((item) => {
        return (
          <Collapse.Panel key={item.action} title={item.title}>
            <Button onClick={() => {
              handleClick(item.action, 10);
            }}>x10</Button>
            <Button onClick={() => {
              handleClick(item.action, 20);
            }}>x20</Button>
            <Button onClick={() => {
              handleClick(item.action, 50);
            }}>x50</Button>
            <Button onClick={() => {
              handleClick(item.action, 100);
            }}>x100</Button>
          </Collapse.Panel>)
      })}
    </Collapse>
  </>)
}

export default App;
