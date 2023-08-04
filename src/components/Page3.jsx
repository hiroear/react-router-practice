import { Link } from "react-router-dom";

export const Page3 = () => {
  return (
    <div>
      <h1>Page3ページです</h1>
      {/* ↓ URLの数字部分(id)は実際にはサーバーサイドで動的に値を入れ込む */}
      <Link to="/page3/999">URL Parameter</Link>
      <br />

      {/* ↓ ?name=hogehoge部分は、サーバーサイドで動的に値を入れ込む */}
      <Link to="/page3/999?name=hogehoge">Query Parameter</Link>
    </div>
  );
};

// URLパラメーター: URLの末尾に /整数 がつくURLのこと。ユーザーIDや商品IDなど
// クエリパラメーター: URLの末尾に ?name=hogehoge などがつくURLのこと。サーバーで受け取った値を遷移先に渡す時などに使う。検索機能など
