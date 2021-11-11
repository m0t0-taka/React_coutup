import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [showText, setShowText] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickShowText = () => {
    setShowText(!showText);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      showText || setShowText(true);
    } else {
      showText && setShowText(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello World</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickShowText}>on/off</button>
      {showText && <p>表示されたよ！</p>}
    </>
  );
};

export default App;
