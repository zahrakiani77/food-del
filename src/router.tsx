import { createBrowserRouter } from "react-router";
import Layout from './Layout'
import home from "./pages/Home/Home";
import header from "./components/header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: home },
      { path:'/header', Component: header },
    ],
  },
]);

export default router