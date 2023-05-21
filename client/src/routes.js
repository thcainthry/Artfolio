import { Link, Route } from "react-router-dom";
import DashboardLayout from '../src/Layouts/DashboardLayout.js';
import Dashboard from './components/Pages/Dashboard.jsx';
import Sales from "./components/Pages/Sales.jsx";
import Messages from "./components/Pages/Messages.jsx";
import Products from "./components/Pages/Products.jsx";
import Users from "./components/Pages/Users.jsx";
import Deliveries from "./components/Pages/Deliveries.jsx";
import Settings from "./components/Pages/Settings.jsx";
import SingleProduct from "./components/Pages/SingleProduct.jsx";
import PublicRoutesLayout from "../src/Layouts/PublicRoutesLayout.js";
import Login from "./components/Pages/Login.jsx";
import Page404 from "./components/Pages/Page404.jsx";
import Register from "./components/Pages/Register.jsx";


export default function Routers() {
    return Route([
        {
            path: "/app",
            element: <DashboardLayout />,
            children: [
                { path: "dashboard", element: <Dashboard /> },
                { path: "sales", element: <Sales /> },
                { path: "products", element: <Products /> },
                { path: "products/:productId", element: <SingleProduct /> },
                { path: "messages", element: <Messages /> },
                { path: "users", element: <Users /> },
                { path: "deliveries", element: <Deliveries /> },
                { path: "settings", element: <Settings /> },
            ],
        },
        {
            path: "/",
            element: <PublicRoutesLayout />,
            children: [
                { index: true, element: <Login /> },
                { path: "register", element: <Register /> },
                { path: "page404", element: <Page404 /> },
                
            ],
        },
        { path: "*", element: <Link to="/page404" replace={true} /> },
    ]);
}