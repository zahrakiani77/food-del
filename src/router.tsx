import {createBrowserRouter} from 'react-router'
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart"
const route = createBrowserRouter([
    {path:'/' , Component:Home},
    {path:'/cart', Component:Cart}
]);

export default route;