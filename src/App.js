// <BrowserRouter>で囲った配下でルーティングを有効にする(1番親のコンポーネントのてっぺんで囲う(例:App)
// Link は<a>タグのようなもので、リンクを表現してくれる。 Linkを使うことで簡単にページ遷移できる。
// <Switch> は<Link to="">で設定した PATHによって、どのコンポーネントに紐づけるかの出し分けを設定するエリア
// Route は <Switch>の中で、ルーティングにマッチしたものを実際に設定・表示していくコンポーネント
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Link to="/page3">Page3</Link>
        <br />
        <Link to="/page4">Page4</Link>
      </div>
      <Router /> {/* ← <Switch>以下の、ルーティングに関するコンポーネント */}
    </BrowserRouter>
  );
}
