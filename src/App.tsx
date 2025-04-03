import React from "react";
import { Button, Collapse } from "antd-mobile";

const App: React.FC = () => {

  return (<>
    <h1>骑马与砍杀：战团</h1>

    <Collapse accordion>
      <Collapse.Panel key="1" title="与武器商人交谈">
        <Button onClick={() => {
          fetch("/api/ping").then(res => res.json()).then(data => {
            console.log(data);
          }).catch(err => {
            console.error(err);
          })
            ;

        }}>x10</Button>
        <Button>x50</Button>
        <Button>x100</Button>
      </Collapse.Panel>
      <Collapse.Panel key="2" title="与盔甲商人交谈">
        <Button>x10</Button><Button>x50</Button><Button>x100</Button>
      </Collapse.Panel>
      <Collapse.Panel key="3" title="与马匹商人交谈">
        <Button>x10</Button><Button>x50</Button><Button>x100</Button>
      </Collapse.Panel>
      <Collapse.Panel key="4" title="与杂货商人交谈">
        <Button>x10</Button><Button>x50</Button><Button>x100</Button>
      </Collapse.Panel>
    </Collapse>
  </>)
}

export default App;
