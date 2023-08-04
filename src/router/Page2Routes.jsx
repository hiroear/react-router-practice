import { Page2, Page2DetailA, Page2DetailB } from "../components";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page2DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page2DetailB />
  }
];
