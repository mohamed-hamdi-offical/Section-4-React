import React from 'react'
import{ createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import ContactUsPage from './pages/ContactUsPage'
import ErrorPage from './pages/ErrorPage'
import DahsboardPage from './DahsboardPage'
import ContactUsFormPage from './pages/ContactUsFormPage'
import EmailsPage from './pages/EmailsPage'
import LocationsPage from './pages/LocationsPage'
import PhoneNumberPage from './pages/PhoneNumberPage'
import { BiError } from 'react-icons/bi'

export default function App() {
  // routes commponant
  // createbrowserRouter
  const Routing = createBrowserRouter([
      {
          path: "/",
          element: <Layout />,
          children: [
              {
                  path: "/",
                  element: <HomePage />,
              },
              {
                  path: "/about",
                  element: <AboutPage />,
              },
              {
                  path: "/service",
                  element: <ServicePage />,
              },
              {
                  path: "/contact-us",
                  element: <ContactUsPage />,
              },
          ],
          errorElement: <ErrorPage />,
      },
      {
          path: "/",
          element: <DahsboardPage />,
          children: [
              {
                  path: "/Dashboard/contact-us-form",
                  element: <ContactUsFormPage />,
              },
              {
                  path: "/Dashboard/EmailsPage",
                  element: <EmailsPage />,
              },
              {
                  path: "/Dashboard/LocationPage",
                  element: <LocationsPage />,
              },
              {
                  path: "/Dashboard/PhoneNumberPage",
                  element: <PhoneNumberPage />,
              },
              {
                  path: "/Dashboard/*",
                  element: (
                      <h1 className="text-[2.5em] font-[500] flex justify-center items-center gap-3.5">
                          404 Page Not Found{" "}
                          <span className="text-[2.5em] text-red-500">
                              <BiError />
                          </span>
                      </h1>
                  ),
              },
          ],
      },
  ]);
  return (
      <div>
          <RouterProvider router={Routing} />
      </div>
  );
}
