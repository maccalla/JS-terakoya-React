import React from "react";
import "./styles.css";

// React プロジェクトを開く
// 変数を宣言する
// JSX の中の {} の中で変数を呼び出して
// 文章を表示する
const message = "これがmessageです！";

export default function App() {
  return <div className="App">{message}</div>;
}
