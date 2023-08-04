//↓ useParamsという react-router-domの Hooksで、ルーティングで設定したパラメータ(:id)を受け取ることができるようになる
//↓ useLocationを使うと、遷移元から送られてきた値(クエリパラメーター)を受け取り管理できるようになる
import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  // Page3コンポの<Link>から受け取ったパラメータをここで展開
  const { id } = useParams();

  // useLocationの中には、このコンポーネントのページ情報が予め入っていて、その中の searchプロパティにクエリパラメーターの情報が入っている。
  // searchプロパティの情報を展開するには、 以下のように書く ↓
  const { search } = useLocation();
  // さらに、useLocationには URLSearchParams という、クエリパラメータをより便利に扱うための色々なメソッドを提供してくれる関数が用意されている。
  // URLSearchParams を使って useLocation の search プロパティを展開するには、以下のように書く(変数は何でもoK) ↓
  const query = new URLSearchParams(search);
  // 出力する際は query.get("name") のように書き、getメソッドで name属性を指定して取得
  // console.log(query)

  return (
    <div>
      <h1>UrlParameter と Query Parameter のページです。</h1>
      <p>パラメーターは {id} です</p>
      <p>クエリパラメーターは {query.get("name")} です</p>
    </div>
  );
};
