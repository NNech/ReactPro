import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import Nav from "./components/Nav";
import Results from "./components/Results";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Nav />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "popular",
                element: <Popular />,
            },

            {
                path: "battle",
                element: <Battle />,
            },
            {
                path: "battle/results",
                element: <Results />,
            },
            {
                path: "*",
                element: <h2>Error ...</h2>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}
export default App;
