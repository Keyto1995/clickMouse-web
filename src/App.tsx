import React, { useState } from "react";
import { Button, Collapse, Toast } from "antd-mobile";

const menuItems = [{
  action: "a",
  title: "与武器商人交易"
}, {
  action: "b",
  title: "与盔甲商人交易"
}, {
  action: "c",
  title: "与马匹贩子交易"
}, {
  action: "d",
  title: "与杂货商人交易"
}];

const App: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = async (action: string, times: number) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const res = await fetch(`/api/${action}?times=${times}`);
      if (!res.ok) throw new Error("请求失败");

      const data = await res.json();
      console.log(data);
      Toast.show({
        icon: "success",
        content: `x${times}`,
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : "未知错误";
      Toast.show({
        icon: "fail",
        content: message,
      });
      console.error(error);

    } finally {
      setIsSubmitting(false);
    }
  }

  return (<>
    <h1>骑马与砍杀：战团</h1>

    <Collapse accordion>
      {menuItems.map((item) => {
        return (
          <Collapse.Panel key={item.action} title={item.title}>
            {[10, 20, 50, 100].map((times) => (
              <Button
                key={times}
                disabled={isSubmitting}
                onClick={() => handleClick(item.action, times)}
              >
                x{times}
              </Button>
            ))}
          </Collapse.Panel>)
      })}
    </Collapse>
  </>)
}

export default App;
