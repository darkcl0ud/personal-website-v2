import {createBrowserRouter, RouterProvider} from "react-router";
import HomePage from "./pages/Home.tsx";
import {type JSX} from "react";
import RootPage from "./pages/Root.tsx";
import ErrorPage from "./pages/Error.tsx";
import ExperiencePage from "./pages/Experience.tsx";
import ContactPage from "./pages/Contact.tsx";
import { contactAction } from "./http/contact.ts";
import ArticlesPage from "./pages/Articles.tsx";
import ArticlePage from "./pages/Article.tsx";

const router = createBrowserRouter([{
    path: "/", element: <RootPage/>, errorElement: <ErrorPage/>, children: [{
        path: "/", element: <HomePage/>
    }, {
        path: "/experience", element: <ExperiencePage/>
    }, {
        path: "/contact", element: <ContactPage/>, action: contactAction
    }, {
        path: "/articles", element: <ArticlesPage/>
    }, {
        path: "/articles/:id", element: <ArticlePage/>
    }
]
}])

export default function Router(): JSX.Element {
    return <RouterProvider router={router}/>
}