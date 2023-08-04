// <Switch> は<Link to="">で設定した PATHによって、どのコンポーネントに紐づけるかの出し分けを設定するエリア
// Route は <Switch>の中で、ルーティングにマッチしたものを実際に設定・表示していくコンポーネント
import { Switch, Route } from "react-router-dom";
import {
  Home,
  Page1,
  Page1DetailA,
  Page1DetailB,
  Page4,
  Page4DetailA,
  Page404
} from "../components"; //エントリポイントから
import { page2Routes } from "./Page2Routes";
import { page3Routes } from "./Page3Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        {/* exact: pathに完全一致したものを対象にするかどうかの設定。exactと書くと exact=true が返される。  完全一致させない場合は exact=falseと書く */}
        {/* exact がないと、 pathが "/"配下のページ全てが対象になってしまう */}
        <Home />
      </Route>

      {/* ネストされたページ遷移 renderの引数にアロー関数を取り、アロー関数の return内で表示したいコンポーネントを指定 */}
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          // render内で受け取っているアロー関数はデフォルトで propsを受け取ってくれている。引数に(props)と書き console.log(props)でその propsの情報を見ると
          // props内に予め設定されている matchプロパティ内の urlプロパティに /page1の情報が入っている。 matchプロパティ内の urlプロパティの値を取得するには
          // 引数に ({match:{url}}) と書くと /page1の情報が取得できる。その {url}をそれぞれの <Route path=以降にテンプレートリテラルなどを使いながら書いていく
          <Switch>
            {/* console.log(url) → /page1 */}
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DetailB />
            </Route>
          </Switch>
        )}
      />

      {/* ↓page1の例を mapで回してルーティングを生成する書き方。Page2Routesコンポーネントにネストする要素などをそれぞれ配列で定義しておく */}
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          //↑ アロー関数 =>直後の{}について。通常{}の中に return()を書く必要があるが、{}内が複数行ある場合 ()で囲んであげることで {}と returnを省略することができる
          <Switch>
            {page2Routes.map((route) => (
              <Route
                exact={route.exact}
                path={`${url}${route.path}`}
                key={route.path}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />

      {/*↓ ネストされた遷移先のページへ、パラメーターや クエリパラメーターを動的に渡したいとき。
      Page3Routes にネストする要素をそれぞれ配列で定義 */}
      <Route
        path="/page3"
        render={({ match: { url } }) => (
          <Switch>
            {page3Routes.map((route) => (
              <Route
                exact={route.exact}
                path={`${url}${route.path}`}
                key={route.path}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />

      {/*遷移元の何らかの情報(今回は配列)を、遷移先(Page4DetailA)へ受け渡したい時
        Page4コンポでは useHistoryを使って<Switch><Route>などを使わずに javascriptでページ遷移も実装 */}
      <Route
        path="/page4"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url}>
              <Page4 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page4DetailA />
            </Route>
          </Switch>
        )}
      />

      {/* 「*」は全てと言う意味。この<Switck>コンポを上から実行し、どのページにも当てはまらない時に Page404 を表示 */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
