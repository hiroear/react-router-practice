import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/page2/detailA">詳細ページA</Link>
      <br />
      <Link to="/page2/detailB">詳細ページB</Link>
    </div>
  );
};
