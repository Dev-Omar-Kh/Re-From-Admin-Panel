import React from 'react';
import MainLayout from './layouts/MainLayout';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import { ROUTES } from './constants/Routes';

const router = createHashRouter([

    {path: ROUTES.HOME, element: <MainLayout />, children: [

        {index: true, element: <Home />},
        {path: ROUTES.NOT_FOUND, element: <h1>404</h1>},

    ], errorElement: <h1>404</h1>},

])

export default function App() {

    return <React.Fragment>

        <RouterProvider router={router}  />

    </React.Fragment>

}
