import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from './Layouts/DashboardLayout.js';
import Dashboard from './Pages/Dashboard.jsx';
import Sales from "./Pages/Sales.jsx";
import Messages from "./Pages/Messages.jsx";
import Products from "./Pages/Products.jsx";
import Users from "./Pages/Users.jsx";
import Deliveries from "./Pages/Deliveries.jsx";
import Settings from "./Pages/Settings.jsx";
import SingleProduct from "./Pages/SingleProduct.jsx";
import PublicRoutesLayout from "./Layouts/PublicRoutesLayout.jsx";
import Login from "./Pages/Login.jsx";
import Page404 from "./Pages/Page404.jsx";
import Register from "./pages/Register.jsx";


export default function Routers() {
    return useRoutes([
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
        { path: "*", element: <Navigate to="/page404" replace={true} /> },
    ]);
}