import React from 'react';
import MainLayout from './layouts/MainLayout';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import { ROUTES } from './constants/Routes';
import Forms from './pages/forms/Forms';
import FormsBuilder from './pages/form-builder/FormsBuilder';
import Error from './pages/error/Error';

const router = createHashRouter([

    {path: ROUTES.HOME, element: <MainLayout />, children: [

        {index: true, element: <Home />},
        {path: ROUTES.FORMS, element: <Forms />},
        {path: ROUTES.FORMS_BUILDER, element: <FormsBuilder />},
        {path: ROUTES.NOT_FOUND, element: <Error />},

    ], errorElement: <Error />},

])

export default function App() {

    return <React.Fragment>

        <RouterProvider router={router}  />

    </React.Fragment>

}
