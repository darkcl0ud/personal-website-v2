import {createBrowserRouter, RouterProvider} from "react-router";
import HomePage from "./pages/Home.tsx";
import {type JSX} from "react";
import RootPage from "./pages/Root.tsx";
import ErrorPage from "./pages/Error.tsx";


const router = createBrowserRouter([{
    path: "/", element: <RootPage/>, errorElement: <ErrorPage/>, children: [{
        path: "/", element: <HomePage/>
    }]
}])

export default function Router(): JSX.Element {
    return <RouterProvider router={router}/>
}