import React from "react";
import "./styles.css";

// React プロジェクトを開く
// 変数を宣言する
// JSX の中の {} の中で変数を呼び出して
// 文章を表示する
const message = "犬";

// switch 用いて、返す値が分岐する関数を実装する
// 上記の関数と同じ内容になる if を使った関数を実装する
const result = (message) => {
  switch (message) {
    case "犬":
      return "コンテキストは犬";
    case "猫":
      return "コンテキストは猫";
    default:
      return "x";
  }
};

export default function App() {
  return (
    <div className="App">
      <dev>{message}</dev>
      <br />
      <dev>{result(message)}</dev>
    </div>
  );
}
