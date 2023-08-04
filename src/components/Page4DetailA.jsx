//↓ 遷移元から送られてきた state(値)は、useLocationでを受け取り、管理できるようになる
import { useLocation, useHistory } from "react-router-dom";

export const Page4DetailA = () => {
  // ↓ 遷移元から送られてきた値を const location = useLocation(); → console.log(location)で確認。
  // useLocationの stateプロパティに配列 arrが入っているので、以下のように stateを取得
  const { state } = useLocation();
  console.log(state);

  // useHistory の goBackメソッドを使うと、遷移元のページに簡単に戻ることができる
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page4の詳細ページAです。</h1>

      <ol>
        {/* 渡ってきた配列を mapで回し表示 */}
        {state.map((s) => (
          <li key={s}>stateで渡ってきた値 その {s + 1}</li>
        ))}
      </ol>

      {/* useHistory で javascript側からページ遷移させる */}
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
