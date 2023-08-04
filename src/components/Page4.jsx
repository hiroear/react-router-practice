import { Link, useHistory } from "react-router-dom";

export const Page4 = () => {
  const arr = [...Array(20).keys()]; // 要素が20個の配列を作成。これを詳細ページAに渡す
  // console.log(arr);

  const history = useHistory();
  // pushメソッドの引数に遷移先のルートを書く。通常は.push("/page4/detailA")
  const onClickDetailA = () =>
    history.push({ pathname: "/page4/detailA", state: arr });

  return (
    <div>
      <h1>Page4ページです。</h1>

      {/* 通常は <Link to="/page4/detailA" のようにURLを指定するが、以下のようにオブジェクトとして設定することもできる */}
      {/* 上で作った配列などの値は stateプロパティで渡すことができる */}
      <Link to={{ pathname: "/page4/detailA", state: arr }}>詳細ページA</Link>
      <br />

      {/* react-router-domの Link だけではなく、useHistory と言う Hooksを使うと、javascriptで(サーバーを介さずブラウザ上で)ページ遷移することができる */}
      {/* useHistory()を展開させた historyを pushメソッドを使ってページ遷移させる関数を onClickで発火 */}
      <button onClick={onClickDetailA}>詳細ページA</button>
    </div>
  );
};
