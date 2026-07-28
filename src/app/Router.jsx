import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

// import Projects from "../pages/Projects";
// import ProjectDetails from "../pages/ProjectDetails";
// import Contact from "../pages/Contact";
// import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      //   {
      //     path: "projects",
      //     element: <Projects />,
      //   },
      //   {
      //     path: "projects/:id",
      //     element: <ProjectDetails />,
      //   },
      //   {
      //     path: "contact",
      //     element: <Contact />,
      //   },
    ],
  },
]);
