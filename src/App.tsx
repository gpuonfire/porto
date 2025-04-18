import { createBrowserRouter, RouterProvider } from "react-router";
import ProjectContextProvider from "./context/project-context";

import HomePage from "./pages/HomePage";
import RootLayout from "./RootLayout";
import GalleryPage from "./pages/GalleryPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectPage from "./pages/ProjectPage";
import AboutMePage from "./pages/AboutMe";

const router = createBrowserRouter([
  {
  path: "/",
  element: <RootLayout />,
   children: [
      { path: "", element: <HomePage /> },
      { path: "art", element: <GalleryPage /> },
      { path: "about-me", element: <AboutMePage /> },
      { path: "projects/:proId", element: <ProjectDetailPage /> },
      { path: "projects", element: <ProjectPage /> },
    ],
   },
  ]);

function App() {
  return (
    <ProjectContextProvider>
     <RouterProvider router={router} />
     </ProjectContextProvider>
  )
}

export default App