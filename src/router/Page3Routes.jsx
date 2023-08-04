import { Page3, UrlParameter } from "../components";

export const page3Routes = [
  {
    path: "/",
    exact: true,
    children: <Page3 />
  },
  {
    path: "/:id", //idというパラメータ名で UrlParameterコンポーネントへ渡す(名称は自由)
    exact: false,
    children: <UrlParameter />
  }
];
